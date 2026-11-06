/* ============================================================
   sync.js — Cross-Device Cloud Sync Engine (Firebase Realtime DB REST + SSE)
   Veterinary Microbiology Studio
   ------------------------------------------------------------
   Zero-dependency real-time sync between Mobile Phone, Tablet & PC:
     1. Uses Google Firebase Realtime Database REST API + Server-Sent Events (SSE).
     2. Zero external client SDKs (no CDN libraries, 100% native fetch & EventSource).
     3. Conflict-Free Data Merging (CRDT): smart union of highlights,
        custom notes, bookmarks, quiz attempts, and SRS flashcards.
     4. 6-Digit PIN & 1-Tap QR Pairing (#/sync?db=...&pin=...).
     5. 100% Offline-First: saves locally first, debounces cloud push.
     6. Multi-User Independence: every student connects their own free
        database URL & PIN, keeping quotas completely isolated.
   ============================================================ */

var syncApp = (function () {
  "use strict";

  var STORAGE_DB = "vmicro-sync-db";
  var STORAGE_PIN = "vmicro-sync-pin";
  var STORAGE_LAST_TIME = "vmicro-sync-last-time";

  // Unique client session ID to ignore self-sent SSE echos
  var clientId = "client_" + Math.random().toString(36).substring(2, 9) + "_" + Date.now();

  var sseSource = null;
  var debounceTimer = null;
  var isMerging = false;
  var statusListeners = [];

  // Status enum: 'inactive' | 'connecting' | 'active' | 'offline' | 'error'
  var currentStatus = "inactive";

  /* ---------- Helpers & Storage ---------- */

  function cleanDbUrl(url) {
    if (!url) return "";
    var u = String(url).trim().replace(/\/+$/, "");
    if (!/^https?:\/\//i.test(u)) {
      u = "https://" + u;
    }
    return u;
  }

  function cleanPin(pin) {
    return String(pin || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").substring(0, 12);
  }

  var EMBEDDED_DB_URL = "https://vet-pathology-default-rtdb.firebaseio.com";
  function generateFreshPin() { return String(Math.floor(100000 + Math.random() * 900000)); }

  function getDbUrl() {
    try {
      var saved = localStorage.getItem(STORAGE_DB);
      return saved && saved.trim() ? saved.trim() : EMBEDDED_DB_URL;
    } catch (e) {
      return EMBEDDED_DB_URL;
    }
  }

  function getPin() {
    try {
      var saved = localStorage.getItem(STORAGE_PIN);
      return saved && saved.trim() ? cleanPin(saved) : generateFreshPin();
    } catch (e) {
      return generateFreshPin();
    }
  }

  function getLastSyncTime() {
    try {
      var t = localStorage.getItem(STORAGE_LAST_TIME);
      return t ? parseInt(t, 10) : 0;
    } catch (e) {
      return 0;
    }
  }

  function setLastSyncTime(ts) {
    try {
      localStorage.setItem(STORAGE_LAST_TIME, String(ts || Date.now()));
    } catch (e) {}
  }

  function setStatus(st) {
    currentStatus = st;
    statusListeners.forEach(function (cb) {
      try { cb(currentStatus); } catch (e) {}
    });
  }

  function onStatusChange(cb) {
    if (typeof cb === "function") {
      statusListeners.push(cb);
      cb(currentStatus);
    }
  }

  function generateRandomPin() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  /* ---------- Endpoint Generator ---------- */

  function getEndpoint() {
    var db = getDbUrl();
    var pin = getPin();
    if (!db || !pin) return null;
    return cleanDbUrl(db) + "/microbiology/students/" + cleanPin(pin) + ".json";
  }

  /* ---------- Live Push / Pull REST Engine ---------- */

  function pull() {
    var endpoint = getEndpoint();
    if (!endpoint) return Promise.resolve(false);

    if (navigator.onLine === false) {
      setStatus("offline");
      return Promise.resolve(false);
    }

    return fetch(endpoint, { cache: "no-store" })
      .then(function (res) {
        if (res.status === 401) {
          setStatus("error");
          throw new Error("401 Unauthorized: please set Rules in Firebase Console to: { \".read\": true, \".write\": true }");
        }
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        if (data && data.payload) {
          mergeRemoteData(data.payload);
          setLastSyncTime(data.updatedAt || Date.now());
        }
        setStatus("active");
        return true;
      })
      .catch(function (err) {
        console.warn("[sync] Pull failed:", err);
        setStatus(navigator.onLine === false ? "offline" : "error");
        return false;
      });
  }

  function push(immediate) {
    var endpoint = getEndpoint();
    if (!endpoint) return Promise.resolve(false);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }

    if (!immediate) {
      return new Promise(function (resolve) {
        debounceTimer = setTimeout(function () {
          push(true).then(resolve);
        }, 2200);
      });
    }

    if (navigator.onLine === false) {
      setStatus("offline");
      return Promise.resolve(false);
    }

    // Build comprehensive state bundle
    var bundle = {
      clientId: clientId,
      updatedAt: Date.now(),
      payload: {
        read: (window.store && store.getRead) ? store.getRead() : {},
        bookmarks: (window.store && store.getBookmarks) ? store.getBookmarks() : [],
        notes: (window.store && store.getNotes) ? store.getNotes() : {},
        highlights: (window.store && store.getHighlights) ? store.getHighlights() : {},
        quiz: (window.store && store.getQuiz) ? store.getQuiz() : {},
        srs: getLocalJson("vmicro-srs", {}),
        activity: getLocalJson("vmicro-activity", []),
        qaDone: getLocalJson("vmicro-qa-done", []),
        examDate: localStorage.getItem("vmicro-exam-date") || "",
        lastTopic: localStorage.getItem("vmicro-last-topic") || ""
      }
    };

    return fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bundle)
    })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        setLastSyncTime(bundle.updatedAt);
        setStatus("active");
        return true;
      })
      .catch(function (err) {
        console.warn("[sync] Push failed:", err);
        setStatus(navigator.onLine === false ? "offline" : "error");
        return false;
      });
  }

  /* ---------- Real-Time SSE Listener (Server-Sent Events) ---------- */

  function startSSE() {
    stopSSE();
    var endpoint = getEndpoint();
    if (!endpoint || !window.EventSource) return;

    try {
      sseSource = new EventSource(endpoint);

      sseSource.addEventListener("put", function (e) {
        try {
          var msg = JSON.parse(e.data);
          if (!msg) return;

          // If the update originated from this client instance, ignore it
          if (msg.data && msg.data.clientId === clientId) return;

          if (msg.path === "/" && msg.data && msg.data.payload) {
            mergeRemoteData(msg.data.payload);
            setLastSyncTime(msg.data.updatedAt || Date.now());
            setStatus("active");
          } else if (msg.path && msg.data !== undefined) {
            // Partial node updated — pull full clean snapshot
            pull();
          }
        } catch (err) {
          console.warn("[sync] SSE parse error:", err);
        }
      });

      sseSource.addEventListener("patch", function (e) {
        try {
          var msg = JSON.parse(e.data);
          if (msg && msg.data && msg.data.clientId !== clientId) {
            pull();
          }
        } catch (err) {}
      });

      sseSource.onerror = function () {
        if (navigator.onLine === false) {
          setStatus("offline");
        } else if (getDbUrl() && getPin()) {
          setStatus("error");
        }
      };

      sseSource.onopen = function () {
        setStatus("active");
      };
    } catch (e) {
      console.warn("[sync] EventSource init failed:", e);
      setStatus("error");
    }
  }

  function stopSSE() {
    if (sseSource) {
      try { sseSource.close(); } catch (e) {}
      sseSource = null;
    }
  }

  /* ---------- Conflict-Free CRDT Merging Logic ---------- */

  function mergeRemoteData(remote) {
    if (!remote || isMerging) return;
    isMerging = true;

    try {
      // 1. Reading Progress (Union of completed topics)
      var localRead = (window.store && store.getRead) ? store.getRead() : {};
      var remoteRead = remote.read || {};
      var mergedRead = Object.assign({}, localRead, remoteRead);
      setLocalJson("vmicro-read", mergedRead);

      // 2. Bookmarks (Union array of topic IDs)
      var localBm = (window.store && store.getBookmarks) ? store.getBookmarks() : [];
      var remoteBm = remote.bookmarks || [];
      var bmSet = {};
      localBm.concat(remoteBm).forEach(function (id) { if (id) bmSet[id] = true; });
      setLocalJson("vmicro-bookmarks", Object.keys(bmSet));

      // 3. Notes (Dictionary union)
      var localNotes = (window.store && store.getNotes) ? store.getNotes() : {};
      var remoteNotes = remote.notes || {};
      var mergedNotes = Object.assign({}, localNotes, remoteNotes);
      setLocalJson("vmicro-notes", mergedNotes);

      // 4. Highlights (Per-topic array union, deduplicated by exact text)
      var localHl = (window.store && store.getHighlights) ? store.getHighlights() : {};
      var remoteHl = remote.highlights || {};
      var mergedHl = Object.assign({}, localHl);
      for (var tid in remoteHl) {
        var rArr = Array.isArray(remoteHl[tid]) ? remoteHl[tid] : [];
        var lArr = Array.isArray(mergedHl[tid]) ? mergedHl[tid] : [];
        var combined = lArr.slice();
        rArr.forEach(function (rh) {
          if (!rh || !rh.text) return;
          var exists = combined.some(function (lh) { return lh && lh.text === rh.text; });
          if (!exists) combined.push(rh);
        });
        mergedHl[tid] = combined;
      }
      setLocalJson("vmicro-highlights", mergedHl);

      // 5. Quiz Attempts & Best Unit Stats (Deduplicated by attempt timestamp 'at')
      var localQuiz = (window.store && store.getQuiz) ? store.getQuiz() : { attempts: [] };
      var remoteQuiz = remote.quiz || { attempts: [] };
      var attemptsMap = {};
      (localQuiz.attempts || []).concat(remoteQuiz.attempts || []).forEach(function (att) {
        if (att && att.at) attemptsMap[att.at] = att;
      });
      var mergedAttempts = Object.keys(attemptsMap).map(function (k) { return attemptsMap[k]; });
      mergedAttempts.sort(function (a, b) { return (a.at || 0) - (b.at || 0); });
      localQuiz.attempts = mergedAttempts;

      // Merge best unit records
      var rByUnit = remoteQuiz.byUnit || {};
      var lByUnit = localQuiz.byUnit || {};
      for (var u in rByUnit) {
        if (!lByUnit[u] || ((rByUnit[u].best || 0) > (lByUnit[u].best || 0))) {
          lByUnit[u] = rByUnit[u];
        }
      }
      localQuiz.byUnit = lByUnit;
      setLocalJson("vmicro-quiz", localQuiz);

      // 6. Spaced Repetition (SRS Leitner flashcard boxes)
      var localSRS = getLocalJson("vmicro-srs", {});
      var remoteSRS = remote.srs || {};
      var mergedSRS = Object.assign({}, localSRS);
      for (var cardId in remoteSRS) {
        var rCard = remoteSRS[cardId];
        var lCard = mergedSRS[cardId];
        if (!lCard || (rCard.lastReviewed && (!lCard.lastReviewed || rCard.lastReviewed > lCard.lastReviewed))) {
          mergedSRS[cardId] = rCard;
        }
      }
      setLocalJson("vmicro-srs", mergedSRS);

      // 7. Daily Habit Calendar Activity (Union of YYYY-MM-DD date strings)
      var localAct = getLocalJson("vmicro-activity", []);
      var remoteAct = remote.activity || [];
      var actSet = {};
      localAct.concat(remoteAct).forEach(function (d) { if (d) actSet[d] = true; });
      setLocalJson("vmicro-activity", Object.keys(actSet).sort());

      // 8. Q&A Completed IDs
      var localQA = getLocalJson("vmicro-qa-done", []);
      var remoteQA = remote.qaDone || [];
      var qaSet = {};
      localQA.concat(remoteQA).forEach(function (qid) { if (qid) qaSet[qid] = true; });
      setLocalJson("vmicro-qa-done", Object.keys(qaSet));

      // 9. Exam Date
      if (remote.examDate && !localStorage.getItem("vmicro-exam-date")) {
        localStorage.setItem("vmicro-exam-date", remote.examDate);
      }
    } catch (err) {
      console.warn("[sync] CRDT Merge error:", err);
    } finally {
      isMerging = false;
    }
  }

  function getLocalJson(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function setLocalJson(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  /* ---------- Connection & Setup Management ---------- */

  function testConnection(dbUrl, pin) {
    var cleanDb = cleanDbUrl(dbUrl);
    var cleanP = cleanPin(pin);
    if (!cleanDb || !cleanP) {
      return Promise.reject(new Error("Please enter both a valid Database URL and 6-digit PIN"));
    }

    var testUrl = cleanDb + "/microbiology/students/" + cleanP + ".json";
    return fetch(testUrl, { cache: "no-store" })
      .then(function (res) {
        if (res.status === 401) {
          throw new Error("Permission Denied (401). Go to Firebase Console -> Realtime Database -> Rules tab, change rules to: { \".read\": true, \".write\": true } and click Publish.");
        }
        if (!res.ok) {
          throw new Error("Could not access database (HTTP " + res.status + ")");
        }
        return res.json();
      });
  }

  function connect(dbUrl, pin) {
    var cleanDb = cleanDbUrl(dbUrl);
    var cleanP = cleanPin(pin);
    if (!cleanDb || !cleanP) {
      return Promise.reject(new Error("Missing Database URL or PIN"));
    }

    setStatus("connecting");
    return testConnection(cleanDb, cleanP)
      .then(function () {
        localStorage.setItem(STORAGE_DB, cleanDb);
        localStorage.setItem(STORAGE_PIN, cleanP);
        setStatus("active");
        startSSE();
        // Initial two-way sync: pull latest remote, then push local
        return pull().then(function () {
          return push(true);
        }).then(function () {
          return true;
        });
      })
      .catch(function (err) {
        setStatus("error");
        throw err;
      });
  }

  function disconnect() {
    stopSSE();
    try {
      localStorage.removeItem(STORAGE_DB);
      localStorage.removeItem(STORAGE_PIN);
      localStorage.removeItem(STORAGE_LAST_TIME);
    } catch (e) {}
    setStatus("inactive");
  }

  /* ---------- QR & Pairing Link Generator ---------- */

  function generatePairingUrl() {
    var db = getDbUrl();
    var pin = getPin();
    if (!db || !pin) return "";
    var base = window.location.origin + window.location.pathname;
    return base + "#/sync?db=" + encodeURIComponent(db) + "&pin=" + encodeURIComponent(pin);
  }

  function generateQrCodeUrl(url) {
    if (!url) return "";
    return "https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=" + encodeURIComponent(url);
  }

  /* ---------- Auto-Boot & Network Listeners ---------- */

  function init() {
    window.addEventListener("online", function () {
      if (getDbUrl() && getPin()) {
        setStatus("connecting");
        startSSE();
        pull().then(function () { push(true); });
      }
    });

    window.addEventListener("offline", function () {
      if (getDbUrl() && getPin()) {
        setStatus("offline");
      }
    });

    if (getDbUrl() && getPin()) {
      setStatus("connecting");
      startSSE();
      pull();
    } else {
      setStatus("inactive");
    }
  }

  // Auto-init once document is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* ---------- Public API ---------- */

  return {
    getDbUrl: getDbUrl,
    getPin: getPin,
    getStatus: function () { return currentStatus; },
    onStatusChange: onStatusChange,
    generateRandomPin: generateRandomPin,
    testConnection: testConnection,
    connect: connect,
    disconnect: disconnect,
    pull: pull,
    push: push,
    generatePairingUrl: generatePairingUrl,
    generateQrCodeUrl: generateQrCodeUrl
  };
})();
if (typeof window !== "undefined") window.syncApp = syncApp;



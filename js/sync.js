/* ============================================================
   sync.js — Real-Time Multi-Device Cloud Sync (Google Firebase)
   ------------------------------------------------------------
   Synchronizes your study data across Mobile Phone, Tablet & PC:
     - Reading progress & chapters completed
     - High-yield text highlights (color, exact text & location)
     - Personal topic notes
     - Bookmarks & saved revision topics
     - Quiz scores, streak records & attempt logs
     - Spaced Repetition (SRS) memory boxes & review queues
     - Daily study habit calendar activity
   ============================================================ */

var syncApp = (function () {

  var SYNC_KEY_STORAGE = "vmicro-sync-key";
  var FIREBASE_CONFIG_STORAGE = "vmicro-firebase-config";
  var LAST_SYNC_STORAGE = "vmicro-last-sync-time";

  var db = null;
  var unsubscribe = null;
  var isSyncing = false;
  var debounceTimer = null;

  /* Retrieve stored sync key (e.g. "FAZAL-VET-2026") */
  function getSyncKey() {
    try {
      return (localStorage.getItem(SYNC_KEY_STORAGE) || "").trim().toUpperCase();
    } catch (e) {
      return "";
    }
  }

  function setSyncKey(key) {
    var clean = String(key || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "");
    try {
      if (clean) localStorage.setItem(SYNC_KEY_STORAGE, clean);
      else localStorage.removeItem(SYNC_KEY_STORAGE);
    } catch (e) {}
    reconnect();
    return clean;
  }

  /* Retrieve stored Firebase Config */
  function getFirebaseConfig() {
    try {
      var raw = localStorage.getItem(FIREBASE_CONFIG_STORAGE);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function setFirebaseConfig(config) {
    try {
      if (!config) {
        localStorage.removeItem(FIREBASE_CONFIG_STORAGE);
      } else {
        localStorage.setItem(FIREBASE_CONFIG_STORAGE, JSON.stringify(config));
      }
    } catch (e) {}
    reconnect();
  }

  function getLastSyncTime() {
    try {
      var t = localStorage.getItem(LAST_SYNC_STORAGE);
      return t ? parseInt(t, 10) : 0;
    } catch (e) {
      return 0;
    }
  }

  function setLastSyncTime(ts) {
    try {
      localStorage.setItem(LAST_SYNC_STORAGE, String(ts || Date.now()));
    } catch (e) {}
  }

  /* ---------- Firebase Initialization ---------- */
  function initFirebase() {
    if (!window.firebase) return false;
    var config = getFirebaseConfig();
    if (!config || !config.apiKey || !config.projectId) return false;

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      db = firebase.firestore();
      return true;
    } catch (e) {
      console.warn("[sync] Firebase init failed", e);
      return false;
    }
  }

  /* ---------- Real-Time Listener ---------- */
  function startListening() {
    stopListening();
    var key = getSyncKey();
    if (!db || !key) return;

    try {
      unsubscribe = db.collection("students").doc(key).onSnapshot(function (doc) {
        if (!doc.exists) {
          // New sync key: push current local data to initialize cloud
          pushLocalToCloud(true);
          return;
        }
        var remoteData = doc.data();
        if (remoteData && remoteData.updatedAt) {
          var lastSync = getLastSyncTime();
          // If remote is newer than our last sync, merge it
          if (remoteData.updatedAt > lastSync) {
            mergeRemoteData(remoteData);
          }
        }
      }, function (err) {
        console.warn("[sync] Firestore onSnapshot error", err);
      });
    } catch (e) {
      console.warn("[sync] Failed to start Firestore listener", e);
    }
  }

  function stopListening() {
    if (unsubscribe) {
      try { unsubscribe(); } catch (e) {}
      unsubscribe = null;
    }
  }

  function reconnect() {
    stopListening();
    if (initFirebase()) {
      startListening();
      pullAndMerge();
    }
  }

  /* ---------- Smart Merge Logic ---------- */
  function mergeRemoteData(remote) {
    if (!remote || isSyncing) return;
    isSyncing = true;

    try {
      // 1. Reading Progress (Union of read topics)
      var localRead = store.getRead() || {};
      var remoteRead = remote.read || {};
      var mergedRead = Object.assign({}, localRead, remoteRead);
      store.KEYS && localStorage.setItem(store.KEYS.read, JSON.stringify(mergedRead));

      // 2. Bookmarks (Union of bookmarked topic IDs)
      var localBm = store.getBookmarks() || [];
      var remoteBm = remote.bookmarks || [];
      var mergedBm = Array.from(new Set(localBm.concat(remoteBm)));
      store.KEYS && localStorage.setItem(store.KEYS.bookmarks, JSON.stringify(mergedBm));

      // 3. Notes (Per-topic merge)
      var localNotes = store.getNotes() || {};
      var remoteNotes = remote.notes || {};
      var mergedNotes = Object.assign({}, localNotes, remoteNotes);
      store.KEYS && localStorage.setItem(store.KEYS.notes, JSON.stringify(mergedNotes));

      // 4. Highlights (Per-topic array union)
      var localHl = store.getHighlights() || {};
      var remoteHl = remote.highlights || {};
      var mergedHl = Object.assign({}, localHl);
      for (var tid in remoteHl) {
        var rArr = remoteHl[tid] || [];
        var lArr = mergedHl[tid] || [];
        var combined = lArr.slice();
        rArr.forEach(function (rh) {
          var exists = combined.some(function (lh) { return lh.text === rh.text; });
          if (!exists) combined.push(rh);
        });
        mergedHl[tid] = combined;
      }
      store.KEYS && localStorage.setItem(store.KEYS.highlights, JSON.stringify(mergedHl));

      // 5. Quiz Stats & Attempts (Unique by attempt timestamp)
      var localQuiz = store.getQuiz() || { attempts: [], byUnit: {}, bySub: {}, byTopic: {} };
      var remoteQuiz = remote.quiz || { attempts: [] };
      var mergedAttemptsMap = {};
      (localQuiz.attempts || []).concat(remoteQuiz.attempts || []).forEach(function (att) {
        if (att && att.at) mergedAttemptsMap[att.at] = att;
      });
      var mergedAttempts = Object.keys(mergedAttemptsMap).map(function (k) { return mergedAttemptsMap[k]; });
      mergedAttempts.sort(function (a, b) { return a.at - b.at; });
      localQuiz.attempts = mergedAttempts;

      // Merge best unit records
      var rByUnit = remoteQuiz.byUnit || {};
      var lByUnit = localQuiz.byUnit || {};
      for (var u in rByUnit) {
        if (!lByUnit[u] || (rByUnit[u].best > lByUnit[u].best)) {
          lByUnit[u] = rByUnit[u];
        }
      }
      localQuiz.byUnit = lByUnit;
      store.KEYS && localStorage.setItem(store.KEYS.quiz, JSON.stringify(localQuiz));

      // 6. Spaced Repetition (SRS)
      var localSrs = store.getSrs() || {};
      var remoteSrs = remote.srs || {};
      var mergedSrs = Object.assign({}, localSrs);
      for (var sk in remoteSrs) {
        var rCard = remoteSrs[sk];
        var lCard = mergedSrs[sk];
        if (!lCard || (rCard.box > lCard.box) || (rCard.due > lCard.due)) {
          mergedSrs[sk] = rCard;
        }
      }
      store.KEYS && localStorage.setItem(store.KEYS.srs, JSON.stringify(mergedSrs));

      // 7. Activity Habits (Merge counts)
      var localAct = store.getActivity() || {};
      var remoteAct = remote.activity || {};
      var mergedAct = Object.assign({}, localAct);
      for (var dateKey in remoteAct) {
        mergedAct[dateKey] = Math.max(mergedAct[dateKey] || 0, remoteAct[dateKey] || 0);
      }
      store.KEYS && localStorage.setItem(store.KEYS.activity, JSON.stringify(mergedAct));

      // 8. Q&A Done
      var localQa = store.getQaDone() || [];
      var remoteQa = remote.qaDone || [];
      var mergedQa = Array.from(new Set(localQa.concat(remoteQa)));
      store.KEYS && localStorage.setItem(store.KEYS.qaDone, JSON.stringify(mergedQa));

      setLastSyncTime(remote.updatedAt || Date.now());

      // Notify the app that data has synced so active views refresh
      window.dispatchEvent(new CustomEvent("vmicro:synced", { detail: { at: Date.now() } }));

    } catch (e) {
      console.warn("[sync] Error during mergeRemoteData", e);
    } finally {
      isSyncing = false;
    }
  }

  /* ---------- Push Local Data to Cloud ---------- */
  function pushLocalToCloud(immediate) {
    var key = getSyncKey();
    if (!db || !key || isSyncing) return;

    if (!immediate) {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () { pushLocalToCloud(true); }, 800);
      return;
    }

    try {
      var now = Date.now();
      var payload = {
        syncKey: key,
        read: store.getRead() || {},
        bookmarks: store.getBookmarks() || [],
        notes: store.getNotes() || {},
        highlights: store.getHighlights() || {},
        quiz: store.getQuiz() || {},
        srs: store.getSrs() || {},
        activity: store.getActivity() || {},
        qaDone: store.getQaDone() || [],
        examDate: store.getExamDate() || "",
        lastTopic: store.getLastTopic() || null,
        device: navigator.userAgent.indexOf("Mobile") !== -1 ? "Mobile" : "Tablet/PC",
        updatedAt: now
      };

      db.collection("students").doc(key).set(payload, { merge: true }).then(function () {
        setLastSyncTime(now);
        updateUiStatus("synced");
      }).catch(function (err) {
        console.warn("[sync] Firestore write failed", err);
        updateUiStatus("error");
      });
    } catch (e) {
      console.warn("[sync] pushLocalToCloud exception", e);
    }
  }

  /* Manual Pull */
  function pullAndMerge() {
    var key = getSyncKey();
    if (!db || !key) return Promise.resolve(false);
    updateUiStatus("syncing");

    return db.collection("students").doc(key).get().then(function (doc) {
      if (doc.exists) {
        mergeRemoteData(doc.data());
        updateUiStatus("synced");
        return true;
      } else {
        pushLocalToCloud(true);
        updateUiStatus("synced");
        return true;
      }
    }).catch(function (err) {
      console.warn("[sync] Pull failed", err);
      updateUiStatus("error");
      return false;
    });
  }

  function updateUiStatus(status) {
    var statusEl = document.getElementById("sync-status-pill");
    if (!statusEl) return;
    if (status === "synced") {
      statusEl.className = "chip chip--ok font-bold";
      statusEl.innerHTML = "🟢 Synced Live";
    } else if (status === "syncing") {
      statusEl.className = "chip chip--accent font-bold";
      statusEl.innerHTML = "🔄 Syncing...";
    } else if (status === "error") {
      statusEl.className = "chip chip--danger font-bold";
      statusEl.innerHTML = "⚠️ Sync Error";
    } else {
      statusEl.className = "chip chip--subtle font-bold";
      statusEl.innerHTML = "⚪ Local Only";
    }
  }

  /* Hook into window events */
  window.addEventListener("online", function () {
    if (db && getSyncKey()) pullAndMerge();
  });

  // Automatically initialize on page load
  setTimeout(function () {
    if (initFirebase()) {
      startListening();
      pullAndMerge();
    }
  }, 100);

  return {
    getSyncKey: getSyncKey,
    setSyncKey: setSyncKey,
    getFirebaseConfig: getFirebaseConfig,
    setFirebaseConfig: setFirebaseConfig,
    getLastSyncTime: getLastSyncTime,
    push: pushLocalToCloud,
    pull: pullAndMerge,
    reconnect: reconnect
  };
})();

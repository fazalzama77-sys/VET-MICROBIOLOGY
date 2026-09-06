/* ============================================================
   store.js  —  Everything that must survive a page refresh.
   ------------------------------------------------------------
   All keys are prefixed "vmicro-" so this site can never collide
   with other subject sites if served from one domain.

   IMPORTANT: if you add a NEW key, also add it to store.backupKeys()
   or the Backup/Restore file will silently miss it.
   ============================================================ */

var store = (function () {

  var PREFIX = "vmicro-";

  var KEYS = {
    theme:      PREFIX + "theme",       // "light" (default) | "dark"
    detail:     PREFIX + "detail",      // "standard" | "deep"
    read:       PREFIX + "read",        // { topicId: timestamp }
    bookmarks:  PREFIX + "bookmarks",   // [ "topicId", ... ]
    notes:      PREFIX + "notes",       // { topicId: "note text" }
    highlights: PREFIX + "highlights",  // { topicId: [ {text, color}, ... ] }
    hlColor:    PREFIX + "hl-color",    // "yellow" | "green" | "blue" | "pink" | "orange" | "purple"
    quiz:       PREFIX + "quiz",        // { attempts: [], byUnit: {} }
    srs:        PREFIX + "srs",         // { questionKey: {box, due, wrong} }
    activity:   PREFIX + "activity",    // { "YYYY-MM-DD": actionCount }
    visits:     PREFIX + "visits",      // number
    onboarded:  PREFIX + "onboarded",   // "1"
    lastTopic:  PREFIX + "last-topic",  // topicId — powers "Resume studying"
    qaDone:     PREFIX + "qa-done",     // [ "qaId", ... ]
    notifySrs:  PREFIX + "notify-srs",  // boolean: whether daily SRS notification is enabled
    notifyTime: PREFIX + "notify-time", // preferred reminder time "HH:MM"
    navPos:     PREFIX + "nav-pos",     // "bottom" | "top" | "left" | "right"
    deepGuideSeen: PREFIX + "deep-guide-seen",
    topicGuideSeen: PREFIX + "topic-guide-seen",
    eventSeen:  PREFIX + "event-announcements-seen",
    installDismissed: PREFIX + "install-dismissed",
    sidebarCollapsed: PREFIX + "sidebar-collapsed"
  };

  /* ---------- low level ---------- */
  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      // Quota exceeded or private mode — fail quietly, never break the page.
      console.warn("[store] could not save", key, e);
      return false;
    }
  }

  /* ---------- theme ---------- */
  function getTheme() { return read(KEYS.theme, "light"); }
  function setTheme(v) {
    write(KEYS.theme, v);
    applyTheme();
  }
  function applyTheme() {
    // Light is the canonical Study Studio theme and the default.
    // Dark is a night-reading option the student must choose.
    var t = getTheme();
    document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
  }

  /* ---------- detail level (Standard vs Deep) ---------- */
  function getDetail() { return read(KEYS.detail, "standard"); }
  function setDetail(v) { write(KEYS.detail, v); }

  /* ---------- read / progress ---------- */
  function getRead() { return read(KEYS.read, {}); }
  function isRead(id) { return !!getRead()[id]; }
  function toggleRead(id) {
    var m = getRead();
    if (m[id]) delete m[id]; else m[id] = Date.now();
    write(KEYS.read, m);
    logActivity();
    return !!m[id];
  }

  /* ---------- bookmarks ---------- */
  function getBookmarks() { return read(KEYS.bookmarks, []); }
  function isBookmarked(id) { return getBookmarks().indexOf(id) !== -1; }
  function toggleBookmark(id) {
    var a = getBookmarks();
    var i = a.indexOf(id);
    if (i === -1) a.push(id); else a.splice(i, 1);
    write(KEYS.bookmarks, a);
    return i === -1;
  }

  /* ---------- notes ---------- */
  function getNotes() { return read(KEYS.notes, {}); }
  function getNote(id) { return getNotes()[id] || ""; }
  function setNote(id, text) {
    var m = getNotes();
    if (text && text.trim()) m[id] = text; else delete m[id];
    write(KEYS.notes, m);
    logActivity();
  }

  /* ---------- highlights ---------- */
  var VALID_HL_COLORS = ["yellow", "green", "blue", "pink", "orange", "purple"];
  function getHighlightColor() {
    var c = read(KEYS.hlColor, "yellow");
    return VALID_HL_COLORS.indexOf(c) !== -1 ? c : "yellow";
  }
  function setHighlightColor(color) {
    if (VALID_HL_COLORS.indexOf(color) === -1) color = "yellow";
    write(KEYS.hlColor, color);
    return color;
  }
  function getHighlights() { return read(KEYS.highlights, {}); }
  function addHighlight(id, text, color) {
    color = (color && VALID_HL_COLORS.indexOf(color) !== -1) ? color : getHighlightColor();
    var m = getHighlights();
    if (!m[id]) m[id] = [];
    var found = false;
    for (var i = 0; i < m[id].length; i++) {
      var item = m[id][i];
      var itemText = typeof item === "string" ? item : (item ? item.text : "");
      if (itemText === text) {
        m[id][i] = { text: text, color: color };
        found = true;
        break;
      }
    }
    if (!found) {
      m[id].push({ text: text, color: color });
    }
    write(KEYS.highlights, m);
    logActivity();
  }
  function removeHighlight(id, text) {
    var m = getHighlights();
    if (!m[id]) return;
    m[id] = m[id].filter(function (t) {
      var itemText = typeof t === "string" ? t : (t ? t.text : "");
      return itemText !== text;
    });
    if (!m[id].length) delete m[id];
    write(KEYS.highlights, m);
  }

  /* ---------- quiz results ---------- */
  function getQuiz() { return read(KEYS.quiz, { attempts: [], byUnit: {} }); }
  function saveAttempt(attempt) {
    var q = getQuiz();
    q.attempts.push(attempt);
    if (q.attempts.length > 200) q.attempts = q.attempts.slice(-200);

    var u = q.byUnit[attempt.scope] || { runs: 0, best: 0, totalQ: 0, totalCorrect: 0 };
    u.runs += 1;
    u.totalQ += attempt.total;
    u.totalCorrect += attempt.correct;
    var pct = attempt.total ? Math.round(attempt.correct / attempt.total * 100) : 0;
    if (pct > u.best) u.best = pct;
    u.last = pct;
    u.lastAt = attempt.at;
    q.byUnit[attempt.scope] = u;

    write(KEYS.quiz, q);
    logActivity();
  }

  /* ---------- spaced repetition (Leitner boxes 1-5) ---------- */
  function getSrs() { return read(KEYS.srs, {}); }
  function gradeSrs(key, correct) {
    var m = getSrs();
    var item = m[key] || { box: 1, due: 0, wrong: 0, seen: 0 };
    item.seen += 1;
    if (correct) {
      item.box = Math.min(5, item.box + 1);
    } else {
      item.box = 1;
      item.wrong += 1;
    }
    // Box 1..5 → review in 1, 2, 4, 8, 16 days
    var days = Math.pow(2, item.box - 1);
    item.due = Date.now() + days * 86400000;
    m[key] = item;
    write(KEYS.srs, m);
  }
  function dueSrs() {
    var m = getSrs(), now = Date.now(), out = [];
    for (var k in m) if (m[k].due <= now) out.push(k);
    return out;
  }

  /* ---------- activity / streak ---------- */
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }
  function getActivity() { return read(KEYS.activity, {}); }
  function logActivity() {
    var m = getActivity();
    var t = today();
    m[t] = (m[t] || 0) + 1;
    write(KEYS.activity, m);
  }
  function computeStreak() {
    var m = getActivity();
    var cur = 0, longest = 0, run = 0;
    var d = new Date();

    // Grace: if nothing logged today yet, start counting from yesterday.
    if (!m[today()]) d.setDate(d.getDate() - 1);

    for (var i = 0; i < 400; i++) {
      var key = d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
      if (m[key]) { cur++; d.setDate(d.getDate() - 1); }
      else break;
    }
    var days = Object.keys(m).sort();
    for (var j = 0; j < days.length; j++) {
      if (j > 0) {
        var prev = new Date(days[j - 1]), now2 = new Date(days[j]);
        run = ((now2 - prev) / 86400000 === 1) ? run + 1 : 1;
      } else run = 1;
      if (run > longest) longest = run;
    }
    return { current: cur, longest: Math.max(longest, cur), totalDays: days.length };
  }

  /* ---------- misc ---------- */
  function bumpVisits() {
    var n = (read(KEYS.visits, 0) || 0) + 1;
    write(KEYS.visits, n);
    return n;
  }
  function getVisits() { return read(KEYS.visits, 0) || 0; }
  function getLastTopic() { return read(KEYS.lastTopic, null); }
  function setLastTopic(id) { write(KEYS.lastTopic, id); }

  /* ---------- onboarding ---------- */
  function isOnboarded() { return !!read(KEYS.onboarded, false); }
  function setOnboarded() { write(KEYS.onboarded, 1); }
  function resetOnboarding() {
    try { localStorage.removeItem(KEYS.onboarded); } catch (e) {}
  }

  function getQaDone() { return read(KEYS.qaDone, []); }
  function toggleQaDone(id) {
    var a = getQaDone(), i = a.indexOf(id);
    if (i === -1) a.push(id); else a.splice(i, 1);
    write(KEYS.qaDone, a);
    logActivity();
    return i === -1;
  }

  /* ---------- nav position (Desktop) ---------- */
  function getNavPos() { return read(KEYS.navPos, "left"); }
  function setNavPos(pos) {
    write(KEYS.navPos, pos);
    applyNavPos();
  }
  function applyNavPos() {
    var pos = getNavPos();
    document.documentElement.setAttribute("data-nav-pos", pos);
  }

  /* ---------- sidebar collapsed state (Desktop) ---------- */
  function isSidebarCollapsed() { return !!read(KEYS.sidebarCollapsed, false); }
  function setSidebarCollapsed(val) {
    write(KEYS.sidebarCollapsed, !!val);
    applySidebarState();
  }
  function toggleSidebarCollapsed() {
    var next = !isSidebarCollapsed();
    setSidebarCollapsed(next);
    return next;
  }
  function applySidebarState() {
    try {
      if (document.body) {
        if (isSidebarCollapsed()) document.body.classList.add("sidebar-collapsed");
        else document.body.classList.remove("sidebar-collapsed");
      }
    } catch (e) {}
  }

  /* ---------- daily SRS notifications ---------- */
  function getSrsNotify() { return read(KEYS.notifySrs, false); }
  function setSrsNotify(bool) { write(KEYS.notifySrs, !!bool); }
  function getSrsNotifyTime() { return read(KEYS.notifyTime, "19:00"); }
  function setSrsNotifyTime(t) { write(KEYS.notifyTime, t || "19:00"); }

  /* ---------- backup / restore ---------- */
  function backupKeys() {
    var out = [];
    for (var k in KEYS) out.push(KEYS[k]);
    return out;
  }

  function exportBackup() {
    var payload = { _app: "vet-microbiology-studio", _version: 1, _at: new Date().toISOString(), data: {} };
    backupKeys().forEach(function (k) {
      var v = localStorage.getItem(k);
      if (v !== null) payload.data[k] = v;
    });
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "vet-microbiology-backup-" + today() + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function importBackup(file, onDone) {
    var r = new FileReader();
    r.onload = function () {
      try {
        var p = JSON.parse(r.result);
        if (!p || p._app !== "vet-microbiology-studio" || !p.data) {
          onDone(false, "That does not look like a valid study backup file.");
          return;
        }
        for (var k in p.data) localStorage.setItem(k, p.data[k]);
        onDone(true, "Restored. Reloading...");
      } catch (e) {
        onDone(false, "The file could not be read.");
      }
    };
    r.readAsText(file);
  }

  function resetAll() {
    backupKeys().forEach(function (k) { localStorage.removeItem(k); });
  }

  /* ---------- public API ---------- */
  return {
    KEYS: KEYS,
    getTheme: getTheme, setTheme: setTheme, applyTheme: applyTheme,
    getDetail: getDetail, setDetail: setDetail,
    getRead: getRead, isRead: isRead, toggleRead: toggleRead,
    getBookmarks: getBookmarks, isBookmarked: isBookmarked, toggleBookmark: toggleBookmark,
    getNotes: getNotes, getNote: getNote, setNote: setNote,
    getHighlights: getHighlights, addHighlight: addHighlight, removeHighlight: removeHighlight,
    getHighlightColor: getHighlightColor, setHighlightColor: setHighlightColor, VALID_HL_COLORS: VALID_HL_COLORS,
    getQuiz: getQuiz, saveAttempt: saveAttempt,
    getSrs: getSrs, gradeSrs: gradeSrs, dueSrs: dueSrs,
    getActivity: getActivity, logActivity: logActivity, computeStreak: computeStreak,
    bumpVisits: bumpVisits, getVisits: getVisits,
    getLastTopic: getLastTopic, setLastTopic: setLastTopic,
    isOnboarded: isOnboarded, setOnboarded: setOnboarded, resetOnboarding: resetOnboarding,
    getQaDone: getQaDone, toggleQaDone: toggleQaDone,
    getNavPos: getNavPos, setNavPos: setNavPos, applyNavPos: applyNavPos,
    isSidebarCollapsed: isSidebarCollapsed, setSidebarCollapsed: setSidebarCollapsed,
    toggleSidebarCollapsed: toggleSidebarCollapsed, applySidebarState: applySidebarState,
    getSrsNotify: getSrsNotify, setSrsNotify: setSrsNotify,
    getSrsNotifyTime: getSrsNotifyTime, setSrsNotifyTime: setSrsNotifyTime,
    backupKeys: backupKeys, exportBackup: exportBackup, importBackup: importBackup,
    resetAll: resetAll,
    today: today
  };
})();

/* Apply the saved theme, navigation dock position, and sidebar visibility immediately. */
store.applyTheme();
store.applyNavPos();
store.applySidebarState();

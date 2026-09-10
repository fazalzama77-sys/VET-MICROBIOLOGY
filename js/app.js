/* ============================================================
   app.js  —  Shell, router and section renderers
   ------------------------------------------------------------
   Vanilla JS. No framework, no build step.

   ROUTES (hash based, so it works from file:// and any host)
     #/                     Home
     #/theory               Theory — the five units
     #/practical            Practical — the five units
     #/unit/<unitId>        One unit, its topic list
     #/topic/<topicId>      One lesson
     #/why                  WHY section
     #/qa                   Question & Answer bank
     #/qa/<unitId>          Q&A for one unit
     #/quiz                 Quiz hub  (rendered by quiz.js)
     #/dashboard            Dashboard (rendered by dashboard.js)
     #/library              Bookmarks · Notes · Highlights
     #/me                   Settings, backup, about
   ============================================================ */

var app = (function () {

  var view;              // the <main> container we render into
  var state = { route: "", section: "home", params: {} };

  /* ============================================================
     ICONS — inline SVG, no icon font, no network request
     ============================================================ */
  var ICONS = {
    home:      '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
    theory:    '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M9 7h7M9 11h7"/>',
    practical: '<path d="M9 3v6.5L4.5 18A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-3L15 9.5V3"/><path d="M8 3h8M7.5 14h9"/>',
    why:       '<circle cx="12" cy="12" r="9"/><path d="M9.2 9a3 3 0 1 1 4 2.8c-.8.4-1.2 1-1.2 1.9v.3"/><path d="M12 17.5h.01"/>',
    qa:        '<path d="M21 12a8 8 0 1 1-3.1-6.3"/><path d="M21 4v5h-5"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.7.3-1.2.9-1.2 1.7"/><path d="M11.5 16.5h.01"/>',
    quiz:      '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="m9 11 2 2 4-4"/>',
    dashboard: '<rect x="3" y="3" width="7.5" height="8" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="5" rx="1.5"/><rect x="3" y="14" width="7.5" height="7" rx="1.5"/><rect x="13.5" y="11" width="7.5" height="10" rx="1.5"/>',
    library:   '<path d="M5 4h4v16H5zM11 4h3v16h-3z"/><path d="m17.2 4.7 3 15.1"/>',
    me:        '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
    search:    '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
    sun:       '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2M20 12h2M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"/>',
    moon:      '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5"/>',
    menu:      '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close:     '<path d="M6 6l12 12M18 6L6 18"/>',
    check:     '<path d="m4 12.5 5 5L20 6.5"/>',
    star:      '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z"/>',
    note:      '<path d="M5 3.5h14v13l-4.5 4.5H5z"/><path d="M19 16.5h-4.5V21"/><path d="M9 9h6M9 12.5h4"/>',
    chevron:   '<path d="m9 5 7 7-7 7"/>',
    back:      '<path d="M15 5 8 12l7 7"/>',
    flame:     '<path d="M12 22c4 0 6.5-2.6 6.5-6 0-4.5-4.5-6-4.5-10 0 0-2.5 1.5-2.5 4.5 0 1.6-1 2.5-2 2.5s-1.5-.8-1.5-2C6.4 12.6 5.5 14.3 5.5 16c0 3.4 2.5 6 6.5 6z"/>',
    target:    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    clock:     '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    download:  '<path d="M12 3v11"/><path d="m7.5 10 4.5 4.5L16.5 10"/><path d="M4.5 20h15"/>',
    upload:    '<path d="M12 15V4"/><path d="m7.5 8.5 4.5-4.5 4.5 4.5"/><path d="M4.5 20h15"/>',
    trash:     '<path d="M4.5 6.5h15"/><path d="M9 6.5V4.5h6v2"/><path d="M6.5 6.5 7.5 21h9l1-14.5"/>',
    book:      '<path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 1-2-2z"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2z"/>',
    lab:       '<path d="M9 3v6.5L4.5 18A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-3L15 9.5V3"/><path d="M8 3h8"/>',
    speaker:   '<path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15 9.5a3.5 3.5 0 0 1 0 5"/><path d="M17.5 7a7 7 0 0 1 0 10"/>',
    stop:      '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    pen:       '<path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17z"/><path d="M14.5 6.5l3 3"/>',
    share:     '<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4"/>',
    sparkle:   '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>',
    trophy:    '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34M6 4h12v6a6 6 0 0 1-12 0z"/>',
    copy:      '<rect width="13" height="13" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    microscope:'<path d="M6 18h8M3 22h14M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 1 0-2-2v4M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    dna:       '<path d="m2 15 5.5-5.5M16.5 4 22 9.5M10 2l12 12M2 10l12 12M5 6.5l2.5 2.5M15 16.5l2.5 2.5"/>',
    shield:    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    cell:      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="14" r="1"/>',
    virus:     '<circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M4.9 19.1l2.2-2.2M16.9 7.1l2.2-2.2"/>',
    clipboard: '<rect width="14" height="18" x="5" y="3" rx="2"/><path d="M9 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3M9 11h6M9 15h4"/>',
    pulse:     '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    bell:      '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    eye:       '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    eyeOff:    '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>',
    repeat:    '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    help:      '<circle cx="12" cy="12" r="9"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    filter:    '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    checkCircle:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    crossCircle:'<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
    feather:   '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" x2="2" y1="8" y2="22"/><line x1="17.5" x2="9" y1="15" y2="15"/>',
    heart:     '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
    folder:    '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>'
  };

  function icon(name, cls) {
    var d = ICONS[name] || ICONS.book;
    return '<svg class="ico ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  }

  function getUnitIcon(u) {
    if (!u) return "book";
    var no = parseInt(u.no, 10);
    if (u.stream === "practical") {
      switch (no) {
        case 1: return "lab";
        case 2: return "cell";
        case 3: return "pulse";
        case 4: return "microscope";
        case 5: return "feather";
        case 6: return "clipboard";
        default: return "lab";
      }
    }
    switch (no) {
      case 1: return "cell";
      case 2: return "feather";
      case 3: return "dna";
      case 4: return "shield";
      case 5: return "virus";
      default: return "theory";
    }
  }

  /* ============================================================
     SMALL HELPERS
     ============================================================ */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function el(sel) { return document.querySelector(sel); }
  function els(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function pct(done, total) { return total ? Math.round(done / total * 100) : 0; }

  function normHl(h) {
    if (!h) return { text: "", color: "yellow" };
    if (typeof h === "string") return { text: h, color: "yellow" };
    var valid = (store.VALID_HL_COLORS || ["yellow", "green", "blue", "pink", "orange", "purple"]);
    var col = (h.color && valid.indexOf(h.color) !== -1) ? h.color : "yellow";
    return { text: h.text || "", color: col };
  }

  /* How many topics in a unit are marked read */
  function unitProgress(unit) {
    var readMap = store.getRead();
    var done = unit.topics.filter(function (t) { return readMap[t.id]; }).length;
    return { done: done, total: unit.topics.length, pct: pct(done, unit.topics.length) };
  }

  /* Does this unit have any lesson content written yet? */
  function topicContent(topicId) {
    var t = syllabus.topicById[topicId];
    if (!t) return null;
    var bank = (t.stream === "theory")
      ? (window.theoryData || {})
      : (window.practicalData || {});
    var unitBucket = bank[t.unitId] || {};
    return unitBucket[topicId] || null;
  }

  function hasContent(topicId) {
    var c = topicContent(topicId);
    if (!c) return false;
    return !!((c.desc && c.desc.trim()) ||
              (c.eliteDesc && c.eliteDesc.trim()) ||
              (c.keyPoints && c.keyPoints.length));
  }

  function unitContentCount(unit) {
    return unit.topics.filter(function (t) { return hasContent(t.id); }).length;
  }

  /* Count only questions that have actually been written.
     The data files ship with empty template rows; those must never
     be counted, or the unit card promises questions the quiz cannot find. */
  function questionCount(unitId) {
    var b = (window.quizBank || {})[unitId];
    if (!b) return 0;
    return ["mcq", "tf", "fib"].reduce(function (n, f) {
      return n + (b[f] || []).filter(function (q) {
        return q && q.q && String(q.q).trim();
      }).length;
    }, 0);
  }

  function qaCount(unitId) {
    return ((window.qaBank || {})[unitId] || []).filter(function (q) {
      return q && q.question && String(q.question).trim();
    }).length;
  }

  function ringHtml(percent, size, label) {
    size = size || 78;
    var r = (size / 2) - 6;
    var c = 2 * Math.PI * r;
    var dash = (percent / 100) * c;
    return '<div class="ring" style="--ring-size:' + size + 'px">' +
      '<svg viewBox="0 0 ' + size + ' ' + size + '">' +
      '<circle class="ring__track" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke-width="5"/>' +
      '<circle class="ring__val" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke-width="5" ' +
      'stroke-dasharray="' + dash.toFixed(1) + ' ' + c.toFixed(1) + '"/>' +
      '</svg><div class="ring__label">' + (label != null ? label : percent + "%") + '</div></div>';
  }

  /* ============================================================
     ROUTER
     ============================================================ */
  function parseHash() {
    var h = (location.hash || "#/").replace(/^#/, "");
    var parts = h.split("/").filter(Boolean);
    return parts;
  }

  function route() {
    var p = parseHash();
    var name = p[0] || "home";

    state.route = location.hash || "#/";
    state.params = { a: p[1] || null, b: p[2] || null };

    stopSpeech();              // never let a lesson keep reading after you leave it
    teardownHighlightPopup();  // remove floating selection toolbar if active

    var map = {
      home: "home", theory: "theory", practical: "practical",
      unit: "unit", topic: "topic", why: "why", qa: "qa",
      quiz: "quiz", dashboard: "dashboard", library: "library", me: "me"
    };
    state.section = map[name] || "home";

    // Section accent colour
    var accentFor = {
      theory: "theory", unit: "theory", topic: "theory",
      practical: "practical", quiz: "quiz", why: "why",
      dashboard: "dashboard", qa: "theory"
    };
    var sec = accentFor[state.section] || "";
    if (sec) document.body.setAttribute("data-section", sec);
    else document.body.removeAttribute("data-section");

    // Practical pages should use the teal accent even when routed via unit/topic
    if ((state.section === "unit" || state.section === "topic") && state.params.a) {
      var isPrac = (state.section === "unit")
        ? state.params.a.indexOf("prac-") === 0
        : (syllabus.topicById[state.params.a] || {}).stream === "practical";
      if (isPrac) document.body.setAttribute("data-section", "practical");
    }

    render();
    refreshNav();
    closeNav();
    window.scrollTo(0, 0);
    var c = el(".content");
    if (c) c.scrollTop = 0;
  }

  function go(hash) { location.hash = hash; }

  /* ============================================================
     RENDER DISPATCH
     ============================================================ */
  function render() {
    var fn = {
      home: renderHome,
      theory: function () { renderStream("theory"); },
      practical: function () { renderStream("practical"); },
      unit: renderUnit,
      topic: renderTopic,
      why: renderWhy,
      qa: renderQa,
      library: renderLibrary,
      me: renderMe,
      quiz: function () {
        if (window.quizApp && quizApp.render) quizApp.render(view, state.params);
        else view.innerHTML = notReady("Quiz");
      },
      dashboard: function () {
        if (window.dashboardApp && dashboardApp.render) dashboardApp.render(view);
        else view.innerHTML = notReady("Dashboard");
      }
    }[state.section] || renderHome;

    fn();
    setCrumbs();
  }

  function notReady(what) {
    return '<div class="empty"><h3>' + esc(what) + ' is loading</h3>' +
      '<p>If you keep seeing this, the script file for this section did not load. Check that all files in <code>js/</code> are present.</p></div>';
  }

  /* ============================================================
     BREADCRUMBS
     ============================================================ */
  function setCrumbs() {
    var c = el("#crumbs");
    if (!c) return;
    var parts = ['<a href="#/">' + icon("home") + '<span>Home</span></a>'];

    function push(label, href, icoName) {
      parts.push('<span class="sep">/</span>');
      var icoHtml = icoName ? icon(icoName) : "";
      parts.push(href ? '<a href="' + href + '">' + icoHtml + '<span>' + esc(label) + '</span></a>'
                      : '<span class="cur">' + icoHtml + '<span>' + esc(label) + '</span></span>');
    }

    if (state.section === "theory") push("Theory", null, "theory");
    else if (state.section === "practical") push("Practical", null, "practical");
    else if (state.section === "why") push("WHY", null, "why");
    else if (state.section === "qa") push("Q & A", null, "qa");
    else if (state.section === "quiz") push("Quiz", null, "quiz");
    else if (state.section === "dashboard") push("Dashboard", null, "dashboard");
    else if (state.section === "library") push("Library", null, "library");
    else if (state.section === "me") push("Settings", null, "me");
    else if (state.section === "unit") {
      var u = syllabus.unitById[state.params.a];
      if (u) {
        var strIco = u.stream === "theory" ? "theory" : "practical";
        push(u.stream === "theory" ? "Theory" : "Practical", "#/" + u.stream, strIco);
        push("Unit " + u.no, null, getUnitIcon(u));
      }
    } else if (state.section === "topic") {
      var t = syllabus.topicById[state.params.a];
      if (t) {
        var u2 = syllabus.unitById[t.unitId];
        var strIco2 = t.stream === "theory" ? "theory" : "practical";
        push(t.stream === "theory" ? "Theory" : "Practical", "#/" + t.stream, strIco2);
        push("Unit " + u2.no, "#/unit/" + u2.id, getUnitIcon(u2));
        push(t.title, null, "book");
      }
    }
    c.innerHTML = parts.join("");
  }

  /* ============================================================
     3D HOLOGRAPHIC CELLULAR & DIAGNOSTIC LATTICE CANVAS
     ============================================================ */
  var landingCanvasLoopRunning = false;
  function _initLandingCanvas() {
    var canvas = document.getElementById("landing-canvas");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var width = 0, height = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    // 3D Model Vertices and Edges for Cellular & Diagnostic Matrix
    var vertices = [];
    var edges = [];

    // 1. Central Nucleus (Spherical core)
    var coreRings = 3;
    var coreSegs = 8;
    var coreRadius = 18;
    for (var r = 0; r < coreRings; r++) {
      var phi = ((r + 1) / (coreRings + 1)) * Math.PI;
      var y = Math.cos(phi) * coreRadius;
      var ringR = Math.sin(phi) * coreRadius;
      for (var s = 0; s < coreSegs; s++) {
        var theta = (s / coreSegs) * Math.PI * 2;
        vertices.push({
          x: Math.cos(theta) * ringR,
          y: y,
          z: Math.sin(theta) * ringR,
          type: "core"
        });
        var idx = vertices.length - 1;
        if (s > 0) edges.push([idx - 1, idx]);
        else edges.push([idx + coreSegs - 1, idx]);
        if (r > 0) edges.push([idx - coreSegs, idx]);
      }
    }

    // 2. Cellular Membrane & Icosahedral Diagnostic Cage
    var t = (1 + Math.sqrt(5)) / 2;
    var scale = 52;
    var icoVerts = [
      [-1,  t,  0], [ 1,  t,  0], [-1, -t,  0], [ 1, -t,  0],
      [ 0, -1,  t], [ 0,  1,  t], [ 0, -1, -t], [ 0,  1, -t],
      [ t,  0, -1], [ t,  0,  1], [-t,  0, -1], [-t,  0,  1]
    ];
    var baseIcoIdx = vertices.length;
    icoVerts.forEach(function (v) {
      vertices.push({ x: v[0] * scale, y: v[1] * scale, z: v[2] * scale, type: "membrane" });
    });

    var icoEdges = [
      [0,11],[0,5],[0,1],[0,7],[0,10],[1,5],[1,9],[1,8],[1,7],[2,11],[2,4],[2,3],[2,6],[2,10],
      [3,9],[3,4],[3,8],[3,6],[4,9],[4,5],[4,11],[5,9],[6,7],[6,8],[6,10],[7,8],[7,10],[8,9],
      [10,11]
    ];
    icoEdges.forEach(function (pair) {
      edges.push([baseIcoIdx + pair[0], baseIcoIdx + pair[1]]);
    });

    // 3. Diagnostic Antigenic Receptor Spikes (Radiating Y-shapes)
    for (var k = 0; k < 6; k++) {
      var angle = (k / 6) * Math.PI * 2;
      var spikeLen = 85;
      var sx = Math.cos(angle) * spikeLen;
      var sy = (k % 2 === 0 ? -1 : 1) * 24;
      var sz = Math.sin(angle) * spikeLen;
      vertices.push({ x: sx, y: sy, z: sz, type: "spike-stem" });
      var stemIdx = vertices.length - 1;
      edges.push([baseIcoIdx + (k % icoVerts.length), stemIdx]);

      // Y-arms
      vertices.push({ x: sx + 14, y: sy - 12, z: sz + 10, type: "spike-arm" });
      edges.push([stemIdx, vertices.length - 1]);
      vertices.push({ x: sx - 14, y: sy - 12, z: sz - 10, type: "spike-arm" });
      edges.push([stemIdx, vertices.length - 1]);
    }

    // Interaction & Animation State
    var angleX = 0.25;
    var angleY = 0.45;
    var targetAngleX = 0.25;
    var targetAngleY = 0.45;
    var dragStartX = 0, dragStartY = 0;
    var isDragging = false;

    var heroEl = document.querySelector(".hero");
    if (heroEl) {
      heroEl.addEventListener("mousedown", function (e) {
        if (e.target.closest(".hero__cta, a, button, input")) return;
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
      });

      window.addEventListener("mouseup", function () {
        isDragging = false;
      });

      window.addEventListener("mousemove", function (e) {
        if (isDragging) {
          var dx = e.clientX - dragStartX;
          var dy = e.clientY - dragStartY;
          targetAngleY = angleY + dx * 0.008;
          targetAngleX = angleX + dy * 0.008;
          dragStartX = e.clientX;
          dragStartY = e.clientY;
          angleX = targetAngleX;
          angleY = targetAngleY;
        } else {
          var rx = (e.clientX - window.innerWidth / 2) / window.innerWidth;
          var ry = (e.clientY - window.innerHeight / 2) / window.innerHeight;
          targetAngleY = angleY + rx * 0.15;
          targetAngleX = angleX + ry * 0.15;
        }
      });

      heroEl.addEventListener("touchstart", function (e) {
        if (e.target.closest(".hero__cta, a, button, input")) return;
        isDragging = true;
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
      }, { passive: true });

      heroEl.addEventListener("touchmove", function (e) {
        if (isDragging && e.touches.length > 0) {
          var dx2 = e.touches[0].clientX - dragStartX;
          var dy2 = e.touches[0].clientY - dragStartY;
          targetAngleY = angleY + dx2 * 0.008;
          targetAngleX = angleX + dy2 * 0.008;
          dragStartX = e.touches[0].clientX;
          dragStartY = e.touches[0].clientY;
          angleX = targetAngleX;
          angleY = targetAngleY;
        }
      }, { passive: true });

      heroEl.addEventListener("touchend", function () {
        isDragging = false;
      });
    }

    function renderLoop() {
      var activeCanvas = document.getElementById("landing-canvas");
      if (!activeCanvas) {
        landingCanvasLoopRunning = false;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      if (!isDragging) {
        angleY += 0.0035;
        targetAngleY += 0.0035;
      }

      var smoothX = angleX + (targetAngleX - angleX) * 0.1;
      var smoothY = angleY + (targetAngleY - angleY) * 0.1;

      var cosX = Math.cos(smoothX), sinX = Math.sin(smoothX);
      var cosY = Math.cos(smoothY), sinY = Math.sin(smoothY);

      var isDark = store.getTheme() === "dark";
      var fov = 380;
      var centerX = width > 768 ? width * 0.72 : width * 0.5;
      var centerY = height * 0.48;

      var projected = vertices.map(function (v) {
        var x1 = v.x * cosY - v.z * sinY;
        var z1 = v.z * cosY + v.x * sinY;
        var y2 = v.y * cosX - z1 * sinX;
        var z2 = z1 * cosX + v.y * sinX;
        var scale = fov / (fov + z2);
        return {
          x: x1 * scale + centerX,
          y: y2 * scale + centerY,
          z: z2,
          type: v.type
        };
      });

      // Orbit HUD Rings
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? "rgba(79, 195, 247, 0.08)" : "rgba(21, 101, 192, 0.08)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 190, smoothY * 0.4, smoothY * 0.4 + Math.PI * 0.7);
      ctx.strokeStyle = isDark ? "rgba(128, 203, 196, 0.12)" : "rgba(0, 137, 123, 0.12)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw Edges
      ctx.lineWidth = 1.2;
      edges.forEach(function (pair) {
        var p1 = projected[pair[0]];
        var p2 = projected[pair[1]];
        if (!p1 || !p2) return;

        var maxZ = 120;
        var depthAlpha = Math.max(0.06, 1 - (p1.z + p2.z) / (2 * maxZ));
        var baseOpacity = isDark ? 0.35 : 0.22;
        var alpha = Math.min(1, depthAlpha * baseOpacity);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        if (p1.type === "core") {
          ctx.strokeStyle = isDark ? "rgba(179, 136, 255, " + alpha + ")" : "rgba(106, 72, 181, " + alpha + ")";
        } else if (p1.type === "spike-stem" || p1.type === "spike-arm") {
          ctx.strokeStyle = isDark ? "rgba(255, 183, 77, " + alpha + ")" : "rgba(178, 94, 0, " + alpha + ")";
        } else {
          ctx.strokeStyle = isDark ? "rgba(79, 195, 247, " + alpha + ")" : "rgba(21, 101, 192, " + alpha + ")";
        }
        ctx.stroke();
      });

      // Draw Nodes
      projected.forEach(function (p) {
        var radius = Math.max(1.2, (1 - p.z / 120) * 2.8);
        var alpha = Math.max(0.12, (1 - p.z / 120) * (isDark ? 0.7 : 0.5));
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        if (p.type === "core") {
          ctx.fillStyle = isDark ? "rgba(179, 136, 255, " + alpha + ")" : "rgba(106, 72, 181, " + alpha + ")";
        } else if (p.type === "spike-stem" || p.type === "spike-arm") {
          ctx.fillStyle = isDark ? "rgba(255, 183, 77, " + alpha + ")" : "rgba(178, 94, 0, " + alpha + ")";
        } else {
          ctx.fillStyle = isDark ? "rgba(79, 195, 247, " + alpha + ")" : "rgba(21, 101, 192, " + alpha + ")";
        }
        ctx.fill();
      });

      // Clinical Telemetry Overlay Text
      ctx.font = "10px JetBrains Mono, Courier New, monospace";
      ctx.fillStyle = isDark ? "rgba(148, 163, 184, 0.45)" : "rgba(84, 110, 122, 0.45)";
      var txtY = height - 24;
      ctx.fillText("SYS_DIAGNOSTICS: ACTIVE [FOV_380]", 24, txtY);
      ctx.fillText("CELLULAR_LATTICE: NODES=" + vertices.length + " EDGES=" + edges.length, 24, txtY + 13);

      var yawDeg = Math.round(((smoothY % (Math.PI * 2)) * 180) / Math.PI);
      if (width > 600) {
        ctx.fillText("ROT_YAW: " + yawDeg + "\u00B0 // REF: VCI_MSVE_2016", width - 240, txtY);
        ctx.fillText("VET_MICROBIOLOGY_STUDIO // UNITS_1_5_ONLINE", width - 240, txtY + 13);
      }

      requestAnimationFrame(renderLoop);
    }

    if (!landingCanvasLoopRunning) {
      landingCanvasLoopRunning = true;
      requestAnimationFrame(renderLoop);
    }
  }

  /* ============================================================
     SPOTTERS OF THE DAY (High-Yield Clinical Case Spotlight)
     ============================================================ */
  var SPOTTERS_OF_THE_DAY = [
    {
      name: "Bacillus anthracis (Anthrax / Splenic Fever)",
      organ: "Peripheral Blood / Ear Vein Smear (Bovine)",
      etiology: "Bacillus anthracis (Gram-positive, capsulated spore-forming aerobic rod; poly-D-glutamic acid capsule).",
      gross: "Dark, tarry, unclotted blood oozing from all natural body orifices; absence of rigor mortis; marked splenomegaly ('blackberry-jam' pulp). Post-mortem opening of carcass is strictly prohibited by law!",
      micro: "Square-ended, boxcar-shaped Gram-positive bacilli in short chains surrounded by a pink-purple amorphous capsule against blue polychrome methylene blue background (McFadyean's reaction).",
      viva: "Capsular antigen is poly-D-glutamic acid; tripartite exotoxin comprises Protective Antigen (PA), Lethal Factor (LF), and Edema Factor (EF). Spores NEVER form in live host tissues or unopened carcasses (require free atmospheric O2).",
      unitId: "unit-1",
      topicId: "u1-t17",
      badge: "Bacterial Zoonosis"
    },
    {
      name: "Bovine Tuberculosis (Acid-Fast Granuloma / Pearl Disease)",
      organ: "Retropharyngeal & Mediastinal Lymph Nodes (Bovine)",
      etiology: "Mycobacterium bovis (Slender, acid-fast, strictly aerobic, slow-growing bacillus).",
      gross: "Firm, nodular granulomas ('pearl disease') studded across pleura and peritoneum; lymph nodes show yellowish-white, dry, crumbly caseous necrosis with grittiness upon cutting due to dystrophic calcification.",
      micro: "Ziehl-Neelsen (ZN) acid-fast stain reveals slender, beaded, bright carbol-fuchsin red bacilli arranged singly or in cords within epithelioid macrophages and multinucleated Langhans giant cells.",
      viva: "High cell-wall mycolic acid content (60-70% lipid) confers acid-fastness (resists decolourisation with 20% H2SO4). Delayed-type hypersensitivity (Type IV) forms the immunological basis for the Single Intradermal Tuberculin Test (SID).",
      unitId: "unit-1",
      topicId: "u1-t18",
      badge: "Acid-Fast Bacilli"
    },
    {
      name: "Blackleg (Clostridial Emphysematous Myositis)",
      organ: "Heavy Skeletal Thigh / Shoulder Muscle (Bovine)",
      etiology: "Clostridium chauvoei (Gram-positive, anaerobic, spore-forming bacillus).",
      gross: "Severe hot, painful swelling of large muscle masses turning cold, painless, and dry with subcutaneous crepitation on palpation (gas bubbles). Cut surface is dark reddish-black, spongy, and emits a pungent rancid-butter odor (butyric acid).",
      micro: "Gram stain reveals Gram-positive pleomorphic rods with oval subterminal spores ('lemon' or 'citron' shapes). Muscle fibres exhibit extensive coagulation necrosis, fragmentation, and separation by gas bubbles.",
      viva: "Endogenous infection: dormant ingested spores persist in reticuloendothelial cells and muscle until blunt trauma causes local ischemia and anoxia, triggering spore germination. Major toxin is necrotizing, leukocidal alpha toxin.",
      unitId: "unit-1",
      topicId: "u1-t19",
      badge: "Anaerobic Spores"
    },
    {
      name: "Brucella abortus (Contagious Bovine Abortion / Bang's Disease)",
      organ: "Bovine Placenta & Aborted Foetal Abomasum",
      etiology: "Brucella abortus (Gram-negative, non-motile, non-spore forming intracellular coccobacillus).",
      gross: "Severe necrotic placentitis: necrotic, leathery, thickened cotyledons covered with yellowish-grey gummy exudate. Aborted foetus displays severe subcutaneous edema and turbid fibrinous abomasal contents.",
      micro: "Modified Ziehl-Neelsen (Stamp's or Köster's stain) shows clumps of tiny, pale red/pink intracellular coccobacilli packed inside placental trophoblasts against a malachite green or blue background.",
      viva: "Marked tissue tropism for placenta and male genital tract is stimulated by high concentrations of erythritol (4-carbon sugar). Screening relies on Rose Bengal Plate Test (RBPT) and confirmatory Standard Tube Agglutination Test (STAT).",
      unitId: "unit-1",
      topicId: "u1-t26",
      badge: "Intracellular Zoonosis"
    },
    {
      name: "Avian Aspergillosis ('Brooder Pneumonia')",
      organ: "Avian Lungs & Abdominal Air Sacs",
      etiology: "Aspergillus fumigatus (Thermotolerant saprophytic filamentous mould).",
      gross: "Lungs and air sacs studded with multiple, discrete, pinhead-sized yellowish-green caseous nodules; air sac membranes thickened and lined with velvety grey-green fungal turf or fruiting colonies.",
      micro: "Lactophenol Cotton Blue (LPCB) mount demonstrates septate, hyaline hyphae showing uniform 45-degree dichotomous branching; vesicles crowned by a single row of phialides bearing chains of round conidia (spores).",
      viva: "Thermotolerant up to 45°C. Predisposition in birds is due to absence of epiglottis and alveolar macrophages, plus high avian body temperature (41-42°C). Inhalation of fungal spores from mouldy bedding or feed.",
      unitId: "unit-2",
      topicId: "u2-t04",
      badge: "Veterinary Mycology"
    },
    {
      name: "Rabies Negri Bodies (Intracytoplasmic Inclusion Bodies)",
      organ: "Brain — Ammon's Horn (Hippocampus) & Purkinje Cells",
      etiology: "Rabies Virus (Lyssavirus, Rhabdoviridae — enveloped, bullet-shaped negative-sense ssRNA).",
      gross: "Gross brain examination shows minimal or non-specific changes (mild congestion/meningeal edema). Definitive confirmation requires direct laboratory demonstration of viral inclusions or viral antigen.",
      micro: "Sellers' stain / H&E shows pathognomonic round to oval, eosinophilic, sharply defined intracytoplasmic 'Negri bodies' (1–27 µm) containing internal basophilic granules within neurons of Ammon's horn and cerebellar Purkinje cells.",
      viva: "Negri bodies represent viral factories (viral nucleocapsid ribonucleoprotein aggregates). Gold-standard OIE reference test is the Direct Fluorescent Antibody Test (dFAT) on fresh impression smears of hippocampus and brainstem.",
      unitId: "unit-5",
      topicId: "u5-t13",
      badge: "Diagnostic Virology"
    },
    {
      name: "Foot-and-Mouth Disease (Vesicular Stomatitis & 'Tiger Heart')",
      organ: "Bovine Tongue, Dental Pad & Neonatal Calf Myocardium",
      etiology: "Foot-and-Mouth Disease Virus (Aphthovirus, Picornaviridae — non-enveloped, positive-sense ssRNA).",
      gross: "Multiple ruptured vesicles (aphthae) leaving extensive, painful, raw red erosions on dorsal lingual mucosa and interdigital cleft. In young calves, acute myocarditis produces grey-yellow necrotic streaks on ventricular walls ('Tiger Heart').",
      micro: "Ballooning degeneration of the stratum spinosum in oral epithelium with intracellular edema, leading to acantholysis and vesicle formation. Myocardium displays hyaline Zenker's degeneration with mononuclear infiltration.",
      viva: "7 distinct serotypes (O, A, C, SAT-1, SAT-2, SAT-3, Asia-1) with NO cross-immunity. Extremely low infectious dose; transmitted via aerosols, milk, and direct contact. Highly significant transboundary animal disease (TAD).",
      unitId: "unit-5",
      topicId: "u5-t18",
      badge: "Transboundary Virus"
    }
  ];

  function toggleSpotterDetails() {
    var elDrawer = document.getElementById("spotter-details-drawer");
    var elBtn = document.getElementById("spotter-toggle-btn");
    if (!elDrawer) return;
    var isExpanded = elDrawer.classList.toggle("is-open");
    if (elBtn) {
      elBtn.innerHTML = isExpanded 
        ? icon("check") + " Hide Pathogenesis Details" 
        : icon("sparkle") + " Reveal Diagnostic Hallmarks & Viva Key";
    }
  }

  function _renderWhyInner(w) {
    if (!w) return '<p class="muted">No mechanism available.</p>';
    return '<div class="home-why-q">' +
      '<div class="row row--wrap mb-2">' +
        '<span class="badge badge--purple">' + icon("why") + ' Comparative Mechanism #' + w.id + '</span>' +
        (w.comparison ? '<span class="chip chip--accent push">' + esc(w.comparison) + '</span>' : '') +
      '</div>' +
      '<h3 class="home-why-title">' + esc(w.title) + '</h3>' +
      '<div class="home-why-body mt-3">' + w.why + '</div>' +
      (w.clinical ? '<div class="home-why-clinical mt-3"><b>' + icon("check") + ' Clinical Rule of Thumb:</b> ' + esc(w.clinical) + '</div>' : '') +
      '<div class="row row--wrap mt-4">' +
        '<a class="btn btn--sm btn--soft" href="#/why">' + icon("why") + ' Browse 100 WHY Mechanisms →</a>' +
        '<button class="btn btn--sm btn--subtle push" onclick="app.shuffleWhyMechanism()">' + icon("sparkle") + ' Shuffle Mechanism</button>' +
      '</div>' +
    '</div>';
  }

  function shuffleWhyMechanism() {
    var whyList = (window.whyData || []).filter(function (w) { return w && w.title; });
    if (!whyList.length) return;
    var rand = Math.floor(Math.random() * whyList.length);
    var item = whyList[rand];
    var container = document.getElementById("home-why-content");
    if (!container) return;
    container.innerHTML = _renderWhyInner(item);
    toast("Loaded Mechanism #" + item.id + ": " + esc(shorten(item.title, 34)));
  }

  function _renderGlossaryInner(term, def) {
    var cat = "General Bacteriology";
    if (window.glossary && glossary.categories) {
      for (var c in glossary.categories) {
        if (glossary.categories[c].indexOf(term.toLowerCase()) !== -1) {
          cat = c;
          break;
        }
      }
    }
    var safeTerm = esc(term).replace(/'/g, "\\'");
    return '<div class="home-glossary-card-inner">' +
      '<div class="row row--wrap mb-2">' +
        '<span class="badge badge--teal">' + icon("book") + ' ' + esc(cat) + '</span>' +
        '<button class="btn btn--sm btn--subtle push" onclick="app.speak(\'' + safeTerm + '\')" title="Listen to pronunciation">' +
          icon("speaker") + ' Pronounce' +
        '</button>' +
      '</div>' +
      '<h3 class="home-term-title">' + esc(term) + '</h3>' +
      '<p class="home-term-def mt-2">' + esc(def) + '</p>' +
      '<div class="row row--wrap mt-4">' +
        '<a class="btn btn--sm btn--soft" href="#/library">' + icon("book") + ' Browse 316-Term Glossary →</a>' +
        '<button class="btn btn--sm btn--subtle push" onclick="app.shuffleGlossaryTerm()">' + icon("sparkle") + ' Next Term</button>' +
      '</div>' +
    '</div>';
  }

  function shuffleGlossaryTerm() {
    var termKeys = Object.keys((window.glossary && glossary.terms) || {});
    if (!termKeys.length) return;
    var rand = Math.floor(Math.random() * termKeys.length);
    var term = termKeys[rand];
    var def = glossary.terms[term];
    var container = document.getElementById("home-glossary-content");
    if (!container) return;
    container.innerHTML = _renderGlossaryInner(term, def);
    toast("High-Yield Term: " + esc(term));
  }

  /* ============================================================
     HOME — Next-Gen Clinical Academic Workstation
     ============================================================ */
  function renderHome() {
    var readMap = store.getRead();
    var allTopics = syllabus.allUnits.reduce(function (n, u) { return n + u.topics.length; }, 0);
    var readCount = Object.keys(readMap).length;
    var readPct = allTopics ? Math.round((readCount / allTopics) * 100) : 0;
    var streak = store.computeStreak();
    var q = store.getQuiz();
    var last = store.getLastTopic();
    var lastT = last ? syllabus.topicById[last] : null;

    var totalQ = Object.keys(window.quizBank || {}).reduce(function (n, k) { return n + questionCount(k); }, 0);
    var totalQa = Object.keys(window.qaBank || {}).reduce(function (n, k) { return n + qaCount(k); }, 0);
    var totalWhy = (window.whyData || []).filter(function (w) { return w.title; }).length;

    var accuracy = 0;
    if (q.attempts.length) {
      var tot = 0, cor = 0;
      q.attempts.forEach(function (a) { tot += a.total; cor += a.correct; });
      accuracy = tot ? Math.round((cor / tot) * 100) : 0;
    }

    var dueSrsList = store.dueSrs();
    var dueSrsCount = dueSrsList.length;

    // Dual-Paper breakdown
    var p1Units = [1, 2, 3];
    var p2Units = [4, 5];
    var p1Topics = 0, p1Read = 0;
    var p2Topics = 0, p2Read = 0;

    syllabus.theory.forEach(function (u) {
      if (p1Units.indexOf(u.no) !== -1) {
        p1Topics += u.topics.length;
        p1Read += u.topics.filter(function (t) { return readMap[t.id]; }).length;
      } else if (p2Units.indexOf(u.no) !== -1) {
        p2Topics += u.topics.length;
        p2Read += u.topics.filter(function (t) { return readMap[t.id]; }).length;
      }
    });
    var p1Pct = p1Topics ? Math.round((p1Read / p1Topics) * 100) : 0;
    var p2Pct = p2Topics ? Math.round((p2Read / p2Topics) * 100) : 0;

    // Mastery XP Calculation (matching Dashboard system)
    var srsMap = store.getSrs();
    var masteredSrsCount = 0;
    for (var sk in srsMap) {
      if (srsMap[sk].box >= 4) masteredSrsCount++;
    }
    var xpRead = Math.round(readPct * 4.0);
    var xpQuiz = Math.round(accuracy * 3.0);
    var xpStreak = Math.min(150, streak.current * 15);
    var xpSrs = Math.min(150, masteredSrsCount * 5);
    var masteryXp = Math.min(1000, xpRead + xpQuiz + xpStreak + xpSrs);

    var rankTitle = "Microbiology Apprentice";
    if (masteryXp >= 800) rankTitle = "Master Microbiologist";
    else if (masteryXp >= 550) rankTitle = "Senior Resident";
    else if (masteryXp >= 300) rankTitle = "Junior Diagnostician";

    // Dynamic greeting based on time of day
    var hour = new Date().getHours();
    var greeting = "Good evening";
    if (hour < 12) greeting = "Good morning";
    else if (hour < 17) greeting = "Good afternoon";

    // Spotter of the Day selection
    var now = new Date();
    var dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    var spotter = SPOTTERS_OF_THE_DAY[dayOfYear % SPOTTERS_OF_THE_DAY.length];

    // WHY mechanism of the Day
    var whyList = (window.whyData || []).filter(function (w) { return w && w.title; });
    var dailyWhy = whyList.length ? whyList[dayOfYear % whyList.length] : null;

    // Glossary Term of the Day
    var termKeys = Object.keys((window.glossary && glossary.terms) || {});
    var dailyTermKey = termKeys.length ? termKeys[dayOfYear % termKeys.length] : "coagulative necrosis";
    var dailyTermDef = (window.glossary && glossary.terms[dailyTermKey]) || "Premature, irreversible cell death in living tissue.";

    // Prioritize resume card message
    var resumeIcon = "theory";
    var resumeTitle = "Ready to start studying?";
    var resumeSubtitle = "Begin with Unit 1: General Veterinary Microbiology.";
    var resumeBtnText = "Start Unit 1";
    var resumeHref = "#/unit/unit-1";

    if (q.incorrect && q.incorrect.length > 0) {
      resumeIcon = "target";
      resumeTitle = q.incorrect.length + (q.incorrect.length > 1 ? " Questions" : " Question") + " Need Review";
      resumeSubtitle = "Reinforce weak spots and master tricky microbiology questions.";
      resumeBtnText = "Review Questions";
      resumeHref = "#/quiz";
    } else if (lastT) {
      var uLast = syllabus.unitById[lastT.unitId] || {};
      resumeIcon = "book";
      resumeTitle = "Resume studying: " + esc(shorten(lastT.title, 40));
      resumeSubtitle = (uLast.short ? "Unit " + uLast.no + " · " + esc(uLast.short) + " — " : "") + "Pick up right where you left off.";
      resumeBtnText = "Resume Lesson";
      resumeHref = "#/topic/" + lastT.id;
    } else if (streak.current > 0) {
      resumeIcon = "flame";
      resumeTitle = streak.current + "-Day Study Streak!";
      resumeSubtitle = "Keep your daily momentum alive. Read a lesson or test yourself with a quiz.";
      resumeBtnText = "Practice Now";
      resumeHref = "#/quiz";
    }

    view.innerHTML =
      /* 1. Scholar Command Bar */
      '<div class="home-scholar-bar">' +
        '<div class="home-scholar-greeting">' +
          '<span class="home-greeting-badge">' + icon("sparkle") + ' VCI MSVE 2016</span>' +
          '<h2 class="home-greeting-title">' + greeting + ', Scholar</h2>' +
          '<p class="home-greeting-sub">Veterinary Microbiology Companion · B.V.Sc &amp; A.H. Year 2</p>' +
        '</div>' +
        '<div class="home-scholar-badges">' +
          '<a class="scholar-badge-pill" href="#/dashboard" title="View Clinical Analytics &amp; Mastery">' +
            '<span class="badge-icon badge-icon--xp">' + icon("trophy") + '</span>' +
            '<span class="badge-content">' +
              '<span class="badge-val">' + masteryXp + ' XP</span>' +
              '<span class="badge-lbl">' + rankTitle + '</span>' +
            '</span>' +
          '</a>' +
          '<div class="scholar-badge-pill ' + (streak.current > 0 ? 'is-active' : '') + '" title="Daily Study Streak">' +
            '<span class="badge-icon badge-icon--streak">' + icon("flame") + '</span>' +
            '<span class="badge-content">' +
              '<span class="badge-val">' + streak.current + ' Days</span>' +
              '<span class="badge-lbl">Daily Streak</span>' +
            '</span>' +
          '</div>' +
          '<a class="scholar-badge-pill ' + (dueSrsCount > 0 ? 'is-alert' : '') + '" href="#/quiz/review" title="Review Due Spaced Memory Flashcards">' +
            '<span class="badge-icon badge-icon--srs">' + icon("repeat") + '</span>' +
            '<span class="badge-content">' +
              '<span class="badge-val">' + dueSrsCount + ' Cards</span>' +
              '<span class="badge-lbl">' + (dueSrsCount > 0 ? 'Due Today' : 'Queue Clean') + '</span>' +
            '</span>' +
          '</a>' +
        '</div>' +
      '</div>' +

      /* 2. Hero Section */
      '<section class="hero">' +
        '<canvas id="landing-canvas" class="landing-canvas" aria-hidden="true"></canvas>' +
        '<div class="hero__inner">' +
          '<span class="eyebrow">' + icon("sparkle") + ' B.V.Sc &amp; A.H. · Second Year · VCI Syllabus</span>' +
          '<h1 class="hero__title">Veterinary Microbiology<br><span class="hero__title-accent">Studio</span></h1>' +
          '<p class="lede hero__lede">Five theory units, five practical units, a question bank and a quiz engine — ' +
          'built for B.V.Sc &amp; A.H. second-year students. Works offline once loaded.</p>' +
          '<div class="hero__cta">' +
            (lastT
              ? '<a class="btn btn--primary btn--lg" href="#/topic/' + lastT.id + '">' + icon("book") + ' Resume: ' + esc(shorten(lastT.title, 34)) + '</a>'
              : '<a class="btn btn--primary btn--lg" href="#/theory">' + icon("theory") + ' Start with Unit 1</a>') +
            '<a class="btn btn--lg" href="#/quiz/grand">' + icon("quiz") + ' Grand Mock Test</a>' +
          '</div>' +

          /* Hero Statistics Strip */
          '<div class="hero-stats-strip">' +
            '<div class="stat-item">' +
              '<span class="stat-number">' + (totalQ + totalQa).toLocaleString() + '+</span>' +
              '<span class="stat-label">Questions Ready</span>' +
            '</div>' +
            '<div class="stat-item-divider" aria-hidden="true"></div>' +
            '<div class="stat-item">' +
              '<span class="stat-number">5</span>' +
              '<span class="stat-label">Theory Units</span>' +
            '</div>' +
            '<div class="stat-item-divider" aria-hidden="true"></div>' +
            '<div class="stat-item">' +
              '<span class="stat-number">5</span>' +
              '<span class="stat-label">Practical Units</span>' +
            '</div>' +
            '<div class="stat-item-divider" aria-hidden="true"></div>' +
            '<div class="stat-item">' +
              '<span class="stat-number">' + allTopics + '</span>' +
              '<span class="stat-label">Syllabus Topics</span>' +
            '</div>' +
            '<div class="stat-item-divider" aria-hidden="true"></div>' +
            '<div class="stat-item">' +
              '<span class="stat-number">100%</span>' +
              '<span class="stat-label">Offline PWA</span>' +
            '</div>' +
          '</div>' +

          /* Dynamic Resume Card */
          '<div class="dynamic-resume-panel">' +
            '<div class="resume-card">' +
              '<div class="resume-card-body">' +
                '<div class="resume-icon">' + icon(resumeIcon) + '</div>' +
                '<div>' +
                  '<div class="resume-text-title">' + resumeTitle + '</div>' +
                  '<div class="resume-text-subtitle">' + resumeSubtitle + '</div>' +
                '</div>' +
              '</div>' +
              '<a class="resume-btn" href="' + resumeHref + '">' + resumeBtnText + ' →</a>' +
            '</div>' +
          '</div>' +

        '</div>' +
      '</section>' +

      /* 3. High-Yield Action Launchpad (4-Tile Power Strip) */
      '<div class="home-actions-grid">' +
        '<a class="home-action-tile" href="#/quiz/grand">' +
          '<div class="action-tile-top">' +
            '<div class="action-tile-ico ico--amber">' + icon("quiz") + '</div>' +
            '<span class="action-tile-tag">Sprint</span>' +
          '</div>' +
          '<h3 class="action-tile-title">5-Min Rapid Drill</h3>' +
          '<p class="action-tile-desc">Instant randomized 10-question microbiology sprint with real-time scoring.</p>' +
          '<span class="action-tile-arrow">Start Sprint →</span>' +
        '</a>' +

        '<a class="home-action-tile" href="#/quiz/review">' +
          '<div class="action-tile-top">' +
            '<div class="action-tile-ico ico--blue">' + icon("repeat") + '</div>' +
            '<span class="action-tile-tag">' + dueSrsCount + ' Due</span>' +
          '</div>' +
          '<h3 class="action-tile-title">Spaced Memory Review</h3>' +
          '<p class="action-tile-desc">Leitner 5-box spaced repetition engine to counteract forgetting curves.</p>' +
          '<span class="action-tile-arrow">Review Cards →</span>' +
        '</a>' +

        '<a class="home-action-tile" href="#/practical">' +
          '<div class="action-tile-top">' +
            '<div class="action-tile-ico ico--teal">' + icon("microscope") + '</div>' +
            '<span class="action-tile-tag">Labs</span>' +
          '</div>' +
          '<h3 class="action-tile-title">Clinical Spotter Hub</h3>' +
          '<p class="action-tile-desc">Staining methods, bacterial cultures, biochemical tests &amp; serology.</p>' +
          '<span class="action-tile-arrow">Explore Labs →</span>' +
        '</a>' +

        '<a class="home-action-tile" href="#/qa">' +
          '<div class="action-tile-top">' +
            '<div class="action-tile-ico ico--purple">' + icon("qa") + '</div>' +
            '<span class="action-tile-tag">Model Q&amp;A</span>' +
          '</div>' +
          '<h3 class="action-tile-title">Written Exam Studio</h3>' +
          '<p class="action-tile-desc">138+ Solved VCI Board past questions with gold-standard model answers.</p>' +
          '<span class="action-tile-arrow">Study Q&amp;A →</span>' +
        '</a>' +
      '</div>' +

      /* 4. Microbiology Spotter of the Day (Clinical Case Spotlight) */
      '<div class="home-spotter-card">' +
        '<div class="spotter-header">' +
          '<div>' +
            '<span class="spotter-eyebrow">' + icon("sparkle") + ' MICROBIOLOGY SPOTTER OF THE DAY · ' + esc(spotter.badge) + '</span>' +
            '<h3 class="spotter-title">' + esc(spotter.name) + '</h3>' +
          '</div>' +
          '<span class="spotter-organ-badge">' + icon("lab") + ' ' + esc(spotter.organ) + '</span>' +
        '</div>' +

        '<div class="spotter-gross-box">' +
          '<h4>' + icon("eye") + ' Cardinal Macroscopic / Cultural Hallmark</h4>' +
          '<p>' + esc(spotter.gross) + '</p>' +
        '</div>' +

        '<div id="spotter-details-drawer" class="spotter-details-drawer">' +
          '<div class="spotter-details-grid">' +
            '<div class="spotter-detail-item">' +
              '<h5>' + icon("pulse") + ' Primary Etiology &amp; Pathogenesis</h5>' +
              '<p>' + esc(spotter.etiology) + '</p>' +
            '</div>' +
            '<div class="spotter-detail-item">' +
              '<h5>' + icon("microscope") + ' Microscopic &amp; Staining Hallmark</h5>' +
              '<p>' + esc(spotter.micro) + '</p>' +
            '</div>' +
            '<div class="spotter-detail-item" style="grid-column: 1 / -1;">' +
              '<h5>' + icon("target") + ' Practical Exam Viva Distinction &amp; Diagnostic Clue</h5>' +
              '<p>' + esc(spotter.viva) + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="spotter-actions">' +
          '<button id="spotter-toggle-btn" class="btn btn--soft btn--sm" onclick="app.toggleSpotterDetails()">' +
            icon("sparkle") + ' Reveal Diagnostic Hallmarks &amp; Viva Key' +
          '</button>' +
          '<a class="btn btn--primary btn--sm" href="#/unit/' + spotter.unitId + '">' +
            icon("book") + ' Read Unit Details →' +
          '</a>' +
          '<a class="btn btn--subtle btn--sm push" href="#/quiz/unit/' + spotter.unitId + '">' +
            icon("quiz") + ' Practice This Unit' +
          '</a>' +
        '</div>' +
      '</div>' +

      /* 5. Core Learning Domains Grid */
      '<h2 class="mt-10">Explore Microbiology Domains</h2>' +
      '<p class="muted mt-1">Structured comprehensive curriculum following VCI MSVE 2016 guidelines.</p>' +
      '<div class="home-domains-grid">' +
        homeDomainCard("theory", "Theory Curriculum", "Five units · 106 topics", "General &amp; systematic bacteriology, veterinary mycology, biotechnology, immunology, and veterinary virology.", readPct, readCount + " / " + allTopics + " read", "#/theory", "ico--blue") +
        homeDomainCard("practical", "Practical Diagnostics", "Five units · 55 practical labs", "Staining techniques, bacterial culture, biochemical tests, serology and diagnostic virology.", null, "5 Practical Units", "#/practical", "ico--teal") +
        homeDomainCard("quiz", "Diagnostic Quiz Studio", totalQ + " questions ready", "Unit-wise, paper-wise, grand mock test, timed exam mode and smart review.", accuracy, (q.attempts.length ? accuracy + "% accuracy" : "Untested"), "#/quiz", "ico--amber") +
        homeDomainCard("qa", "Written Exam Studio", totalQa + " written model answers", "Short notes, long answers and differentiate-between tables for university exams.", null, totalQa + " Solved Q&A", "#/qa", "ico--purple") +
        homeDomainCard("why", "WHY Mechanisms", totalWhy + " comparative explanations", "Comparative species pathophysiology. Why lesions look the way they do.", null, totalWhy + " Mechanisms", "#/why", "ico--purple") +
        homeDomainCard("dashboard", "Clinical Dashboard", "Analytics &amp; SRS pipeline", "Microbiology mastery gauge, 84-day heatmap, weak spots and Leitner memory queue.", Math.round(masteryXp / 10), masteryXp + " / 1000 XP", "#/dashboard", "ico--blue") +
      '</div>' +

      /* 6. Dual VCI Board Examination Structure */
      '<h2 class="mt-12">VCI Annual Board Examination Structure</h2>' +
      '<p class="muted mt-2">The Veterinary Council of India examination divides the five theory units across two papers (50 Marks Theory + 50 Marks Practical each).</p>' +
      '<div class="home-exam-grid">' +
        homePaperCard("Paper I", "Bacteriology, Mycology &amp; Biotech", [1, 2, 3], p1Read, p1Topics, p1Pct, "paper-1", "paper-badge--p1", "fill--blue") +
        homePaperCard("Paper II", "Immunology, Serology &amp; Virology", [4, 5], p2Read, p2Topics, p2Pct, "paper-2", "paper-badge--p2", "fill--purple") +
      '</div>' +

      /* 7. Interactive WHY & Glossary Split */
      '<div class="home-intel-grid">' +
        '<div class="home-intel-card">' +
          '<div id="home-why-content">' +
            _renderWhyInner(dailyWhy) +
          '</div>' +
        '</div>' +
        '<div class="home-intel-card">' +
          '<div id="home-glossary-content">' +
            _renderGlossaryInner(dailyTermKey, dailyTermDef) +
          '</div>' +
        '</div>' +
      '</div>' +

      /* 8. Platform Developer Credits & Quick Tools */
      '<div class="footer-credits-wrap">' +
        '<div class="footer-credits">' +
          '<div class="credit-col">' +
            '<div class="credit-heading">' +
              icon("me") + ' PLATFORM DEVELOPER' +
            '</div>' +
            '<ul class="credit-list">' +
              '<li>' +
                '<b>Mr. Fazal Zama</b>' +
                '<span class="credit-role">Developer · B.V.Sc &amp; A.H. UG · Roll No. B0-350-2025</span>' +
                '<a class="credit-contact" href="mailto:vet.fazalzama@gmail.com">' +
                  icon("share") + ' vet.fazalzama@gmail.com' +
                '</a>' +
              '</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +

        '<div class="footer-nav">' +
          '<div class="footer-nav__head">Browse Veterinary Microbiology</div>' +
          '<div class="footer-nav__links">' +
            '<a href="#/theory">Theory Units 1–5</a>' +
            '<a href="#/practical">Practical Units 1–5</a>' +
            '<a href="#/qa">Written Exam Q&amp;A</a>' +
            '<a href="#/quiz">Interactive Quizzes</a>' +
            '<a href="#/why">WHY Mechanisms</a>' +
            '<a href="#/dashboard">Progress Dashboard</a>' +
            '<a href="#/library">My Library</a>' +
          '</div>' +
        '</div>' +

        '<div class="footer-tools">' +
          '<button class="footer-tool-btn" onclick="app.startOnboarding()">' +
            icon("sparkle") + ' Welcome Tour' +
          '</button>' +
          '<button class="footer-tool-btn" onclick="app.openAbout()">' +
            icon("target") + ' About the Platform' +
          '</button>' +
          '<button class="footer-tool-btn" onclick="app.resetCache()" title="Clear cache and reload latest files">' +
            icon("clock") + ' Reset App Cache' +
          '</button>' +
        '</div>' +
      '</div>';

    _initLandingCanvas();
  }

  function shorten(s, n) { return s.length > n ? s.slice(0, n - 1) + "…" : s; }

  function countTopics(stream) {
    return syllabus[stream].reduce(function (n, u) { return n + u.topics.length; }, 0);
  }

  function statCard(label, value, hint, ic) {
    return '<div class="card stat-card">' +
      '<div class="stat-card__icon">' + icon(ic) + '</div>' +
      '<div class="stat">' +
        '<span class="stat__label">' + label + '</span>' +
        '<span class="stat__value">' + value + '</span>' +
        '<span class="stat__hint">' + hint + '</span>' +
      '</div></div>';
  }

  function areaCard(sec, title, meta, desc, href) {
    return '<a class="card card--link areacard" data-section="' + sec + '" href="' + href + '">' +
      '<div class="areacard__icon">' + icon(sec) + '</div>' +
      '<div class="card__title mt-4">' + title + '</div>' +
      '<div class="chip chip--accent mt-2">' + meta + '</div>' +
      '<p class="card__desc">' + desc + '</p>' +
      '</a>';
  }

  function homeDomainCard(sec, title, meta, desc, progressPct, statText, href, icoClass) {
    return '<a class="home-domain-card" href="' + href + '">' +
      '<div class="domain-card-head">' +
        '<div class="domain-card-ico ' + icoClass + '">' + icon(sec) + '</div>' +
        '<span class="chip chip--accent">' + esc(meta) + '</span>' +
      '</div>' +
      '<h3 class="domain-card-title mt-2">' + esc(title) + '</h3>' +
      '<p class="domain-card-desc">' + esc(desc) + '</p>' +
      (progressPct !== null
        ? '<div class="bar mt-2 mb-2"><div class="bar__fill" style="width:' + progressPct + '%"></div></div>'
        : '') +
      '<div class="domain-card-foot">' +
        '<span>' + icon("check") + ' ' + esc(statText) + '</span>' +
        '<span>Explore →</span>' +
      '</div>' +
    '</a>';
  }

  function homePaperCard(paperName, subtitle, unitNums, readDone, readTotal, pctVal, paperId, badgeClass, fillClass) {
    var unitsHtml = unitNums.map(function (n) {
      var u = syllabus.theory[n - 1] || {};
      return '<li>' + icon("check") + ' Unit ' + n + ' — ' + esc(u.short || u.title || '') + '</li>';
    }).join("");

    return '<div class="home-paper-card">' +
      '<div class="paper-card-top">' +
        '<span class="paper-badge ' + badgeClass + '">' + paperName + '</span>' +
        '<span class="chip">Weightage 50 Marks</span>' +
      '</div>' +
      '<h3 class="paper-card-title">' + subtitle + '</h3>' +
      '<ul class="paper-card-units">' + unitsHtml + '</ul>' +
      '<div class="paper-progress-wrap">' +
        '<div class="paper-progress-labels">' +
          '<span>Syllabus Coverage</span>' +
          '<span>' + readDone + ' / ' + readTotal + ' Topics (' + pctVal + '%)</span>' +
        '</div>' +
        '<div class="paper-progress-bar">' +
          '<div class="paper-progress-bar-fill ' + fillClass + '" style="width:' + pctVal + '%"></div>' +
        '</div>' +
        '<div class="row">' +
          '<a class="btn btn--soft btn--sm" href="#/quiz/paper/' + paperId + '">' +
            icon("quiz") + ' Simulate ' + paperName + ' Exam →' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function paperCard(p) {
    var units = p.units.map(function (n) {
      var u = syllabus.theory[n - 1];
      return '<li>Unit ' + n + ' — ' + esc(u.short) + '</li>';
    }).join("");
    return '<div class="card">' +
      '<div class="row"><h3>' + p.name + '</h3>' +
      '<span class="chip push">Weightage ' + p.weightage + '</span></div>' +
      '<ul class="mt-3 muted">' + units + '</ul>' +
      '<div class="card__foot"><span>Theory ' + p.theoryMarks + ' marks</span>' +
      '<span>Practical ' + p.practicalMarks + ' marks</span>' +
      '<a class="push" href="#/quiz/paper/' + p.id + '">Practise this paper →</a></div>' +
      '</div>';
  }

  /* ============================================================
     THEORY / PRACTICAL — unit lists
     ============================================================ */
  function renderStream(stream) {
    var units = syllabus[stream];
    var isTheory = stream === "theory";

    var totalTopics = countTopics(stream);
    var readMap = store.getRead();
    var readN = units.reduce(function (n, u) {
      return n + u.topics.filter(function (t) { return readMap[t.id]; }).length;
    }, 0);

    var cards = units.map(function (u) {
      var pr = unitProgress(u);
      var written = unitContentCount(u);
      var uIco = getUnitIcon(u);
      return '<a class="card card--link unitcard" href="#/unit/' + u.id + '">' +
        '<div class="row row--wrap">' +
          '<span class="unitcard__no">' + icon(uIco) + ' Unit ' + u.no + '</span>' +
          '<span class="chip push">' + (u.paper === "paper-1" ? "Paper I" : "Paper II") + '</span>' +
        '</div>' +
        '<div class="card__title mt-2">' + esc(u.title) + '</div>' +
        '<p class="card__desc">' + esc(u.blurb) + '</p>' +
        '<div class="bar mt-4"><div class="bar__fill" style="width:' + pr.pct + '%"></div></div>' +
        '<div class="unitcard__meta">' +
          '<span>' + icon("book") + ' ' + u.topics.length + ' topics</span>' +
          '<span>' + icon("check") + ' ' + pr.done + ' read</span>' +
          '<span>' + icon("pen") + ' ' + written + ' written</span>' +
          '<span>' + icon("quiz") + ' ' + questionCount(u.id) + ' questions</span>' +
        '</div>' +
      '</a>';
    }).join("");

    view.innerHTML =
      '<div class="pagehead">' +
        '<span class="eyebrow">' + (isTheory ? "3 credit hours" : "2 credit hours") + '</span>' +
        '<h1>' + (isTheory ? icon("theory") + ' Theory' : icon("practical") + ' Practical') + '</h1>' +
        '<p class="lede">' + (isTheory
          ? "The five theory units of the VCI Veterinary Microbiology syllabus. Units 1–3 form Paper I; Units 4–5 form Paper II."
          : "The five practical units: staining techniques, bacterial culture, biochemical tests, serology and diagnostic virology.") + '</p>' +
        '<div class="row row--wrap mt-4">' +
          '<span class="chip chip--accent">' + icon("check") + ' ' + readN + ' / ' + totalTopics + ' topics read</span>' +
          '<span class="chip">' + icon("sparkle") + ' ' + pct(readN, totalTopics) + '% complete</span>' +
          '<span class="chip">' + icon("folder") + ' ' + units.length + ' units</span>' +
        '</div>' +
      '</div>' +
      '<div class="grid grid--2">' + cards + '</div>';
  }

  /* ============================================================
     ONE UNIT — topic list
     ============================================================ */
  function renderUnit() {
    var u = syllabus.unitById[state.params.a];
    if (!u) { view.innerHTML = missing("unit"); return; }

    var pr = unitProgress(u);
    var readMap = store.getRead();
    var bm = store.getBookmarks();

    var rows = u.topics.map(function (t) {
      var isRead = !!readMap[t.id];
      var written = hasContent(t.id);
      var isBm = bm.indexOf(t.id) !== -1;
      var topicIco = isRead ? "checkCircle" : (isBm ? "star" : getUnitIcon(u));
      return '<a class="tlist__row" href="#/topic/' + t.id + '">' +
        '<span class="tlist__no">' + String(t.index).padStart(2, "0") + '</span>' +
        '<span class="tlist__ico' + (isRead ? ' is-read' : (isBm ? ' is-saved' : '')) + '">' +
          icon(topicIco) +
        '</span>' +
        '<span class="tlist__body">' +
          '<span class="tlist__title">' + esc(t.title) + '</span>' +
          (written ? '' : '<span class="tlist__sub">Content not added yet</span>') +
        '</span>' +
        '<span class="tlist__right">' +
          (isBm ? '<span class="chip chip--warn">' + icon("star") + ' Saved</span>' : '') +
          (isRead ? '<span class="chip chip--ok chip--dot">' + icon("check") + ' Read</span>' : '') +
          icon("chevron", "faint") +
        '</span>' +
      '</a>';
    }).join("");

    view.innerHTML =
      '<div class="pagehead">' +
        '<div class="pagehead__top">' +
          '<div style="min-width:0; flex:1;">' +
            '<span class="eyebrow">' + (u.stream === "theory" ? "Theory" : "Practical") +
              ' · Unit ' + u.no + ' · ' + (u.paper === "paper-1" ? "Paper I" : "Paper II") + '</span>' +
            '<h1>' + icon(getUnitIcon(u)) + ' ' + esc(u.title) + '</h1>' +
            '<p class="lede">' + esc(u.blurb) + '</p>' +
          '</div>' +
          '<div class="pagehead__actions" style="flex:none; display:flex; align-items:center;">' + ringHtml(pr.pct, 78) + '</div>' +
        '</div>' +
        '<div class="row row--wrap mt-6">' +
          '<a class="btn btn--soft" href="#/quiz/unit/' + u.id + '">' + icon("quiz") + 'Quiz this unit</a>' +
          '<a class="btn" href="#/qa/' + u.id + '">' + icon("qa") + 'Q &amp; A (' + qaCount(u.id) + ')</a>' +
          '<span class="chip">' + icon("check") + ' ' + pr.done + ' of ' + pr.total + ' read</span>' +
        '</div>' +
      '</div>' +
      '<div class="tlist">' + rows + '</div>';
  }

  function missing(what) {
    return '<div class="empty"><div class="empty__icon">🔍</div>' +
      '<h3>That ' + what + ' does not exist</h3>' +
      '<p>The link may be out of date. Go back to the syllabus and pick again.</p>' +
      '<a class="btn btn--primary mt-4" href="#/theory">Back to Theory</a></div>';
  }

  /* ============================================================
     ONE TOPIC — the lesson page
     ============================================================ */
  function renderTopic() {
    var t = syllabus.topicById[state.params.a];
    if (!t) { view.innerHTML = missing("topic"); return; }

    store.setLastTopic(t.id);
    var u = syllabus.unitById[t.unitId];
    var c = topicContent(t.id) || {};
    var detail = store.getDetail();
    var isRead = store.isRead(t.id);
    var isBm = store.isBookmarked(t.id);
    var note = store.getNote(t.id);
    var currHlColor = store.getHighlightColor();

    // Previous / next within the unit
    var i = u.topics.indexOf(t);
    var prev = i > 0 ? u.topics[i - 1] : null;
    var next = i < u.topics.length - 1 ? u.topics[i + 1] : null;

    var pr = unitProgress(u);
    var readMap = store.getRead();
    var hasDeep = !!(c.eliteDesc && c.eliteDesc.trim());
    var showDeep = (detail === "deep" && hasDeep);

    /* ---- left rail: every topic in this unit ---- */
    var rail = u.topics.map(function (x) {
      return '<a class="rail__item' +
          (x.id === t.id ? " is-current" : "") +
          (readMap[x.id] ? " is-read" : "") + '" href="#/topic/' + x.id + '">' +
        '<span class="rail__no">' + String(x.index).padStart(2, "0") + '</span>' +
        '<span class="rail__t">' + esc(x.title) + '</span>' +
        (readMap[x.id] ? '<span class="rail__tick">' + icon("check") + '</span>' : '') +
      '</a>';
    }).join("");

    /* ---- content blocks ---- */
    function block(label, html, mod, ic) {
      var iconHtml = ic ? icon(ic) : "";
      return '<section class="block' + (mod ? " block--" + mod : "") + '">' +
        '<span class="block__label">' + iconHtml + ' ' + label + '</span>' +
        '<div class="block__body">' + html + '</div></section>';
    }

    var body;
    if (hasContent(t.id)) {
      var main = showDeep ? c.eliteDesc : c.desc;
      body =
        (main ? block(showDeep ? "Deep diagnostic guide" : "Standard description", main, null, showDeep ? "sparkle" : "microscope") : "") +
        (c.keyPoints && c.keyPoints.length
          ? block("Key points — what earns marks",
              '<ul class="keylist">' + c.keyPoints.map(function (k) {
                return '<li>' + k + '</li>';
              }).join("") + '</ul>', "key", "star")
          : "") +
        (c.tables || []).map(function (tb) {
          return block(tb.title || "Diagnostic Comparison", renderTable(tb, true), "table", "clipboard");
        }).join("") +
        (c.img
          ? '<figure class="lesson__fig"><img src="' + esc(c.img) + '" alt="' + esc(t.title) + '" loading="lazy"></figure>'
          : '<div class="microbiology-image-placeholder"><div class="microbiology-placeholder-body">' +
              icon("search") +
              '<div class="microbiology-placeholder-title">High-Quality Microbiology Visuals in Development</div>' +
              '<div class="microbiology-placeholder-sub">Carefully curated colony morphology, Gram stains, biochemical media, and diagnostic micrographs are in compilation.</div>' +
            '</div></div>') +
        (c.clinical ? block("Clinical correlation & Pathogenesis", c.clinical, "clinical", "shield") : "");
    } else {
      body =
        '<div class="slot">' +
          '<span class="slot__tag">Content slot — empty</span>' +
          'This lesson has no text yet. Add it in <b>data/' +
          (t.stream === "theory" ? "data-theory-unit" + u.no + ".JS" : "data-practical.JS") +
          '</b> under the id <b class="mono">' + t.id + '</b>.<br>' +
          'Fill in <span class="mono">summary</span>, <span class="mono">desc</span>, ' +
          '<span class="mono">eliteDesc</span>, <span class="mono">keyPoints</span> and ' +
          '<span class="mono">clinical</span> — the page renders them automatically.' +
        '</div>';
    }

    view.innerHTML =
      '<div class="lesson">' +

        /* ============ LEFT RAIL ============ */
        '<aside class="lesson__rail">' +
          '<a class="rail__back" href="#/unit/' + u.id + '">' + icon("back") +
            '<span>Unit ' + u.no + ' · ' + esc(u.short) + '</span></a>' +
          '<div class="rail__prog">' +
            '<div class="row small"><span class="mono">' + pr.done + '/' + pr.total + ' read</span>' +
            '<span class="push mono faint">' + pr.pct + '%</span></div>' +
            '<div class="bar mt-2"><div class="bar__fill" style="width:' + pr.pct + '%"></div></div>' +
          '</div>' +
          '<nav class="rail__list">' + rail + '</nav>' +
        '</aside>' +

        /* ============ MAIN CARD ============ */
        '<article class="lesson__main lesson-body">' +
          '<div class="lesson__card">' +

            '<header class="lesson__head">' +
              '<div class="lesson__kicker mono">' +
                '/// ' + (t.stream === "theory" ? "THEORY" : "PRACTICAL") +
                ' // UNIT ' + u.no + ' // TOPIC ' + String(t.index).padStart(2, "0") + '</div>' +
              '<h1 class="lesson__title">' + esc(t.title) +
                '<button class="speakbtn speak-btn" id="speakbtn" aria-label="Read aloud" title="Read this topic aloud">' +
                icon("speaker") + '</button></h1>' +
              (c.summary ? '<p class="lesson__summary">' + c.summary + '</p>' : '') +
            '</header>' +

            '<div class="toolbar">' +
              '<button class="toolbtn' + (isRead ? ' is-on' : '') + '" data-act="read">' + icon("check") +
                '<span>' + (isRead ? "Read" : "Mark read") + '</span></button>' +
              '<button class="toolbtn' + (isBm ? ' is-on' : '') + '" data-act="bookmark">' + icon("star") +
                '<span>' + (isBm ? "Saved" : "Save") + '</span></button>' +
              '<div class="hlpicker-wrap">' +
                '<button class="toolbtn" id="hlbtn" data-act="highlight-toggle" title="Highlight selected text (choose color)">' +
                  icon("pen") + '<span>Highlight</span>' +
                  '<span class="hl-btn-dot hl-btn-dot--' + currHlColor + '"></span>' +
                '</button>' +
                '<div class="hlpicker" id="hlpicker" hidden>' +
                  '<div class="hlpicker__head">' +
                    '<span class="hlpicker__label">Highlight color</span>' +
                  '</div>' +
                  '<div class="hlpicker__grid">' +
                    store.VALID_HL_COLORS.map(function (col) {
                      return '<button class="hlpicker__colorbtn hlpicker__colorbtn--' + col +
                        (currHlColor === col ? ' is-active' : '') + '" data-hl-pick="' + col + '" title="' + col + '" aria-label="' + col + '"></button>';
                    }).join("") +
                  '</div>' +
                  '<p class="hlpicker__hint">Tap a color to highlight selected text or set active color.</p>' +
                '</div>' +
              '</div>' +
              '<button class="toolbtn' + (note ? ' is-on' : '') + '" data-act="note">' + icon("note") +
                '<span>Note</span></button>' +
              '<button class="toolbtn" data-act="share">' + icon("share") + '<span>Share</span></button>' +
              '<div class="push"></div>' +
              '<div class="seg" role="group" aria-label="Detail level">' +
                '<button class="seg__btn' + (detail === "standard" ? " is-on active" : "") + '" id="standard-toggle" data-detail="standard">' + icon("book") + ' Standard</button>' +
                '<button class="seg__btn depth-toggle-btn' + (showDeep ? " is-on active" : "") + '" id="deep-toggle"' +
                  (hasDeep ? '' : ' disabled title="No deep version written for this topic yet"') +
                  ' data-detail="deep">' + icon("sparkle") + ' Deep view</button>' +
              '</div>' +
            '</div>' +

            '<div id="notebox" class="notebox" ' + (note ? '' : 'hidden') + '>' +
              '<label class="stat__label" for="noteinput">' + icon("note") + ' My note</label>' +
              '<textarea id="noteinput" rows="4" placeholder="Write anything you want to remember about this topic…">' + esc(note) + '</textarea>' +
              '<div class="row mt-2"><button class="btn btn--sm btn--primary" data-act="note-save">' + icon("check") + ' Save note</button>' +
              '<span class="small faint" id="notestatus"></span></div>' +
            '</div>' +

            '<div id="topic-highlights-container">' + renderHighlights(t.id) + '</div>' +

            body +

            '<nav class="pager">' +
              (prev ? '<a class="pager__link" href="#/topic/' + prev.id + '">' + icon("back") +
                '<span><small>Previous</small>' + esc(shorten(prev.title, 38)) + '</span></a>' : '<span></span>') +
              (next ? '<a class="pager__link pager__link--next" href="#/topic/' + next.id + '">' +
                '<span><small>Next</small>' + esc(shorten(next.title, 38)) + '</span>' + icon("chevron") + '</a>' : '<span></span>') +
            '</nav>' +

          '</div>' +
        '</article>' +
      '</div>';

    wireTopicActions(t);
    var cur = el(".rail__item.is-current");
    if (cur) cur.scrollIntoView({ block: "nearest" });
  }

  /* bare = true when the caller already shows the title (lesson blocks) */
  function renderTable(tb, bare) {
    if (!tb || !tb.headers) return "";
    var isComp = (tb.headers[0] && /species|organ|feature|condition|parameter|criterion/i.test(tb.headers[0]));
    var tblClass = isComp ? "tbl comp-table" : "tbl";
    return '<div class="' + (bare ? "" : "mt-8") + '">' +
      (tb.title && !bare ? '<h3 class="mb-4">' + esc(tb.title) + '</h3>' : '') +
      '<div class="tablewrap"><table class="' + tblClass + '"><thead><tr>' +
      tb.headers.map(function (h) { return '<th>' + h + '</th>'; }).join("") +
      '</tr></thead><tbody>' +
      (tb.rows || []).map(function (r) {
        return '<tr>' + r.map(function (cell, ci) {
          var cls = (isComp && ci === 0) ? ' class="species-label"' : '';
          return '<td' + cls + '>' + cell + '</td>';
        }).join("") + '</tr>';
      }).join("") +
      '</tbody></table></div></div>';
  }

  /* Saved highlights for this topic, shown above the lesson body */
  function renderHighlights(topicId) {
    var list = store.getHighlights()[topicId] || [];
    if (!list.length) return "";
    return '<section class="block block--hl"><span class="block__label">My highlights (' + list.length + ')</span>' +
      '<div class="block__body"><ul class="hllist">' +
      list.map(function (raw) {
        var h = normHl(raw);
        return '<li class="hl-item--' + esc(h.color) + '">' +
          '<span class="hl-chip hl-chip--' + esc(h.color) + '">' + esc(h.color) + '</span>' +
          '<span class="hllist__text">' + esc(h.text) + '</span>' +
          '<button class="hllist__x" data-unhl="' + esc(h.text) + '" aria-label="Remove highlight" title="Remove highlight">&times;</button></li>';
      }).join("") + '</ul></div></section>';
  }

  /* Inline highlights in the lesson text.
     Run against the whole lesson at once (not block by block) so that
     "first occurrence" means first in the lesson, not first in each block. */
  function applyDomHighlights(container, list) {
    if (!container || !list || !list.length) return;
    var items = list.map(normHl).filter(function (h) {
      return h.text && h.text.trim().length >= 2;
    }).sort(function (a, b) {
      return b.text.length - a.text.length;   // longest first, so it wins any overlap
    });
    if (!items.length) return;

    items.forEach(function (item) {
      highlightInElement(container, item.text, item.color);
    });
  }

  /* ------------------------------------------------------------
     Inline highlighting across element boundaries.

     A student's selection routinely crosses <b> and <i> tags, wraps
     over several lines, and may start or end in the middle of a word.
     Searching inside one text node at a time therefore fails silently
     on exactly the selections people actually make. Instead we flatten
     the whole block into one string, find the phrase there, then wrap
     each text node the match passes through in its own <mark>.
     ------------------------------------------------------------ */

  /* Text nodes we are allowed to highlight — never inside an existing mark,
     and never inside the "My highlights" summary list at the top. */
  function collectTextNodes(root) {
    var out = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.length) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (p.closest("mark.hl-inline")) return NodeFilter.FILTER_REJECT;
        if (p.closest(".block--hl")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) out.push(walker.currentNode);
    return out;
  }

  /* Find and wrap the first occurrence. Returns true if one was wrapped. */
  function wrapFirstMatch(root, re, color, key) {
    var nodes = collectTextNodes(root);
    if (!nodes.length) return false;

    // Flatten to a single string, remembering where each node sits in it.
    var full = "";
    var bounds = [];
    for (var i = 0; i < nodes.length; i++) {
      var v = nodes[i].nodeValue;
      bounds.push({ start: full.length, end: full.length + v.length, i: i });
      full += v;
    }

    re.lastIndex = 0;
    var m = re.exec(full);
    if (!m || !m[0].length) return false;

    function locate(pos) {
      for (var b = 0; b < bounds.length; b++) {
        if (pos >= bounds[b].start && pos < bounds[b].end) {
          return { n: bounds[b].i, o: pos - bounds[b].start };
        }
      }
      return null;
    }

    var from = locate(m.index);
    var to = locate(m.index + m[0].length - 1);
    if (!from || !to) return false;

    // Wrap from the LAST node backwards, so offsets in earlier nodes stay valid.
    for (var k = to.n; k >= from.n; k--) {
      var node = nodes[k];
      if (!node || !node.parentNode) continue;

      var s = (k === from.n) ? from.o : 0;
      var e = (k === to.n) ? to.o + 1 : node.nodeValue.length;
      if (e <= s) continue;

      var mid = node;
      if (e < mid.nodeValue.length) mid.splitText(e);   // trim the tail off
      if (s > 0) mid = mid.splitText(s);                // trim the head off

      var mark = document.createElement("mark");
      mark.className = "hl-inline hl-inline--" + color;
      mark.setAttribute("data-hl-color", color);
      mark.setAttribute("data-hl-text", key);
      mark.title = "Highlighted in " + color + " — click to remove";
      mid.parentNode.replaceChild(mark, mid);
      mark.appendChild(mid);
    }
    return true;
  }

  function highlightInElement(root, searchText, color) {
    if (!root || !searchText) return;
    var needle = String(searchText).trim();
    if (needle.length < 2) return;

    // Whitespace in the saved text will not match the DOM exactly once the
    // text has been re-flowed, so treat any run of whitespace as equivalent.
    var pattern = needle
      .split(/\s+/)
      .map(function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
      .join("\\s+");

    var re;
    try { re = new RegExp(pattern, "i"); } catch (e) { return; }

    // Only the FIRST occurrence is marked. One saved highlight should show as
    // one passage on the page, exactly as the student selected it — marking
    // every repetition of the phrase would splatter colour across the lesson.
    wrapFirstMatch(root, re, color, needle);
  }

  /* Strip tags so the text-to-speech engine reads words, not markup */
  function plain(html) {
    var d = document.createElement("div");
    d.innerHTML = html || "";
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }

  var speaking = false;
  function stopSpeech() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    speaking = false;
    var b = el("#speakbtn");
    if (b) {
      b.classList.remove("is-on", "is-playing");
      b.innerHTML = icon("speaker");
      b.setAttribute("title", "Read this topic aloud");
    }
  }

  function speak(text) {
    if (!window.speechSynthesis) { toast("Speech not supported in this browser"); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.rate = 0.92;
      u.lang = "en-IN";
      window.speechSynthesis.speak(u);
    } catch (e) {
      console.warn("Speech pronunciation error:", e);
    }
  }

  function speakTopic(t, c) {
    if (!window.speechSynthesis) { toast("Your browser cannot read text aloud"); return; }
    if (speaking) { stopSpeech(); return; }

    var detail = store.getDetail();
    var main = (detail === "deep" && c.eliteDesc && c.eliteDesc.trim()) ? c.eliteDesc : c.desc;
    var text = [
      t.title,
      plain(c.summary),
      plain(main),
      (c.keyPoints && c.keyPoints.length) ? "Key points. " + c.keyPoints.map(plain).join(". ") : "",
      plain(c.clinical) ? "Clinical note. " + plain(c.clinical) : ""
    ].filter(Boolean).join(". ");

    if (!text.trim()) { toast("Nothing to read yet"); return; }

    // Long text is split into sentences; some browsers cut off a single long utterance.
    var chunks = text.match(/[^.!?]+[.!?]*/g) || [text];
    speechSynthesis.cancel();
    chunks.forEach(function (ch, i) {
      var utt = new SpeechSynthesisUtterance(ch.trim());
      utt.rate = 0.95;
      utt.lang = "en-IN";
      if (i === chunks.length - 1) utt.onend = stopSpeech;
      speechSynthesis.speak(utt);
    });

    speaking = true;
    var b = el("#speakbtn");
    if (b) {
      b.classList.add("is-on", "is-playing");
      b.innerHTML = icon("stop");
      b.setAttribute("title", "Stop reading");
    }
  }

  /* ============================================================
     CONFETTI & MILESTONE CELEBRATIONS
     ============================================================ */
  function burstConfetti(originBtn) {
    if (!originBtn) return;
    var colors = ['#1565c0', '#00897b', '#6a48b5', '#b25e00', '#2e7d32', '#d84315'];
    var rect = originBtn.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var N = 16;
    for (var i = 0; i < N; i++) {
      var dot = document.createElement("span");
      dot.className = "qz-confetti";
      var angle = (Math.PI * 2 * i) / N + (Math.random() - 0.5) * 0.4;
      var dist = 70 + Math.random() * 65;
      dot.style.setProperty("--tx", (Math.cos(angle) * dist) + "px");
      dot.style.setProperty("--ty", (Math.sin(angle) * dist) + "px");
      dot.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
      dot.style.background = colors[i % colors.length];
      dot.style.left = cx + "px";
      dot.style.top = cy + "px";
      document.body.appendChild(dot);
      setTimeout((function (d) { return function () { d.remove(); }; })(dot), 900);
    }
  }

  function popMilestone(text) {
    var pop = document.createElement("div");
    pop.className = "qz-milestone";
    pop.innerHTML = text;
    document.body.appendChild(pop);
    setTimeout(function () { pop.classList.add("out"); }, 1300);
    setTimeout(function () { pop.remove(); }, 1800);
  }

  /* ============================================================
     FLOATING HIGHLIGHT SELECTION TOOLBAR
     ============================================================ */
  function teardownHighlightPopup() {
    var old = document.getElementById("hl-popup");
    if (old) {
      if (old._selListener) document.removeEventListener("selectionchange", old._selListener);
      if (old._posListener) {
        window.removeEventListener("scroll", old._posListener, true);
        window.removeEventListener("resize", old._posListener);
      }
      old.remove();
    }
  }

  function attachHighlightSelectionUI(panel, topicId) {
    teardownHighlightPopup();
    if (!panel) return;

    var popup = document.createElement("div");
    popup.id = "hl-popup";
    popup.className = "hl-popup hl-popup-selection";
    popup.style.display = "none";
    popup.innerHTML =
      '<span class="hl-popup-label">' + icon("pen") + ' Mark:</span>' +
      store.VALID_HL_COLORS.map(function (c) {
        return '<button class="hl-popup-btn hl-' + c + '" data-color="' + c + '" title="Highlight ' + c + '"></button>';
      }).join("") +
      '<span class="hl-popup-sep"></span>' +
      '<button class="hl-popup-action hl-note-action" title="Add note with selected text">' +
        icon("note") + ' Note' +
      '</button>' +
      '<button class="hl-popup-action hl-close-action" title="Close" aria-label="Close">&times;</button>';

    document.body.appendChild(popup);

    function hide() {
      popup.style.display = "none";
      popup.dataset.text = "";
    }

    function positionPopup(range) {
      if (!range || popup.style.display === "none") return;
      var rects = Array.from(range.getClientRects()).filter(function (r) { return r.width || r.height; });
      var anchor = rects[rects.length - 1] || range.getBoundingClientRect();
      if (!anchor || (!anchor.width && !anchor.height)) return;

      popup.style.visibility = "hidden";
      var w = popup.offsetWidth;
      var h = popup.offsetHeight;
      var edge = 12;
      var gap = 10;

      var minX = edge + (w / 2);
      var maxX = window.innerWidth - edge - (w / 2);
      var wantedX = anchor.left + (anchor.width / 2);
      var centerX = Math.max(minX, Math.min(maxX, wantedX));

      var top = anchor.bottom + gap;
      if (top + h > window.innerHeight - edge) {
        top = anchor.top - h - gap;
      }
      top = Math.max(edge, Math.min(window.innerHeight - h - edge, top));

      popup.style.left = centerX + "px";
      popup.style.top = top + "px";
      popup.style.visibility = "visible";
    }

    function onSelectionChange() {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed) { hide(); return; }
      var text = sel.toString().trim();
      if (text.length < 3 || text.length > 400) { hide(); return; }

      try {
        var range = sel.getRangeAt(0);
        if (!panel.contains(range.commonAncestorContainer)) { hide(); return; }
        popup.style.display = "flex";
        popup.dataset.text = text;
        popup._range = range.cloneRange();
        requestAnimationFrame(function () { positionPopup(popup._range); });
      } catch (e) {
        hide();
      }
    }

    document.addEventListener("selectionchange", onSelectionChange);
    popup._selListener = onSelectionChange;

    function onReposition() {
      if (popup.style.display !== "none" && popup._range) {
        requestAnimationFrame(function () { positionPopup(popup._range); });
      }
    }
    window.addEventListener("scroll", onReposition, true);
    window.addEventListener("resize", onReposition);
    popup._posListener = onReposition;

    // Color buttons -> save and highlight inline immediately
    popup.querySelectorAll(".hl-popup-btn").forEach(function (btn) {
      btn.addEventListener("mousedown", function (e) { e.preventDefault(); });
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var color = btn.getAttribute("data-color");
        var text = popup.dataset.text;
        if (!text) return;

        store.addHighlight(topicId, text, color);
        store.setHighlightColor(color);
        highlightInElement(panel, text, color);

        // re-wire click to remove on marks
        wireInlineMarks(topicId);

        // update the highlights summary card at top
        var hlc = el("#topic-highlights-container");
        if (hlc) {
          hlc.innerHTML = renderHighlights(topicId);
          wireUnhlButtons(topicId);
        }

        // update toolbar highlight button active indicator dot
        var dot = el(".hl-btn-dot");
        if (dot) dot.className = "hl-btn-dot hl-btn-dot--" + color;

        toast("Highlighted in " + color + " — saved to Library");
        var sel = window.getSelection();
        if (sel) sel.removeAllRanges();
        hide();
      });
    });

    // "Note" action -> open notebox and attach quote
    var noteBtn = popup.querySelector(".hl-note-action");
    if (noteBtn) {
      noteBtn.addEventListener("mousedown", function (e) { e.preventDefault(); });
      noteBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var text = popup.dataset.text;
        hide();
        var sel = window.getSelection();
        if (sel) sel.removeAllRanges();

        var box = el("#notebox");
        var inp = el("#noteinput");
        if (box && inp) {
          box.removeAttribute("hidden");
          var quote = '“' + text + '”\n\n';
          if (inp.value.indexOf(text) === -1) {
            inp.value = quote + (inp.value || '');
          }
          box.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(function () { inp.focus(); }, 200);
        }
      });
    }

    // Close button
    var closeBtn = popup.querySelector(".hl-close-action");
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var sel = window.getSelection();
        if (sel) sel.removeAllRanges();
        hide();
      });
    }
  }

  function wireUnhlButtons(topicId) {
    els("[data-unhl]").forEach(function (b) {
      b.onclick = function () {
        store.removeHighlight(topicId, b.getAttribute("data-unhl"));
        renderTopic();
      };
    });
  }

  function wireInlineMarks(topicId) {
    els(".hl-inline").forEach(function (m) {
      m.onclick = function (e) {
        e.stopPropagation();
        var txt = m.getAttribute("data-hl-text");
        var col = m.getAttribute("data-hl-color") || "highlight";
        store.removeHighlight(topicId, txt);
        toast("Removed " + col + " highlight");
        renderTopic();
      };
    });
  }

  function openAbout() {
    var m = el("#aboutmodal");
    if (m) m.style.display = "flex";
  }

  function closeAbout() {
    var m = el("#aboutmodal");
    if (m) m.style.display = "none";
  }

  function resetCache() {
    if ("caches" in window) {
      caches.keys().then(function (names) {
        return Promise.all(names.map(function (n) { return caches.delete(n); }));
      }).then(function () {
        toast("App cache cleared — reloading latest files");
        setTimeout(function () { location.reload(true); }, 800);
      }).catch(function () {
        location.reload(true);
      });
    } else {
      location.reload(true);
    }
  }

  /* ============================================================
     ONBOARDING TOUR (Interactive Orientation)
     ============================================================ */
  var onboardSlides = [
    {
      kicker: "WELCOME TO THE PLATFORM",
      title: "Veterinary Microbiology Studio",
      body: "Built specifically for 2nd-year B.V.Sc &amp; A.H. students. Covers all 5 VCI Theory Units, 5 Practical Units, bacterial pathogens, mycology, biotechnology, immunology, and viral diseases.",
      icon: "book"
    },
    {
      kicker: "DUAL STUDY DEPTHS",
      title: "Standard vs Deep View",
      body: "Every lesson features <b>Standard View</b> for high-yield exam revision and <b>Deep View</b> for comprehensive microbial pathogenesis, cultural characteristics, virulence factors, and diagnostic workflows. Switch anytime at the top of each lesson.",
      icon: "sparkle"
    },
    {
      kicker: "ACTIVE RETENTION",
      title: "6-Color Highlighter & Notes",
      body: "Select any sentence inside a lesson to reveal the <b>Floating Highlighter</b>. Mark findings in Yellow, Green, Blue, Pink, Orange, or Purple, or save instant notes directly into your <b>Library</b>.",
      icon: "pen"
    },
    {
      kicker: "EXAM MASTERY",
      title: "Quizzes & Spaced Repetition",
      body: "Test yourself with MCQ, True/False, and written exam Q&amp;A banks. Our <b>Smart SRS Review</b> automatically schedules difficult questions for review right before you forget them.",
      icon: "trophy"
    },
    {
      kicker: "ANYWHERE, ANYTIME",
      title: "100% Offline Progressive App",
      body: "Install this app on your phone, tablet, or laptop. It works completely offline in microbiology diagnostic labs, livestock farms, classrooms, and hostels with zero internet required.",
      icon: "download"
    }
  ];

  function startOnboarding() {
    var modal = el("#onboard-modal");
    if (!modal) return;
    modal._slide = 0;
    modal.style.display = "flex";
    renderOnboardSlide();
  }

  function closeOnboarding(markDone) {
    var modal = el("#onboard-modal");
    if (!modal) return;
    modal.style.display = "none";
    if (markDone !== false) {
      store.setOnboarded();
    }
  }

  function replayOnboarding() {
    store.resetOnboarding();
    startOnboarding();
  }

  function renderOnboardSlide() {
    var modal = el("#onboard-modal");
    if (!modal) return;
    var i = modal._slide || 0;
    var s = onboardSlides[i];
    var card = modal.querySelector(".onboard-card");
    if (!card) return;

    card.innerHTML =
      '<button class="onboard-skip" onclick="app.closeOnboarding(true)">Skip Tour</button>' +
      '<div class="onboard-icon-wrap">' + icon(s.icon) + '</div>' +
      '<div class="onboard-step">Step ' + (i + 1) + ' of ' + onboardSlides.length + ' · ' + s.kicker + '</div>' +
      '<h2 class="onboard-title">' + s.title + '</h2>' +
      '<p class="onboard-body">' + s.body + '</p>' +
      '<div class="onboard-dots">' +
        onboardSlides.map(function (_, k) {
          return '<span class="onboard-dot' + (k === i ? ' on' : '') + '"></span>';
        }).join('') +
      '</div>' +
      '<div class="onboard-actions">' +
        (i > 0
          ? '<button class="onboard-btn ghost" onclick="app._onboardPrev()">' + icon("back") + ' Previous</button>'
          : '<span></span>') +
        (i < onboardSlides.length - 1
          ? '<button class="onboard-btn primary" onclick="app._onboardNext()">Next ' + icon("chevron") + '</button>'
          : '<button class="onboard-btn primary" onclick="app.closeOnboarding(true)">' + icon("check") + ' Get Started</button>') +
      '</div>';
  }

  function _onboardNext() {
    var modal = el("#onboard-modal");
    if (!modal) return;
    modal._slide = Math.min((modal._slide || 0) + 1, onboardSlides.length - 1);
    renderOnboardSlide();
  }

  function _onboardPrev() {
    var modal = el("#onboard-modal");
    if (!modal) return;
    modal._slide = Math.max((modal._slide || 0) - 1, 0);
    renderOnboardSlide();
  }

  function checkFirstVisitOnboarding() {
    if (store.isOnboarded()) return;
    if (location.hash && location.hash !== "#/" && location.hash !== "#") return;
    setTimeout(function () {
      startOnboarding();
    }, 700);
  }

  /* ============================================================
     PWA INSTALL BANNER
     ============================================================ */
  var INSTALL_DISMISS_KEY = "vmicro-install-dismissed";
  var deferredInstallPrompt = null;

  function setupInstallPrompt() {
    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferredInstallPrompt = e;
      if (localStorage.getItem(INSTALL_DISMISS_KEY) === "1") return;
      if (store.getVisits() < 2) return;
      setTimeout(showInstallBanner, 1500);
    });

    window.addEventListener("appinstalled", function () {
      hideInstallBanner();
      toast("Veterinary Microbiology Studio installed!");
    });

    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isStandalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || (window.navigator && window.navigator.standalone === true);
    if (isIOS && !isStandalone && localStorage.getItem(INSTALL_DISMISS_KEY) !== "1" && store.getVisits() >= 2) {
      setTimeout(showInstallBanner, 2000);
    }
  }

  function showInstallBanner() {
    var b = el("#install-banner");
    if (!b) return;
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      var msg = b.querySelector(".install-msg");
      if (msg) msg.innerHTML = "Install Microbiology Studio: tap <b>Share</b>, then <b>Add to Home Screen</b>.";
      var btn = b.querySelector(".install-btn");
      if (btn) btn.style.display = "none";
    }
    b.style.display = "flex";
    requestAnimationFrame(function () { b.classList.add("install-shown"); });
  }

  function hideInstallBanner() {
    var b = el("#install-banner");
    if (!b) return;
    b.classList.remove("install-shown");
    setTimeout(function () { b.style.display = "none"; }, 350);
  }

  function triggerInstall() {
    if (!deferredInstallPrompt) {
      toast("Tap browser menu (\u22EE or share) \u2192 'Install app' or 'Add to Home Screen'");
      return;
    }
    try {
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.then(function (choice) {
        if (choice && choice.outcome === "accepted") {
          toast("Installing app…");
        }
      });
    } catch (e) { console.warn(e); }
    deferredInstallPrompt = null;
    hideInstallBanner();
  }

  function dismissInstall() {
    localStorage.setItem(INSTALL_DISMISS_KEY, "1");
    hideInstallBanner();
  }

  function wireTopicActions(t) {
    var c = topicContent(t.id) || {};

    var sb = el("#speakbtn");
    if (sb) sb.addEventListener("click", function () { speakTopic(t, c); });

    wireUnhlButtons(t.id);

    var lessonMain = el(".lesson__main");
    applyDomHighlights(lessonMain, store.getHighlights()[t.id]);
    wireInlineMarks(t.id);

    if (window.glossary && typeof window.glossary.decorate === 'function') {
      window.glossary.decorate(lessonMain);
    }

    // Attach floating selection toolbar directly to the lesson container
    attachHighlightSelectionUI(lessonMain, t.id);

    // Track text selection so clicking the picker doesn't lose it
    var savedSelection = "";
    function getLessonSel() {
      var s = (window.getSelection() || "").toString().trim();
      return s || savedSelection;
    }

    var lessonMain = el(".lesson__main");
    if (lessonMain) {
      lessonMain.addEventListener("mouseup", function () {
        var s = (window.getSelection() || "").toString().trim();
        if (s && s.length <= 400) savedSelection = s;
      });
      lessonMain.addEventListener("touchend", function () {
        var s = (window.getSelection() || "").toString().trim();
        if (s && s.length <= 400) savedSelection = s;
      });
    }

    var hlBtn = el("#hlbtn");
    var hlPicker = el("#hlpicker");

    if (hlBtn && hlPicker) {
      hlBtn.addEventListener("mousedown", function () {
        var s = (window.getSelection() || "").toString().trim();
        if (s && s.length <= 400) savedSelection = s;
      });

      hlBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var isHidden = hlPicker.hasAttribute("hidden");
        if (isHidden) {
          hlPicker.removeAttribute("hidden");
        } else {
          hlPicker.setAttribute("hidden", "");
        }
      });

      hlPicker.addEventListener("mousedown", function (e) {
        e.preventDefault();
      });

      els("[data-hl-pick]").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          var col = btn.getAttribute("data-hl-pick");
          store.setHighlightColor(col);

          var sel = getLessonSel();
          if (sel) {
            if (sel.length > 400) {
              toast("That selection is too long — choose a shorter passage");
              return;
            }
            store.addHighlight(t.id, sel, col);
            if (window.getSelection()) window.getSelection().removeAllRanges();
            savedSelection = "";
            hlPicker.setAttribute("hidden", "");
            toast("Highlighted in " + col + " — saved to Library");
            renderTopic();
          } else {
            hlPicker.setAttribute("hidden", "");
            toast("Highlighter set to " + col + " — select text in lesson to highlight");
            renderTopic();
          }
        });
      });

      document.addEventListener("click", function (e) {
        if (!hlPicker.contains(e.target) && e.target !== hlBtn && !hlBtn.contains(e.target)) {
          hlPicker.setAttribute("hidden", "");
        }
      });
    }

    els(".toolbtn").forEach(function (b) {
      b.addEventListener("click", function () {
        var act = b.getAttribute("data-act");
        if (act === "highlight-toggle") return; // Handled above

        if (act === "share") {
          var url = location.href;
          if (navigator.share) {
            navigator.share({ title: t.title, url: url }).catch(function () {});
          } else if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(function () { toast("Link copied"); });
          } else {
            toast(url);
          }
          return;
        }

        if (act === "read") {
          var on = store.toggleRead(t.id);
          b.classList.toggle("is-on", on);
          b.querySelector("span").textContent = on ? "Read" : "Mark read";
          toast(on ? "Marked as read" : "Unmarked");
        } else if (act === "bookmark") {
          var on2 = store.toggleBookmark(t.id);
          b.classList.toggle("is-on", on2);
          b.querySelector("span").textContent = on2 ? "Saved" : "Save";
          toast(on2 ? "Saved to Library" : "Removed from Library");
        } else if (act === "note") {
          var box = el("#notebox");
          box.hidden = !box.hidden;
          if (!box.hidden) el("#noteinput").focus();
        }
      });
    });

    var saveBtn = el('[data-act="note-save"]');
    if (saveBtn) saveBtn.addEventListener("click", function () {
      store.setNote(t.id, el("#noteinput").value);
      el("#notestatus").textContent = "Saved";
      setTimeout(function () { var n = el("#notestatus"); if (n) n.textContent = ""; }, 1800);
    });

    els(".seg__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        store.setDetail(b.getAttribute("data-detail"));
        renderTopic();
      });
    });
  }

  /* ============================================================
     WHY
     ============================================================ */
  function renderWhy() {
    var rawData = (window.whyData || []).filter(function (w) { return w && w.title; });

    var head =
      '<div class="pagehead why-header">' +
        '<span class="eyebrow">Mechanism first</span>' +
        '<h1>' + icon("why") + ' WHY</h1>' +
        '<p class="lede">Veterinary Microbiology is only memorisable once it stops being an arbitrary list. ' +
        'Each card explains the microbial physiology, virulence determinants, or immunological mechanism behind clinical and diagnostic hallmarks.</p>' +
      '</div>';

    if (!rawData.length) {
      view.innerHTML = head +
        '<div class="empty"><div class="empty__icon">' + icon("why") + '</div>' +
        '<h3>No WHY entries yet</h3>' +
        '<p>Add them in <b>data/data-why.JS</b>.</p></div>';
      return;
    }

    // Top Floating Search & Filter Bar
    var topBar =
      '<div class="why-topbar">' +
        '<div class="why-search-wrap">' +
          icon("search") +
          '<input type="text" id="whySearchInput" class="why-search-input" placeholder="Search mechanism, pathogen, species, lesion..." autocomplete="off" />' +
        '</div>' +
        '<div class="why-filters">' +
          '<button class="why-filter-chip is-active" data-cat="all">All</button>' +
          '<button class="why-filter-chip" data-cat="species">Species Comparison</button>' +
          '<button class="why-filter-chip" data-cat="mechanism">Pathogenesis</button>' +
          '<button class="why-filter-chip" data-cat="lesion">Lesions</button>' +
          '<button class="why-filter-chip" data-cat="diagnostic">Diagnostics</button>' +
          '<button class="why-filter-chip" data-cat="clinical">Clinical Pearls</button>' +
        '</div>' +
        '<button class="why-btn-challenge" id="whyBtnChallenge">' +
          '<span>🧠</span> Challenge Me' +
        '</button>' +
      '</div>';

    var modalHtml =
      '<div class="why-modal-backdrop" id="whyModalBackdrop" aria-hidden="true">' +
        '<div class="why-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="whyModalTitle">' +
          '<div class="why-modal-head">' +
            '<div class="why-modal-head__meta" id="whyModalMeta"></div>' +
            '<button class="why-modal-close" id="whyModalClose" title="Close (Esc)" aria-label="Close">' + icon("close") + '</button>' +
          '</div>' +
          '<div class="why-modal-body" id="whyModalBody"></div>' +
          '<div class="why-modal-foot">' +
            '<div class="why-modal-nav">' +
              '<button class="why-nav-btn" id="whyModalPrev">← Prev</button>' +
              '<button class="why-nav-btn" id="whyModalNext">Next →</button>' +
            '</div>' +
            '<div class="why-action-btns">' +
              '<button class="why-action-btn" id="whyModalSpeak" title="Read Aloud">' + icon("speaker") + ' <span>Listen</span></button>' +
              '<button class="why-action-btn" id="whyModalCopy" title="Copy to clipboard">' + icon("copy") + ' <span>Copy</span></button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    view.innerHTML = head + topBar + '<div id="whygrid" class="why-grid"></div>';

    var existingModal = document.getElementById("whyModalBackdrop");
    if (existingModal && existingModal.parentNode) {
      existingModal.parentNode.removeChild(existingModal);
    }
    document.body.insertAdjacentHTML("beforeend", modalHtml);

    var currentCat = "all";
    var currentQuery = "";
    var filteredData = rawData.slice();
    var activeModalIdx = -1;

    function stripTags(html) {
      if (!html) return "";
      return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    }

    function applyFilters() {
      var q = currentQuery.toLowerCase().trim();
      filteredData = rawData.filter(function (w) {
        var matchCat = (currentCat === "all" || w.category === currentCat);
        if (!matchCat) return false;
        if (!q) return true;
        var hay = ((w.title || "") + " " + (w.comparison || "") + " " + (w.why || "") + " " + (w.clinical || "") + " " + (w.unit || "")).toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      paint();
    }

    function paint() {
      var grid = el("#whygrid");
      if (!filteredData.length) {
        grid.innerHTML = '<div class="empty" style="grid-column: 1 / -1; padding: var(--s8) 0; text-align: center;"><p style="color: var(--text-muted);">No mechanisms found matching your filter or query.</p></div>';
        return;
      }

      grid.innerHTML = filteredData.map(function (w, idx) {
        var previewText = stripTags(w.why || "");
        var compBadge = w.comparison
          ? '<div class="whycard__compare"><span class="whycard__compare-icon">⚖️</span> <span>' + esc(w.comparison) + '</span></div>'
          : '';
        var unitBadge = w.unit ? esc(w.unit.toUpperCase().replace('-', ' ')) : '';

        return '<article class="whycard" id="why-' + w.id + '" data-idx="' + idx + '">' +
          '<div class="whycard__top">' +
            '<span class="whycard__cat-pill">' + esc(w.category || "mechanism") + '</span>' +
            '<span class="whycard__arrow">→</span>' +
          '</div>' +
          '<h3 class="whycard__title">' + esc(w.title) + '</h3>' +
          compBadge +
          '<div class="whycard__preview">' + esc(previewText) + '</div>' +
          '<div class="whycard__footer">' +
            '<span class="whycard__unit-tag">' + unitBadge + '</span>' +
            '<button type="button" class="whycard__btn-analyze" data-idx="' + idx + '">Analyze 🔬</button>' +
          '</div>' +
        '</article>';
      }).join("");

      // Bind card click & analyze button click
      grid.querySelectorAll(".whycard").forEach(function (card) {
        card.addEventListener("click", function (e) {
          var idx = parseInt(card.getAttribute("data-idx"), 10);
          if (!isNaN(idx)) {
            openModal(idx);
          }
        });
      });
      grid.querySelectorAll(".whycard__btn-analyze").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          var idx = parseInt(btn.getAttribute("data-idx"), 10);
          if (!isNaN(idx)) {
            openModal(idx);
          }
        });
      });
    }

    // Modal elements
    var backdrop = el("#whyModalBackdrop");
    var modalMeta = el("#whyModalMeta");
    var modalBody = el("#whyModalBody");
    var btnPrev = el("#whyModalPrev");
    var btnNext = el("#whyModalNext");
    var btnClose = el("#whyModalClose");
    var btnSpeak = el("#whyModalSpeak");
    var btnCopy = el("#whyModalCopy");

    function openModal(idx) {
      if (idx < 0 || idx >= filteredData.length) return;
      activeModalIdx = idx;
      var w = filteredData[idx];

      // Meta
      var metaHtml =
        '<span class="whycard__cat-pill" style="font-size:0.75rem; padding: 3px 10px;">' + esc((w.category || "mechanism").toUpperCase()) + '</span>' +
        (w.unit ? '<span class="whycard__unit-tag" style="background:var(--surface); padding: 3px 8px; border-radius: 6px; border: 1px solid var(--border);">' + esc(w.unit.toUpperCase().replace('-', ' ')) + '</span>' : '') +
        '<span style="font-size: 0.75rem; color: var(--text-faint); margin-left: auto;">' + (idx + 1) + ' of ' + filteredData.length + '</span>';
      modalMeta.innerHTML = metaHtml;

      // Body
      var bodyHtml =
        '<h2 id="whyModalTitle">' + esc(w.title) + '</h2>' +
        (w.comparison ? '<div class="why-modal-compare"><span>⚖️</span> ' + esc(w.comparison) + '</div>' : '') +
        '<div class="why-modal-explain">' + (w.why || "") + '</div>' +
        (w.mechanism && w.mechanism.length
          ? '<div class="why-modal-section-title">⚡ Pathophysiological Chain</div>' +
            '<ol class="why-modal-chain">' + w.mechanism.map(function (s) { return '<li>' + s + '</li>'; }).join("") + '</ol>'
          : '') +
        (w.clinical
          ? '<div class="why-modal-clinic">' +
              '<div class="why-modal-clinic__title">' + icon("shield") + ' At the Clinic (High-Yield Pearl)</div>' +
              w.clinical +
            '</div>'
          : '');
      modalBody.innerHTML = bodyHtml;

      // Prev / Next button states
      btnPrev.disabled = (idx === 0);
      btnNext.disabled = (idx === filteredData.length - 1);

      // Open backdrop
      backdrop.classList.add("is-open");
      backdrop.setAttribute("aria-hidden", "false");
      backdrop.style.display = "flex";
      backdrop.style.opacity = "1";
      backdrop.style.visibility = "visible";
      backdrop.style.pointerEvents = "auto";
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      backdrop.classList.remove("is-open");
      backdrop.setAttribute("aria-hidden", "true");
      backdrop.style.display = "";
      backdrop.style.opacity = "";
      backdrop.style.visibility = "";
      backdrop.style.pointerEvents = "";
      document.body.style.overflow = "";
      if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    }

    btnPrev.addEventListener("click", function (e) {
      e.stopPropagation();
      if (activeModalIdx > 0) {
        openModal(activeModalIdx - 1);
      }
    });

    btnNext.addEventListener("click", function (e) {
      e.stopPropagation();
      if (activeModalIdx < filteredData.length - 1) {
        openModal(activeModalIdx + 1);
      }
    });

    btnClose.addEventListener("click", function (e) {
      e.stopPropagation();
      closeModal();
    });

    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) {
        closeModal();
      }
    });

    // Keyboard navigation: Escape, Left Arrow, Right Arrow
    function onKeyDown(e) {
      if (!backdrop.classList.contains("is-open")) return;
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft" && activeModalIdx > 0) {
        openModal(activeModalIdx - 1);
      } else if (e.key === "ArrowRight" && activeModalIdx < filteredData.length - 1) {
        openModal(activeModalIdx + 1);
      }
    }
    window.removeEventListener("keydown", onKeyDown);
    window.addEventListener("keydown", onKeyDown);

    // Speak / Listen
    btnSpeak.addEventListener("click", function (e) {
      e.stopPropagation();
      if (!window.speechSynthesis) {
        alert("Text-to-speech is not supported in this browser.");
        return;
      }
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        btnSpeak.innerHTML = icon("speaker") + ' <span>Listen</span>';
        return;
      }
      var w = filteredData[activeModalIdx];
      if (!w) return;
      var textToSpeak = w.title + ". " + stripTags(w.why || "") + (w.clinical ? ". Clinical pearl: " + stripTags(w.clinical) : "");
      var utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.onend = function () {
        btnSpeak.innerHTML = icon("speaker") + ' <span>Listen</span>';
      };
      utterance.onerror = function () {
        btnSpeak.innerHTML = icon("speaker") + ' <span>Listen</span>';
      };
      window.speechSynthesis.speak(utterance);
      btnSpeak.innerHTML = icon("stop") + ' <span>Stop</span>';
    });

    // Copy to clipboard
    btnCopy.addEventListener("click", function (e) {
      e.stopPropagation();
      var w = filteredData[activeModalIdx];
      if (!w) return;
      var textToCopy = "🔬 " + w.title + "\n\n" +
        (w.comparison ? "⚖️ Comparison: " + w.comparison + "\n\n" : "") +
        "📖 Mechanism:\n" + stripTags(w.why || "") + "\n\n" +
        (w.clinical ? "🛡️ Clinical Pearl:\n" + stripTags(w.clinical) + "\n" : "");
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(function () {
          btnCopy.innerHTML = icon("check") + ' <span>Copied!</span>';
          setTimeout(function () {
            btnCopy.innerHTML = icon("copy") + ' <span>Copy</span>';
          }, 2000);
        });
      }
    });

    // Challenge Me button: picks random entry from current filtered set
    el("#whyBtnChallenge").addEventListener("click", function () {
      if (!filteredData.length) return;
      var randomIdx = Math.floor(Math.random() * filteredData.length);
      openModal(randomIdx);
    });

    // Live Search
    var searchInput = el("#whySearchInput");
    searchInput.addEventListener("input", function () {
      currentQuery = searchInput.value;
      applyFilters();
    });

    // Category Filter Chips
    els(".why-filter-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        els(".why-filter-chip").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        currentCat = btn.getAttribute("data-cat");
        applyFilters();
      });
    });

    // Initial paint
    paint();

    // Check if deep linked via query param a (e.g. #/why?a=5)
    if (state.params.a) {
      var targetId = parseInt(state.params.a, 10);
      var matchIdx = filteredData.findIndex(function (w) { return w.id === targetId; });
      if (matchIdx !== -1) {
        setTimeout(function () {
          openModal(matchIdx);
        }, 120);
      }
    }
  }

  /* ============================================================
     Q & A (WRITTEN EXAM SUITE)
     ============================================================ */
  function renderQa() {
    var unitId = state.params.a;

    function pad2(n) { return n < 10 ? "0" + n : String(n); }

    function stripHtml(html) {
      if (!html) return "";
      var tmp = document.createElement("div");
      tmp.innerHTML = html;
      return (tmp.textContent || tmp.innerText || "").trim();
    }

    /* ------------------------------------------------------------
       HUB VIEW (#/qa) — Exam Master Studio & Analytics
       ------------------------------------------------------------ */
    if (!unitId) {
      var allUnits = syllabus.theory || [];
      var done = store.getQaDone();

      var totalQ = 0;
      var totalMarks = 0;
      var totalDone = 0;
      var totalMarksDone = 0;

      var unitData = allUnits.map(function (u) {
        var list = ((window.qaBank || {})[u.id] || []).filter(function (q) { return q && q.question; });
        var uMarks = list.reduce(function (sum, q) { return sum + (q.marks || 0); }, 0);
        var uDone = list.filter(function (q) { return done.indexOf(q.id) !== -1; }).length;
        var uMarksDone = list.filter(function (q) { return done.indexOf(q.id) !== -1; })
                             .reduce(function (sum, q) { return sum + (q.marks || 0); }, 0);
        var pct = list.length ? Math.round((uDone / list.length) * 100) : 0;

        var count2m = list.filter(function (q) { return q.marks === 2; }).length;
        var count5m = list.filter(function (q) { return q.marks === 5; }).length;
        var count12m = list.filter(function (q) { return q.marks === 12; }).length;

        totalQ += list.length;
        totalMarks += uMarks;
        totalDone += uDone;
        totalMarksDone += uMarksDone;

        return {
          unit: u,
          count: list.length,
          marks: uMarks,
          done: uDone,
          marksDone: uMarksDone,
          pct: pct,
          count2m: count2m,
          count5m: count5m,
          count12m: count12m
        };
      });

      var overallPct = totalQ ? Math.round((totalDone / totalQ) * 100) : 0;
      var overallMarksPct = totalMarks ? Math.round((totalMarksDone / totalMarks) * 100) : 0;

      var p1Q = 0, p1M = 0, p2Q = 0, p2M = 0;
      unitData.forEach(function (d) {
        if (d.unit.paper === "paper-1") {
          p1Q += d.count;
          p1M += d.marks;
        } else {
          p2Q += d.count;
          p2M += d.marks;
        }
      });

      var heroHtml =
        '<div class="qa-hub-hero">' +
          '<div class="qa-hub-hero__badge">' + icon("sparkle") + ' Written Examination Studio</div>' +
          '<h1>' + icon("qa") + ' Question &amp; Answer Master Bank</h1>' +
          '<p>High-Yield Exam Questions across Theory Units 1 to 5 with gold-standard model answers, ' +
          'examiner marking criteria, and past university questions (TANUVAS, GADVASU, RAJUVAS, WBUAFS, State Universities).</p>' +
          '<div class="qa-stats-grid">' +
            '<div class="qa-stat-card">' +
              '<div class="qa-stat-card__icon is-blue">' + icon("quiz") + '</div>' +
              '<div><div class="qa-stat-card__val">' + totalQ + '</div>' +
              '<div class="qa-stat-card__label">Curated Questions</div></div>' +
            '</div>' +
            '<div class="qa-stat-card">' +
              '<div class="qa-stat-card__icon is-amber">' + icon("trophy") + '</div>' +
              '<div><div class="qa-stat-card__val">' + totalMarks + ' M</div>' +
              '<div class="qa-stat-card__label">Total Exam Marks</div></div>' +
            '</div>' +
            '<div class="qa-stat-card">' +
              '<div class="qa-stat-card__icon is-green">' + icon("checkCircle") + '</div>' +
              '<div><div class="qa-stat-card__val">' + totalDone + ' / ' + totalQ + '</div>' +
              '<div class="qa-stat-card__label">Questions Mastered (' + overallPct + '%)</div></div>' +
            '</div>' +
            '<div class="qa-stat-card">' +
              '<div class="qa-stat-card__icon is-teal">' + icon("target") + '</div>' +
              '<div><div class="qa-stat-card__val">' + totalMarksDone + ' / ' + totalMarks + ' M</div>' +
              '<div class="qa-stat-card__label">Marks Secured (' + overallMarksPct + '%)</div></div>' +
            '</div>' +
          '</div>' +
        '</div>';

      var filterTabsHtml =
        '<div class="qa-paper-nav">' +
          '<button class="qa-paper-tab is-active" data-paper="all">' +
            icon("filter") + ' All Units <span class="count-badge">5 Units · ' + totalQ + ' Q</span>' +
          '</button>' +
          '<button class="qa-paper-tab" data-paper="paper-1">' +
            icon("book") + ' Paper I (Units 1–3) <span class="count-badge">' + p1Q + ' Q · ' + p1M + ' M</span>' +
          '</button>' +
          '<button class="qa-paper-tab" data-paper="paper-2">' +
            icon("book") + ' Paper II (Units 4–5) <span class="count-badge">' + p2Q + ' Q · ' + p2M + ' M</span>' +
          '</button>' +
        '</div>';

      var cardsHtml = unitData.map(function (d) {
        var u = d.unit;
        var paperLabel = u.paper === "paper-1" ? "Paper I" : "Paper II";
        return '<a class="qa-unit-card" data-paper="' + (u.paper || "") + '" href="#/qa/' + u.id + '">' +
          '<div class="qa-unit-card__top">' +
            '<span class="qa-unit-card__tag">' + icon(getUnitIcon(u)) + ' Unit ' + u.no + ' · ' + paperLabel + '</span>' +
            '<span class="qa-unit-card__marks">' + icon("star") + ' ' + d.marks + ' Marks</span>' +
          '</div>' +
          '<div class="qa-unit-card__title">' + esc(u.title) + '</div>' +
          '<div class="qa-unit-card__blurb">' + esc(u.blurb || "") + '</div>' +
          '<div class="qa-unit-card__breakdown">' +
            '<span class="qa-pill-sm qa-pill-sm--2m">' + d.count2m + ' Def (2M)</span>' +
            '<span class="qa-pill-sm qa-pill-sm--5m">' + d.count5m + ' Short (5M)</span>' +
            '<span class="qa-pill-sm qa-pill-sm--12m">' + d.count12m + ' Long (12M)</span>' +
          '</div>' +
          '<div class="qa-progress-wrap">' +
            '<div class="qa-progress-meta">' +
              '<span>Progress: <strong>' + d.done + ' / ' + d.count + '</strong> (' + d.pct + '%)</span>' +
              '<span><strong>' + d.marksDone + ' / ' + d.marks + '</strong> M</span>' +
            '</div>' +
            '<div class="qa-progress-bar">' +
              '<div class="qa-progress-fill' + (d.pct === 100 ? ' is-complete' : '') + '" style="width: ' + d.pct + '%"></div>' +
            '</div>' +
          '</div>' +
        '</a>';
      }).join("");

      view.innerHTML = heroHtml + filterTabsHtml + '<div class="grid grid--3 mt-4" id="qa-units-grid">' + cardsHtml + '</div>';

      // Interactive Paper tabs filtering
      els(".qa-paper-tab").forEach(function (tab) {
        tab.addEventListener("click", function () {
          els(".qa-paper-tab").forEach(function (t) { t.classList.remove("is-active"); });
          tab.classList.add("is-active");
          var paper = tab.getAttribute("data-paper");
          els(".qa-unit-card").forEach(function (card) {
            if (paper === "all" || card.getAttribute("data-paper") === paper) {
              card.style.display = "";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
      return;
    }

    /* ------------------------------------------------------------
       UNIT VIEW (#/qa/<unitId>) — Interactive High-Yield Practice
       ------------------------------------------------------------ */
    var u2 = syllabus.unitById[unitId];
    if (!u2) { view.innerHTML = missing("unit"); return; }
    var list = (window.qaBank || {})[unitId] || [];
    var real = list.filter(function (q) { return q && q.question; });
    var done = store.getQaDone();

    if (!real.length) {
      view.innerHTML =
        '<div class="qa-hud">' +
          '<div class="qa-hud__breadcrumbs">' +
            '<a href="#/qa">' + icon("back") + ' All Units</a> · ' +
            '<span>Unit ' + u2.no + '</span>' +
          '</div>' +
          '<h1>' + icon(getUnitIcon(u2)) + ' ' + esc(u2.title) + '</h1>' +
        '</div>' +
        '<div class="empty"><div class="empty__icon">' + icon("qa") + '</div>' +
        '<h3>No questions written for this unit yet</h3>' +
        '<p>Questions are loaded from <b>data/data-qa.JS</b> under <span class="mono">"' + esc(unitId) + '"</span>.</p></div>';
      return;
    }

    var totalUnitMarks = real.reduce(function (sum, q) { return sum + (q.marks || 0); }, 0);
    var doneUnitCount = real.filter(function (q) { return done.indexOf(q.id) !== -1; }).length;
    var doneUnitMarks = real.filter(function (q) { return done.indexOf(q.id) !== -1; })
                            .reduce(function (sum, q) { return sum + (q.marks || 0); }, 0);
    var unitPct = Math.round((doneUnitCount / real.length) * 100);

    var count2m = real.filter(function (q) { return q.marks === 2; }).length;
    var count5m = real.filter(function (q) { return q.marks === 5; }).length;
    var count12m = real.filter(function (q) { return q.marks === 12; }).length;
    var countDiff = real.filter(function (q) { return q.type === "diff"; }).length;

    var paperLabel = u2.paper === "paper-1" ? "Paper I" : "Paper II";

    var hudHtml =
      '<div class="qa-hud">' +
        '<div class="qa-hud__breadcrumbs">' +
          '<a href="#/qa">' + icon("back") + ' Q&amp;A Bank</a> · ' +
          '<span>Unit ' + u2.no + ' (' + paperLabel + ')</span>' +
        '</div>' +
        '<div class="qa-hud__main">' +
          '<div>' +
            '<h1 class="qa-hud__title">' + icon(getUnitIcon(u2)) + ' Unit ' + u2.no + ' · ' + esc(u2.short) + '</h1>' +
            '<div class="qa-hud__meta-chips">' +
              '<span class="chip">' + paperLabel + '</span>' +
              '<span class="chip">' + real.length + ' High-Yield Questions</span>' +
              '<span class="chip">' + totalUnitMarks + ' Exam Marks</span>' +
            '</div>' +
          '</div>' +
          '<div class="qa-hud__progress-box">' +
            '<div class="qa-progress-meta">' +
              '<span>Mastery: <strong id="qa-hud-count">' + doneUnitCount + '</strong> / ' + real.length +
              ' (<strong id="qa-hud-pct">' + unitPct + '%</strong>)</span>' +
              '<span><strong id="qa-hud-marks">' + doneUnitMarks + '</strong> / ' + totalUnitMarks + ' M</span>' +
            '</div>' +
            '<div class="qa-progress-bar">' +
              '<div id="qa-hud-fill" class="qa-progress-fill' + (unitPct === 100 ? ' is-complete' : '') + '" style="width: ' + unitPct + '%"></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="qa-hud__actions">' +
          '<a class="btn btn--sm" href="#/qa">' + icon("back") + ' All units</a>' +
          '<a class="btn btn--sm" href="#/unit/' + u2.id + '">' + icon("book") + ' Unit lessons</a>' +
          '<button class="btn btn--sm btn--ghost" id="qa-btn-expand-all">' + icon("chevron") + ' Expand All</button>' +
          '<button class="btn btn--sm btn--ghost" id="qa-btn-collapse-all">' + icon("chevron") + ' Collapse All</button>' +
          '<button class="btn btn--sm btn--primary push" id="qa-btn-random">' + icon("sparkle") + ' Random Practice</button>' +
        '</div>' +
      '</div>';

    var toolbarHtml =
      '<div class="qa-toolbar">' +
        '<div class="qa-toolbar__top">' +
          '<div class="qa-search-wrap">' +
            '<span class="qa-search-icon">' + icon("search") + '</span>' +
            '<input type="search" id="qa-search" class="qa-search-input" placeholder="Search questions, model answers, topics, or PYQs..." autocomplete="off">' +
            '<button id="qa-search-clear" class="qa-search-clear" title="Clear search">' + icon("close") + '</button>' +
          '</div>' +
          '<span id="qa-counter" class="qa-counter-badge">Showing ' + real.length + ' of ' + real.length + ' questions</span>' +
        '</div>' +
        '<div class="qa-toolbar__controls">' +
          '<div class="qa-filter-chips">' +
            '<button class="qa-filter-chip is-active" data-filter="all">All <span class="chip-count">' + real.length + '</span></button>' +
            '<button class="qa-filter-chip" data-filter="2m">2M Definitions <span class="chip-count">' + count2m + '</span></button>' +
            '<button class="qa-filter-chip" data-filter="5m">5M Short Notes <span class="chip-count">' + count5m + '</span></button>' +
            '<button class="qa-filter-chip" data-filter="12m">12M Long Essays <span class="chip-count">' + count12m + '</span></button>' +
            (countDiff ? '<button class="qa-filter-chip" data-filter="diff">Differences <span class="chip-count">' + countDiff + '</span></button>' : '') +
            '<button class="qa-filter-chip" data-filter="pending">Pending <span class="chip-count" id="chip-pending-count">' + (real.length - doneUnitCount) + '</span></button>' +
            '<button class="qa-filter-chip" data-filter="revised">Revised <span class="chip-count" id="chip-revised-count">' + doneUnitCount + '</span></button>' +
          '</div>' +
        '</div>' +
      '</div>';

    var typeLabel = { short: "Short note", long: "Long answer", diff: "Differentiate", define: "Define", spot: "Spotting" };

    var questionsListHtml = real.map(function (q, i) {
      var isDone = done.indexOf(q.id) !== -1;
      var marksBadge = "";
      if (q.marks === 2) {
        marksBadge = '<span class="badge-2m">2 Marks</span>';
      } else if (q.marks === 5) {
        marksBadge = '<span class="badge-5m">5 Marks</span>';
      } else if (q.marks === 12) {
        marksBadge = '<span class="badge-12m">' + icon("star") + ' 12 Marks</span>';
      } else if (q.marks) {
        marksBadge = '<span class="chip">' + q.marks + ' Marks</span>';
      }

      var pyqStar = "";
      if (q.pyq && q.pyq.length) {
        var firstPyq = q.pyq[0];
        var extraCount = q.pyq.length > 1 ? " +" + (q.pyq.length - 1) : "";
        pyqStar = '<span class="badge-pyq-star" title="' + esc(q.pyq.join(", ")) + '">' +
          icon("star") + ' ' + esc(firstPyq) + extraCount + '</span>';
      }

      var doneTick = '<span class="badge-done-tick" data-done-badge style="display:' + (isDone ? 'inline-flex' : 'none') + '">' +
        icon("check") + ' Done</span>';

      return '<details class="qa' + (isDone ? ' is-done' : '') + '" id="' + esc(q.id) + '" ' +
        'data-qa-item="true" data-id="' + esc(q.id) + '" data-marks="' + (q.marks || 0) + '" ' +
        'data-type="' + esc(q.type || "") + '" data-done="' + (isDone ? '1' : '0') + '">' +
        '<summary>' +
          icon("chevron", "qa__chevron") +
          '<span class="qa__no">Q' + pad2(i + 1) + '</span>' +
          '<span class="qa__q">' + esc(q.question) + '</span>' +
          '<span class="qa__meta">' +
            marksBadge +
            '<span class="chip">' + (typeLabel[q.type] || q.type) + '</span>' +
            pyqStar +
            doneTick +
          '</span>' +
        '</summary>' +
        '<div class="qa__body">' +
          '<div class="qa-model-banner">' + icon("feather") + ' Gold-Standard Model Answer</div>' +
          (q.answer ? '<div class="qa-answer-prose">' + q.answer + '</div>' : '<p class="faint">Model answer not written yet.</p>') +
          (q.keyPoints && q.keyPoints.length
            ? '<div class="qa-scoring-callout">' +
                '<div class="qa-scoring-callout__title">' + icon("star") + ' Examiner Marking Criteria (High-Scoring Points)</div>' +
                '<ul>' + q.keyPoints.map(function (k) { return '<li>' + k + '</li>'; }).join("") + '</ul>' +
              '</div>' : '') +
          (q.table ? renderTable(q.table) : '') +
          (q.pyq && q.pyq.length
            ? '<div class="qa-pyq-footer"><span>Previously asked at:</span>' +
                q.pyq.map(function (p) { return '<span class="qa-pyq-pill">' + esc(p) + '</span>'; }).join("") +
              '</div>' : '') +
          '<div class="qa-action-bar">' +
            '<div class="qa-action-group">' +
              '<button class="btn btn--sm ' + (isDone ? 'btn--ghost' : 'btn--primary') + ' qa-btn-toggle" data-qa="' + esc(q.id) + '">' +
                (isDone ? icon("check") + " Marked as Revised" : icon("checkCircle") + " Mark as Revised") +
              '</button>' +
              '<button class="btn btn--sm btn--ghost qa-btn-copy" data-copy-qa="' + esc(q.id) + '">' +
                icon("copy") + ' Copy Model Answer' +
              '</button>' +
            '</div>' +
            '<div class="qa-action-group">' +
              (q.topicId ? '<a class="btn btn--sm btn--ghost" href="#/topic/' + esc(q.topicId) + '">' + icon("book") + ' Study Chapter</a>' : '') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</details>';
    }).join("");

    var noMatchHtml =
      '<div id="qa-no-match" class="empty" style="display:none;">' +
        '<div class="empty__icon">' + icon("search") + '</div>' +
        '<h3>No matching questions found</h3>' +
        '<p>Try adjusting your search query or switching to "All" filter chip.</p>' +
      '</div>';

    view.innerHTML = hudHtml + toolbarHtml + '<div class="stack" id="qa-list">' + questionsListHtml + '</div>' + noMatchHtml;

    /* ------------------------------------------------------------
       INTERACTION WIRING — Live Search, Filters, Batch, Copy, HUD
       ------------------------------------------------------------ */
    var searchInput = el("#qa-search");
    var searchClear = el("#qa-search-clear");
    var counterEl = el("#qa-counter");
    var noMatchEl = el("#qa-no-match");
    var currentFilter = "all";

    // Text search cache built once
    var textIndex = real.map(function (q) {
      var fullText = [
        q.question || "",
        stripHtml(q.answer || ""),
        (q.keyPoints || []).join(" "),
        (q.pyq || []).join(" "),
        typeLabel[q.type] || q.type || "",
        (q.marks ? q.marks + " marks" : "")
      ].join(" ").toLowerCase();
      return { id: q.id, text: fullText };
    });

    function applyFilterAndSearch() {
      var query = (searchInput ? searchInput.value : "").trim().toLowerCase();
      if (searchClear) {
        searchClear.classList.toggle("is-visible", query.length > 0);
      }

      var visibleCount = 0;
      var cards = els("[data-qa-item]");

      cards.forEach(function (card, index) {
        var cardType = card.getAttribute("data-type");
        var cardMarks = parseInt(card.getAttribute("data-marks"), 10);
        var cardDone = card.getAttribute("data-done") === "1";

        // 1. Filter match
        var filterMatch = false;
        if (currentFilter === "all") filterMatch = true;
        else if (currentFilter === "2m" && cardMarks === 2) filterMatch = true;
        else if (currentFilter === "5m" && cardMarks === 5) filterMatch = true;
        else if (currentFilter === "12m" && cardMarks === 12) filterMatch = true;
        else if (currentFilter === "diff" && cardType === "diff") filterMatch = true;
        else if (currentFilter === "pending" && !cardDone) filterMatch = true;
        else if (currentFilter === "revised" && cardDone) filterMatch = true;

        // 2. Search match
        var searchMatch = true;
        if (query.length > 0) {
          searchMatch = textIndex[index].text.indexOf(query) !== -1;
        }

        if (filterMatch && searchMatch) {
          card.style.display = "";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (counterEl) {
        counterEl.textContent = "Showing " + visibleCount + " of " + real.length + " questions";
      }
      if (noMatchEl) {
        noMatchEl.style.display = visibleCount === 0 ? "block" : "none";
      }
    }

    // Live search listener
    if (searchInput) {
      searchInput.addEventListener("input", applyFilterAndSearch);
    }
    if (searchClear) {
      searchClear.addEventListener("click", function () {
        searchInput.value = "";
        searchInput.focus();
        applyFilterAndSearch();
      });
    }

    // Filter chips listeners
    els(".qa-filter-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        els(".qa-filter-chip").forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        currentFilter = chip.getAttribute("data-filter");
        applyFilterAndSearch();
      });
    });

    // Expand / Collapse All
    var btnExpandAll = el("#qa-btn-expand-all");
    if (btnExpandAll) {
      btnExpandAll.addEventListener("click", function () {
        els("[data-qa-item]").forEach(function (card) {
          if (card.style.display !== "none") card.open = true;
        });
      });
    }
    var btnCollapseAll = el("#qa-btn-collapse-all");
    if (btnCollapseAll) {
      btnCollapseAll.addEventListener("click", function () {
        els("[data-qa-item]").forEach(function (card) {
          card.open = false;
        });
      });
    }

    // Random Practice
    var btnRandom = el("#qa-btn-random");
    if (btnRandom) {
      btnRandom.addEventListener("click", function () {
        var visibleCards = Array.prototype.slice.call(els("[data-qa-item]")).filter(function (card) {
          return card.style.display !== "none";
        });
        if (!visibleCards.length) {
          visibleCards = Array.prototype.slice.call(els("[data-qa-item]"));
        }
        if (!visibleCards.length) return;

        // Prefer unrevised questions
        var pending = visibleCards.filter(function (c) { return c.getAttribute("data-done") === "0"; });
        var targetPool = pending.length ? pending : visibleCards;
        var chosen = targetPool[Math.floor(Math.random() * targetPool.length)];

        chosen.open = true;
        chosen.classList.remove("is-highlighted");
        void chosen.offsetWidth; // trigger reflow
        chosen.classList.add("is-highlighted");

        chosen.scrollIntoView({ behavior: "smooth", block: "center" });
        toast("🎲 Random high-yield question selected!");
      });
    }

    // Copy Model Answer
    els("[data-copy-qa]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var qId = btn.getAttribute("data-copy-qa");
        var qObj = real.filter(function (q) { return q.id === qId; })[0];
        if (!qObj) return;

        var text = "QUESTION (" + (qObj.marks || 5) + " Marks):\n" + qObj.question + "\n\n" +
                   "MODEL ANSWER:\n" + stripHtml(qObj.answer || "") + "\n";

        if (qObj.keyPoints && qObj.keyPoints.length) {
          text += "\nEXAMINER MARKING CRITERIA (Key Points):\n" +
                  qObj.keyPoints.map(function (k) { return "• " + k; }).join("\n") + "\n";
        }
        if (qObj.pyq && qObj.pyq.length) {
          text += "\nPREVIOUSLY ASKED IN:\n" + qObj.pyq.join(", ") + "\n";
        }

        copyTextToClipboard(text, "Model answer copied to clipboard!");
      });
    });

    // Mark as Revised Toggle with Live HUD Reactive Updating
    els(".qa-btn-toggle").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var qId = btn.getAttribute("data-qa");
        var isNowDone = store.toggleQaDone(qId);
        var card = el("#" + qId);

        if (card) {
          card.classList.toggle("is-done", isNowDone);
          card.setAttribute("data-done", isNowDone ? "1" : "0");

          var tickBadge = card.querySelector("[data-done-badge]");
          if (tickBadge) {
            tickBadge.style.display = isNowDone ? "inline-flex" : "none";
          }

          if (isNowDone) {
            card.classList.remove("is-celebrating");
            void card.offsetWidth;
            card.classList.add("is-celebrating");
            setTimeout(function () { card.classList.remove("is-celebrating"); }, 600);
          }
        }

        btn.className = "btn btn--sm " + (isNowDone ? "btn--ghost" : "btn--primary") + " qa-btn-toggle";
        btn.innerHTML = isNowDone ? (icon("check") + " Marked as Revised") : (icon("checkCircle") + " Mark as Revised");

        // Recalculate Unit Progress HUD live
        var currentDoneList = store.getQaDone();
        var newDoneCount = real.filter(function (q) { return currentDoneList.indexOf(q.id) !== -1; }).length;
        var newDoneMarks = real.filter(function (q) { return currentDoneList.indexOf(q.id) !== -1; })
                               .reduce(function (sum, q) { return sum + (q.marks || 0); }, 0);
        var newPct = Math.round((newDoneCount / real.length) * 100);

        var hudCount = el("#qa-hud-count");
        var hudPct = el("#qa-hud-pct");
        var hudMarks = el("#qa-hud-marks");
        var hudFill = el("#qa-hud-fill");
        var chipPending = el("#chip-pending-count");
        var chipRevised = el("#chip-revised-count");

        if (hudCount) hudCount.textContent = newDoneCount;
        if (hudPct) hudPct.textContent = newPct + "%";
        if (hudMarks) hudMarks.textContent = newDoneMarks;
        if (hudFill) {
          hudFill.style.width = newPct + "%";
          hudFill.classList.toggle("is-complete", newPct === 100);
        }
        if (chipPending) chipPending.textContent = real.length - newDoneCount;
        if (chipRevised) chipRevised.textContent = newDoneCount;

        // If currently filtering by pending or revised, re-filter
        if (currentFilter === "pending" || currentFilter === "revised") {
          applyFilterAndSearch();
        }

        toast(isNowDone ? "Marked as revised!" : "Marked as unrevised");
      });
    });
  }

  /* ============================================================
     LIBRARY — bookmarks · notes · highlights
     ============================================================ */
  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        toast(successMsg || "Copied to clipboard!");
      }).catch(function () {
        fallbackCopyText(text, successMsg);
      });
    } else {
      fallbackCopyText(text, successMsg);
    }
  }

  function fallbackCopyText(text, successMsg) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      toast(successMsg || "Copied to clipboard!");
    } catch (e) {
      toast("Could not copy to clipboard");
    }
    document.body.removeChild(ta);
  }

  function exportHighlights() {
    var hl = store.getHighlights();
    var keys = Object.keys(hl);
    if (!keys.length) {
      toast("No highlights to export");
      return;
    }
    var lines = [
      "# Veterinary Microbiology Study Highlights",
      "ICAR-Indian Veterinary Research Institute · Izatnagar",
      "Exported on: " + new Date().toLocaleDateString() + "\n"
    ];
    keys.forEach(function (id) {
      var t = syllabus.topicById[id];
      var title = t ? t.title : id;
      var stream = t ? (t.stream === "theory" ? "Theory" : "Practical") : "";
      var u = t ? syllabus.unitById[t.unitId] : null;
      var unitText = u ? " (Unit " + u.no + " — " + u.short + ")" : "";
      lines.push("## " + title + (stream ? " · " + stream : "") + unitText);
      (hl[id] || []).forEach(function (raw) {
        var h = normHl(raw);
        lines.push("- [" + h.color.toUpperCase() + "] " + h.text);
      });
      lines.push("");
    });
    var fullText = lines.join("\n");
    copyTextToClipboard(fullText, "All highlights copied to clipboard as Markdown!");
  }

  function exportNotes() {
    var notes = store.getNotes();
    var keys = Object.keys(notes);
    if (!keys.length) {
      toast("No notes to export");
      return;
    }
    var lines = [
      "# Veterinary Microbiology Personal Notes",
      "ICAR-Indian Veterinary Research Institute · Izatnagar",
      "Exported on: " + new Date().toLocaleDateString() + "\n"
    ];
    keys.forEach(function (id) {
      var t = syllabus.topicById[id];
      var title = t ? t.title : id;
      lines.push("## " + title);
      lines.push(notes[id]);
      lines.push("");
    });
    var fullText = lines.join("\n");
    copyTextToClipboard(fullText, "All notes copied to clipboard as Markdown!");
  }

  function renderLibrary() {
    var tab = state.params.a || "bookmarks";

    view.innerHTML =
      '<div class="pagehead">' +
        '<span class="eyebrow">Everything you saved</span>' +
        '<h1>' + icon("library") + ' Library</h1>' +
      '</div>' +
      '<div class="tabs">' +
        [['bookmarks', 'Bookmarks', 'star'], ['notes', 'Notes', 'note'], ['highlights', 'Highlights', 'pen'], ['glossary', 'Glossary (270+)', 'book']].map(function (item) {
          return '<a class="tab' + (item[0] === tab ? " is-active" : "") + '" href="#/library/' + item[0] + '">' +
            icon(item[2]) + ' ' + item[1] + '</a>';
        }).join("") +
      '</div>' +
      '<div id="libbody"></div>';

    var body = el("#libbody");

    if (tab === "bookmarks") {
      var bm = store.getBookmarks();
      if (!bm.length) {
        body.innerHTML = emptyState("⭐", "No saved topics", "Open any lesson and tap Save. It will appear here for quick revision.");
        return;
      }

      var bmFilter = state._bmFilter || "all";
      var bmSearch = (state._bmSearch || "").trim().toLowerCase();

      var theoryCount = 0, pracCount = 0;
      bm.forEach(function (id) {
        var t = syllabus.topicById[id];
        if (t && t.stream === "practical") pracCount++; else theoryCount++;
      });

      var filteredBm = bm.filter(function (id) {
        var t = syllabus.topicById[id];
        if (!t) return false;
        if (bmFilter === "theory" && t.stream !== "theory") return false;
        if (bmFilter === "practical" && t.stream !== "practical") return false;
        if (bmSearch && t.title.toLowerCase().indexOf(bmSearch) === -1) return false;
        return true;
      });

      var toolbarHtml =
        '<div class="lib-topbar">' +
          '<div class="hl-toolbar">' +
            '<div class="hl-search-wrap">' +
              icon("search", "hl-search-icon") +
              '<input type="search" class="hl-search-input" id="bm-search" placeholder="Search bookmarked topics…" value="' + esc(state._bmSearch || "") + '">' +
            '</div>' +
            '<div class="hl-filter-chips">' +
              '<button class="hl-chip-btn' + (bmFilter === "all" ? " is-active" : "") + '" data-bm-chip="all">All (' + bm.length + ')</button>' +
              '<button class="hl-chip-btn' + (bmFilter === "theory" ? " is-active" : "") + '" data-bm-chip="theory">Theory (' + theoryCount + ')</button>' +
              '<button class="hl-chip-btn' + (bmFilter === "practical" ? " is-active" : "") + '" data-bm-chip="practical">Practical (' + pracCount + ')</button>' +
            '</div>' +
          '</div>' +
        '</div>';

      var listHtml = filteredBm.length
        ? '<div class="tlist">' + filteredBm.map(function (id) {
            var t = syllabus.topicById[id];
            var u = syllabus.unitById[t.unitId];
            return '<a class="tlist__row" href="#/topic/' + id + '">' +
              '<span class="tlist__ico is-saved">' + icon("star") + '</span>' +
              '<span class="tlist__body"><span class="tlist__title">' + esc(t.title) + '</span>' +
              '<span class="tlist__sub">' + (t.stream === "theory" ? "Theory" : "Practical") +
              (u ? ' · Unit ' + u.no + ' — ' + esc(u.short) : '') + '</span></span>' +
              '<span class="tlist__right">' + icon("chevron", "faint") + '</span></a>';
          }).join("") + '</div>'
        : '<div class="empty"><h3>No matching bookmarks</h3><p>No saved topics match your filter.</p></div>';

      body.innerHTML = toolbarHtml + listHtml;

      var searchInput = el("#bm-search");
      if (searchInput) {
        searchInput.addEventListener("input", function (e) {
          state._bmSearch = e.target.value;
          renderLibrary();
          var ni = el("#bm-search");
          if (ni) {
            ni.focus();
            var val = ni.value;
            ni.setSelectionRange(val.length, val.length);
          }
        });
      }

      els("[data-bm-chip]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state._bmFilter = btn.getAttribute("data-bm-chip");
          renderLibrary();
        });
      });
    }

    else if (tab === "notes") {
      var notes = store.getNotes();
      var keys = Object.keys(notes);
      if (!keys.length) {
        body.innerHTML = emptyState("📝", "No notes yet", "Open a lesson, tap the Note button, and write anything you want to remember.");
        return;
      }

      var noteSearch = (state._noteSearch || "").trim().toLowerCase();
      var filteredKeys = keys.filter(function (id) {
        if (!noteSearch) return true;
        var t = syllabus.topicById[id];
        var title = t ? t.title.toLowerCase() : id.toLowerCase();
        var txt = (notes[id] || "").toLowerCase();
        return title.indexOf(noteSearch) !== -1 || txt.indexOf(noteSearch) !== -1;
      });

      var toolbarHtml =
        '<div class="lib-topbar">' +
          '<div class="hl-toolbar">' +
            '<div class="hl-search-wrap">' +
              icon("search", "hl-search-icon") +
              '<input type="search" class="hl-search-input" id="note-search" placeholder="Search your notes…" value="' + esc(state._noteSearch || "") + '">' +
            '</div>' +
            '<div class="hl-toolbar-actions">' +
              '<button class="hl-export-btn" id="notes-export-btn">' +
                icon("copy") + ' Export All Notes' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>';

      var notesHtml = filteredKeys.length
        ? '<div class="grid grid--2">' + filteredKeys.map(function (id) {
            var t = syllabus.topicById[id];
            var u = t ? syllabus.unitById[t.unitId] : null;
            var sub = t ? (t.stream === "theory" ? "Theory" : "Practical") + (u ? " · Unit " + u.no : "") : "";
            return '<div class="card">' +
              '<div class="stat__label" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px;">' +
                '<a href="#/topic/' + id + '" style="color:inherit;text-decoration:none;font-weight:700;">' + (t ? esc(t.title) : id) + '</a>' +
                (sub ? '<span class="chip chip--accent" style="font-size:11px;">' + esc(sub) + '</span>' : '') +
              '</div>' +
              '<p class="mt-3" style="white-space:pre-wrap;line-height:1.55;font-size:var(--fs-sm);">' + esc(notes[id]) + '</p>' +
              '<div class="mt-3" style="display:flex;justify-content:flex-end;gap:6px;">' +
                '<button class="hl-copy-btn" data-copy-note="' + esc(id) + '" title="Copy note">' + icon("copy") + ' Copy</button>' +
                '<a class="btn btn--sm" href="#/topic/' + id + '">Edit in Topic</a>' +
              '</div>' +
            '</div>';
          }).join("") + '</div>'
        : '<div class="empty"><h3>No matching notes</h3><p>No notes match your search term.</p></div>';

      body.innerHTML = toolbarHtml + notesHtml;

      var searchInput = el("#note-search");
      if (searchInput) {
        searchInput.addEventListener("input", function (e) {
          state._noteSearch = e.target.value;
          renderLibrary();
          var ni = el("#note-search");
          if (ni) {
            ni.focus();
            var val = ni.value;
            ni.setSelectionRange(val.length, val.length);
          }
        });
      }

      var exBtn = el("#notes-export-btn");
      if (exBtn) exBtn.addEventListener("click", exportNotes);

      els("[data-copy-note]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var id = btn.getAttribute("data-copy-note");
          var t = syllabus.topicById[id];
          var title = t ? t.title : id;
          var text = title + "\n\n" + (notes[id] || "");
          copyTextToClipboard(text, "Note copied to clipboard!");
        });
      });
    }

    else if (tab === "highlights") {
      var hl = store.getHighlights();
      var hkeys = Object.keys(hl);
      var totalCount = 0;
      var colorCounts = { yellow: 0, green: 0, blue: 0, pink: 0, orange: 0, purple: 0 };
      hkeys.forEach(function (id) {
        (hl[id] || []).forEach(function (raw) {
          totalCount++;
          var h = normHl(raw);
          if (colorCounts[h.color] !== undefined) colorCounts[h.color]++;
        });
      });

      if (!totalCount) {
        body.innerHTML = emptyState("🖍️", "No highlights yet", "Select any sentence inside a lesson and choose a color to keep it here.");
        return;
      }

      var activeFilter = state._hlColorFilter || "all";
      var searchQuery = (state._hlSearch || "").trim().toLowerCase();

      var colorTabs = [
        { id: "all", label: "All", count: totalCount }
      ];
      (store.VALID_HL_COLORS || ["yellow", "green", "blue", "pink", "orange", "purple"]).forEach(function (col) {
        colorTabs.push({ id: col, label: col.charAt(0).toUpperCase() + col.slice(1), count: colorCounts[col] || 0 });
      });

      var toolbarHtml =
        '<div class="lib-topbar">' +
          '<div class="hl-toolbar">' +
            '<div class="hl-search-wrap">' +
              icon("search", "hl-search-icon") +
              '<input type="search" class="hl-search-input" id="hl-search" placeholder="Search highlights or topic titles…" value="' + esc(state._hlSearch || "") + '">' +
            '</div>' +
            '<div class="hl-filter-chips">' +
              colorTabs.map(function (ct) {
                var isAct = activeFilter === ct.id;
                var dot = ct.id === "all" ? "" : '<span class="hl-chip-dot hl-' + ct.id + '"></span>';
                return '<button class="hl-chip-btn' + (isAct ? ' is-active' : '') + '" data-hl-chip="' + ct.id + '">' +
                  dot + esc(ct.label) + ' <span class="hl-chip-count">(' + ct.count + ')</span>' +
                '</button>';
              }).join("") +
            '</div>' +
            '<div class="hl-toolbar-actions">' +
              '<button class="hl-export-btn" id="hl-export-btn">' +
                icon("copy") + ' Export All' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>';

      // Filter highlights by search and color
      var filteredHl = [];
      hkeys.forEach(function (id) {
        var t = syllabus.topicById[id];
        var topicTitle = t ? t.title.toLowerCase() : id.toLowerCase();
        var items = (hl[id] || []).map(normHl).filter(function (h) {
          if (activeFilter !== "all" && h.color !== activeFilter) return false;
          if (searchQuery) {
            var textMatch = h.text.toLowerCase().indexOf(searchQuery) !== -1;
            var titleMatch = topicTitle.indexOf(searchQuery) !== -1;
            if (!textMatch && !titleMatch) return false;
          }
          return true;
        });
        if (items.length > 0) {
          filteredHl.push({ id: id, topic: t, items: items });
        }
      });

      var cardsHtml = "";
      if (filteredHl.length) {
        cardsHtml = filteredHl.map(function (grp) {
          var id = grp.id;
          var t = grp.topic;
          var u = t ? syllabus.unitById[t.unitId] : null;
          var meta = t ? (t.stream === "theory" ? "Theory" : "Practical") + (u ? " · Unit " + u.no : "") : "";
          return '<div class="card mb-4">' +
            '<div class="stat__label" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px;">' +
              '<a href="#/topic/' + id + '" style="color:inherit;text-decoration:none;font-weight:700;">' + (t ? esc(t.title) : id) + '</a>' +
              (meta ? '<span class="chip chip--accent" style="font-size:11px;">' + esc(meta) + '</span>' : '') +
            '</div>' +
            '<ul class="hllist mt-3">' +
            grp.items.map(function (h) {
              return '<li class="hl-item--' + esc(h.color) + '">' +
                '<span class="hl-chip hl-chip--' + esc(h.color) + '">' + esc(h.color) + '</span>' +
                '<span class="hllist__text">' + esc(h.text) + '</span>' +
                '<div class="hllist__actions">' +
                  '<button class="hl-copy-btn" data-copy-txt="' + esc(h.text) + '" title="Copy highlight text">' + icon("copy") + ' Copy</button>' +
                  '<button class="hllist__x" data-unhl-lib="' + esc(id) + '" data-unhl-text="' + esc(h.text) + '" aria-label="Remove highlight" title="Remove highlight">&times;</button>' +
                '</div>' +
              '</li>';
            }).join("") +
            '</ul></div>';
        }).join("");
      } else {
        cardsHtml = '<div class="empty">' +
          '<div class="empty__icon">🔍</div>' +
          '<h3>No matching highlights</h3>' +
          '<p>No highlights match your current search or color filter.</p>' +
          '<button class="btn mt-3" id="hl-clear-filters">Clear filters</button>' +
        '</div>';
      }

      body.innerHTML = toolbarHtml + '<div id="hl-cards-container">' + cardsHtml + '</div>';

      // Wire search input
      var searchInput = el("#hl-search");
      if (searchInput) {
        searchInput.addEventListener("input", function (e) {
          state._hlSearch = e.target.value;
          renderLibrary();
          var ni = el("#hl-search");
          if (ni) {
            ni.focus();
            var val = ni.value;
            ni.setSelectionRange(val.length, val.length);
          }
        });
      }

      // Wire filter chips
      els("[data-hl-chip]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state._hlColorFilter = btn.getAttribute("data-hl-chip");
          renderLibrary();
        });
      });

      // Wire clear filters
      var clearBtn = el("#hl-clear-filters");
      if (clearBtn) {
        clearBtn.addEventListener("click", function () {
          state._hlColorFilter = "all";
          state._hlSearch = "";
          renderLibrary();
        });
      }

      // Wire export all
      var exportBtn = el("#hl-export-btn");
      if (exportBtn) {
        exportBtn.addEventListener("click", exportHighlights);
      }

      // Wire copy single
      els("[data-copy-txt]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          copyTextToClipboard(btn.getAttribute("data-copy-txt"), "Quote copied to clipboard!");
        });
      });

      // Wire remove highlight
      els("[data-unhl-lib]").forEach(function (b) {
        b.addEventListener("click", function () {
          var id = b.getAttribute("data-unhl-lib");
          var txt = b.getAttribute("data-unhl-text");
          store.removeHighlight(id, txt);
          renderLibrary();
        });
      });
    }

    else if (tab === "glossary") {
      var allTerms = (window.glossary && glossary.getAll) ? glossary.getAll() : [];
      if (state.params && state.params.b && state._lastGlossTerm !== state.params.b) {
        state._lastGlossTerm = state.params.b;
        state._glossSearch = decodeURIComponent(state.params.b).replace(/-/g, ' ');
      }
      var glossSearch = (state._glossSearch || "").trim().toLowerCase();
      var glossCat = state._glossCat || "all";

      var categories = ["all"].concat(Object.keys((window.glossary && glossary.categories) ? glossary.categories : {}));

      var filtered = allTerms.filter(function (item) {
        if (glossCat !== "all" && item.category !== glossCat) return false;
        if (glossSearch) {
          return item.term.toLowerCase().indexOf(glossSearch) !== -1 ||
                 item.def.toLowerCase().indexOf(glossSearch) !== -1;
        }
        return true;
      });

      var toolbarHtml =
        '<div class="lib-topbar">' +
          '<div class="hl-toolbar">' +
            '<div class="hl-search-wrap">' +
              icon("search", "hl-search-icon") +
              '<input type="search" class="hl-search-input" id="gloss-search" placeholder="Search ' + allTerms.length + ' microbiology definitions and terms…" value="' + esc(state._glossSearch || "") + '">' +
            '</div>' +
            '<div class="hl-filter-chips">' +
              categories.map(function (c) {
                var isAct = glossCat === c;
                var label = c === "all" ? "All (" + allTerms.length + ")" : c;
                return '<button class="hl-chip-btn' + (isAct ? ' is-active' : '') + '" data-gloss-cat="' + esc(c) + '">' +
                  esc(label) + '</button>';
              }).join("") +
            '</div>' +
          '</div>' +
        '</div>';

      var cardsHtml = filtered.length
        ? '<div class="grid grid--2 mt-4">' + filtered.map(function (item) {
            return '<article class="card glossary-card">' +
              '<div class="glossary-card__head">' +
                '<span class="glossary-card__term">' + esc(item.term) + '</span>' +
                '<div style="display:flex;align-items:center;gap:6px;">' +
                  '<span class="chip chip--accent" style="font-size:11px;">' + esc(item.category) + '</span>' +
                  '<button class="glossary-speak-btn" data-speak-term="' + esc(item.term) + '" title="Pronounce term" aria-label="Pronounce ' + esc(item.term) + '">' +
                    icon("speaker") +
                  '</button>' +
                '</div>' +
              '</div>' +
              '<div class="glossary-card__def">' + esc(item.def) + '</div>' +
            '</article>';
          }).join("") + '</div>'
        : '<div class="empty"><h3>No matching terms</h3><p>No glossary definitions match your search or filter.</p></div>';

      body.innerHTML = toolbarHtml + cardsHtml;

      var searchInput = el("#gloss-search");
      if (searchInput) {
        searchInput.addEventListener("input", function (e) {
          state._glossSearch = e.target.value;
          renderLibrary();
          var ni = el("#gloss-search");
          if (ni) {
            ni.focus();
            var val = ni.value;
            ni.setSelectionRange(val.length, val.length);
          }
        });
      }

      els("[data-gloss-cat]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state._glossCat = btn.getAttribute("data-gloss-cat");
          renderLibrary();
        });
      });

      els("[data-speak-term]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          app.speak(btn.getAttribute("data-speak-term"));
        });
      });
    }
  }

  function emptyState(ic, title, msg) {
    return '<div class="empty"><div class="empty__icon">' + ic + '</div><h3>' + title + '</h3><p>' + msg + '</p></div>';
  }

  /* ============================================================
     ME — settings, backup, about
     ============================================================ */
  function renderMe() {
    var theme = store.getTheme();
    var navPos = store.getNavPos();
    var srsNotify = store.getSrsNotify();
    var srsTime = store.getSrsNotifyTime();
    var s = store.computeStreak();
    var readN = Object.keys(store.getRead()).length;
    var allTopics = syllabus.allUnits.reduce(function (n, u) { return n + u.topics.length; }, 0);

    view.innerHTML =
      '<div class="pagehead"><span class="eyebrow">Your account lives only on this device</span><h1>' + icon("me") + ' Settings</h1></div>' +

      '<div class="grid grid--3 mb-8">' +
        statCard("Topics read", readN + " / " + allTopics, pct(readN, allTopics) + "% complete", "check") +
        statCard("Current streak", s.current + " d", s.totalDays + " active days", "flame") +
        statCard("Bookmarks", store.getBookmarks().length, Object.keys(store.getNotes()).length + " notes", "star") +
      '</div>' +

      '<div class="card mb-4">' +
        '<h3>' + icon("sun") + ' Appearance</h3>' +
        '<p class="muted mt-2">Light is the standard study theme. Dark is available for night reading.</p>' +
        '<div class="seg mt-4" role="group">' +
          ['light', 'dark'].map(function (t) {
            return '<button class="seg__btn' + (theme === t ? " is-on" : "") + '" data-theme="' + t + '">' +
              icon(t === "light" ? "sun" : "moon") + ' ' +
              t.charAt(0).toUpperCase() + t.slice(1) + '</button>';
          }).join("") +
        '</div>' +
      '</div>' +

      '<div class="card mb-4">' +
        '<h3>' + icon("folder") + ' Desktop Sidebar Position</h3>' +
        '<p class="muted mt-2">Choose which side the navigation sidebar docks on desktop. Mobile screens automatically use the bottom navigation bar.</p>' +
        '<div class="nav-pos-options mt-4" style="grid-template-columns: repeat(2, 1fr); max-width: 420px;">' +
          ['left', 'right'].map(function (pos) {
            var active = (navPos === pos ? " is-active" : "");
            var label = (pos === 'left' ? "Left Side (Default)" : "Right Side");
            return '<button class="nav-pos-option' + active + '" data-pos="' + pos + '" type="button" title="' + label + '" aria-label="' + label + '">' +
              '<span class="np-frame"><span class="np-bar np-' + pos + '"></span></span>' +
              '<span class="np-name">' + label + '</span>' +
            '</button>';
          }).join("") +
        '</div>' +
      '</div>' +

      '<div class="card mb-4">' +
        '<h3>' + icon("bell") + ' Spaced Repetition Review Reminders</h3>' +
        '<p class="muted mt-2">Get an alert when flashcards and high-yield microbiology questions are due for active recall.</p>' +
        '<div class="me-reminder-setting mt-4">' +
          '<button class="me-toggle-main" type="button" aria-label="Toggle daily review reminder">' +
            '<span class="me-bell-ico">' + icon("bell") + '</span>' +
            '<span class="me-toggle-text">' +
              '<span class="me-toggle-title">Daily Review Alert</span>' +
              '<span class="me-toggle-state">' + (srsNotify ? 'Active · scheduled daily' : 'Off · tap to activate') + '</span>' +
            '</span>' +
            '<span class="me-toggle-pill' + (srsNotify ? ' on' : '') + '"></span>' +
          '</button>' +
          '<div class="me-reminder-time-row mt-3">' +
            '<label for="me-reminder-time-input">Reminder time:</label>' +
            '<input id="me-reminder-time-input" class="me-reminder-time" type="time" value="' + esc(srsTime) + '">' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="card mb-4">' +
        '<h3>' + icon("download") + ' Backup and restore</h3>' +
        '<p class="muted mt-2">Your progress, notes, bookmarks and quiz history are stored in this browser only. ' +
        'Clearing browser data will erase them. Export a backup file before you reinstall or switch phone.</p>' +
        '<div class="row row--wrap mt-4">' +
          '<button class="btn" data-act="export">' + icon("download") + 'Export backup</button>' +
          '<label class="btn">' + icon("upload") + 'Restore from file' +
            '<input type="file" accept="application/json" id="restorefile" hidden></label>' +
          '<button class="btn" data-act="reset">' + icon("trash") + 'Erase all my data</button>' +
        '</div>' +
        '<p class="small faint mt-3" id="backupstatus"></p>' +
      '</div>' +

      '<div class="card">' +
        '<h3>' + icon("sparkle") + ' About</h3>' +
        '<p class="muted mt-2">' + esc(syllabus.meta.subject) + ' · ' + esc(syllabus.meta.course) +
        ' · Credit hours ' + esc(syllabus.meta.credits) + '.</p>' +
        '<p class="muted mt-2">Built for students of ' + esc(syllabus.meta.institute) + '. ' +
        'Content follows the Veterinary Council of India syllabus as published in the Gazette of India.</p>' +
        '<p class="small faint mt-4">This is a study aid. Always confirm against your prescribed textbooks ' +
        'and your department\'s teaching before an examination or a clinical decision.</p>' +
        '<div class="mt-4 row row--wrap">' +
          '<button class="btn" onclick="app.replayOnboarding()">' + icon("sparkle") + 'Replay Welcome Tour</button>' +
          '<button class="btn" onclick="app.openAbout()">' + icon("target") + 'About Platform & Credits</button>' +
        '</div>' +
      '</div>';

    els("[data-theme]").forEach(function (b) {
      b.addEventListener("click", function () {
        store.setTheme(b.getAttribute("data-theme"));
        renderMe();
        refreshThemeButton();
      });
    });

    els("[data-pos]").forEach(function (b) {
      b.addEventListener("click", function () {
        setNavPosition(b.getAttribute("data-pos"));
      });
    });

    var srsBtn = el(".me-toggle-main");
    if (srsBtn) {
      srsBtn.addEventListener("click", function () {
        toggleSrsNotifications();
      });
    }

    var srsTimeInput = el("#me-reminder-time-input");
    if (srsTimeInput) {
      srsTimeInput.addEventListener("change", function () {
        setSrsNotificationTime(srsTimeInput.value);
      });
    }

    var ex = el('[data-act="export"]');
    if (ex) ex.addEventListener("click", function () {
      store.exportBackup();
      el("#backupstatus").textContent = "Backup file downloaded.";
    });

    var rf = el("#restorefile");
    if (rf) rf.addEventListener("change", function () {
      if (!rf.files || !rf.files[0]) return;
      store.importBackup(rf.files[0], function (ok, msg) {
        el("#backupstatus").textContent = msg;
        if (ok) setTimeout(function () { location.reload(); }, 900);
      });
    });

    var rs = el('[data-act="reset"]');
    if (rs) rs.addEventListener("click", function () {
      if (confirm("Erase all progress, notes, bookmarks and quiz history on this device?\n\nThis cannot be undone. Export a backup first if you are not sure.")) {
        store.resetAll();
        location.reload();
      }
    });
  }

  /* ---------- Sidebar Position (Desktop) ---------- */
  function setNavPosition(pos) {
    var valid = ["left", "right"];
    if (valid.indexOf(pos) === -1) pos = "left";
    store.setNavPos(pos);
    els(".nav-pos-option").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-pos") === pos);
    });
    var labels = { left: "left side (default)", right: "right side" };
    toast("Sidebar docked to " + labels[pos]);
  }

  /* ---------- Daily SRS Notifications ---------- */
  var _notifTimer = null;

  function _scheduleNextSrsNotification() {
    if (_notifTimer) clearTimeout(_notifTimer);
    if (!store.getSrsNotify()) return;
    var parts = (store.getSrsNotifyTime() || "19:00").split(":");
    var hour = parseInt(parts[0], 10) || 19;
    var minute = parseInt(parts[1], 10) || 0;
    var next = new Date();
    next.setHours(hour, minute, 0, 0);
    if (next <= new Date()) next.setDate(next.getDate() + 1);
    var delay = Math.min(next.getTime() - Date.now(), 2147483647);
    _notifTimer = setTimeout(function () {
      _maybeShowSrsNotification();
      _scheduleNextSrsNotification();
    }, delay);
  }

  function _maybeShowSrsNotification() {
    if (!("Notification" in window)) return;
    if (Notification.permission !== "granted") return;
    if (!store.getSrsNotify()) return;
    var clock = new Date();
    var parts = (store.getSrsNotifyTime() || "19:00").split(":");
    var hour = parseInt(parts[0], 10) || 19;
    var minute = parseInt(parts[1], 10) || 0;
    if (clock.getHours() * 60 + clock.getMinutes() < hour * 60 + minute) return;
    var todayStr = store.today();
    var lastNotified = localStorage.getItem("vmicro-notify-last");
    if (lastNotified === todayStr) return;

    var due = store.dueSrs().length;
    var msg = due > 0
      ? "You have " + due + " question" + (due === 1 ? "" : "s") + " due for review today in Spaced Repetition."
      : "Time for your daily Veterinary Microbiology recall review!";

    var opts = {
      body: msg,
      icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%231565c0'/><text x='16' y='22' font-size='16' font-family='monospace' font-weight='bold' fill='white' text-anchor='middle'>VP</text></svg>",
      badge: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%231565c0'/><text x='16' y='22' font-size='16' font-family='monospace' font-weight='bold' fill='white' text-anchor='middle'>VP</text></svg>",
      tag: "vmicro-srs-daily",
      renotify: true
    };

    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then(function (reg) {
        if (reg.showNotification) reg.showNotification("Veterinary Microbiology Studio", opts);
        else new Notification("Veterinary Microbiology Studio", opts);
      }).catch(function () {
        try { new Notification("Veterinary Microbiology Studio", opts); } catch (e) {}
      });
    } else {
      try { new Notification("Veterinary Microbiology Studio", opts); } catch (e) {}
    }
    localStorage.setItem("vmicro-notify-last", todayStr);
  }

  function requestNotificationPermission() {
    if (!("Notification" in window)) {
      toast("This browser does not support desktop notifications.");
      return;
    }
    if (Notification.permission === "granted") {
      store.setSrsNotify(true);
      toast("Daily review reminders are on.");
      _maybeShowSrsNotification();
      _scheduleNextSrsNotification();
      if (state.section === "me") renderMe();
      return;
    }
    Notification.requestPermission().then(function (perm) {
      if (perm === "granted") {
        store.setSrsNotify(true);
        toast("Daily review reminders are on.");
        _maybeShowSrsNotification();
        _scheduleNextSrsNotification();
      } else {
        toast("Notifications blocked. Enable them in browser settings if desired.");
      }
      if (state.section === "me") renderMe();
    });
  }

  function toggleSrsNotifications() {
    var cur = store.getSrsNotify();
    if (cur) {
      store.setSrsNotify(false);
      if (_notifTimer) clearTimeout(_notifTimer);
      toast("Review reminders turned off.");
      if (state.section === "me") renderMe();
    } else {
      requestNotificationPermission();
    }
  }

  function setSrsNotificationTime(val) {
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(val || "")) return;
    store.setSrsNotifyTime(val);
    localStorage.removeItem("vmicro-notify-last");
    _maybeShowSrsNotification();
    _scheduleNextSrsNotification();
    toast("Reminder time set to " + val);
    if (state.section === "me") renderMe();
  }

  /* ============================================================
     NAVIGATION STATE
     ============================================================ */
  function refreshNav() {
    var sec = state.section;
    var slotFor = {
      home: "home", theory: "theory", unit: "theory", topic: "theory",
      practical: "practical", why: "why", qa: "qa", quiz: "quiz",
      dashboard: "dashboard", library: "library", me: "me"
    };
    // A topic/unit in the practical stream should light the Practical slot
    if ((sec === "unit" || sec === "topic") && state.params.a) {
      var isPrac = (sec === "unit")
        ? state.params.a.indexOf("prac-") === 0
        : (syllabus.topicById[state.params.a] || {}).stream === "practical";
      if (isPrac) slotFor[sec] = "practical";
    }
    var active = slotFor[sec] || "home";

    els("[data-nav]").forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-nav") === active);
    });
  }

  function openNav() { document.body.classList.add("nav-open"); }
  function closeNav() { document.body.classList.remove("nav-open"); }

  function refreshThemeButton() {
    var b = el("#themebtn");
    if (!b) return;
    var isDark = store.getTheme() === "dark";
    b.innerHTML = icon(isDark ? "sun" : "moon");
    b.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  /* ============================================================
     TOAST
     ============================================================ */
  var toastTimer;
  function toast(msg) {
    var t = el("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-on"); }, 2000);
  }

  /* ============================================================
     SEARCH PALETTE
     ============================================================ */
  var searchIndex = null;

  function buildSearchIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];

    syllabus.allUnits.forEach(function (u) {
      searchIndex.push({
        title: "Unit " + u.no + " — " + u.title,
        sub: u.stream === "theory" ? "Theory unit" : "Practical unit",
        kind: "Unit", href: "#/unit/" + u.id
      });
      u.topics.forEach(function (t) {
        searchIndex.push({
          title: t.title,
          sub: (t.stream === "theory" ? "Theory" : "Practical") + " · Unit " + u.no,
          kind: "Topic", href: "#/topic/" + t.id
        });
      });
    });

    (window.whyData || []).forEach(function (w) {
      if (w.title) searchIndex.push({ title: w.title, sub: "WHY · " + (w.category || ""), kind: "Why", href: "#/why/" + w.id });
    });

    Object.keys(window.qaBank || {}).forEach(function (uid) {
      (qaBank[uid] || []).forEach(function (q) {
        if (q.question) searchIndex.push({ title: q.question, sub: "Q&A · " + uid, kind: "Q&A", href: "#/qa/" + uid });
      });
    });

    (window.glossary && glossary.getAll ? glossary.getAll() : []).forEach(function (g) {
      searchIndex.push({
        title: g.term.charAt(0).toUpperCase() + g.term.slice(1),
        sub: "Glossary (" + g.category + ") — " + g.def,
        kind: "Glossary",
        href: "#/library/glossary"
      });
    });

    [["Dashboard", "#/dashboard"], ["Quiz", "#/quiz"], ["Library", "#/library"], ["Settings", "#/me"], ["Glossary", "#/library/glossary"]]
      .forEach(function (p) { searchIndex.push({ title: p[0], sub: "Go to section", kind: "Page", href: p[1] }); });

    return searchIndex;
  }

  var selIndex = 0, matches = [];

  function openSearch() {
    el("#searchmodal").hidden = false;
    var i = el("#searchinput");
    i.value = "";
    i.focus();
    runSearch("");
    document.body.style.overflow = "hidden";
  }

  function closeSearch() {
    el("#searchmodal").hidden = true;
    document.body.style.overflow = "";
  }

  function runSearch(q) {
    var idx = buildSearchIndex();
    q = q.trim().toLowerCase();

    matches = q
      ? idx.filter(function (r) { return r.title.toLowerCase().indexOf(q) !== -1; }).slice(0, 40)
      : idx.filter(function (r) { return r.kind === "Unit" || r.kind === "Page"; }).slice(0, 20);

    selIndex = 0;
    var box = el("#searchresults");
    box.innerHTML = matches.length
      ? matches.map(function (r, i) {
          return '<a class="palette__item' + (i === 0 ? " is-sel" : "") + '" href="' + r.href + '" data-i="' + i + '">' +
            '<span><span class="t">' + esc(r.title) + '</span><br><span class="s">' + esc(r.sub) + '</span></span>' +
            '<span class="palette__kind">' + r.kind + '</span></a>';
        }).join("")
      : '<div class="palette__item"><span class="s">Nothing matched “' + esc(q) + '”.</span></div>';

    els("#searchresults .palette__item").forEach(function (a) {
      a.addEventListener("click", function () { setTimeout(closeSearch, 10); });
    });
  }

  function moveSel(d) {
    var items = els("#searchresults .palette__item[data-i]");
    if (!items.length) return;
    items[selIndex] && items[selIndex].classList.remove("is-sel");
    selIndex = (selIndex + d + items.length) % items.length;
    items[selIndex].classList.add("is-sel");
    items[selIndex].scrollIntoView({ block: "nearest" });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function init() {
    view = el("#view");
    store.bumpVisits();
    store.applyTheme();
    if (store.applySidebarState) store.applySidebarState();
    refreshThemeButton();

    window.addEventListener("hashchange", route);

    var menubtn = el("#menubtn");
    if (menubtn) {
      menubtn.addEventListener("click", function () {
        if (window.innerWidth <= 860) {
          document.body.classList.contains("nav-open") ? closeNav() : openNav();
        } else {
          var isCollapsed = store.toggleSidebarCollapsed();
          toast(isCollapsed ? "Navigation panel hidden (Ctrl+B)" : "Navigation panel restored");
        }
      });
    }

    var sidebarCollapseBtn = el("#sidebar-collapse-btn");
    if (sidebarCollapseBtn) {
      sidebarCollapseBtn.addEventListener("click", function () {
        store.setSidebarCollapsed(true);
        toast("Navigation panel hidden (press Ctrl+B or menu icon to restore)");
      });
    }

    document.addEventListener("click", function (e) {
      if (document.body.classList.contains("nav-open") &&
          !e.target.closest(".sidebar") && !e.target.closest("#menubtn")) closeNav();
    });

    el("#themebtn").addEventListener("click", function () {
      store.setTheme(store.getTheme() === "dark" ? "light" : "dark");
      refreshThemeButton();
      if (state.section === "me") renderMe();
    });

    el("#searchbtn").addEventListener("click", openSearch);
    el("#searchscrim").addEventListener("click", closeSearch);
    el("#searchinput").addEventListener("input", function (e) { runSearch(e.target.value); });

    el("#searchinput").addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); moveSel(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveSel(-1); }
      else if (e.key === "Enter") {
        var items = els("#searchresults .palette__item[data-i]");
        if (items[selIndex]) { location.hash = matches[selIndex].href; closeSearch(); }
      } else if (e.key === "Escape") closeSearch();
    });

    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        if (window.innerWidth <= 860) {
          document.body.classList.contains("nav-open") ? closeNav() : openNav();
        } else {
          var isCollapsed = store.toggleSidebarCollapsed();
          toast(isCollapsed ? "Navigation panel hidden" : "Navigation panel restored");
        }
      }
      else if (e.key === "Escape") {
        if (!el("#searchmodal").hidden) closeSearch();
        closeAbout();
        closeOnboarding(true);
      }
      else if (e.key === "/" && document.activeElement.tagName !== "INPUT" &&
               document.activeElement.tagName !== "TEXTAREA") { e.preventDefault(); openSearch(); }
    });

    route();
    setupInstallPrompt();
    checkFirstVisitOnboarding();
    _scheduleNextSrsNotification();
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) {
        _maybeShowSrsNotification();
        _scheduleNextSrsNotification();
      }
    });
  }

  /* ---------- public ---------- */
  return {
    init: init, go: go, icon: icon, esc: esc, toast: toast,
    ringHtml: ringHtml, statCard: statCard, renderTable: renderTable,
    unitProgress: unitProgress, questionCount: questionCount,
    hasContent: hasContent, topicContent: topicContent, pct: pct,
    emptyState: emptyState, state: state,
    openAbout: openAbout, closeAbout: closeAbout, resetCache: resetCache,
    startOnboarding: startOnboarding, closeOnboarding: closeOnboarding, replayOnboarding: replayOnboarding,
    _onboardNext: _onboardNext, _onboardPrev: _onboardPrev,
    triggerInstall: triggerInstall, dismissInstall: dismissInstall,
    exportHighlights: exportHighlights, exportNotes: exportNotes,
    copyTextToClipboard: copyTextToClipboard,
    teardownHighlightPopup: teardownHighlightPopup,
    attachHighlightSelectionUI: attachHighlightSelectionUI,
    speak: speak, speakTopic: speakTopic, stopSpeech: stopSpeech,
    burstConfetti: burstConfetti, popMilestone: popMilestone,
    setNavPosition: setNavPosition, toggleSrsNotifications: toggleSrsNotifications,
    setSrsNotificationTime: setSrsNotificationTime,
    toggleSpotterDetails: toggleSpotterDetails,
    shuffleWhyMechanism: shuffleWhyMechanism,
    shuffleGlossaryTerm: shuffleGlossaryTerm
  };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", app.init);
} else {
  app.init();
}

/* ============================================================
   dashboard.js — Elite Clinical Diagnostics & Analytics Engine
   ============================================================
   Next-Gen EdTech Learning Dashboard:
     - 0–1000 XP Microbiology Mastery Index with Circular Gauge & Ranks
     - AI Next-Best-Action Clinical Prescriptions
     - Dual VCI Board Exam Readiness (Paper I vs Paper II)
     - Interactive Unit Mastery Matrix with Real-Time Filter Tabs
     - 5-Box Leitner Spaced Repetition Memory Pipeline
     - 84-Day Activity Heatmap with Month & Day Headings
     - Diagnostic Assessment Ledger (Recent Quiz Attempts)
     - Clinical Knowledge Vault (Highlights, Notes, Bookmarks)
   ============================================================ */

var dashboardApp = (function () {

  var activeFilter = "all";

  function render(host) {
    if (!host) return;

    var readMap   = store.getRead() || {};
    var quiz      = store.getQuiz() || { attempts: [], byUnit: {} };
    var streak    = store.computeStreak() || { current: 0, longest: 0, totalDays: 0 };
    var activity  = store.getActivity() || {};
    var srs       = store.getSrs() || {};
    var dueCards  = (store.dueSrs && store.dueSrs()) ? store.dueSrs().length : 0;
    var notes     = store.getNotes() || {};
    var bms       = store.getBookmarks() || [];
    var highlights = store.getHighlights() || {};
    var qaDone    = store.getQaDone() || [];

    // Syllabus counts
    var theoryUnits   = syllabus.theory || [];
    var practicalUnits = syllabus.practical || [];
    var allUnits      = theoryUnits.concat(practicalUnits);
    var totalTopics   = allUnits.reduce(function (n, u) { return n + (u.topics ? u.topics.length : 0); }, 0);
    var readCount     = Object.keys(readMap).length;
    var readPct       = totalTopics ? Math.round((readCount / totalTopics) * 100) : 0;

    // Quiz statistics
    var attempts = quiz.attempts || [];
    var totalQ = 0, totalCorrect = 0;
    attempts.forEach(function (a) { totalQ += (a.total || 0); totalCorrect += (a.correct || 0); });
    var quizAccuracy = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0;

    // Spaced repetition statistics
    var srsKeys = Object.keys(srs);
    var boxCounts = [0, 0, 0, 0, 0];
    srsKeys.forEach(function (k) {
      var b = Math.min(5, Math.max(1, srs[k].box || 1));
      boxCounts[b - 1]++;
    });
    var masteredCount = boxCounts[2] + boxCounts[3] + boxCounts[4]; // Box 3, 4, 5
    var retentionRate = srsKeys.length ? Math.round((masteredCount / srsKeys.length) * 100) : 0;

    // Highlights stats
    var totalHighlights = 0;
    var hlColorCounts = { yellow: 0, green: 0, blue: 0, pink: 0, orange: 0, purple: 0 };
    Object.keys(highlights).forEach(function (topId) {
      var arr = highlights[topId] || [];
      totalHighlights += arr.length;
      arr.forEach(function (h) {
        if (h.color && hlColorCounts[h.color] !== undefined) {
          hlColorCounts[h.color]++;
        }
      });
    });

    // Mastery XP Calculation (0 to 1000 XP)
    var readXP = Math.round((readCount / (totalTopics || 1)) * 400); // 40% weight
    var quizFactor = totalQ ? (totalCorrect / totalQ) : 0;
    var quizVolume = Math.min(1, attempts.length / 8);
    var quizXP = Math.round((quizFactor * 0.7 + quizVolume * 0.3) * 350); // 35% weight
    var srsFactor = srsKeys.length ? (masteredCount / srsKeys.length) : 0;
    var srsVolume = Math.min(1, srsKeys.length / 25);
    var srsXP = Math.round((srsFactor * 0.6 + srsVolume * 0.4) * 150); // 15% weight
    var streakFactor = Math.min(1, streak.current / 7);
    var daysFactor = Math.min(1, streak.totalDays / 10);
    var consistencyXP = Math.round((streakFactor * 0.6 + daysFactor * 0.4) * 100); // 10% weight

    var totalXP = Math.min(1000, readXP + quizXP + srsXP + consistencyXP);
    var readinessPct = Math.min(100, Math.round(totalXP / 10));

    // Rank evaluation
    var rank = getRank(totalXP);

    // Circumference for 175px gauge (radius = 70)
    var radius = 70;
    var circumference = 2 * Math.PI * radius;
    var strokeOffset = circumference - (circumference * readinessPct) / 100;

    // HTML Output
    host.innerHTML =
      '<div class="dash-elite">' +

        /* 1. Hero Cockpit Card */
        '<div class="dash-hero">' +
          '<div class="dash-cockpit">' +
            '<div class="mastery-gauge-wrap">' +
              '<div class="mastery-svg-gauge">' +
                '<svg viewBox="0 0 175 175">' +
                  '<circle class="mastery-gauge-bg" cx="87.5" cy="87.5" r="' + radius + '"></circle>' +
                  '<circle class="mastery-gauge-fill" cx="87.5" cy="87.5" r="' + radius + '" ' +
                    'stroke-dasharray="' + circumference + '" ' +
                    'stroke-dashoffset="' + strokeOffset + '"></circle>' +
                '</svg>' +
                '<div class="mastery-gauge-center">' +
                  '<span class="mastery-gauge-val">' + totalXP + '</span>' +
                  '<span class="mastery-gauge-lbl">Mastery XP</span>' +
                '</div>' +
              '</div>' +
              '<div class="mastery-rank-badge">' +
                app.icon(rank.icon) + ' ' + rank.title +
              '</div>' +
            '</div>' +

            '<div class="dash-cockpit-info">' +
              '<span class="dash-eyebrow">' + app.icon("sparkle") + ' Clinical Learning Cockpit · ' + rank.stage + '</span>' +
              '<h1 class="dash-title">Veterinary Microbiology Analytics</h1>' +
              '<p class="dash-lede">' +
                'Real-time exam readiness index, spaced retention health, and syllabus coverage across all five VCI Units.' +
              '</p>' +

              '<div class="dash-metrics-grid">' +
                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Streak <span class="streak-flame">' + app.icon("flame") + '</span></div>' +
                  '<div class="dash-metric-val">' + streak.current + ' <small style="font-size:14px;font-weight:600">days</small></div>' +
                  '<div class="dash-metric-sub">Best: ' + streak.longest + ' days</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Syllabus <span>' + app.icon("book") + '</span></div>' +
                  '<div class="dash-metric-val">' + readPct + '%</div>' +
                  '<div class="dash-metric-sub">' + readCount + ' of ' + totalTopics + ' topics read</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Quiz Accuracy <span>' + app.icon("target") + '</span></div>' +
                  '<div class="dash-metric-val">' + (totalQ ? quizAccuracy + '%' : '—') + '</div>' +
                  '<div class="dash-metric-sub">' + attempts.length + ' tests completed</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Memory Health <span>' + app.icon("shield") + '</span></div>' +
                  '<div class="dash-metric-val">' + (srsKeys.length ? retentionRate + '%' : '100%') + '</div>' +
                  '<div class="dash-metric-sub">' + (dueCards ? dueCards + ' due for review' : 'Zero memory decay') + '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* 2. Next Best Action Prescriptions */
        renderPrescriptions(dueCards, allUnits, readMap, quiz) +

        /* 3. Paper I vs Paper II Dual Examination Readiness */
        renderPaperReadiness(syllabus, readMap, quiz) +

        /* 4. Interactive Unit Mastery Matrix */
        '<section>' +
          '<div class="row row--between mb-3">' +
            '<div>' +
              '<h2>Unit Mastery Matrix</h2>' +
              '<p class="muted small mt-1">Reading progress, question bank volume, and high score per curriculum unit.</p>' +
            '</div>' +
          '</div>' +
          renderMatrixFilters() +
          '<div id="unit-matrix-container">' +
            renderUnitMatrix(activeFilter, allUnits, readMap, quiz) +
          '</div>' +
        '</section>' +

        /* 5. 5-Box Leitner Memory Pipeline */
        renderLeitnerPipeline(srs, boxCounts, srsKeys.length, dueCards) +

        /* 6. Activity Heatmap & Performance Trends */
        '<div class="grid grid--2">' +
          renderHeatmapCard(activity, streak) +
          renderRecentAttemptsCard(quiz) +
        '</div>' +

        /* 7. Study Vault & Knowledge Artifacts */
        renderKnowledgeVault(totalHighlights, hlColorCounts, Object.keys(notes).length, bms.length, qaDone.length) +

      '</div>';

    attachDashboardEvents(host, allUnits, readMap, quiz);
  }

  /* ---------- Rank calculation ---------- */
  function getRank(xp) {
    if (xp >= 750) {
      return { title: "Master Microbiologist", stage: "Phase 4 · Elite Clinical Mastery", icon: "trophy" };
    }
    if (xp >= 500) {
      return { title: "Senior Resident", stage: "Phase 3 · Board Exam Ready", icon: "sparkle" };
    }
    if (xp >= 250) {
      return { title: "Junior Diagnostician", stage: "Phase 2 · Clinical Acumen", icon: "search" };
    }
    return { title: "Microbiology Apprentice", stage: "Phase 1 · Foundations", icon: "book" };
  }

  /* ---------- Smart Action Prescriptions ---------- */
  function renderPrescriptions(dueCards, allUnits, readMap, quiz) {
    // 1. Spaced Repetition Mission
    var srsCard = '';
    if (dueCards > 0) {
      srsCard =
        '<div class="presc-card is-urgent">' +
          '<div>' +
            '<span class="presc-badge presc-badge--urgent">' + app.icon("clock") + ' Priority 1 · Memory Decay</span>' +
            '<h3 class="presc-title mt-2">' + dueCards + ' Question' + (dueCards > 1 ? 's' : '') + ' Due Today</h3>' +
            '<p class="presc-desc mt-1">Ebbinghaus forgetting curve active. Review your Leitner cards now to prevent memory drop.</p>' +
          '</div>' +
          '<a class="btn btn--primary presc-btn" href="#/quiz/review">' + app.icon("repeat") + ' Clear Review Queue</a>' +
        '</div>';
    } else {
      srsCard =
        '<div class="presc-card">' +
          '<div>' +
            '<span class="presc-badge presc-badge--success">' + app.icon("check") + ' Memory Safe</span>' +
            '<h3 class="presc-title mt-2">Zero Flashcards Due</h3>' +
            '<p class="presc-desc mt-1">Your spaced repetition queue is fully cleared. All active questions are in consolidation.</p>' +
          '</div>' +
          '<a class="btn btn--outline presc-btn" href="#/quiz">' + app.icon("quiz") + ' Practice Flashcards</a>' +
        '</div>';
    }

    // 2. Next Unread Lesson Mission
    var nextTopic = findNextUnreadTopic(allUnits, readMap);
    var lessonCard = '';
    if (nextTopic) {
      lessonCard =
        '<div class="presc-card is-primary">' +
          '<div>' +
            '<span class="presc-badge presc-badge--primary">' + app.icon("book") + ' Next Up in Syllabus</span>' +
            '<h3 class="presc-title mt-2">' + app.esc(shorten(nextTopic.title, 32)) + '</h3>' +
            '<p class="presc-desc mt-1">' + app.esc(nextTopic.unitTitle) + ' · Topic ' + nextTopic.index + '</p>' +
          '</div>' +
          '<a class="btn btn--primary presc-btn" href="#/topic/' + nextTopic.id + '">' + app.icon("book") + ' Continue Lesson</a>' +
        '</div>';
    } else {
      lessonCard =
        '<div class="presc-card">' +
          '<div>' +
            '<span class="presc-badge presc-badge--success">' + app.icon("trophy") + ' Full Coverage</span>' +
            '<h3 class="presc-title mt-2">All 145 Topics Read</h3>' +
            '<p class="presc-desc mt-1">You have explored every theory and practical topic in the syllabus!</p>' +
          '</div>' +
          '<a class="btn btn--outline presc-btn" href="#/theory">' + app.icon("repeat") + ' Review Lessons</a>' +
        '</div>';
    }

    // 3. Recommended Diagnostic Assessment
    var weakUnit = findLowestScoringUnit(allUnits, quiz);
    var quizCard =
      '<div class="presc-card">' +
        '<div>' +
          '<span class="presc-badge presc-badge--primary">' + app.icon("target") + ' Target Diagnostic</span>' +
          '<h3 class="presc-title mt-2">' + app.esc(shorten(weakUnit.name, 32)) + '</h3>' +
          '<p class="presc-desc mt-1">' + (weakUnit.hasScore ? 'Current best score: ' + weakUnit.score + '%. Take a 10-Q test to boost mastery.' : 'No assessment attempts yet. Take your first test.') + '</p>' +
        '</div>' +
        '<a class="btn btn--primary presc-btn" href="#/quiz/unit/' + weakUnit.id + '">' + app.icon("quiz") + ' Test Knowledge</a>' +
      '</div>';

    return '<div class="dash-prescriptions">' + srsCard + lessonCard + quizCard + '</div>';
  }

  /* ---------- Paper I vs Paper II Comparative Readiness ---------- */
  function renderPaperReadiness(syl, readMap, quiz) {
    function computePaper(unitIds, paperLabel, paperName) {
      var units = (syl.theory || []).filter(function (u) { return unitIds.indexOf(u.id) !== -1; })
        .concat((syl.practical || []).filter(function (u) { return unitIds.indexOf(u.id) !== -1; }));

      var totalT = 0, readT = 0, totalQuestions = 0;
      var scores = [];

      units.forEach(function (u) {
        var uTopics = u.topics || [];
        totalT += uTopics.length;
        uTopics.forEach(function (t) {
          if (readMap[t.id]) readT++;
        });
        totalQuestions += app.questionCount(u.id);
        var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
        if (rec && typeof rec.best === "number") scores.push(rec.best);
      });

      var readPercent = totalT ? Math.round((readT / totalT) * 100) : 0;
      var avgScore = scores.length ? Math.round(scores.reduce(function (a, b) { return a + b; }, 0) / scores.length) : 0;

      return {
        label: paperLabel,
        name: paperName,
        totalTopics: totalT,
        readTopics: readT,
        readPct: readPercent,
        totalQuestions: totalQuestions,
        avgScore: avgScore,
        testCount: scores.length
      };
    }

    var p1 = computePaper(["unit-1", "unit-2", "unit-3", "prac-1", "prac-2", "prac-3"], "Paper I", "Bacteriology, Mycology & Biotechnology");
    var p2 = computePaper(["unit-4", "unit-5", "prac-4", "prac-5"], "Paper II", "Immunology, Serology & Virology");

    function renderPaperCard(p, href) {
      return '<div class="paper-gauge-card">' +
        '<div class="paper-card-head">' +
          '<div>' +
            '<span class="paper-badge">' + p.label + '</span>' +
            '<h3 class="paper-card-title mt-1">' + p.name + '</h3>' +
            '<p class="paper-card-subtitle">Units ' + (p.label === "Paper I" ? "1, 2, 3" : "4, 5") + ' (Theory + Practical)</p>' +
          '</div>' +
        '</div>' +

        '<div class="paper-progress-wrap">' +
          '<div class="row row--between small">' +
            '<span>Syllabus Reading</span>' +
            '<span class="mono"><b>' + p.readPct + '%</b> (' + p.readTopics + '/' + p.totalTopics + ')</span>' +
          '</div>' +
          '<div class="bar" style="height:8px">' +
            '<div class="bar__fill" style="width:' + p.readPct + '%;background:var(--ivri-blue)"></div>' +
          '</div>' +
        '</div>' +

        '<div class="paper-stats-row">' +
          '<div>' +
            '<div class="paper-stat-item-val">' + p.readTopics + '</div>' +
            '<div class="paper-stat-item-lbl">Read</div>' +
          '</div>' +
          '<div>' +
            '<div class="paper-stat-item-val">' + p.totalQuestions + '</div>' +
            '<div class="paper-stat-item-lbl">Questions</div>' +
          '</div>' +
          '<div>' +
            '<div class="paper-stat-item-val">' + (p.testCount ? p.avgScore + '%' : '—') + '</div>' +
            '<div class="paper-stat-item-lbl">Avg Score</div>' +
          '</div>' +
        '</div>' +

        '<a class="btn btn--outline mt-2" href="' + href + '">' +
          app.icon("quiz") + ' Simulate ' + p.label + ' Exam' +
        '</a>' +
      '</div>';
    }

    return '<section>' +
      '<h2>Annual Examination Readiness</h2>' +
      '<p class="muted small mt-1">Split according to the official VCI veterinary board exam format.</p>' +
      '<div class="paper-readiness-grid mt-4">' +
        renderPaperCard(p1, "#/quiz/paper/paper-1") +
        renderPaperCard(p2, "#/quiz/paper/paper-2") +
      '</div>' +
    '</section>';
  }

  /* ---------- Unit Mastery Matrix Filter Buttons ---------- */
  function renderMatrixFilters() {
    var tabs = [
      { id: "all", label: "All Units (10)" },
      { id: "theory", label: "Theory (5)" },
      { id: "practical", label: "Practical (5)" },
      { id: "weak", label: "Needs Practice (<60%)" },
      { id: "mastered", label: "Mastered (≥75%)" }
    ];

    return '<div class="matrix-filter-bar">' +
      tabs.map(function (tab) {
        return '<button class="matrix-tab-btn' + (activeFilter === tab.id ? ' is-active' : '') + '" data-filter="' + tab.id + '">' +
          tab.label +
        '</button>';
      }).join("") +
    '</div>';
  }

  /* ---------- Unit Mastery Matrix Grid ---------- */
  function renderUnitMatrix(filter, allUnits, readMap, quiz) {
    var filtered = allUnits.filter(function (u) {
      var isTheory = u.id.indexOf("unit-") === 0;
      var isPrac = u.id.indexOf("prac-") === 0;

      if (filter === "theory") return isTheory;
      if (filter === "practical") return isPrac;

      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      var best = rec && typeof rec.best === "number" ? rec.best : null;

      if (filter === "weak") {
        return best === null || best < 60;
      }
      if (filter === "mastered") {
        return best !== null && best >= 75;
      }
      return true;
    });

    if (!filtered.length) {
      return '<div class="card p-5 text-center text-muted">No units match the selected filter.</div>';
    }

    return '<div class="unit-mastery-grid">' +
      filtered.map(function (u) {
        var isTheory = u.id.indexOf("unit-") === 0;
        var tag = isTheory ? "U" + u.no : "P" + u.no;
        var paperTag = (u.no <= 3) ? "Paper I" : "Paper II";

        var uTopics = u.topics || [];
        var done = 0;
        uTopics.forEach(function (t) { if (readMap[t.id]) done++; });
        var readP = uTopics.length ? Math.round((done / uTopics.length) * 100) : 0;

        var qn = app.questionCount(u.id);
        var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
        var bestScore = (rec && typeof rec.best === "number") ? rec.best : null;

        return '<div class="unit-card-elite">' +
          '<div class="unit-card-top">' +
            '<span class="unit-card-badge">' + tag + ' · ' + paperTag + '</span>' +
            (bestScore !== null
              ? '<span class="chip ' + (bestScore >= 75 ? 'chip--ok' : bestScore >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                  bestScore + '% Best</span>'
              : '<span class="chip faint">Untested</span>') +
          '</div>' +

          '<a class="unit-card-title" href="#/unit/' + u.id + '">' +
            app.esc(u.short || u.title) +
          '</a>' +

          '<div class="unit-card-bars">' +
            '<div class="unit-bar-item">' +
              '<div class="unit-bar-label">' +
                '<span>Reading Progress</span>' +
                '<span class="mono">' + done + '/' + uTopics.length + ' (' + readP + '%)</span>' +
              '</div>' +
              '<div class="bar" style="height:6px">' +
                '<div class="bar__fill" style="width:' + readP + '%;background:var(--ivri-blue)"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="unit-card-actions">' +
            '<a class="btn btn--sm btn--outline" style="flex:1" href="#/unit/' + u.id + '">' +
              app.icon("book") + ' Read' +
            '</a>' +
            (qn
              ? '<a class="btn btn--sm btn--primary" style="flex:1" href="#/quiz/unit/' + u.id + '">' +
                  app.icon("quiz") + ' Quiz (' + qn + ')' +
                '</a>'
              : '<span class="btn btn--sm disabled" style="flex:1">No Qs</span>') +
          '</div>' +
        '</div>';
      }).join("") +
    '</div>';
  }

  /* ---------- 5-Box Leitner Memory Pipeline ---------- */
  function renderLeitnerPipeline(srs, boxCounts, totalCards, dueCount) {
    var intervals = ["Daily (24h)", "Every 2 Days", "Every 4 Days", "Every 8 Days", "Mastered (16d)"];
    var descriptions = [
      "Volatile memory · High decay risk",
      "Short-term retention",
      "Consolidating memory",
      "Long-term clinical retention",
      "Reflexive diagnosis mastery"
    ];

    var maxBox = Math.max.apply(null, boxCounts.concat([1]));

    return '<section class="srs-pipeline-wrap">' +
      '<div class="row row--between">' +
        '<div>' +
          '<h2>Spaced Repetition Memory Matrix</h2>' +
          '<p class="muted small mt-1">Ebbinghaus memory curve optimizer. Questions climb from Box 1 to Box 5 as you reinforce recall.</p>' +
        '</div>' +
        (dueCount > 0
          ? '<a class="btn btn--primary btn--sm" href="#/quiz/review">' + app.icon("repeat") + ' Review ' + dueCount + ' Due</a>'
          : '<span class="chip chip--ok">' + app.icon("check") + ' Queue Clear</span>') +
      '</div>' +

      '<div class="srs-pipeline-grid">' +
        boxCounts.map(function (count, idx) {
          var boxNum = idx + 1;
          var pctOfTotal = totalCards ? Math.round((count / totalCards) * 100) : 0;
          return '<div class="srs-box-col" data-box="' + boxNum + '">' +
            '<span class="srs-box-num">Box ' + boxNum + '</span>' +
            '<div class="srs-box-count">' + count + '</div>' +
            '<div class="srs-box-interval">' + intervals[idx] + '</div>' +
            '<div class="bar mt-2" style="width:100%;height:5px">' +
              '<div class="bar__fill" style="width:' + (count / maxBox * 100) + '%"></div>' +
            '</div>' +
            '<span class="srs-box-pct mt-1">' + (totalCards ? pctOfTotal + '% of cards' : '0 cards') + '</span>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</section>';
  }

  /* ---------- Activity Heatmap Card ---------- */
  function renderHeatmapCard(activity, streak) {
    var cells = [];
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - 83); // 12 weeks = 84 days

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var startMonth = monthNames[d.getMonth()];
    var midDate = new Date(d);
    midDate.setDate(midDate.getDate() + 42);
    var midMonth = monthNames[midDate.getMonth()];
    var nowMonth = monthNames[(new Date()).getMonth()];

    var activeDaysCount = 0;
    var totalInteractions = 0;

    for (var i = 0; i < 84; i++) {
      var key = d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
      var n = activity[key] || 0;
      if (n > 0) {
        activeDaysCount++;
        totalInteractions += n;
      }
      var lvl = n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 12 ? 3 : 4;
      cells.push('<div class="hm__cell" data-lvl="' + lvl + '" title="' + key + ' — ' +
        (n ? n + ' study actions' : 'no activity') + '"></div>');
      d.setDate(d.getDate() + 1);
    }

    return '<div class="heatmap-card-elite">' +
      '<div class="row row--between">' +
        '<div>' +
          '<h3>Study Activity Heatmap</h3>' +
          '<p class="muted small mt-1">Past 12 weeks of clinical interactions.</p>' +
        '</div>' +
        '<span class="chip font-mono">' + totalInteractions + ' total actions</span>' +
      '</div>' +

      '<div class="heatmap-grid-scroll mt-4">' +
        '<div class="heatmap-months-row">' +
          '<span>' + startMonth + '</span>' +
          '<span>' + midMonth + '</span>' +
          '<span>' + nowMonth + '</span>' +
        '</div>' +
        '<div class="hm-elite">' + cells.join("") + '</div>' +
      '</div>' +

      '<div class="heatmap-summary-strip">' +
        '<div>Active days: <b>' + activeDaysCount + ' / 84</b></div>' +
        '<div>Longest streak: <b>' + streak.longest + ' days</b></div>' +
        '<div class="row small faint" style="gap:4px">' +
          '<span>Less</span>' +
          [0, 1, 2, 3, 4].map(function (l) { return '<div class="hm__cell" style="width:11px;height:11px" data-lvl="' + l + '"></div>'; }).join("") +
          '<span>More</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ---------- Diagnostic Assessment Ledger ---------- */
  function renderRecentAttemptsCard(quiz) {
    var list = (quiz.attempts || []).slice(-6).reverse();

    if (!list.length) {
      return '<div class="heatmap-card-elite">' +
        '<h3>Assessment Ledger</h3>' +
        '<p class="muted small mt-1">Record of your recent quizzes and simulation exams.</p>' +
        '<div class="card p-5 text-center mt-4 text-muted">' +
          app.icon("target") + '<br>' +
          'No quiz attempts recorded yet.<br>' +
          '<a class="btn btn--primary btn--sm mt-3" href="#/quiz">Take Diagnostic Test</a>' +
        '</div>' +
      '</div>';
    }

    return '<div class="heatmap-card-elite">' +
      '<div class="row row--between">' +
        '<div>' +
          '<h3>Assessment Ledger</h3>' +
          '<p class="muted small mt-1">Recent quizzes and simulation exams.</p>' +
        '</div>' +
        '<a class="small" href="#/quiz">All Quizzes &rarr;</a>' +
      '</div>' +

      '<div class="tlist mt-4" style="border:none">' +
        list.map(function (a) {
          var p = app.pct(a.correct, a.total);
          var dt = new Date(a.at);
          var dateStr = dt.toLocaleDateString(undefined, { month: "short", day: "numeric" });
          return '<div class="tlist__row">' +
            '<span class="tlist__body">' +
              '<span class="tlist__title">' + app.esc(a.label || "Microbiology Quiz") + '</span>' +
              '<span class="tlist__sub">' + dateStr + (a.exam ? ' · ⏱️ Timed Exam' : '') + '</span>' +
            '</span>' +
            '<span class="tlist__right">' +
              '<span class="chip ' + (p >= 75 ? 'chip--ok' : p >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                a.correct + '/' + a.total + ' (' + p + '%)' +
              '</span>' +
            '</span>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  /* ---------- Student Knowledge Vault ---------- */
  function renderKnowledgeVault(totalHl, hlColors, notesCount, bmsCount, qaCount) {
    return '<section>' +
      '<h2>Clinical Knowledge Vault</h2>' +
      '<p class="muted small mt-1">Your personal clinical repository of notes, high-yield highlights, and bookmarks.</p>' +
      '<div class="vault-grid mt-4">' +
        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("star") + '</div>' +
          '<div class="vault-card-val">' + bmsCount + '</div>' +
          '<div class="vault-card-title">Bookmarked Topics</div>' +
          '<div class="vault-card-sub">Quick revision access</div>' +
        '</a>' +

        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("note") + '</div>' +
          '<div class="vault-card-val">' + notesCount + '</div>' +
          '<div class="vault-card-title">Clinical Notes</div>' +
          '<div class="vault-card-sub">Personal observations</div>' +
        '</a>' +

        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("pen") + '</div>' +
          '<div class="vault-card-val">' + totalHl + '</div>' +
          '<div class="vault-card-title">Passages Highlighted</div>' +
          '<div class="vault-card-sub">Color-coded key points</div>' +
        '</a>' +

        '<a class="vault-card" href="#/qa">' +
          '<div class="vault-card-icon">' + app.icon("qa") + '</div>' +
          '<div class="vault-card-val">' + qaCount + '</div>' +
          '<div class="vault-card-title">Exam Questions Mastered</div>' +
          '<div class="vault-card-sub">Model answers reviewed</div>' +
        '</a>' +
      '</div>' +
    '</section>';
  }

  /* ---------- Helpers ---------- */
  function shorten(s, n) {
    if (!s) return "";
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  }

  function findNextUnreadTopic(allUnits, readMap) {
    for (var uIdx = 0; uIdx < allUnits.length; uIdx++) {
      var u = allUnits[uIdx];
      var topics = u.topics || [];
      for (var tIdx = 0; tIdx < topics.length; tIdx++) {
        var t = topics[tIdx];
        if (!readMap[t.id]) {
          return {
            id: t.id,
            title: t.title,
            index: t.index || (tIdx + 1),
            unitTitle: u.short || u.title
          };
        }
      }
    }
    return null;
  }

  function findLowestScoringUnit(allUnits, quiz) {
    var minScore = 999;
    var candidate = null;

    allUnits.forEach(function (u) {
      if (u.id.indexOf("unit-") !== 0) return; // focus on theory units
      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      if (rec && typeof rec.best === "number") {
        if (rec.best < minScore) {
          minScore = rec.best;
          candidate = { id: u.id, name: u.short || u.title, score: rec.best, hasScore: true };
        }
      } else if (!candidate) {
        candidate = { id: u.id, name: u.short || u.title, score: 0, hasScore: false };
      }
    });

    return candidate || { id: "unit-1", name: "Bacteriology", score: 0, hasScore: false };
  }

  /* ---------- Attach UI events ---------- */
  function attachDashboardEvents(host, allUnits, readMap, quiz) {
    var filterBtns = host.querySelectorAll(".matrix-tab-btn");
    var container = host.querySelector("#unit-matrix-container");

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        activeFilter = btn.getAttribute("data-filter") || "all";
        if (container) {
          container.innerHTML = renderUnitMatrix(activeFilter, allUnits, readMap, quiz);
        }
      });
    });
  }

  return {
    render: render
  };
})();

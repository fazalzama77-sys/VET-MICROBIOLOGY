/* ============================================================
   dashboard.js — Simple, Vibrant & Intuitive Study Dashboard
   ============================================================
   Designed so that anyone (even a 15-year-old student) can glance
   at this page and instantly understand:
     1. Overall Score & Grade: How am I doing overall?
     2. Four Key Stats: Syllabus, Quizzes, Streak, Flashcards.
     3. Next Steps: The exact 3 best things to do today.
     4. Subject Scorecard: Progress & Quiz scores across all 5 units.
     5. Strong vs Focus Areas: Where am I acing vs where to practice.
     6. Study Habit Tracker: Daily streak & 12-week calendar.
     7. Recent Quizzes: Last test results and review links.
   ============================================================ */

var dashboardApp = (function () {

  function daysUntil(dateStr) {
    if (!dateStr) return null;
    var then = new Date(dateStr + "T00:00:00");
    if (isNaN(then.getTime())) return null;
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.round((then - today) / 86400000);
  }

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
    var tested = null;
    var untested = null;

    allUnits.forEach(function (u) {
      if (u.id.indexOf("unit-") !== 0) return;
      if (!app.questionCount(u.id)) return;
      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      if (rec && typeof rec.best === "number") {
        if (rec.best < minScore) {
          minScore = rec.best;
          tested = { id: u.id, name: u.short || u.title, score: rec.best, hasScore: true };
        }
      } else if (!untested) {
        untested = { id: u.id, name: u.short || u.title, score: 0, hasScore: false };
      }
    });

    return untested || tested || { id: "unit-1", name: "Bacteriology", score: 0, hasScore: false };
  }

  /* Unit visual color themes */
  var UNIT_THEMES = {
    "unit-1": { name: "Bacteriology", color: "var(--ivri-blue, #1565c0)", light: "var(--ivri-blue-light, #e8f1fb)", icon: "🔬", paper: "Paper I" },
    "unit-2": { name: "Mycology", color: "var(--ivri-teal, #00897b)", light: "var(--ivri-teal-light, #e0f2f1)", icon: "🍄", paper: "Paper I" },
    "unit-3": { name: "Biotechnology", color: "var(--ivri-purple, #6a48b5)", light: "var(--ivri-purple-light, #ede7f6)", icon: "🧬", paper: "Paper I" },
    "unit-4": { name: "Immunology", color: "var(--ivri-amber, #b25e00)", light: "var(--ivri-amber-light, #fff5e8)", icon: "🛡️", paper: "Paper II" },
    "unit-5": { name: "Virology", color: "var(--ivri-coral, #d84315)", light: "var(--danger-soft, #fdecea)", icon: "🦠", paper: "Paper II" },
    "prac-1": { name: "Bacteriology Lab", color: "var(--ivri-teal, #00897b)", light: "var(--ivri-teal-light, #e0f2f1)", icon: "🧫", paper: "Practical" },
    "prac-2": { name: "Mycology Lab", color: "var(--ivri-teal, #00897b)", light: "var(--ivri-teal-light, #e0f2f1)", icon: "🧫", paper: "Practical" },
    "prac-3": { name: "Biotech Lab", color: "var(--ivri-teal, #00897b)", light: "var(--ivri-teal-light, #e0f2f1)", icon: "🧫", paper: "Practical" },
    "prac-4": { name: "Immunology Lab", color: "var(--ivri-teal, #00897b)", light: "var(--ivri-teal-light, #e0f2f1)", icon: "🧫", paper: "Practical" },
    "prac-5": { name: "Virology Lab", color: "var(--ivri-teal, #00897b)", light: "var(--ivri-teal-light, #e0f2f1)", icon: "🧫", paper: "Practical" }
  };

  /* ============================================================
     MAIN RENDER
     ============================================================ */
  function render(host) {
    if (!host) return;

    var readMap    = store.getRead() || {};
    var quiz       = store.getQuiz() || { attempts: [], byUnit: {}, bySub: {} };
    var streak     = store.computeStreak() || { current: 0, longest: 0, totalDays: 0 };
    var activity   = store.getActivity() || {};
    var srs        = store.getSrs() || {};
    var dueCards   = (store.dueSrs && store.dueSrs()) ? store.dueSrs().length : 0;
    var notes      = store.getNotes() || {};
    var bms        = store.getBookmarks() || [];
    var highlights = store.getHighlights() || {};
    var qaDone     = store.getQaDone() || [];

    // Syllabus counts
    var theoryUnits    = syllabus.theory || [];
    var practicalUnits = syllabus.practical || [];
    var allUnits       = theoryUnits.concat(practicalUnits);
    var totalTopics    = allUnits.reduce(function (n, u) { return n + (u.topics ? u.topics.length : 0); }, 0);
    var readCount      = Object.keys(readMap).length;
    var readPct        = totalTopics ? Math.round((readCount / totalTopics) * 100) : 0;

    // Quiz counts
    var attempts = quiz.attempts || [];
    var totalQ = 0, totalCorrect = 0;
    attempts.forEach(function (a) { totalQ += (a.total || 0); totalCorrect += (a.correct || 0); });
    var quizAccuracy = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0;

    // Flashcard / Memory counts
    var srsKeys = Object.keys(srs);
    var boxCounts = [0, 0, 0, 0, 0];
    srsKeys.forEach(function (k) {
      var b = Math.min(5, Math.max(1, srs[k].box || 1));
      boxCounts[b - 1]++;
    });
    var masteredCount = boxCounts[2] + boxCounts[3] + boxCounts[4]; // Box 3, 4, 5
    var retentionRate = srsKeys.length ? Math.round((masteredCount / srsKeys.length) * 100) : 0;

    // Highlights count
    var totalHighlights = 0;
    Object.keys(highlights).forEach(function (topId) {
      totalHighlights += (highlights[topId] || []).length;
    });

    // Simple Overall Readiness Score (0 to 100%)
    var readScore = (readCount / (totalTopics || 1)) * 40;
    var quizScore = totalQ ? ((totalCorrect / totalQ) * 35) : 0;
    var srsScore = srsKeys.length ? ((masteredCount / srsKeys.length) * 15) : 0;
    var streakScore = Math.min(10, (streak.current / 7) * 10);
    var overallPct = Math.min(100, Math.round(readScore + quizScore + srsScore + streakScore));

    // Grade Evaluation
    var grade, gradeLabel, gradeIcon;
    if (overallPct >= 85) {
      grade = "Grade A+"; gradeLabel = "Distinction Ready!"; gradeIcon = "🏆";
    } else if (overallPct >= 70) {
      grade = "Grade A"; gradeLabel = "Strong First Class!"; gradeIcon = "🌟";
    } else if (overallPct >= 50) {
      grade = "Grade B"; gradeLabel = "Steady Progress!"; gradeIcon = "👍";
    } else {
      grade = "Grade C"; gradeLabel = "Getting Started!"; gradeIcon = "🌱";
    }

    // Circular Gauge SVG Calculations (Radius = 60, circumference = 2 * PI * 60 ≈ 376.99)
    var radius = 60;
    var circumference = 2 * Math.PI * radius;
    var strokeOffset = circumference - (circumference * overallPct) / 100;

    // Inspiring greeting message
    var greetingMsg = "Ready to conquer Veterinary Microbiology today?";
    if (streak.current >= 3) greetingMsg = "Awesome consistency! You are on a " + streak.current + "-day study streak. Keep the fire burning!";
    else if (quizAccuracy >= 75) greetingMsg = "High diagnostic accuracy! You are scoring in the top tier of veterinary students.";
    else if (readCount > 10) greetingMsg = "Great momentum! You've already explored " + readCount + " topics. Let's learn something new today!";

    host.innerHTML =
      '<div class="dash-v2 animate-fade-in">' +

        /* ==================== 1. WELCOME HERO & OVERALL SCORE ==================== */
        '<div class="dash-v2-hero">' +
          '<div class="dash-v2-hero-body">' +

            /* Score Gauge */
            '<div class="dash-score-gauge">' +
              '<div class="dash-score-circle-wrap">' +
                '<svg viewBox="0 0 150 150">' +
                  '<circle class="dash-score-circle-bg" cx="75" cy="75" r="' + radius + '"></circle>' +
                  '<circle class="dash-score-circle-fill" cx="75" cy="75" r="' + radius + '" ' +
                    'stroke-dasharray="' + circumference + '" ' +
                    'stroke-dashoffset="' + strokeOffset + '"></circle>' +
                '</svg>' +
                '<div class="dash-score-circle-inner">' +
                  '<span class="dash-score-number">' + overallPct + '%</span>' +
                  '<span class="dash-score-label">Overall Score</span>' +
                '</div>' +
              '</div>' +
              '<div class="dash-grade-chip">' +
                gradeIcon + ' ' + grade + ' · ' + gradeLabel +
              '</div>' +
            '</div>' +

            /* Greeting & Summary */
            '<div class="dash-greeting-info">' +
              '<span class="dash-greeting-eyebrow">✨ Study Dashboard &amp; Progress</span>' +
              '<h1 class="dash-greeting-title">Welcome back, Doctor! 👋</h1>' +
              '<p class="dash-greeting-desc">' + greetingMsg + '</p>' +
              '<p class="small muted mt-1">You have explored <b>' + readCount + ' of ' + totalTopics + ' topics</b> and answered <b>' + totalCorrect + ' of ' + totalQ + ' quiz questions</b> correctly.</p>' +
              renderExamCountdown() +
            '</div>' +

          '</div>' +
        '</div>' +

        /* ==================== 2. FOUR BRIGHT STAT CARDS ==================== */
        '<div class="dash-4stats-grid">' +

          /* Blue: Syllabus */
          '<div class="dash-stat-tile dash-stat-tile--blue">' +
            '<div class="dash-stat-head">' +
              '<span>Syllabus Read</span>' +
              '<span class="dash-stat-icon">📘</span>' +
            '</div>' +
            '<div class="dash-stat-val">' + readCount + '<small style="font-size:14px;color:var(--text-muted)"> / ' + totalTopics + '</small></div>' +
            '<div class="dash-stat-progress">' +
              '<div class="dash-stat-progress-bar" style="width:' + readPct + '%;background:var(--ivri-blue, #1565c0)"></div>' +
            '</div>' +
            '<div class="dash-stat-sub">' + readPct + '% complete · ' + (totalTopics - readCount) + ' topics left</div>' +
          '</div>' +

          /* Amber: Quiz Accuracy */
          '<div class="dash-stat-tile dash-stat-tile--amber">' +
            '<div class="dash-stat-head">' +
              '<span>Quiz Accuracy</span>' +
              '<span class="dash-stat-icon">🎯</span>' +
            '</div>' +
            '<div class="dash-stat-val">' + (totalQ ? quizAccuracy + '%' : '—') + '</div>' +
            '<div class="dash-stat-progress">' +
              '<div class="dash-stat-progress-bar" style="width:' + quizAccuracy + '%;background:var(--ivri-amber, #b25e00)"></div>' +
            '</div>' +
            '<div class="dash-stat-sub">' + (totalQ ? totalCorrect + ' / ' + totalQ + ' correct (' + attempts.length + ' tests)' : 'Take a quiz to see accuracy') + '</div>' +
          '</div>' +

          /* Coral: Daily Streak */
          '<div class="dash-stat-tile dash-stat-tile--coral">' +
            '<div class="dash-stat-head">' +
              '<span>Daily Streak</span>' +
              '<span class="dash-stat-icon streak-flame">🔥</span>' +
            '</div>' +
            '<div class="dash-stat-val">' + streak.current + ' <small style="font-size:14px;color:var(--text-muted)">days</small></div>' +
            '<div class="dash-stat-progress">' +
              '<div class="dash-stat-progress-bar" style="width:' + Math.min(100, (streak.current / 7) * 100) + '%;background:var(--ivri-coral, #d84315)"></div>' +
            '</div>' +
            '<div class="dash-stat-sub">' + (streak.current > 0 ? 'Active today!' : 'Start studying today!') + ' · Best: ' + streak.longest + ' days</div>' +
          '</div>' +

          /* Purple: Memory Flashcards */
          '<div class="dash-stat-tile dash-stat-tile--purple">' +
            '<div class="dash-stat-head">' +
              '<span>Flashcards</span>' +
              '<span class="dash-stat-icon">🧠</span>' +
            '</div>' +
            '<div class="dash-stat-val">' + masteredCount + ' <small style="font-size:14px;color:var(--text-muted)">mastered</small></div>' +
            '<div class="dash-stat-progress">' +
              '<div class="dash-stat-progress-bar" style="width:' + retentionRate + '%;background:var(--ivri-purple, #6a48b5)"></div>' +
            '</div>' +
            '<div class="dash-stat-sub">' + (dueCards ? '⚡ ' + dueCards + ' due for review today' : 'All ' + srsKeys.length + ' cards consolidated') + '</div>' +
          '</div>' +

        '</div>' +

        /* ==================== 3. WHAT SHOULD I DO TODAY? ==================== */
        renderNextActionsSimple(dueCards, allUnits, readMap, quiz) +

        /* ==================== 4. SUBJECT-BY-SUBJECT SCORECARD ==================== */
        '<section class="dash-today-section mt-4">' +
          '<div class="row row--between items-center">' +
            '<div>' +
              '<h2 class="dash-section-title"><span>📚</span> Subject-by-Subject Scorecard</h2>' +
              '<p class="dash-section-sub">Track your progress and test scores across all 5 syllabus units.</p>' +
            '</div>' +
            '<a class="btn btn--sm btn--ghost" href="#/theory">Explore Syllabus →</a>' +
          '</div>' +
          '<div class="dash-scorecard-grid">' +
            renderSubjectCards(allUnits, readMap, quiz) +
          '</div>' +
        '</section>' +

        /* ==================== 5. STRENGTHS & FOCUS AREAS ==================== */
        renderStrengthsAndFocus(quiz) +

        /* ==================== 6. STUDY HABIT & CALENDAR ==================== */
        '<div class="grid grid--2 mt-4">' +
          renderHabitCalendar(activity, streak) +
          renderRecentQuizzes(quiz) +
        '</div>' +

        /* ==================== 7. STUDY VAULT SNAPSHOT ==================== */
        renderStudyVault(bms.length, Object.keys(notes).length, totalHighlights, qaDone.length) +

      '</div>';

    attachEvents(host);
  }

  /* ============================================================
     COMPONENT RENDERERS
     ============================================================ */

  /* Exam Countdown Pill */
  function renderExamCountdown() {
    var date = store.getExamDate ? store.getExamDate() : "";
    var left = daysUntil(date);

    if (left === null) {
      return '<div class="dash-countdown-bar">' +
        '<span>📅 Set your target exam date:</span>' +
        '<input type="date" id="examdateinput" class="dash-countdown-input" aria-label="Target exam date">' +
      '</div>';
    }

    var msg = left > 1 ? '<b>' + left + ' days</b> until your exam'
      : left === 1 ? '<b>Tomorrow</b> is exam day!'
      : left === 0 ? '<b>Today</b> is your exam — all the best!'
      : 'Exam date has passed';
    var wks = Math.round(left / 7);
    var weeks = left > 13 ? ' (~' + wks + ' weeks)' : '';

    return '<div class="dash-countdown-bar">' +
      '<span>⏳ ' + msg + weeks + '</span>' +
      '<input type="date" id="examdateinput" class="dash-countdown-input" value="' + app.esc(date) + '" aria-label="Target exam date">' +
      '<button class="btn btn--sm btn--ghost" id="examdateclear" style="padding:2px 8px;font-size:11px;">Clear</button>' +
    '</div>';
  }

  /* Next Actions Simple */
  function renderNextActionsSimple(dueCards, allUnits, readMap, quiz) {
    var cards = [];

    // 1. Next lesson to read
    var nextTopic = findNextUnreadTopic(allUnits, readMap);
    if (nextTopic) {
      cards.push(
        '<div class="dash-action-box dash-action-box--lesson">' +
          '<div>' +
            '<span class="dash-action-badge dash-action-badge--blue">📖 Next Lesson</span>' +
            '<h3 class="dash-action-title mt-2">' + app.esc(shorten(nextTopic.title, 38)) + '</h3>' +
            '<p class="dash-action-desc mt-1">' + app.esc(nextTopic.unitTitle) + ' · ~5 min read</p>' +
          '</div>' +
          '<a class="btn btn--primary dash-action-btn" href="#/topic/' + nextTopic.id + '">Read Topic →</a>' +
        '</div>'
      );
    } else {
      cards.push(
        '<div class="dash-action-box dash-action-box--lesson">' +
          '<div>' +
            '<span class="dash-action-badge dash-action-badge--green">🏆 Complete</span>' +
            '<h3 class="dash-action-title mt-2">All Topics Explored!</h3>' +
            '<p class="dash-action-desc mt-1">You have read through the entire curriculum.</p>' +
          '</div>' +
          '<a class="btn btn--primary dash-action-btn" href="#/theory">Browse Lessons →</a>' +
        '</div>'
      );
    }

    // 2. Practice quiz recommendation
    var weakUnit = findLowestScoringUnit(allUnits, quiz);
    cards.push(
      '<div class="dash-action-box dash-action-box--quiz">' +
        '<div>' +
          '<span class="dash-action-badge dash-action-badge--amber">🎯 Recommended Quiz</span>' +
          '<h3 class="dash-action-title mt-2">' + app.esc(shorten(weakUnit.name, 34)) + '</h3>' +
          '<p class="dash-action-desc mt-1">' +
            (weakUnit.hasScore
              ? 'Current best score: ' + weakUnit.score + '%. Take a 10-Q test to boost it!'
              : 'Not tested yet. Take your first quick 10-Q test!') +
          '</p>' +
        '</div>' +
        '<a class="btn btn--primary dash-action-btn" href="#/quiz/unit/' + weakUnit.id + '">Start 10-Q Quiz →</a>' +
      '</div>'
    );

    // 3. Spaced repetition memory check
    if (dueCards > 0) {
      cards.push(
        '<div class="dash-action-box dash-action-box--urgent">' +
          '<div>' +
            '<span class="dash-action-badge dash-action-badge--coral">⚡ Review Due</span>' +
            '<h3 class="dash-action-title mt-2">' + dueCards + ' Flashcard' + (dueCards === 1 ? '' : 's') + ' Waiting</h3>' +
            '<p class="dash-action-desc mt-1">Review them now to lock them into long-term memory.</p>' +
          '</div>' +
          '<a class="btn btn--primary dash-action-btn" href="#/quiz/review">Review Cards →</a>' +
        '</div>'
      );
    } else {
      cards.push(
        '<div class="dash-action-box">' +
          '<div>' +
            '<span class="dash-action-badge dash-action-badge--green">✅ Memory Safe</span>' +
            '<h3 class="dash-action-title mt-2">Zero Flashcards Due</h3>' +
            '<p class="dash-action-desc mt-1">All active questions are consolidated in your memory.</p>' +
          '</div>' +
          '<a class="btn btn--ghost dash-action-btn" href="#/quiz">Take Quick Quiz →</a>' +
        '</div>'
      );
    }

    return '<section class="dash-today-section mt-2">' +
      '<h2 class="dash-section-title"><span>🚀</span> What Should I Do Today?</h2>' +
      '<div class="dash-action-cards-grid">' + cards.join("") + '</div>' +
    '</section>';
  }

  /* Subject-by-Subject Scorecard Grid */
  function renderSubjectCards(allUnits, readMap, quiz) {
    // Show only the 5 theory units + 1 consolidated practical card for clean layout
    var theoryList = allUnits.filter(function (u) { return u.id.indexOf("unit-") === 0; });
    var pracList   = allUnits.filter(function (u) { return u.id.indexOf("prac-") === 0; });

    var cardsHtml = theoryList.map(function (u) {
      var meta = UNIT_THEMES[u.id] || { name: u.short, color: "var(--ivri-blue)", icon: "🔬", paper: "Theory" };
      var uTopics = u.topics || [];
      var done = 0;
      uTopics.forEach(function (t) { if (readMap[t.id]) done++; });
      var readP = uTopics.length ? Math.round((done / uTopics.length) * 100) : 0;

      var qn = app.questionCount(u.id);
      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      var bestScore = (rec && typeof rec.best === "number") ? rec.best : null;

      var scoreChip = bestScore !== null
        ? '<span class="dash-subj-score-badge ' + (bestScore >= 75 ? 'chip--ok' : bestScore >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
            bestScore + '% Best 🌟</span>'
        : '<span class="dash-subj-score-badge chip--subtle">Untested ⏳</span>';

      return '<div class="dash-subj-card">' +
        '<div class="dash-subj-top">' +
          '<span class="dash-subj-tag" style="background:' + meta.light + ';color:' + meta.color + '">' +
            'U' + u.no + ' · ' + meta.paper +
          '</span>' +
          scoreChip +
        '</div>' +

        '<a class="dash-subj-title" href="#/unit/' + u.id + '">' +
          '<span>' + meta.icon + '</span> ' + app.esc(u.short || u.title) +
        '</a>' +

        '<div class="dash-subj-metrics">' +
          '<div class="dash-subj-metric-row">' +
            '<span>Reading Progress</span>' +
            '<span class="dash-subj-metric-val">' + done + ' / ' + uTopics.length + ' (' + readP + '%)</span>' +
          '</div>' +
          '<div class="dash-stat-progress">' +
            '<div class="dash-stat-progress-bar" style="width:' + readP + '%;background:' + meta.color + '"></div>' +
          '</div>' +
          '<div class="dash-subj-metric-row mt-1">' +
            '<span>Question Pool</span>' +
            '<span class="dash-subj-metric-val">' + qn + ' Qs Available</span>' +
          '</div>' +
        '</div>' +

        '<div class="dash-subj-actions">' +
          '<a class="btn btn--sm btn--ghost" href="#/unit/' + u.id + '">📖 Read</a>' +
          '<a class="btn btn--sm btn--primary" href="#/quiz/unit/' + u.id + '">🎯 Quiz (' + qn + ')</a>' +
        '</div>' +
      '</div>';
    }).join("");

    // Consolidated Practical Diagnostics Card
    var totalPracTopics = pracList.reduce(function (n, p) { return n + (p.topics ? p.topics.length : 0); }, 0);
    var donePracTopics = 0;
    pracList.forEach(function (p) {
      (p.topics || []).forEach(function (t) { if (readMap[t.id]) donePracTopics++; });
    });
    var pracReadP = totalPracTopics ? Math.round((donePracTopics / totalPracTopics) * 100) : 0;
    var totalPracQ = pracList.reduce(function (n, p) { return n + app.questionCount(p.id); }, 0);

    var pracCardHtml =
      '<div class="dash-subj-card">' +
        '<div class="dash-subj-top">' +
          '<span class="dash-subj-tag" style="background:var(--ivri-teal-light);color:var(--ivri-teal)">' +
            'P1–P5 · Practical Lab' +
          '</span>' +
          '<span class="dash-subj-score-badge chip--ok">5 Units 🧫</span>' +
        '</div>' +
        '<a class="dash-subj-title" href="#/practical">' +
          '<span>🧫</span> Practical Diagnostics' +
        '</a>' +
        '<div class="dash-subj-metrics">' +
          '<div class="dash-subj-metric-row">' +
            '<span>Lab Manual Topics</span>' +
            '<span class="dash-subj-metric-val">' + donePracTopics + ' / ' + totalPracTopics + ' (' + pracReadP + '%)</span>' +
          '</div>' +
          '<div class="dash-stat-progress">' +
            '<div class="dash-stat-progress-bar" style="width:' + pracReadP + '%;background:var(--ivri-teal)"></div>' +
          '</div>' +
          '<div class="dash-subj-metric-row mt-1">' +
            '<span>Diagnostic Stains &amp; ID</span>' +
            '<span class="dash-subj-metric-val">5 Practical Units</span>' +
          '</div>' +
        '</div>' +
        '<div class="dash-subj-actions">' +
          '<a class="btn btn--sm btn--ghost" href="#/practical">📖 Lab Manual</a>' +
          '<a class="btn btn--sm btn--primary" href="#/quiz/practical">🎯 Lab Quiz</a>' +
        '</div>' +
      '</div>';

    return cardsHtml + pracCardHtml;
  }

  /* Strengths & Focus Areas */
  function renderStrengthsAndFocus(quiz) {
    var bySub = quiz.bySub || {};
    var rows = Object.keys(bySub)
      .map(function (id) {
        var r = bySub[id];
        var meta = (window.quizApp && quizApp.findSubSection) ? quizApp.findSubSection(id) : null;
        var unitId = null;
        var m = /^u(\d+)-s\d+$/.exec(id);
        if (m) unitId = "unit-" + m[1];
        return {
          id: id,
          unitId: unitId,
          icon: meta ? meta.icon : "📂",
          title: meta ? meta.title : id,
          seen: r.seen || 0,
          right: r.right || 0,
          pct: r.seen ? Math.round((r.right / r.seen) * 100) : 0
        };
      })
      .filter(function (r) { return r.seen >= 3; });

    var strong = rows.filter(function (r) { return r.pct >= 70; }).sort(function (a, b) { return b.pct - a.pct; }).slice(0, 3);
    var weak = rows.filter(function (r) { return r.pct < 70; }).sort(function (a, b) { return a.pct - b.pct; }).slice(0, 3);

    return '<section class="dash-today-section mt-4">' +
      '<h2 class="dash-section-title"><span>⚖️</span> Strengths &amp; Areas to Focus On</h2>' +
      '<p class="dash-section-sub">Simple traffic-light analysis based on your quiz responses.</p>' +
      '<div class="dash-strengths-grid">' +

        /* Green: Strong */
        '<div class="dash-strength-card dash-strength-card--strong">' +
          '<div class="dash-strength-head">' +
            '<h3 class="dash-strength-title"><span style="color:var(--ok)">🟢</span> Your Strongest Areas</h3>' +
            '<span class="chip chip--ok">70%+ Recall</span>' +
          '</div>' +
          '<div class="dash-strength-list">' +
            (strong.length
              ? strong.map(function (s) {
                  return '<div class="dash-strength-item">' +
                    '<span>' + s.icon + '</span>' +
                    '<span class="dash-strength-item-name">' + app.esc(s.title) + '</span>' +
                    '<span class="dash-strength-item-chip chip--ok">' + s.pct + '% (' + s.right + '/' + s.seen + ')</span>' +
                  '</div>';
                }).join("")
              : '<p class="small muted p-2">Answer more quiz questions to reveal your strongest topics.</p>') +
          '</div>' +
        '</div>' +

        /* Orange: Weak */
        '<div class="dash-strength-card dash-strength-card--weak">' +
          '<div class="dash-strength-head">' +
            '<h3 class="dash-strength-title"><span style="color:var(--ivri-coral)">🟠</span> Topics to Practice</h3>' +
            '<span class="chip chip--warn">&lt;70% Accuracy</span>' +
          '</div>' +
          '<div class="dash-strength-list">' +
            (weak.length
              ? weak.map(function (w) {
                  return '<div class="dash-strength-item">' +
                    '<span>' + w.icon + '</span>' +
                    '<span class="dash-strength-item-name">' + app.esc(w.title) + '</span>' +
                    '<span class="dash-strength-item-chip chip--warn">' + w.pct + '% (' + w.right + '/' + w.seen + ')</span>' +
                    (w.unitId ? '<a class="btn btn--sm btn--primary" style="padding:2px 8px;font-size:11px;" href="#/quiz/unit/' + w.unitId + '">Practice</a>' : '') +
                  '</div>';
                }).join("")
              : '<p class="small muted p-2">No weak topics recorded yet! Great accuracy across all attempts.</p>') +
          '</div>' +
        '</div>' +

      '</div>' +
    '</section>';
  }

  /* Habit Calendar (12-Week Heatmap) */
  function renderHabitCalendar(activity, streak) {
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
        (n ? n + ' study activities' : 'no activity') + '"></div>');
      d.setDate(d.getDate() + 1);
    }

    return '<div class="dash-calendar-card">' +
      '<div class="row row--between items-center">' +
        '<div>' +
          '<h3 class="dash-section-title"><span>📅</span> Daily Study Habit</h3>' +
          '<p class="dash-section-sub">Every colored square is a day you learned or quizzed.</p>' +
        '</div>' +
        '<span class="chip font-mono font-bold">' + activeDaysCount + ' / 84 Active Days</span>' +
      '</div>' +

      '<div class="dash-calendar-scroll mt-2">' +
        '<div class="dash-calendar-months">' +
          '<span>' + startMonth + '</span>' +
          '<span>' + midMonth + '</span>' +
          '<span>' + nowMonth + '</span>' +
        '</div>' +
        '<div class="dash-calendar-grid">' + cells.join("") + '</div>' +
      '</div>' +

      '<div class="dash-calendar-footer">' +
        '<div>Current streak: <b>' + streak.current + ' days</b> (Best: ' + streak.longest + 'd)</div>' +
        '<div class="row small faint items-center" style="gap:4px">' +
          '<span>Less</span>' +
          [0, 1, 2, 3, 4].map(function (l) { return '<div class="hm__cell" style="width:11px;height:11px" data-lvl="' + l + '"></div>'; }).join("") +
          '<span>More</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* Recent Quizzes List */
  function renderRecentQuizzes(quiz) {
    var list = (quiz.attempts || []).slice(-5).reverse();

    if (!list.length) {
      return '<div class="dash-history-card">' +
        '<div class="row row--between items-center">' +
          '<div>' +
            '<h3 class="dash-section-title"><span>🎯</span> Recent Quiz Scores</h3>' +
            '<p class="dash-section-sub">Your last test attempts appear here.</p>' +
          '</div>' +
          '<a class="small" href="#/quiz">Take Test →</a>' +
        '</div>' +
        '<div class="card p-4 text-center mt-3 text-muted">' +
          'No quiz attempts recorded yet.<br>' +
          '<a class="btn btn--primary btn--sm mt-2" href="#/quiz">Start Your First Quiz</a>' +
        '</div>' +
      '</div>';
    }

    return '<div class="dash-history-card">' +
      '<div class="row row--between items-center">' +
        '<div>' +
          '<h3 class="dash-section-title"><span>🎯</span> Recent Quiz Scores</h3>' +
          '<p class="dash-section-sub">Your last ' + list.length + ' test results.</p>' +
        '</div>' +
        '<a class="btn btn--sm btn--ghost" href="#/quiz/analysis">Full History →</a>' +
      '</div>' +

      '<div class="stack mt-2">' +
        list.map(function (a) {
          var p = app.pct(a.correct, a.total);
          var dt = new Date(a.at);
          var dateStr = dt.toLocaleDateString(undefined, { month: "short", day: "numeric" });
          var timeStr = dt.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
          var chipCls = p >= 75 ? 'chip--ok' : p >= 50 ? 'chip--warn' : 'chip--danger';
          return '<div class="dash-history-row">' +
            '<div>' +
              '<div class="dash-history-title">' + app.esc(a.label || "Microbiology Quiz") + '</div>' +
              '<div class="dash-history-meta">' + dateStr + ' at ' + timeStr + (a.seconds ? ' · ' + Math.max(1, Math.round(a.seconds / 60)) + ' min' : '') + '</div>' +
            '</div>' +
            '<div class="row items-center gap-2">' +
              '<span class="chip ' + chipCls + ' font-bold">' + a.correct + ' / ' + a.total + ' (' + p + '%)</span>' +
            '</div>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  /* Study Vault Snapshot */
  function renderStudyVault(bmsCount, notesCount, totalHl, qaCount) {
    return '<section class="dash-today-section mt-4">' +
      '<div class="row row--between items-center">' +
        '<div>' +
          '<h2 class="dash-section-title"><span>📔</span> Personal Study Vault</h2>' +
          '<p class="dash-section-sub">Quick access to your saved clinical notes and bookmarks.</p>' +
        '</div>' +
        '<a class="btn btn--sm btn--ghost" href="#/library">Open Library →</a>' +
      '</div>' +
      '<div class="dash-vault-grid">' +
        '<a class="dash-vault-tile" href="#/library">' +
          '<span class="dash-stat-icon">⭐</span>' +
          '<div class="dash-vault-tile-val">' + bmsCount + '</div>' +
          '<div class="dash-vault-tile-title">Bookmarked Topics</div>' +
          '<div class="dash-vault-tile-sub">Saved for revision</div>' +
        '</a>' +
        '<a class="dash-vault-tile" href="#/library">' +
          '<span class="dash-stat-icon">📝</span>' +
          '<div class="dash-vault-tile-val">' + notesCount + '</div>' +
          '<div class="dash-vault-tile-title">Personal Notes</div>' +
          '<div class="dash-vault-tile-sub">Clinical observations</div>' +
        '</a>' +
        '<a class="dash-vault-tile" href="#/library">' +
          '<span class="dash-stat-icon">🖍️</span>' +
          '<div class="dash-vault-tile-val">' + totalHl + '</div>' +
          '<div class="dash-vault-tile-title">Passages Highlighted</div>' +
          '<div class="dash-vault-tile-sub">Key high-yield lines</div>' +
        '</a>' +
        '<a class="dash-vault-tile" href="#/qa">' +
          '<span class="dash-stat-icon">💬</span>' +
          '<div class="dash-vault-tile-val">' + qaCount + '</div>' +
          '<div class="dash-vault-tile-title">Exam Q&amp;A Solved</div>' +
          '<div class="dash-vault-tile-sub">Model answers reviewed</div>' +
        '</a>' +
      '</div>' +
    '</section>';
  }

  /* Event Listeners */
  function attachEvents(host) {
    var examInput = host.querySelector("#examdateinput");
    if (examInput) {
      examInput.addEventListener("change", function () {
        store.setExamDate(examInput.value);
        render(host);
      });
    }
    var examClear = host.querySelector("#examdateclear");
    if (examClear) {
      examClear.addEventListener("click", function () {
        store.setExamDate("");
        render(host);
      });
    }
  }

  return {
    render: render
  };
})();

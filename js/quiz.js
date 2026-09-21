/* ============================================================
   quiz.js  —  The Veterinary Microbiology Quiz Engine
   ------------------------------------------------------------
   Features:
     - 1,080 Curriculum-standard Questions across Units 1 to 6
     - Strict 2 : 1 : 1 Ratio (90 MCQ : 45 TF : 45 FIB per unit)
     - 32 Thematic Sub-sections with dedicated module testing
     - Sequence Mode (Curriculum order) vs. Shuffle Mode (Randomized)
     - EdTech UI with live feedback, keyboard shortcuts & streak awards
     - Spaced Repetition (SRS) integration & Exam Simulation
   ============================================================ */

var quizApp = (function () {

  var host;                 // container element
  var run = null;           // active run state

  /* Sub-section metadata for Units 1 to 6 */
  var subSectionsByUnit = {
    "unit-1": [
      { id: "u1-s1", icon: "🔬", title: "Bacterial Morphology & Stains", desc: "Cellular anatomy, Gram staining, Ziehl-Neelsen, capsules, spores & motility" },
      { id: "u1-s2", icon: "🧪", title: "Physiology, Genetics & Resistance", desc: "Nutritional requirements, growth curves, plasmids, transformation & ABST" },
      { id: "u1-s3", icon: "🧫", title: "Gram-Positive Pathogens", desc: "Staphylococcus, Streptococcus, Bacillus anthracis, Clostridium & Mycobacterium" },
      { id: "u1-s4", icon: "🦠", title: "Gram-Negative Pathogens", desc: "E. coli, Salmonella, Klebsiella, Pasteurella, Mannheimia & Brucella" },
      { id: "u1-s5", icon: "🧬", title: "Anaerobes, Spirochetes & Atypicals", desc: "Fusobacterium, Leptospira, Mycoplasma, Chlamydia & Rickettsiales" }
    ],
    "unit-2": [
      { id: "u2-s1", icon: "🍄", title: "General Mycology & Morphology", desc: "Fungal classification, slide culture, SDA cultivation & LPCB mounts" },
      { id: "u2-s2", icon: "🧫", title: "Yeasts & Opportunistic Mycoses", desc: "Candida albicans, Cryptococcus neoformans, Malassezia & Aspergillus" },
      { id: "u2-s3", icon: "🔬", title: "Dermatophytes & Dimorphic Fungi", desc: "Microsporum, Trichophyton, Histoplasma, Blastomyces & Rhinosporidium" },
      { id: "u2-s4", icon: "🌾", title: "Mycotoxins & Deep Mycoses", desc: "Aflatoxins, ochratoxins, T-2 toxin, mycotic abortion & mycotic mastitis" }
    ],
    "unit-3": [
      { id: "u3-s1", icon: "🧬", title: "Recombinant DNA & Cloning Vectors", desc: "Plasmids, bacteriophages, restriction enzymes, ligation & transformation" },
      { id: "u3-s2", icon: "🧪", title: "Blotting, PCR & Molecular Probes", desc: "Southern/Northern/Western blotting, PCR variants, primers & gel analysis" },
      { id: "u3-s3", icon: "💻", title: "Sequencing, Bioinformatics & IPR", desc: "Sanger sequencing, DNA fingerprinting, BLAST, gene banks & patent ethics" }
    ],
    "unit-4": [
      { id: "u4-s1", icon: "🛡️", title: "Immune Architecture & Innate Immunity", desc: "Thymus, bursa, spleen, lymph nodes, phagocytosis & complement pathways" },
      { id: "u4-s2", icon: "💉", title: "Antigens, Antibodies & Hybridomas", desc: "Immunoglobulin classes, monoclonal antibodies, adjuvants & epitopes" },
      { id: "u4-s3", icon: "🧬", title: "Cell-Mediated Immunity & MHC", desc: "T-cell receptors, antigen processing, MHC class I/II & cytokine networks" },
      { id: "u4-s4", icon: "⚠️", title: "Hypersensitivity & Autoimmunity", desc: "Anaphylaxis, Arthus reaction, DTH tuberculin test & tolerance breakdown" },
      { id: "u4-s5", icon: "🔬", title: "Serological Assays & Vaccines", desc: "Agglutination, AGID, ELISA, inactivated vs live vaccines & biologics" }
    ],
    "unit-5": [
      { id: "u5-s1", icon: "🦠", title: "General Virology & Replication", desc: "Viral symmetry, envelopes, Baltimore classification, CPE & egg culture" },
      { id: "u5-s2", icon: "🧬", title: "RNA Animal Viruses I", desc: "IBDV (Gumboro), Bluetongue, African horse sickness, NDV & PPR virus" },
      { id: "u5-s3", icon: "🔬", title: "RNA Animal Viruses II", desc: "Rabies, Influenza (AI/SI), FMD Aphthovirus & Classical Swine Fever" },
      { id: "u5-s4", icon: "🧫", title: "DNA Animal Viruses", desc: "Capripox, Lumpy skin disease, Marek's disease, IBR/BHV-1 & Parvovirus" },
      { id: "u5-s5", icon: "🐑", title: "Retroviruses, Prions & African Swine Fever", desc: "Bovine leukemia, Avian leukosis, Scrapie, BSE & Asfarviridae" }
    ]
  };

  function getSubSectionMeta(unitId, subId) {
    if (!subId || subId === "all") return null;
    var list = subSectionsByUnit[unitId] || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === subId) return list[i];
    }
    return null;
  }

  function resetRun() {
    run = null;
  }

  /* ============================================================
     BUILDING A QUESTION SET
     ============================================================ */
  function bankFor(unitIds, formats, subSectionId) {
    var out = [];
    unitIds.forEach(function (uid) {
      var b = (window.quizBank || {})[uid];
      if (!b) return;
      formats.forEach(function (f) {
        (b[f] || []).forEach(function (q, i) {
          if (!q.q || !String(q.q).trim()) return;   // skip empty template rows
          if (subSectionId && subSectionId !== "all" && q.subSection !== subSectionId) return;
          out.push({
            key: uid + ":" + f + ":" + i,
            format: f,
            unitId: uid,
            subSection: q.subSection || null,
            q: q.q,
            o: q.o,
            a: q.a,
            a_display: q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a),
            e: q.e,
            topicId: q.topicId || null,
            diff: q.diff || 1
          });
        });
      });
    });
    return out;
  }

  function scopeUnits(kind, id) {
    if (kind === "unit") return [id];
    if (kind === "paper") {
      var p = syllabus.meta.papers.filter(function (x) { return x.id === id; })[0];
      return p ? p.units.map(function (n) { return "unit-" + n; }) : [];
    }
    if (kind === "grand") return syllabus.theory.map(function (u) { return u.id; });
    if (kind === "practical") return syllabus.practical.map(function (u) { return u.id; });
    return [];
  }

  function shuffle(a) {
    var copy = a.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
    }
    return copy;
  }

  function countAvailable(unitIds, subSectionId) {
    return bankFor(unitIds, ["mcq", "tf", "fib"], subSectionId).length;
  }

  // Sequence mode keeps the curriculum order, but picks up from the first
  // question that has not been seen yet — so taking a 20-question test twice
  // does not simply repeat the same first 20 questions. It wraps around once
  // every question in the pool has been seen.
  function sequenceSlice(pool, count) {
    var srs = store.getSrs() || {};
    var startAt = 0;
    for (var i = 0; i < pool.length; i++) {
      if (!srs[pool[i].key]) { startAt = i; break; }
    }
    var out = pool.slice(startAt, startAt + count);
    if (out.length < count) out = out.concat(pool.slice(0, count - out.length));
    return out;
  }

  /* ============================================================
     ROUTER ENTRY POINT
     ============================================================ */
  function render(container, params) {
    host = container;
    var kind = params.a;

    // A quiz is running. Going back to the hub (or to any other quiz screen)
    // means the student wants to leave it, so save it and let them resume from
    // the hub later — being unable to navigate away would trap them in the run.
    if (run && run.active) {
      if (kind === "resume") { paintRun(); return; }
      saveRun();
      stopRun(true);
    }

    if (kind === "resume") { resumeRun(); return; }
    if (!kind) { renderHub(); return; }
    if (kind === "analysis") { renderAnalysis(); return; }
    if (kind === "attempt")  { renderAttemptReview(params.b); return; }
    if (kind === "unit")      { renderSetup("unit", params.b); return; }
    if (kind === "paper")     { renderSetup("paper", params.b); return; }
    if (kind === "grand")     { renderSetup("grand", null); return; }
    if (kind === "practical") { renderSetup("practical", null); return; }
    if (kind === "review")    { renderReview(); return; }
    renderHub();
  }

  /* ============================================================
     HUB
     ============================================================ */
  function renderHub() {
    resetRun();

    var theoryIds = syllabus.theory.map(function (u) { return u.id; });
    var pracIds = syllabus.practical.map(function (u) { return u.id; });
    var totalAll = countAvailable(theoryIds.concat(pracIds));
    var due = store.dueSrs().length;
    var q = store.getQuiz();

    var unitRows = syllabus.theory.map(function (u) {
      var n = countAvailable([u.id]);
      var rec = q.byUnit["unit:" + u.id];
      var subList = subSectionsByUnit[u.id] || [];
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">U' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' +
          (n ? '<b>' + n + ' questions</b> (' + subList.length + ' modular sub-sections • 2:1:1 ratio)' : 'No questions added yet') +
        '</span></span>' +
        '<span class="tlist__right">' +
          (rec ? '<span class="chip chip--ok">Best ' + rec.best + '%</span>' : '') +
          (n ? app.icon("chevron", "faint") : '') +
        '</span></a>';
    }).join("");

    var pracRows = syllabus.practical.map(function (u) {
      var n = countAvailable([u.id]);
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">P' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' + (n ? n + ' questions' : 'No questions added yet') + '</span></span>' +
        '<span class="tlist__right">' + (n ? app.icon("chevron", "faint") : '') + '</span></a>';
    }).join("");

    host.innerHTML =
      '<div class="pagehead quiz-hub-head">' +
        '<div class="row row--wrap items-center gap-2 mb-2">' +
          '<span class="chip chip--accent font-mono">🌟 ' + totalAll + ' Questions Bank</span>' +
          '<span class="chip chip--ok">Exact 2:1:1 Ratio (90 MCQ • 45 T/F • 45 FIB)</span>' +
          '<span class="chip">32 Sub-sections</span>' +
        '</div>' +
        '<h1>' + app.icon("quiz") + ' Veterinary Microbiology Examination Suite</h1>' +
        '<p class="lede">Test individual sub-sections, full units, paper-wise or grand exams. ' +
        'Choose between <b>Sequence Mode</b> (curriculum order) or <b>Shuffle Mode</b> (randomized), with instant feedback and Spaced Repetition queue.</p>' +
      '</div>' +

      (totalAll === 0
        ? '<div class="empty"><div class="empty__icon">' + app.icon("quiz") + '</div><h3>The question bank is empty</h3>' +
          '<p>Add questions in <b>data/data-quiz.JS</b>.</p></div>'
        : '') +

      resumeCardHtml() +

      '<h2 class="mt-8 flex items-center gap-2"><span>🎯</span> Comprehensive Mock Tests</h2>' +
      '<div class="grid grid--3 mt-4">' +
        modeCard("Paper I", "Bacteriology, Mycology & Biotech (Units 1, 2, 3)", countAvailable(scopeUnits("paper", "paper-1")), "#/quiz/paper/paper-1", false, "theory") +
        modeCard("Paper II", "Immunology & Virology (Units 4, 5)", countAvailable(scopeUnits("paper", "paper-2")), "#/quiz/paper/paper-2", false, "theory") +
        modeCard("Grand test", "All 5 theory units", countAvailable(theoryIds), "#/quiz/grand", false, "trophy") +
        modeCard("Practical", "All practical units", countAvailable(pracIds), "#/quiz/practical", false, "practical") +
        modeCard("Smart Review", due + " question" + (due === 1 ? "" : "s") + " due today", due, "#/quiz/review", true, "repeat") +
      '</div>' +

      '<a class="card card--link an-entry mt-4" href="#/quiz/analysis">' +
        '<div class="row items-center gap-3">' +
          '<span class="an-entry__icon">📊</span>' +
          '<div>' +
            '<b>Review &amp; Analysis</b>' +
            '<p class="small muted mt-1">' +
              (q.attempts && q.attempts.length
                ? q.attempts.length + ' test' + (q.attempts.length === 1 ? '' : 's') +
                  ' recorded · accuracy trend, weakest sub-sections, most-missed questions and a question-by-question review of every test'
                : 'Your accuracy trend, weak areas and full test history will appear here once you take a quiz') +
            '</p>' +
          '</div>' +
          '<div class="push"></div>' +
          app.icon("chevron", "faint") +
        '</div>' +
      '</a>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>📚</span> Theory Units with Modular Sub-sections</h2>' +
      '<p class="small muted">Click any unit below to practice specific sub-sections or the full unit in Sequence or Shuffle mode.</p>' +
      '<div class="tlist mt-4">' + unitRows + '</div>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>🔬</span> Practical Diagnostic Units</h2>' +
      '<div class="tlist mt-4">' + pracRows + '</div>';

    var discard = document.getElementById("discardrun");
    if (discard) {
      discard.addEventListener("click", function () {
        if (confirm("Discard the saved quiz? Your answers in it will be lost.")) {
          store.clearRunState();
          renderHub();
        }
      });
    }
  }

  // Card offering to continue a quiz that was left unfinished.
  function resumeCardHtml() {
    var s = savedRun();
    if (!s) return "";
    var done = (s.answers || []).filter(isAnswered).length;
    var when = new Date(s.savedAt || Date.now());
    return '<div class="card resume-quiz-card mt-6">' +
      '<div class="row row--wrap items-center gap-3">' +
        '<span class="resume-quiz-card__icon">⏸️</span>' +
        '<div>' +
          '<b>Continue your unfinished quiz</b>' +
          '<p class="small muted mt-1">' + app.esc(s.label || "Quiz") + ' · ' + done + ' of ' + s.keys.length +
          ' answered · saved ' + when.toLocaleDateString(undefined, { month: "short", day: "numeric" }) +
          ' at ' + when.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + '</p>' +
        '</div>' +
        '<div class="push"></div>' +
        '<button class="btn btn--ghost btn--sm" id="discardrun">Discard</button>' +
        '<a class="btn btn--primary" href="#/quiz/resume">Resume quiz →</a>' +
      '</div>' +
    '</div>';
  }

  function modeCard(title, sub, n, href, isReview, ico) {
    var disabled = !n;
    var iconHtml = ico ? app.icon(ico) : (isReview ? app.icon("repeat") : app.icon("quiz"));
    return '<a class="card card--link modecard' + (disabled ? ' is-disabled' : '') + '" href="' +
      (disabled ? '#/quiz' : href) + '">' +
      '<div class="row"><span class="card__title" style="display:flex;align-items:center;gap:6px;">' + iconHtml + ' ' + title + '</span>' +
      '<span class="chip push' + (n ? ' chip--accent' : '') + '">' + n + '</span></div>' +
      '<p class="card__desc">' + sub + '</p>' +
      (disabled ? '<p class="small faint mt-2">' +
        (isReview ? 'Nothing due — answer some questions first.' : 'No questions added yet.') + '</p>' : '') +
      '</a>';
  }

  /* ============================================================
     SETUP SCREEN WITH SUB-SECTION PICKER & SEQUENCE/SHUFFLE TOGGLE
     ============================================================ */
  function renderSetup(kind, id) {
    resetRun();
    var unitIds = scopeUnits(kind, id);
    var subSections = (kind === "unit" && subSectionsByUnit[id]) ? subSectionsByUnit[id] : [];

    var label = kind === "unit"
      ? "Unit " + (syllabus.unitById[id] || {}).no + " — " + (syllabus.unitById[id] || {}).short
      : kind === "paper"
        ? (id === "paper-1" ? "Paper I — Units 1, 2, 3" : "Paper II — Units 4, 5")
        : kind === "grand" ? "Grand Test — All Theory Units" : "Practical Units";

    var state = {
      subSectionId: "all",
      orderMode: "sequence", // 'sequence' or 'shuffle'
      formats: ["mcq", "tf", "fib"],
      count: 20,
      exam: false,
      minutes: 20
    };

    function updateView() {
      var pool = bankFor(unitIds, state.formats, state.subSectionId);
      var allPool = bankFor(unitIds, ["mcq", "tf", "fib"], state.subSectionId);

      var counts = { mcq: 0, tf: 0, fib: 0 };
      allPool.forEach(function (q) { counts[q.format]++; });
      var maxN = pool.length;

      var presets = [10, 20, 30, 45, 90, maxN].filter(function (n, idx, arr) {
        return n <= maxN && arr.indexOf(n) === idx;
      });
      if (!presets.length) presets = [maxN];
      if (state.count > maxN || presets.indexOf(state.count) === -1) {
        state.count = presets[Math.min(1, presets.length - 1)] || maxN;
      }

      var subSecHtml = "";
      if (subSections.length > 0) {
        var allCount = bankFor(unitIds, ["mcq", "tf", "fib"], "all").length;
        subSecHtml =
          '<div class="setup__row subsec-selector-row">' +
            '<div>' +
              '<b class="flex items-center gap-2"><span>📂</span> Choose Sub-section / Module</b>' +
              '<p class="small muted">Target a specific topic or practice all sub-sections in the unit.</p>' +
            '</div>' +
            '<div class="subsec-grid mt-3">' +
              '<button type="button" class="subsec-card' + (state.subSectionId === 'all' ? ' is-active' : '') + '" data-sub="all">' +
                '<div class="subsec-card__head">' +
                  '<span class="subsec-card__icon">🌟</span>' +
                  '<span class="subsec-card__title">All Sub-sections (Full Unit)</span>' +
                  '<span class="chip chip--accent subsec-card__badge">' + allCount + ' Qs</span>' +
                '</div>' +
                '<p class="subsec-card__desc">Complete unit test covering all topics in rigorous 2:1:1 exam ratio.</p>' +
              '</button>' +
              subSections.map(function (sub) {
                var c = bankFor(unitIds, ["mcq", "tf", "fib"], sub.id).length;
                var active = state.subSectionId === sub.id ? ' is-active' : '';
                return '<button type="button" class="subsec-card' + active + '" data-sub="' + sub.id + '">' +
                  '<div class="subsec-card__head">' +
                    '<span class="subsec-card__icon">' + sub.icon + '</span>' +
                    '<span class="subsec-card__title">' + app.esc(sub.title) + '</span>' +
                    '<span class="chip subsec-card__badge">' + c + ' Qs</span>' +
                  '</div>' +
                  '<p class="subsec-card__desc">' + app.esc(sub.desc) + '</p>' +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>';
      }

      var currentSubMeta = getSubSectionMeta(id, state.subSectionId);
      var subHeadingBadge = currentSubMeta
        ? '<span class="chip chip--accent">' + currentSubMeta.icon + ' ' + app.esc(currentSubMeta.title) + '</span>'
        : '<span class="chip chip--accent">🌟 All ' + (subSections.length || '') + ' Sub-sections</span>';

      host.innerHTML =
        '<div class="pagehead">' +
          '<div class="row row--wrap items-center gap-2 mb-2">' +
            '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Hub</a>' +
            subHeadingBadge +
            '<span class="chip font-mono">' + maxN + ' Available Questions</span>' +
          '</div>' +
          '<h1>' + app.esc(label) + '</h1>' +
          '<p class="lede">Configure your test parameters below. Pick question count, format filters, and test mode.</p>' +
        '</div>' +

        '<div class="card setup quiz-setup-card">' +
          subSecHtml +

          /* Order Mode Toggle (Sequence vs Shuffle) */
          '<div class="setup__row">' +
            '<div>' +
              '<b class="flex items-center gap-2"><span>🔄</span> Question Order Mode</b>' +
              '<p class="small muted">Attempt questions sequentially according to syllabus or shuffle them randomly.</p>' +
            '</div>' +
            '<div class="quiz-mode-toggle" id="ordermodetoggle">' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'sequence' ? ' is-selected' : '') + '" data-mode="sequence">' +
                '<span class="pill-icon">📋</span>' +
                '<span class="pill-label">Sequence Mode</span>' +
                '<span class="pill-sub">Curriculum order</span>' +
              '</button>' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'shuffle' ? ' is-selected' : '') + '" data-mode="shuffle">' +
                '<span class="pill-icon">🔀</span>' +
                '<span class="pill-label">Shuffle Mode</span>' +
                '<span class="pill-sub">Randomized order</span>' +
              '</button>' +
            '</div>' +
          '</div>' +

          /* Format selection */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Question Formats (2 : 1 : 1 Ratio)</b>' +
              '<p class="small muted">Select any combination of question types.</p>' +
            '</div>' +
            '<div class="row row--wrap gap-3" id="fmtbox">' +
              ['mcq', 'tf', 'fib'].map(function (f) {
                var lbl = { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blanks" }[f];
                var icon = { mcq: "🔘", tf: "⚖️", fib: "✍️" }[f];
                var count = counts[f];
                var checked = state.formats.indexOf(f) !== -1;
                return '<label class="check-pill' + (checked ? ' is-checked' : '') + (count === 0 ? ' is-disabled' : '') + '">' +
                  '<input type="checkbox" data-fmt="' + f + '"' + (checked ? ' checked' : '') + (count === 0 ? ' disabled' : '') + '> ' +
                  '<span class="check-pill__icon">' + icon + '</span>' +
                  '<span class="check-pill__label">' + lbl + '</span>' +
                  '<span class="chip chip--sm ml-1">' + count + '</span>' +
                '</label>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Question count */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Number of Questions</b>' +
              '<p class="small muted">Choose your practice length.</p>' +
            '</div>' +
            '<div class="seg" id="segcount">' +
              presets.map(function (n) {
                var isSelected = state.count === n;
                return '<button type="button" class="seg__btn' + (isSelected ? ' is-on' : '') + '" data-count="' + n + '">' +
                  (n === maxN ? 'All (' + n + ')' : n) +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Exam Mode Toggle */
          '<div class="setup__row">' +
            '<div>' +
              '<b>⏱️ Exam Mode (Timed)</b>' +
              '<p class="small muted">Timed exam with no answer reveals until final submission — mirrors annual university exam.</p>' +
            '</div>' +
            '<label class="switch"><input type="checkbox" id="exammode"' + (state.exam ? ' checked' : '') + '><span></span></label>' +
          '</div>' +

          /* Time Limit selector */
          '<div class="setup__row" id="timerow"' + (state.exam ? '' : ' hidden') + '>' +
            '<div>' +
              '<b>Time Limit</b>' +
              '<p class="small muted">Automatic submission when clock reaches zero.</p>' +
            '</div>' +
            '<div class="seg" id="segtime">' +
              [10, 20, 30, 45, 60].map(function (m) {
                return '<button type="button" class="seg__btn' + (state.minutes === m ? ' is-on' : '') + '" data-min="' + m + '">' + m + ' min</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Action Bar */
          '<div class="row mt-8 items-center">' +
            '<a class="btn btn--ghost" href="#/quiz">Cancel</a>' +
            '<div class="push"></div>' +
            '<button class="btn btn--primary btn--lg" id="startbtn">' +
              '🚀 Start Quiz (' + Math.min(state.count, maxN) + ' Questions)' +
            '</button>' +
          '</div>' +
        '</div>';

      attachEvents();
    }

    function attachEvents() {
      // Sub-section cards
      document.querySelectorAll(".subsec-card").forEach(function (card) {
        card.addEventListener("click", function () {
          var sId = card.getAttribute("data-sub");
          state.subSectionId = sId;
          updateView();
        });
      });

      // Order Mode Toggle
      document.querySelectorAll("#ordermodetoggle .toggle-pill").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.orderMode = btn.getAttribute("data-mode");
          updateView();
        });
      });

      // Formats Checkboxes
      document.querySelectorAll("[data-fmt]").forEach(function (chk) {
        chk.addEventListener("change", function () {
          var checkedFmts = Array.prototype.slice.call(document.querySelectorAll("[data-fmt]"))
            .filter(function (c) { return c.checked; })
            .map(function (c) { return c.getAttribute("data-fmt"); });
          if (!checkedFmts.length) {
            app.toast("Select at least one question format");
            chk.checked = true;
            return;
          }
          state.formats = checkedFmts;
          updateView();
        });
      });

      // Question count seg
      document.querySelectorAll("#segcount .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.count = parseInt(btn.getAttribute("data-count"), 10);
          document.querySelectorAll("#segcount .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
          var startBtn = document.getElementById("startbtn");
          if (startBtn) startBtn.textContent = '🚀 Start Quiz (' + state.count + ' Questions)';
        });
      });

      // Exam Mode
      var examChk = document.getElementById("exammode");
      if (examChk) {
        examChk.addEventListener("change", function (e) {
          state.exam = e.target.checked;
          var tRow = document.getElementById("timerow");
          if (tRow) tRow.hidden = !e.target.checked;
        });
      }

      // Time seg
      document.querySelectorAll("#segtime .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.minutes = parseInt(btn.getAttribute("data-min"), 10);
          document.querySelectorAll("#segtime .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
        });
      });

      // Start Button
      var startBtn = document.getElementById("startbtn");
      if (startBtn) {
        startBtn.addEventListener("click", function () {
          var rawPool = bankFor(unitIds, state.formats, state.subSectionId);
          if (!rawPool.length) {
            app.toast("No questions available for this selection");
            return;
          }

          var count = Math.min(state.count, rawPool.length);
          var finalQuestions = state.orderMode === "shuffle"
            ? shuffle(rawPool).slice(0, count)
            : sequenceSlice(rawPool, count);

          var runLabel = label;
          var subMeta = getSubSectionMeta(id, state.subSectionId);
          if (subMeta) {
            runLabel = subMeta.icon + " " + subMeta.title;
          }

          var unitScope = kind + (id ? ":" + id : "");
          start(finalQuestions, {
            // The sub-section is kept separate from the scope so a sub-section
            // test still counts towards its unit on the dashboard.
            scope: unitScope + (state.subSectionId !== "all" ? ":" + state.subSectionId : ""),
            unitScope: unitScope,
            label: runLabel,
            exam: state.exam,
            minutes: state.minutes,
            orderMode: state.orderMode,
            subSectionId: state.subSectionId,
            unitId: id
          });
        });
      }
    }

    updateView();
  }

  /* ============================================================
     SMART REVIEW
     ============================================================ */
  function renderReview() {
    resetRun();
    var dueKeys = store.dueSrs();
    var all = bankFor(
      syllabus.allUnits.map(function (u) { return u.id; }),
      ["mcq", "tf", "fib"]
    );
    var pool = all.filter(function (q) { return dueKeys.indexOf(q.key) !== -1; });

    if (!pool.length) {
      host.innerHTML =
        '<div class="pagehead"><span class="eyebrow">Spaced repetition</span><h1>Smart Review</h1></div>' +
        '<div class="empty"><div class="empty__icon">✅</div><h3>Nothing due right now</h3>' +
        '<p>Questions you answer wrongly come back tomorrow, then after 2, 4, 8 and 16 days ' +
        'as you keep getting them right. Take a quiz first and this queue will fill itself.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Go to the quiz hub</a></div>';
      return;
    }

    start(shuffle(pool), {
      scope: "review", unitScope: "review", label: "Smart Review",
      exam: false, minutes: 0, orderMode: "shuffle", subSectionId: "all", unitId: null
    });
  }

  /* ============================================================
     RUNNING A QUIZ
     ------------------------------------------------------------
     How answering works:
       Practice mode — ONE tap on an option answers the question.
         It locks straight away and shows correct / incorrect plus
         the explanation. There is no separate "Check answer" step.
       Exam mode — one tap selects, and the choice can be changed
         until the paper is submitted. Nothing is revealed early.

     Every answer is remembered per question, so Previous and Next
     always show exactly what was answered, with its result.
     The whole run is also saved to the device, so closing the app
     mid-quiz does not lose it — the hub offers to resume.
     ============================================================ */

  var RUN_VERSION = 2;   // bump if the saved-run shape changes

  function start(questions, opts) {
    opts = opts || {};
    var n = questions.length;
    run = {
      active: true,
      qs: questions,
      i: 0,
      answers: new Array(n).fill(null),
      checked: new Array(n).fill(false),   // per question: has it been revealed/locked?
      flagged: {},                         // { index: true } — marked for a second look
      scope: opts.scope,
      unitScope: opts.unitScope || opts.scope,
      label: opts.label,
      orderMode: opts.orderMode || "sequence",
      subSectionId: opts.subSectionId || "all",
      unitId: opts.unitId || (questions[0] ? questions[0].unitId : null),
      exam: !!opts.exam,
      minutes: opts.minutes || 0,
      endsAt: opts.endsAt || (opts.exam ? Date.now() + (opts.minutes || 20) * 60000 : 0),
      startedAt: opts.startedAt || Date.now(),
      elapsedBefore: opts.elapsedBefore || 0,
      streak: 0,
      bestStreak: 0,
      timer: null
    };
    attachKeys();
    startTimer();
    saveRun();
    paintRun();
  }

  function startTimer() {
    if (!run.exam) return;
    run.timer = setInterval(function () {
      if (!run || !run.active) { stopTimer(); return; }
      if (Date.now() >= run.endsAt) { finish(true); return; }
      var t = document.getElementById("qtimer");
      if (t) t.textContent = fmtTime(run.endsAt - Date.now());
    }, 1000);
  }

  function stopTimer() {
    if (run && run.timer) clearInterval(run.timer);
    if (run) run.timer = null;
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  }

  function fmtDuration(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m ? m + " min " + s + " s" : s + " s";
  }

  /* ---------- saving an unfinished quiz so it survives a reload ---------- */
  function saveRun() {
    if (!run || !run.active) return;
    store.setRunState({
      v: RUN_VERSION,
      keys: run.qs.map(function (q) { return q.key; }),
      answers: run.answers,
      checked: run.checked,
      flagged: run.flagged,
      i: run.i,
      scope: run.scope,
      unitScope: run.unitScope,
      label: run.label,
      orderMode: run.orderMode,
      subSectionId: run.subSectionId,
      unitId: run.unitId,
      exam: run.exam,
      minutes: run.minutes,
      endsAt: run.endsAt,
      startedAt: run.startedAt,
      savedAt: Date.now()
    });
  }

  function allQuestionsByKey() {
    var map = {};
    bankFor(syllabus.allUnits.map(function (u) { return u.id; }), ["mcq", "tf", "fib"])
      .forEach(function (q) { map[q.key] = q; });
    return map;
  }

  function savedRun() {
    var s = store.getRunState();
    if (!s || s.v !== RUN_VERSION || !s.keys || !s.keys.length) return null;
    return s;
  }

  function resumeRun() {
    var s = savedRun();
    if (!s) { renderHub(); return; }

    var map = allQuestionsByKey();
    var qs = [];
    var keep = [];
    s.keys.forEach(function (k, idx) {
      if (map[k]) { qs.push(map[k]); keep.push(idx); }   // a question edited out of the bank is dropped
    });
    if (!qs.length) { store.clearRunState(); renderHub(); return; }

    start(qs, {
      scope: s.scope, unitScope: s.unitScope, label: s.label, exam: s.exam,
      minutes: s.minutes, endsAt: s.endsAt, startedAt: s.startedAt,
      orderMode: s.orderMode, subSectionId: s.subSectionId, unitId: s.unitId
    });

    run.answers = keep.map(function (idx) { return s.answers[idx]; });
    run.checked = keep.map(function (idx) { return !!s.checked[idx]; });
    run.flagged = {};
    keep.forEach(function (idx, newIdx) { if (s.flagged && s.flagged[idx]) run.flagged[newIdx] = true; });
    run.i = Math.min(s.i || 0, qs.length - 1);

    if (run.exam && Date.now() >= run.endsAt) { finish(true); return; }
    paintRun();
  }

  /* ---------- marking ---------- */
  function normalizeText(s) {
    return String(s).toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Allows a single slipped letter in a long word, so a tiny typo in a
  // long term such as "lipopolysacharide" is not marked wrong.
  function withinOneEdit(a, b) {
    if (Math.abs(a.length - b.length) > 1) return false;
    var i = 0, j = 0, edits = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++edits > 1) return false;
      if (a.length > b.length) i++;
      else if (a.length < b.length) j++;
      else { i++; j++; }
    }
    if (i < a.length || j < b.length) edits++;
    return edits <= 1;
  }

  function isCorrect(q, given) {
    if (given === null || given === undefined || given === "") return false;
    if (q.format === "mcq") return given === q.a;
    if (q.format === "tf") return given === q.a;
    var mine = normalizeText(given);
    if (!mine) return false;
    var accepted = Array.isArray(q.a) ? q.a : [q.a];
    var singular = function (s) { return s.replace(/(ies)$/, "y").replace(/(es|s)$/, ""); };
    return accepted.some(function (acc) {
      var want = normalizeText(acc);
      if (!want) return false;
      if (want === mine) return true;
      if (singular(want) === singular(mine)) return true;   // plural vs singular
      return want.length >= 8 && withinOneEdit(mine, want);
    });
  }

  function isAnswered(v) {
    return !(v === null || v === undefined || v === "");
  }

  function answeredCount() {
    return run.answers.filter(isAnswered).length;
  }

  /* ---------- the question screen ---------- */
  function optionsHtml(q, given, reveal) {
    if (q.format === "mcq") {
      return '<div class="opts">' + (q.o || []).map(function (opt, i) {
        var cls = "opt";
        if (given === i) cls += " is-picked";
        if (reveal) {
          if (i === q.a) cls += " is-right";
          else if (given === i) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + i + '"' + (reveal ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + "ABCD".charAt(i) + '</span>' +
          '<span class="opt__text">' + app.esc(opt) + '</span>' +
          '<span class="opt__state">' + (reveal && i === q.a ? '✓' : (reveal && given === i ? '✗' : '')) + '</span>' +
        '</button>';
      }).join("") + '</div>';
    }

    if (q.format === "tf") {
      return '<div class="opts opts--2">' + [true, false].map(function (v) {
        var cls = "opt opt--tf";
        if (given === v) cls += " is-picked";
        if (reveal) {
          if (v === q.a) cls += " is-right";
          else if (given === v) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + v + '"' + (reveal ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + (v ? "T" : "F") + '</span>' +
          '<span class="opt__text">' + (v ? "True" : "False") + '</span>' +
          '<span class="opt__state">' + (reveal && v === q.a ? '✓' : (reveal && given === v ? '✗' : '')) + '</span>' +
        '</button>';
      }).join("") + '</div>';
    }

    // Fill in the blank
    return '<div class="fib-card">' +
      '<div class="fib-input-wrap">' +
        '<input type="text" id="fibinput" class="fib-input" placeholder="Type your answer here..." ' +
        'autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="done" ' +
        'value="' + app.esc(isAnswered(given) ? String(given) : "") + '"' + (reveal ? ' disabled' : '') + '>' +
        (!reveal ? '<button type="button" class="btn btn--primary" id="fibsubmit">Submit</button>' : '') +
      '</div>' +
      (reveal
        ? '<div class="fib-accepted-callout ' + (isCorrect(q, given) ? 'is-ok' : 'is-error') + '">' +
            '<span class="badge">' + (isCorrect(q, given) ? '✓ Correct' : '✗ Incorrect') + '</span>' +
            '<span class="label"><b>Standard Answer:</b> ' + app.esc(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a)) + '</span>' +
          '</div>'
        : '') +
    '</div>';
  }

  function explainHtml(q, given, reveal) {
    if (!reveal || !q.e) return "";
    var ok = isCorrect(q, given);
    return '<div class="quiz-explanation-box mt-6 animate-scale-up ' + (ok ? 'is-correct' : 'is-wrong') + '">' +
      '<div class="quiz-explanation-box__head">' +
        '<span>' + (ok ? '🎉 Correct' : '💡 Explanation & High-Yield Key Note') + '</span>' +
      '</div>' +
      '<p class="quiz-explanation-box__body">' + q.e + '</p>' +
      (q.topicId && syllabus.topicById[q.topicId]
        ? '<a class="btn btn--sm btn--ghost mt-2" href="#/topic/' + q.topicId + '">📖 Read the full lesson on ' +
          app.esc(syllabus.topicById[q.topicId].title) + ' →</a>'
        : '') +
    '</div>';
  }

  function actionsHtml() {
    var last = run.i === run.qs.length - 1;
    var revealed = run.checked[run.i];
    var right = '';

    if (run.exam) {
      right = last
        ? '<button class="btn btn--primary btn--lg" id="submitbtn">Submit paper 🏆</button>'
        : '<button class="btn btn--primary btn--lg" id="nextbtn">Next question →</button>';
    } else if (!revealed) {
      // Practice mode reveals on the tap itself; this is only for typed answers.
      right = run.qs[run.i].format === "fib"
        ? '<button class="btn btn--primary btn--lg" id="checkbtn">Check answer (Enter)</button>'
        : '<span class="small faint">Tap an option to answer</span>';
    } else {
      right = last
        ? '<button class="btn btn--primary btn--lg" id="finishbtn">Finish &amp; see results 🏆</button>'
        : '<button class="btn btn--primary btn--lg" id="nextbtn">Next question →</button>';
    }

    return '<button class="btn" id="prevbtn"' + (run.i === 0 ? ' disabled' : '') + '>← Previous</button>' +
      '<div class="push"></div>' +
      '<span class="small faint mr-3" id="qanswered">' + answeredCount() + ' of ' + run.qs.length + ' answered</span>' +
      right;
  }

  function paletteHtml() {
    return run.qs.map(function (q, idx) {
      var cls = "qpal__btn";
      if (idx === run.i) cls += " is-current";
      if (isAnswered(run.answers[idx])) {
        if (!run.exam && run.checked[idx]) {
          cls += isCorrect(run.qs[idx], run.answers[idx]) ? " is-right" : " is-wrong";
        } else {
          cls += " is-answered";
        }
      }
      if (run.flagged[idx]) cls += " is-flagged";
      return '<button type="button" class="' + cls + '" data-jump="' + idx + '" ' +
        'title="Question ' + (idx + 1) + '">' + (idx + 1) + '</button>';
    }).join("");
  }

  function paintRun() {
    if (!run || !run.active) return;
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var reveal = !run.exam && run.checked[run.i];

    var subMeta = getSubSectionMeta(q.unitId, q.subSection);
    var subBadge = subMeta
      ? '<span class="chip chip--accent"><span class="qicon">' + subMeta.icon + '</span> ' + app.esc(subMeta.title) + '</span>'
      : '';

    var diffBadge = q.diff === 1
      ? '<span class="chip chip--subtle">⭐ Foundational</span>'
      : q.diff === 2
        ? '<span class="chip chip--subtle">⭐⭐ Core UG</span>'
        : '<span class="chip chip--warn">⭐⭐⭐ Rank 1 Classic</span>';

    host.innerHTML =
      '<div class="quizrun animate-fade-in" id="quizrun">' +
        '<div class="quizrun__bar">' +
          '<button class="btn btn--sm btn--ghost" id="quitbtn">Save &amp; exit</button>' +
          '<span class="chip font-medium">' + app.esc(run.label) + '</span>' +
          '<span class="chip chip--subtle">' + (run.orderMode === "sequence" ? '📋 Sequence' : '🔀 Shuffle') + '</span>' +
          '<div class="push"></div>' +
          '<span id="qstreak">' + streakChipHtml() + '</span>' +
          (run.exam ? '<span class="chip chip--warn" id="qtimer">' + fmtTime(run.endsAt - Date.now()) + '</span>' : '') +
          '<span class="chip font-mono" id="qcounter">' + (run.i + 1) + ' / ' + run.qs.length + '</span>' +
        '</div>' +

        '<div class="bar bar--lg mt-3"><div class="bar__fill" id="qprogress" style="width:' +
          (((run.i + 1) / run.qs.length) * 100) + '%"></div></div>' +

        '<div class="qpal mt-3" id="qpalette">' + paletteHtml() + '</div>' +

        '<div class="card quizcard mt-5">' +
          '<div class="quizcard__meta">' +
            '<span class="chip chip--accent font-bold">' +
              ({ mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blank" }[q.format] || "Question") +
            '</span>' +
            '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
            subBadge +
            diffBadge +
            '<button type="button" class="btn btn--sm btn--ghost qflag' + (run.flagged[run.i] ? ' is-on' : '') +
              '" id="flagbtn" title="Mark this question for a second look">' +
              (run.flagged[run.i] ? '🚩 Flagged' : '⚑ Flag') +
            '</button>' +
          '</div>' +

          '<h2 class="quizcard__q mt-4">' + app.esc(q.q) + '</h2>' +

          '<div id="qbody">' + optionsHtml(q, given, reveal) + '</div>' +
          '<div id="qexplain">' + explainHtml(q, given, reveal) + '</div>' +
        '</div>' +

        '<div class="row mt-6 items-center" id="qactions">' + actionsHtml() + '</div>' +
      '</div>';

    wireRun();

    var fib = document.getElementById("fibinput");
    if (fib && !reveal) setTimeout(function () { fib.focus(); }, 50);
  }

  function streakChipHtml() {
    return run.streak >= 2
      ? '<span class="chip chip--accent streak-badge">🔥 Streak ' + run.streak + '</span>'
      : '';
  }

  /* ---------- answering ---------- */
  function pickAnswer(value) {
    if (!run || !run.active) return;
    if (!run.exam && run.checked[run.i]) return;      // already locked in practice mode

    run.answers[run.i] = value;

    if (run.exam) {
      // Selection only — the student may change it until the paper is submitted.
      repaintOptionStates();
      refreshMeters();
      saveRun();
      return;
    }
    revealCurrent();
  }

  function repaintOptionStates() {
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var reveal = !run.exam && run.checked[run.i];
    var els = document.querySelectorAll("#qbody .opt");
    els.forEach(function (el) {
      var raw = el.getAttribute("data-pick");
      var val = q.format === "tf" ? (raw === "true") : parseInt(raw, 10);
      el.classList.toggle("is-picked", given === val);
      if (reveal) {
        el.classList.toggle("is-right", val === q.a);
        el.classList.toggle("is-wrong", given === val && val !== q.a);
        el.disabled = true;
        var st = el.querySelector(".opt__state");
        if (st) st.textContent = val === q.a ? "✓" : (given === val ? "✗" : "");
      }
    });
  }

  function refreshMeters() {
    var a = document.getElementById("qanswered");
    if (a) a.textContent = answeredCount() + " of " + run.qs.length + " answered";
    var pal = document.getElementById("qpalette");
    if (pal) pal.innerHTML = paletteHtml();
    var st = document.getElementById("qstreak");
    if (st) st.innerHTML = streakChipHtml();
  }

  function revealCurrent() {
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    if (!isAnswered(given)) { app.toast("Please select or type an answer first"); return; }
    if (run.checked[run.i]) return;                 // never grade the same question twice

    run.checked[run.i] = true;
    var ok = isCorrect(q, given);
    store.gradeSrs(q.key, ok);

    if (ok) {
      run.streak = (run.streak || 0) + 1;
      if (run.streak > run.bestStreak) run.bestStreak = run.streak;
      var anchor = document.querySelector("#qbody .opt.is-picked") || document.getElementById("qbody");
      if (app.burstConfetti && anchor) app.burstConfetti(anchor);
      if (run.streak === 3 && app.popMilestone) app.popMilestone("🔥 3 in a row!");
      else if (run.streak === 5 && app.popMilestone) app.popMilestone("🚀 5 streak — unstoppable!");
      else if (run.streak === 10 && app.popMilestone) app.popMilestone("👑 10 streak — outstanding!");
    } else {
      run.streak = 0;
    }

    // Patch just the parts that change, so the page does not jump or flicker.
    if (q.format === "fib") {
      var body = document.getElementById("qbody");
      if (body) body.innerHTML = optionsHtml(q, given, true);
    } else {
      repaintOptionStates();
    }
    var ex = document.getElementById("qexplain");
    if (ex) ex.innerHTML = explainHtml(q, given, true);
    var act = document.getElementById("qactions");
    if (act) act.innerHTML = actionsHtml();
    refreshMeters();
    saveRun();
  }

  function goTo(idx) {
    if (!run || idx < 0 || idx >= run.qs.length) return;
    run.i = idx;
    saveRun();
    paintRun();
    var card = document.querySelector(".quizcard");
    if (card && card.scrollIntoView) card.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  /* ---------- wiring ---------- */
  function wireRun() {
    var root = document.getElementById("quizrun");
    if (!root) return;

    root.addEventListener("click", function (e) {
      var opt = e.target.closest("[data-pick]");
      if (opt && !opt.disabled) {
        var raw = opt.getAttribute("data-pick");
        var q = run.qs[run.i];
        pickAnswer(q.format === "tf" ? (raw === "true") : parseInt(raw, 10));
        return;
      }

      var jump = e.target.closest("[data-jump]");
      if (jump) { goTo(parseInt(jump.getAttribute("data-jump"), 10)); return; }

      var btn = e.target.closest("button");
      if (!btn) return;

      switch (btn.id) {
        case "checkbtn":
        case "fibsubmit":
          syncFib();
          revealCurrent();
          break;
        case "nextbtn":
          goTo(run.i + 1);
          break;
        case "prevbtn":
          goTo(run.i - 1);
          break;
        case "finishbtn":
          finish(false);
          break;
        case "submitbtn":
          submitPaper();
          break;
        case "flagbtn":
          if (run.flagged[run.i]) delete run.flagged[run.i];
          else run.flagged[run.i] = true;
          btn.classList.toggle("is-on");
          btn.innerHTML = run.flagged[run.i] ? "🚩 Flagged" : "⚑ Flag";
          refreshMeters();
          saveRun();
          break;
        case "quitbtn":
          saveRun();
          stopRun(true);
          app.toast("Saved — you can resume this quiz from the quiz hub");
          location.hash = "#/quiz";
          break;
      }
    });

    var fib = document.getElementById("fibinput");
    if (fib) {
      fib.addEventListener("input", function () { run.answers[run.i] = fib.value; });
      fib.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          syncFib();
          if (run.checked[run.i]) goTo(run.i + 1);
          else revealCurrent();
        }
      });
    }
  }

  function syncFib() {
    var fib = document.getElementById("fibinput");
    if (fib) run.answers[run.i] = fib.value;
  }

  function submitPaper() {
    var missing = run.qs.length - answeredCount();
    var msg = missing
      ? "You have " + missing + " unanswered question" + (missing === 1 ? "" : "s") + ". Submit the paper anyway?"
      : "Submit your examination paper now?";
    if (confirm(msg)) finish(false);
  }

  /* ---------- keyboard ---------- */
  var keyHandler = null;

  function attachKeys() {
    detachKeys();
    keyHandler = function (e) {
      if (!run || !run.active) return;
      if (!document.getElementById("quizrun")) return;        // quiz screen is not on display
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      var q = run.qs[run.i];
      var locked = !run.exam && run.checked[run.i];

      if (!locked) {
        if (q.format === "mcq") {
          var map = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
          var k = map[String(e.key).toLowerCase()];
          if (k !== undefined && k < (q.o || []).length) { e.preventDefault(); pickAnswer(k); return; }
        } else if (q.format === "tf") {
          var key = String(e.key).toLowerCase();
          if (key === "t" || key === "1") { e.preventDefault(); pickAnswer(true); return; }
          if (key === "f" || key === "2") { e.preventDefault(); pickAnswer(false); return; }
        }
      }

      if (e.key === "ArrowRight") { e.preventDefault(); goTo(run.i + 1); return; }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(run.i - 1); return; }

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var b = document.getElementById("checkbtn") || document.getElementById("nextbtn") ||
                document.getElementById("finishbtn") || document.getElementById("submitbtn");
        if (b) b.click();
      }
    };
    window.addEventListener("keydown", keyHandler);
  }

  function detachKeys() {
    if (keyHandler) window.removeEventListener("keydown", keyHandler);
    keyHandler = null;
  }

  // Ends the active run. keepSaved = true leaves the saved copy in place so
  // the student can resume it later from the hub.
  function stopRun(keepSaved) {
    stopTimer();
    detachKeys();
    if (!keepSaved) store.clearRunState();
    run = null;
  }

  function resetRun() {
    stopTimer();
    detachKeys();
    run = null;
  }

  /* ============================================================
     RESULTS & ANALYTICS
     ============================================================ */
  function finish(timedOut) {
    if (!run || !run.active) return;

    var correct = 0;
    var wrongList = [];
    var formatStats = { mcq: { total: 0, right: 0 }, tf: { total: 0, right: 0 }, fib: { total: 0, right: 0 } };
    var bySub = {};
    var byTopic = {};
    var byDiff = {};
    var log = [];

    run.qs.forEach(function (q, i) {
      var ok = isCorrect(q, run.answers[i]);
      log.push({ k: q.key, ok: ok ? 1 : 0, g: run.answers[i] });
      var d = String(q.diff || 1);
      var dd = byDiff[d] || (byDiff[d] = { seen: 0, right: 0 });
      dd.seen++; if (ok) dd.right++;
      if (!formatStats[q.format]) formatStats[q.format] = { total: 0, right: 0 };
      formatStats[q.format].total++;
      if (ok) { correct++; formatStats[q.format].right++; }
      else wrongList.push({ q: q, given: run.answers[i], idx: i });

      if (q.subSection) {
        var s = bySub[q.subSection] || (bySub[q.subSection] = { seen: 0, right: 0 });
        s.seen++; if (ok) s.right++;
      }
      if (q.topicId) {
        var t = byTopic[q.topicId] || (byTopic[q.topicId] = { seen: 0, right: 0 });
        t.seen++; if (ok) t.right++;
      }

      // In exam mode nothing was graded during the paper, so grade it all now.
      // In practice mode each question was already graded the moment it was
      // revealed; only the ones left untouched still need recording.
      if (run.exam || !run.checked[i]) store.gradeSrs(q.key, ok);
    });

    var total = run.qs.length;
    var percent = app.pct(correct, total);
    var seconds = Math.max(1, Math.round((Date.now() - run.startedAt) / 1000));

    store.saveAttempt({
      at: Date.now(),
      scope: run.scope,
      unitScope: run.unitScope,
      subSectionId: run.subSectionId,
      unitId: run.unitId,
      label: run.label,
      total: total,
      correct: correct,
      attempted: answeredCount(),
      exam: run.exam,
      timedOut: !!timedOut,
      orderMode: run.orderMode,
      minutes: Math.max(1, Math.round(seconds / 60)),
      seconds: seconds,
      bestStreak: run.bestStreak,
      formats: formatStats,
      bySub: bySub,
      byTopic: byTopic,
      byDiff: byDiff,
      log: log
    });

    var label = run.label;
    var orderMode = run.orderMode;
    var exam = run.exam;
    var bestStreak = run.bestStreak;
    var wrongKeys = wrongList.map(function (w) { return w.q.key; });
    var scope = run.scope, unitScope = run.unitScope, subSectionId = run.subSectionId, unitId = run.unitId;

    stopRun(false);   // the quiz is over: clear the saved copy

    // If the student has navigated to another section, the results screen has
    // nowhere to go — the attempt is saved and that is what matters.
    if (!host || !document.body.contains(host)) return;

    var verdict = percent >= 85 ? "Rank 1 Distinction" : percent >= 70 ? "Strong First Class" : percent >= 50 ? "Passing Grade" : "Needs Revision";
    var chipCls = percent >= 85 ? "chip--ok" : percent >= 70 ? "chip--accent" : percent >= 50 ? "chip--warn" : "chip--danger";

    var subRows = Object.keys(bySub).map(function (sid) {
      var meta = getSubSectionMeta(unitId, sid) || { icon: "📂", title: sid };
      var s = bySub[sid];
      var p = app.pct(s.right, s.seen);
      return { id: sid, meta: meta, p: p, s: s };
    }).sort(function (a, b) { return a.p - b.p; });

    host.innerHTML =
      '<div class="result animate-scale-up">' +
        (timedOut ? '<div class="callout mb-6"><div class="callout__title">Time expired</div>' +
          'Your paper was submitted automatically when the countdown reached zero.</div>' : '') +

        '<div class="result__ring">' + app.ringHtml(percent, 150) + '</div>' +
        '<h1 class="mt-6">' + correct + ' out of ' + total + ' correct</h1>' +

        '<div class="row row--wrap center mt-3 gap-2" style="justify-content:center">' +
          '<span class="chip ' + chipCls + ' font-bold">' + verdict + '</span>' +
          '<span class="chip">' + app.esc(label) + '</span>' +
          '<span class="chip">⏱️ ' + fmtDuration(seconds) + '</span>' +
          (bestStreak >= 3 ? '<span class="chip chip--accent">🔥 Best streak ' + bestStreak + '</span>' : '') +
          (exam ? '<span class="chip">📝 Exam mode</span>' : '') +
          '<span class="chip">' + (orderMode === "sequence" ? '📋 Sequence' : '🔀 Shuffle') + '</span>' +
        '</div>' +

        '<div class="grid grid--3 mt-6 text-left">' +
          [["mcq", "🔘", "Multiple Choice"], ["tf", "⚖️", "True / False"], ["fib", "✍️", "Fill in Blanks"]]
            .map(function (f) {
              var st = formatStats[f[0]];
              return '<div class="card stat-card">' +
                '<div class="stat-card__icon">' + f[1] + '</div>' +
                '<div>' +
                  '<div class="small muted">' + f[2] + '</div>' +
                  '<b>' + st.right + ' / ' + st.total + '</b>' +
                  '<div class="small faint">' + (st.total ? Math.round(st.right / st.total * 100) : 0) + '% accuracy</div>' +
                '</div>' +
              '</div>';
            }).join("") +
        '</div>' +

        (subRows.length > 1
          ? '<h2 class="mt-12 mb-3 text-left flex items-center gap-2"><span>📊</span> Sub-section breakdown</h2>' +
            '<div class="stack text-left">' + subRows.map(function (r) {
              return '<div class="card mb-2">' +
                '<div class="row items-center gap-2">' +
                  '<span>' + r.meta.icon + '</span>' +
                  '<b>' + app.esc(r.meta.title) + '</b>' +
                  '<div class="push"></div>' +
                  '<span class="chip ' + (r.p >= 75 ? 'chip--ok' : r.p >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                    r.s.right + '/' + r.s.seen + ' · ' + r.p + '%</span>' +
                '</div>' +
                '<div class="bar mt-2"><div class="bar__fill" style="width:' + r.p + '%"></div></div>' +
              '</div>';
            }).join("") + '</div>'
          : '') +

        (wrongList.length
          ? '<h2 class="mt-12 mb-4 text-left flex items-center gap-2"><span>🔍</span> Review of missed questions (' + wrongList.length + ')</h2>' +
            '<div class="stack text-left">' + wrongList.map(function (w, idx) {
              var q = w.q;
              var right = q.format === "mcq" ? (q.o || [])[q.a]
                : q.format === "tf" ? (q.a ? "True" : "False")
                : (q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a));
              var mine = !isAnswered(w.given) ? "Not answered"
                : q.format === "mcq" ? (q.o || [])[w.given]
                : q.format === "tf" ? (w.given ? "True" : "False")
                : w.given;
              return '<div class="card mb-3">' +
                '<div class="row row--wrap items-center gap-2 mb-2">' +
                  '<span class="chip chip--accent">#' + (idx + 1) + '</span>' +
                  '<span class="chip font-mono">' + String(q.format).toUpperCase() + '</span>' +
                  '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
                '</div>' +
                '<p><b>' + app.esc(q.q) + '</b></p>' +
                '<div class="row row--wrap gap-4 mt-3">' +
                  '<p class="small"><span class="chip chip--danger">Your answer:</span> <b>' + app.esc(String(mine)) + '</b></p>' +
                  '<p class="small"><span class="chip chip--ok">Correct answer:</span> <b>' + app.esc(String(right)) + '</b></p>' +
                '</div>' +
                (q.e ? '<div class="callout mt-3"><div class="callout__title">High-yield explanation</div>' + q.e + '</div>' : '') +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm mt-3" href="#/topic/' + q.topicId + '">📖 Read the lesson on ' + app.esc(syllabus.topicById[q.topicId].title) + '</a>' : '') +
              '</div>';
            }).join("") + '</div>'
          : '<div class="callout mt-8"><div class="callout__title">🏆 Clean sweep — 100%!</div>' +
            'Every single question answered correctly. Excellent work.</div>') +

        '<div class="row row--wrap mt-12 gap-3" style="justify-content:center">' +
          (wrongKeys.length
            ? '<button class="btn btn--primary btn--lg" id="retrywrong">🔁 Retry the ' + wrongKeys.length + ' missed question' + (wrongKeys.length === 1 ? '' : 's') + '</button>'
            : '') +
          '<a class="btn btn--lg" href="#/quiz">Back to quiz hub</a>' +
          '<a class="btn btn--lg" href="#/dashboard">View my dashboard</a>' +
        '</div>' +
      '</div>';

    var retry = document.getElementById("retrywrong");
    if (retry) {
      retry.addEventListener("click", function () {
        var map = allQuestionsByKey();
        var pool = wrongKeys.map(function (k) { return map[k]; }).filter(Boolean);
        if (!pool.length) { app.toast("Those questions are no longer available"); return; }
        start(pool, {
          scope: scope, unitScope: unitScope, label: "🔁 Retry — " + label,
          exam: false, minutes: 0, orderMode: "shuffle",
          subSectionId: subSectionId, unitId: unitId
        });
      });
    }

    if (percent >= 75 && app.burstConfetti) {
      setTimeout(function () {
        var ring = document.querySelector(".result__ring");
        if (ring) app.burstConfetti(ring);
        if (app.popMilestone) app.popMilestone("🏆 " + verdict + ": " + percent + "%!");
      }, 250);
    }
  }

  /* ============================================================
     REVIEW & ANALYSIS
     ------------------------------------------------------------
     One screen that answers: how am I doing, what am I weakest at,
     which exact questions keep beating me, and what happened in
     each test I have taken.
     ============================================================ */

  function pctOf(right, seen) { return seen ? Math.round((right / seen) * 100) : 0; }

  function scoreChip(p) {
    return p >= 75 ? "chip--ok" : p >= 50 ? "chip--warn" : "chip--danger";
  }

  function barRow(icon, title, right, seen, extra) {
    var p = pctOf(right, seen);
    return '<div class="an-row">' +
      '<div class="row items-center gap-2">' +
        '<span>' + icon + '</span>' +
        '<b>' + app.esc(title) + '</b>' +
        '<div class="push"></div>' +
        (extra || '') +
        '<span class="chip ' + scoreChip(p) + '">' + right + '/' + seen + ' · ' + p + '%</span>' +
      '</div>' +
      '<div class="bar mt-2"><div class="bar__fill" style="width:' + p + '%"></div></div>' +
    '</div>';
  }

  // How many distinct questions of a unit have ever been answered.
  function coverageByUnit(srs) {
    var out = {};
    Object.keys(srs).forEach(function (k) {
      var uid = k.split(":")[0];
      out[uid] = (out[uid] || 0) + 1;
    });
    return out;
  }

  // Questions that keep being answered wrongly — the ones worth drilling.
  function leechList(limit) {
    var srs = store.getSrs() || {};
    var map = allQuestionsByKey();
    return Object.keys(srs)
      .filter(function (k) { return (srs[k].wrong || 0) >= 2 && map[k]; })
      .sort(function (a, b) {
        var d = (srs[b].wrong || 0) - (srs[a].wrong || 0);
        return d !== 0 ? d : (srs[a].box || 1) - (srs[b].box || 1);
      })
      .slice(0, limit || 12)
      .map(function (k) { return { key: k, q: map[k], wrong: srs[k].wrong || 0, seen: srs[k].seen || 0, box: srs[k].box || 1 }; });
  }

  function trendChart(attempts) {
    var list = attempts.slice(-12);
    if (list.length < 2) return "";
    var w = 100, h = 34;
    var step = list.length > 1 ? w / (list.length - 1) : w;
    var pts = list.map(function (a, i) {
      var p = app.pct(a.correct, a.total);
      return { x: +(i * step).toFixed(2), y: +(h - (p / 100) * h).toFixed(2), p: p };
    });
    var line = pts.map(function (pt, i) { return (i ? "L" : "M") + pt.x + " " + pt.y; }).join(" ");
    var area = line + " L" + w + " " + h + " L0 " + h + " Z";
    var first = pts[0].p, last = pts[pts.length - 1].p;
    var delta = last - first;

    return '<div class="an-trend">' +
      '<div class="row items-center gap-2">' +
        '<b>Accuracy trend</b>' +
        '<span class="small muted">last ' + list.length + ' tests</span>' +
        '<div class="push"></div>' +
        '<span class="chip ' + (delta >= 0 ? 'chip--ok' : 'chip--warn') + '">' +
          (delta >= 0 ? '▲ +' : '▼ ') + delta + ' pts</span>' +
      '</div>' +
      '<svg class="an-spark mt-3" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" aria-hidden="true">' +
        '<path d="' + area + '" fill="var(--accent-soft)"></path>' +
        '<path d="' + line + '" fill="none" stroke="var(--accent)" stroke-width="1.5" ' +
          'stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>' +
      '</svg>' +
      '<div class="row row--between small faint mt-1">' +
        '<span>' + first + '%</span><span>' + last + '%</span>' +
      '</div>' +
    '</div>';
  }

  function renderAnalysis() {
    resetRun();
    var quiz = store.getQuiz();
    var srs = store.getSrs() || {};
    var attempts = (quiz.attempts || []).filter(function (a) { return a && a.total; });

    if (!attempts.length) {
      host.innerHTML =
        '<div class="pagehead">' +
          '<div class="row row--wrap items-center gap-2 mb-2"><a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz hub</a></div>' +
          '<h1>Review &amp; Analysis</h1>' +
        '</div>' +
        '<div class="empty"><div class="empty__icon">📊</div><h3>No tests yet</h3>' +
        '<p>Take your first quiz and this page will show your accuracy trend, your weakest sub-sections, ' +
        'the exact questions that keep catching you out, and a question-by-question review of every test.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Go to the quiz hub</a></div>';
      return;
    }

    var totalQ = 0, totalRight = 0, totalSeconds = 0, bestStreak = 0;
    attempts.forEach(function (a) {
      totalQ += a.total || 0;
      totalRight += a.correct || 0;
      totalSeconds += a.seconds || (a.minutes ? a.minutes * 60 : 0);
      if ((a.bestStreak || 0) > bestStreak) bestStreak = a.bestStreak;
    });
    var overall = pctOf(totalRight, totalQ);
    var perQ = totalQ ? Math.round(totalSeconds / totalQ) : 0;
    var due = store.dueSrs().length;
    var answeredKeys = Object.keys(srs).length;
    var bankTotal = countAvailable(syllabus.allUnits.map(function (u) { return u.id; }));

    var cov = coverageByUnit(srs);
    var fmtNames = { mcq: ["🔘", "Multiple choice"], tf: ["⚖️", "True / False"], fib: ["✍️", "Fill in the blank"] };
    var diffNames = { "1": ["⭐", "Foundational"], "2": ["⭐⭐", "Core UG"], "3": ["⭐⭐⭐", "Rank 1 classic"] };

    var byFormat = quiz.byFormat || {};
    var byDiff = quiz.byDiff || {};

    var subRows = Object.keys(quiz.bySub || {}).map(function (id) {
      var r = quiz.bySub[id];
      var meta = findSubSection(id) || { icon: "📂", title: id };
      var unitId = null;
      for (var u in subSectionsByUnit) {
        if (getSubSectionMeta(u, id)) { unitId = u; break; }
      }
      return { id: id, unitId: unitId, meta: meta, seen: r.seen || 0, right: r.right || 0, pct: pctOf(r.right, r.seen) };
    }).filter(function (r) { return r.seen >= 3; }).sort(function (a, b) { return a.pct - b.pct; });

    var leeches = leechList(10);

    var unitRows = syllabus.theory.map(function (u) {
      var rec = (quiz.byUnit || {})["unit:" + u.id] || null;
      var avail = countAvailable([u.id]);
      var seen = cov[u.id] || 0;
      return {
        u: u,
        avail: avail,
        seen: Math.min(seen, avail),
        covPct: avail ? Math.round(Math.min(seen, avail) / avail * 100) : 0,
        acc: rec ? pctOf(rec.totalCorrect, rec.totalQ) : null,
        best: rec ? rec.best : null,
        runs: rec ? rec.runs : 0
      };
    });

    host.innerHTML =
      '<div class="pagehead">' +
        '<div class="row row--wrap items-center gap-2 mb-2">' +
          '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz hub</a>' +
          '<span class="chip chip--accent">' + attempts.length + ' tests</span>' +
          '<span class="chip">' + totalQ + ' questions answered</span>' +
        '</div>' +
        '<h1>📊 Review &amp; Analysis</h1>' +
        '<p class="lede">Where you stand, what is weakest, and exactly which questions keep catching you out.</p>' +
      '</div>' +

      /* headline numbers */
      '<div class="an-stats mt-5">' +
        statTile("🎯", overall + "%", "Overall accuracy", totalRight + " of " + totalQ + " correct") +
        statTile("📚", answeredKeys + "", "Bank covered", answeredKeys + " of " + bankTotal + " questions seen (" +
          pctOf(answeredKeys, bankTotal) + "%)") +
        statTile("⏱️", perQ ? perQ + "s" : "—", "Per question", perQ ? "average pace" : "not enough timing yet") +
        statTile("🔥", bestStreak + "", "Best streak", "consecutive correct") +
        statTile("🔁", due + "", "Due today", due ? "spaced review waiting" : "queue clear") +
      '</div>' +

      trendChart(attempts) +

      /* format + difficulty */
      '<div class="grid grid--2 mt-8">' +
        '<section class="card">' +
          '<h3>By question type</h3>' +
          '<div class="stack mt-3">' +
            Object.keys(fmtNames).map(function (f) {
              var r = byFormat[f] || { seen: 0, right: 0 };
              if (!r.seen) return "";
              return barRow(fmtNames[f][0], fmtNames[f][1], r.right, r.seen);
            }).join("") +
          '</div>' +
        '</section>' +
        '<section class="card">' +
          '<h3>By difficulty</h3>' +
          '<div class="stack mt-3">' +
            Object.keys(diffNames).map(function (d) {
              var r = byDiff[d] || { seen: 0, right: 0 };
              if (!r.seen) return "";
              return barRow(diffNames[d][0], diffNames[d][1], r.right, r.seen);
            }).join("") +
          '</div>' +
        '</section>' +
      '</div>' +

      /* unit table with coverage */
      '<h2 class="mt-12">Unit by unit</h2>' +
      '<p class="small muted">Coverage is how much of each unit\'s question bank you have actually seen.</p>' +
      '<div class="an-table mt-4">' +
        '<div class="an-table__head">' +
          '<span>Unit</span><span>Coverage</span><span>Accuracy</span><span>Best</span><span></span>' +
        '</div>' +
        unitRows.map(function (r) {
          return '<div class="an-table__row">' +
            '<span class="an-table__unit"><b>U' + r.u.no + '</b> ' + app.esc(r.u.short) + '</span>' +
            '<span><span class="an-mini-bar"><i style="width:' + r.covPct + '%"></i></span>' +
              '<span class="small faint">' + r.seen + '/' + r.avail + '</span></span>' +
            '<span>' + (r.acc === null ? '<span class="small faint">—</span>'
              : '<span class="chip ' + scoreChip(r.acc) + '">' + r.acc + '%</span>') + '</span>' +
            '<span>' + (r.best === null ? '<span class="small faint">—</span>' : r.best + '%') + '</span>' +
            '<span><a class="btn btn--sm" href="#/quiz/unit/' + r.u.id + '">Practise</a></span>' +
          '</div>';
        }).join("") +
      '</div>' +

      /* sub-sections */
      (subRows.length
        ? '<h2 class="mt-12">Sub-sections — weakest first</h2>' +
          '<div class="stack mt-4">' +
            subRows.slice(0, 10).map(function (r) {
              var link = r.unitId ? '<a class="btn btn--sm mr-2" href="#/quiz/unit/' + r.unitId + '">Practise</a>' : '';
              return barRow(r.meta.icon, r.meta.title, r.right, r.seen, link);
            }).join("") +
          '</div>'
        : '') +

      /* the questions that keep being missed */
      (leeches.length
        ? '<h2 class="mt-12">Questions that keep catching you out</h2>' +
          '<p class="small muted">Missed two or more times. Drilling these is the fastest way to lift your score.</p>' +
          '<div class="row row--wrap gap-2 mt-3">' +
            '<button class="btn btn--primary" id="drillleeches">🎯 Drill these ' + leeches.length + ' questions</button>' +
          '</div>' +
          '<div class="stack mt-4">' +
            leeches.map(function (l) {
              var right = l.q.format === "mcq" ? (l.q.o || [])[l.q.a]
                : l.q.format === "tf" ? (l.q.a ? "True" : "False")
                : (l.q.a_display || (Array.isArray(l.q.a) ? l.q.a[0] : l.q.a));
              return '<div class="card mb-2">' +
                '<div class="row row--wrap items-center gap-2 mb-2">' +
                  '<span class="chip chip--danger">✗ ' + l.wrong + ' time' + (l.wrong === 1 ? '' : 's') + '</span>' +
                  '<span class="chip font-mono">' + String(l.q.format).toUpperCase() + '</span>' +
                  '<span class="chip">' + app.esc((syllabus.unitById[l.q.unitId] || {}).short || l.q.unitId) + '</span>' +
                  '<span class="chip chip--subtle">Leitner box ' + l.box + '</span>' +
                '</div>' +
                '<p>' + app.esc(l.q.q) + '</p>' +
                '<p class="small mt-2"><span class="chip chip--ok">Answer</span> <b>' + app.esc(String(right)) + '</b></p>' +
                (l.q.topicId && syllabus.topicById[l.q.topicId]
                  ? '<a class="btn btn--sm mt-3" href="#/topic/' + l.q.topicId + '">📖 Read the lesson</a>' : '') +
              '</div>';
            }).join("") +
          '</div>'
        : '') +

      /* every test taken */
      '<h2 class="mt-12">Test history</h2>' +
      '<div class="an-table mt-4">' +
        '<div class="an-table__head an-table__head--hist">' +
          '<span>Test</span><span>When</span><span>Score</span><span></span>' +
        '</div>' +
        attempts.slice().reverse().map(function (a) {
          var idx = (quiz.attempts || []).indexOf(a);
          var p = app.pct(a.correct, a.total);
          var dt = new Date(a.at);
          return '<div class="an-table__row an-table__row--hist">' +
            '<span><b>' + app.esc(a.label || "Quiz") + '</b>' +
              '<span class="small faint block">' + (a.exam ? '📝 Exam · ' : '') +
              (a.orderMode === "shuffle" ? '🔀 Shuffle' : '📋 Sequence') +
              (a.seconds ? ' · ' + fmtDuration(a.seconds) : '') + '</span></span>' +
            '<span class="small">' + dt.toLocaleDateString(undefined, { month: "short", day: "numeric" }) +
              '<span class="small faint block">' + dt.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + '</span></span>' +
            '<span><span class="chip ' + scoreChip(p) + '">' + a.correct + '/' + a.total + ' · ' + p + '%</span></span>' +
            '<span>' + (a.log && a.log.length
              ? '<a class="btn btn--sm" href="#/quiz/attempt/' + idx + '">Review</a>'
              : '<span class="small faint">—</span>') + '</span>' +
          '</div>';
        }).join("") +
      '</div>';

    var drill = document.getElementById("drillleeches");
    if (drill) {
      drill.addEventListener("click", function () {
        var pool = leeches.map(function (l) { return l.q; });
        start(shuffle(pool), {
          scope: "leech", unitScope: "leech", label: "🎯 Most-missed drill",
          exam: false, minutes: 0, orderMode: "shuffle", subSectionId: "all", unitId: null
        });
      });
    }
  }

  function statTile(icon, value, label, sub) {
    return '<div class="an-stat">' +
      '<div class="an-stat__icon">' + icon + '</div>' +
      '<div class="an-stat__val">' + value + '</div>' +
      '<div class="an-stat__lbl">' + label + '</div>' +
      '<div class="an-stat__sub">' + app.esc(sub) + '</div>' +
    '</div>';
  }

  /* ---------- question-by-question review of one past test ---------- */
  function renderAttemptReview(idxRaw) {
    resetRun();
    var quiz = store.getQuiz();
    var idx = parseInt(idxRaw, 10);
    var a = (quiz.attempts || [])[idx];

    if (!a || !a.log || !a.log.length) {
      host.innerHTML =
        '<div class="pagehead"><a class="btn btn--sm btn--ghost" href="#/quiz/analysis">← Analysis</a>' +
        '<h1 class="mt-2">Test review</h1></div>' +
        '<div class="empty"><div class="empty__icon">🗂️</div><h3>This test cannot be reviewed</h3>' +
        '<p>Question-by-question detail is kept for your 30 most recent tests. Older tests keep their score only.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz/analysis">Back to analysis</a></div>';
      return;
    }

    var map = allQuestionsByKey();
    var p = app.pct(a.correct, a.total);
    var dt = new Date(a.at);
    var onlyWrong = false;

    function rowsHtml() {
      return a.log.map(function (entry, i) {
        var q = map[entry.k];
        if (!q) return "";
        if (onlyWrong && entry.ok) return "";
        var right = q.format === "mcq" ? (q.o || [])[q.a]
          : q.format === "tf" ? (q.a ? "True" : "False")
          : (q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a));
        var mine = !isAnswered(entry.g) ? "Not answered"
          : q.format === "mcq" ? (q.o || [])[entry.g]
          : q.format === "tf" ? (entry.g ? "True" : "False")
          : entry.g;
        return '<div class="card mb-3 an-qcard ' + (entry.ok ? 'is-ok' : 'is-bad') + '">' +
          '<div class="row row--wrap items-center gap-2 mb-2">' +
            '<span class="chip ' + (entry.ok ? 'chip--ok' : 'chip--danger') + '">' + (entry.ok ? '✓' : '✗') + ' Q' + (i + 1) + '</span>' +
            '<span class="chip font-mono">' + String(q.format).toUpperCase() + '</span>' +
            '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
          '</div>' +
          '<p><b>' + app.esc(q.q) + '</b></p>' +
          '<div class="row row--wrap gap-4 mt-3">' +
            '<p class="small"><span class="chip ' + (entry.ok ? 'chip--ok' : 'chip--danger') + '">Your answer</span> <b>' +
              app.esc(String(mine)) + '</b></p>' +
            (entry.ok ? '' : '<p class="small"><span class="chip chip--ok">Correct answer</span> <b>' + app.esc(String(right)) + '</b></p>') +
          '</div>' +
          (q.e ? '<div class="callout mt-3"><div class="callout__title">Explanation</div>' + q.e + '</div>' : '') +
          (q.topicId && syllabus.topicById[q.topicId]
            ? '<a class="btn btn--sm mt-3" href="#/topic/' + q.topicId + '">📖 Read the lesson</a>' : '') +
        '</div>';
      }).join("");
    }

    function paint() {
      host.innerHTML =
        '<div class="pagehead">' +
          '<div class="row row--wrap items-center gap-2 mb-2">' +
            '<a class="btn btn--sm btn--ghost" href="#/quiz/analysis">← Analysis</a>' +
            '<span class="chip ' + scoreChip(p) + '">' + a.correct + '/' + a.total + ' · ' + p + '%</span>' +
            '<span class="chip">' + dt.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) + '</span>' +
            (a.seconds ? '<span class="chip">⏱️ ' + fmtDuration(a.seconds) + '</span>' : '') +
            (a.exam ? '<span class="chip chip--warn">📝 Exam mode</span>' : '') +
          '</div>' +
          '<h1>' + app.esc(a.label || "Quiz") + '</h1>' +
          '<p class="lede">Every question from this test, with your answer and the explanation.</p>' +
        '</div>' +
        '<div class="row row--wrap gap-2 mt-4">' +
          '<button class="btn btn--sm' + (onlyWrong ? '' : ' btn--primary') + '" data-filter="all">All ' + a.total + '</button>' +
          '<button class="btn btn--sm' + (onlyWrong ? ' btn--primary' : '') + '" data-filter="wrong">Only missed ' +
            (a.total - a.correct) + '</button>' +
          '<div class="push"></div>' +
          '<button class="btn btn--sm btn--primary" id="retryattempt">🔁 Retake this test</button>' +
        '</div>' +
        '<div class="stack mt-5">' + (rowsHtml() || '<div class="callout">Nothing to show here — you got everything right.</div>') + '</div>';

      host.querySelectorAll("[data-filter]").forEach(function (b) {
        b.addEventListener("click", function () {
          onlyWrong = b.getAttribute("data-filter") === "wrong";
          paint();
        });
      });

      var again = document.getElementById("retryattempt");
      if (again) {
        again.addEventListener("click", function () {
          var pool = a.log.map(function (e) { return map[e.k]; }).filter(Boolean);
          if (!pool.length) { app.toast("These questions are no longer in the bank"); return; }
          start(pool, {
            scope: a.scope, unitScope: a.unitScope || a.scope, label: "🔁 " + (a.label || "Quiz"),
            exam: false, minutes: 0, orderMode: "shuffle",
            subSectionId: a.subSectionId || "all", unitId: a.unitId || null
          });
        });
      }
    }

    paint();
  }

  // Look a sub-section up without knowing its unit (used by the dashboard).
  function findSubSection(subId) {
    for (var u in subSectionsByUnit) {
      var hit = getSubSectionMeta(u, subId);
      if (hit) return hit;
    }
    return null;
  }

  return { render: render, reset: resetRun, findSubSection: findSubSection };
})();

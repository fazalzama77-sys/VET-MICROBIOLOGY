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

  /* ============================================================
     ROUTER ENTRY POINT
     ============================================================ */
  function render(container, params) {
    host = container;
    var kind = params.a;

    if (run && run.active) { paintRun(); return; }

    if (!kind) { renderHub(); return; }
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

      '<h2 class="mt-8 flex items-center gap-2"><span>🎯</span> Comprehensive Mock Tests</h2>' +
      '<div class="grid grid--3 mt-4">' +
        modeCard("Paper I", "Bacteriology, Mycology & Biotech (Units 1, 2, 3)", countAvailable(scopeUnits("paper", "paper-1")), "#/quiz/paper/paper-1", false, "theory") +
        modeCard("Paper II", "Immunology & Virology (Units 4, 5)", countAvailable(scopeUnits("paper", "paper-2")), "#/quiz/paper/paper-2", false, "theory") +
        modeCard("Grand test", "All 5 theory units", countAvailable(theoryIds), "#/quiz/grand", false, "trophy") +
        modeCard("Practical", "All practical units", countAvailable(pracIds), "#/quiz/practical", false, "practical") +
        modeCard("Smart Review", due + " question" + (due === 1 ? "" : "s") + " due today", due, "#/quiz/review", true, "repeat") +
      '</div>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>📚</span> Theory Units with Modular Sub-sections</h2>' +
      '<p class="small muted">Click any unit below to practice specific sub-sections or the full unit in Sequence or Shuffle mode.</p>' +
      '<div class="tlist mt-4">' + unitRows + '</div>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>🔬</span> Practical Diagnostic Units</h2>' +
      '<div class="tlist mt-4">' + pracRows + '</div>';
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

          var finalQuestions;
          if (state.orderMode === "shuffle") {
            finalQuestions = shuffle(rawPool).slice(0, state.count);
          } else {
            // Sequence mode: exact curriculum sequence
            finalQuestions = rawPool.slice(0, state.count);
          }

          var runLabel = label;
          var subMeta = getSubSectionMeta(id, state.subSectionId);
          if (subMeta) {
            runLabel = subMeta.icon + " " + subMeta.title;
          }

          start(
            finalQuestions,
            kind + (id ? ":" + id : "") + (state.subSectionId !== "all" ? ":" + state.subSectionId : ""),
            runLabel,
            state.exam,
            state.minutes,
            state.orderMode,
            state.subSectionId,
            id
          );
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

    start(shuffle(pool), "review", "Smart Review", false, 0, "shuffle", "all", null);
  }

  /* ============================================================
     RUNNING A QUIZ
     ============================================================ */
  function start(questions, scope, label, exam, minutes, orderMode, subSectionId, unitId) {
    run = {
      active: true,
      qs: questions,
      i: 0,
      answers: new Array(questions.length).fill(null),
      scope: scope,
      label: label,
      orderMode: orderMode || "sequence",
      subSectionId: subSectionId || "all",
      unitId: unitId || (questions[0] ? questions[0].unitId : null),
      exam: !!exam,
      endsAt: exam ? Date.now() + minutes * 60000 : 0,
      startedAt: Date.now(),
      revealed: false,
      timer: null,
      streak: 0
    };

    if (run.exam) {
      run.timer = setInterval(function () {
        if (!run || !run.active) { clearInterval(run && run.timer); return; }
        if (Date.now() >= run.endsAt) { finish(true); return; }
        var t = document.getElementById("qtimer");
        if (t) t.textContent = fmtTime(run.endsAt - Date.now());
      }, 1000);
    }
    paintRun();
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  }

  function paintRun() {
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var showFeedback = !run.exam && run.revealed;

    var body;
    if (q.format === "mcq") {
      body = '<div class="opts">' + (q.o || []).map(function (opt, i) {
        var cls = "opt";
        if (given === i) cls += " is-picked";
        if (showFeedback) {
          if (i === q.a) cls += " is-right";
          else if (given === i) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + i + '"' + (showFeedback ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + "ABCD".charAt(i) + '</span>' +
          '<span class="opt__text">' + app.esc(opt) + '</span>' +
          (showFeedback && i === q.a ? '<span class="opt__state">✓</span>' : '') +
          (showFeedback && given === i && i !== q.a ? '<span class="opt__state">✗</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else if (q.format === "tf") {
      body = '<div class="opts opts--2">' + [true, false].map(function (v) {
        var cls = "opt opt--tf";
        if (given === v) cls += " is-picked";
        if (showFeedback) {
          if (v === q.a) cls += " is-right";
          else if (given === v) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + v + '"' + (showFeedback ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + (v ? "T" : "F") + '</span>' +
          '<span class="opt__text">' + (v ? "True" : "False") + '</span>' +
          (showFeedback && v === q.a ? '<span class="opt__state">✓</span>' : '') +
          (showFeedback && given === v && v !== q.a ? '<span class="opt__state">✗</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else {
      // Fill in the blanks
      body = '<div class="fib-card">' +
        '<div class="fib-input-wrap">' +
          '<input type="text" id="fibinput" class="fib-input" placeholder="Type your answer here..." autocomplete="off" autocorrect="off" spellcheck="false" ' +
          'value="' + app.esc(given !== null ? String(given) : "") + '"' + (showFeedback ? ' disabled' : '') + '>' +
          (!showFeedback
            ? '<button type="button" class="btn btn--primary" id="fibsubmit">Submit</button>'
            : '') +
        '</div>' +
        (showFeedback
          ? '<div class="fib-accepted-callout ' + (isCorrect(q, given) ? 'is-ok' : 'is-error') + '">' +
              '<span class="badge">' + (isCorrect(q, given) ? '✓ Correct' : '✗ Incorrect') + '</span>' +
              '<span class="label"><b>Standard Answer:</b> ' + app.esc(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a)) + '</span>' +
            '</div>'
          : '') +
        '</div>';
    }

    var answered = run.answers.filter(function (a) { return a !== null && a !== ""; }).length;

    // Sub-section badge metadata
    var subMeta = getSubSectionMeta(q.unitId, q.subSection);
    var subBadge = subMeta
      ? '<span class="chip chip--accent"><span class="qicon">' + subMeta.icon + '</span> ' + app.esc(subMeta.title) + '</span>'
      : '';

    var diffBadge = q.diff === 1
      ? '<span class="chip chip--subtle">⭐ Foundational</span>'
      : q.diff === 2
        ? '<span class="chip chip--subtle">⭐⭐ Core UG</span>'
        : '<span class="chip chip--warn">⭐⭐⭐ Rank 1 Classic</span>';

    var orderBadge = run.orderMode === "sequence"
      ? '<span class="chip chip--subtle">📋 Sequence Mode</span>'
      : '<span class="chip chip--subtle">🔀 Shuffle Mode</span>';

    host.innerHTML =
      '<div class="quizrun animate-fade-in">' +
        '<div class="quizrun__bar">' +
          '<button class="btn btn--sm btn--ghost" id="quitbtn">Quit</button>' +
          '<span class="chip font-medium">' + app.esc(run.label) + '</span>' +
          orderBadge +
          '<div class="push"></div>' +
          (run.streak >= 2 ? '<span class="chip chip--accent streak-badge">🔥 Streak ' + run.streak + '</span>' : '') +
          (run.exam ? '<span class="chip chip--warn" id="qtimer">' + fmtTime(run.endsAt - Date.now()) + '</span>' : '') +
          '<span class="chip font-mono">' + (run.i + 1) + ' / ' + run.qs.length + '</span>' +
        '</div>' +

        '<div class="bar bar--lg mt-3"><div class="bar__fill" style="width:' +
          (((run.i + 1) / run.qs.length) * 100) + '%"></div></div>' +

        '<div class="card quizcard mt-5">' +
          '<div class="quizcard__meta">' +
            '<span class="chip chip--accent font-bold">' +
              { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blank" }[q.format] +
            '</span>' +
            '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
            subBadge +
            diffBadge +
          '</div>' +

          '<h2 class="quizcard__q mt-4">' + app.esc(q.q) + '</h2>' +

          body +

          (showFeedback && q.e
            ? '<div class="quiz-explanation-box mt-6 animate-scale-up ' + (isCorrect(q, given) ? 'is-correct' : 'is-wrong') + '">' +
                '<div class="quiz-explanation-box__head">' +
                  '<span>' + (isCorrect(q, given) ? '🎉 Excellent! Correct Answer' : '💡 Explanation & High-Yield Key Note') + '</span>' +
                '</div>' +
                '<p class="quiz-explanation-box__body">' + q.e + '</p>' +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm btn--ghost mt-2" href="#/topic/' + q.topicId + '" target="_blank">📖 Read Full Lesson on ' + app.esc(syllabus.topicById[q.topicId].title) + ' →</a>'
                  : '') +
              '</div>'
            : '') +
        '</div>' +

        '<div class="row mt-6 items-center">' +
          '<button class="btn" id="prevbtn"' + (run.i === 0 ? ' disabled' : '') + '>← Previous</button>' +
          '<div class="push"></div>' +
          '<span class="small faint mr-3">' + answered + ' of ' + run.qs.length + ' answered</span>' +
          (!run.exam && !run.revealed
            ? '<button class="btn btn--primary btn--lg" id="checkbtn">Check Answer (Enter)</button>'
            : (run.i === run.qs.length - 1
              ? '<button class="btn btn--primary btn--lg" id="finishbtn">Finish &amp; See Results 🏆</button>'
              : '<button class="btn btn--primary btn--lg" id="nextbtn">Next Question →</button>')) +
        '</div>' +

        (run.exam && run.i === run.qs.length - 1
          ? '<div class="row mt-4"><button class="btn btn--primary btn--block btn--lg" id="submitbtn">Submit Paper Now</button></div>'
          : '') +
      '</div>';

    wireRun(q);
  }

  function isCorrect(q, given) {
    if (given === null || given === undefined || given === "") return false;
    if (q.format === "mcq") return given === q.a;
    if (q.format === "tf") return given === q.a;
    // FIB checking: compare against all acceptable answers
    var norm = String(given).trim().toLowerCase();
    return (q.a || []).some(function (acc) {
      return String(acc).trim().toLowerCase() === norm;
    });
  }

  function wireRun(q) {
    // Option picking for MCQ and TF
    document.querySelectorAll("[data-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        var raw = b.getAttribute("data-pick");
        run.answers[run.i] = (q.format === "tf") ? (raw === "true") : parseInt(raw, 10);
        paintRun();
      });
    });

    // FIB input
    var fib = document.getElementById("fibinput");
    if (fib) {
      if (!run.revealed && !run.exam) {
        setTimeout(function () { fib.focus(); }, 50);
      }
      fib.addEventListener("input", function () {
        run.answers[run.i] = fib.value;
      });
      fib.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          run.answers[run.i] = fib.value;
          var cb = document.getElementById("checkbtn") || document.getElementById("nextbtn") || document.getElementById("finishbtn");
          if (cb) cb.click();
        }
      });
    }

    var fibSubmit = document.getElementById("fibsubmit");
    if (fibSubmit) {
      fibSubmit.addEventListener("click", function () {
        var cb = document.getElementById("checkbtn");
        if (cb) cb.click();
      });
    }

    // Check answer button
    var check = document.getElementById("checkbtn");
    if (check) check.addEventListener("click", function () {
      if (run.answers[run.i] === null || run.answers[run.i] === "") {
        app.toast("Please select or type an answer first");
        return;
      }
      run.revealed = true;
      var ok = isCorrect(q, run.answers[run.i]);
      store.gradeSrs(q.key, ok);

      if (ok) {
        run.streak = (run.streak || 0) + 1;
        if (app.burstConfetti) app.burstConfetti(check);
        if (run.streak === 3 && app.popMilestone) app.popMilestone("🔥 3 in a row!");
        else if (run.streak === 5 && app.popMilestone) app.popMilestone("🚀 5 streak — unstoppable!");
        else if (run.streak === 7 && app.popMilestone) app.popMilestone("⚡ 7 straight — pure genius!");
        else if (run.streak === 10 && app.popMilestone) app.popMilestone("👑 10 streak — Master Pathologist!");
      } else {
        run.streak = 0;
      }
      paintRun();
    });

    // Navigation buttons
    var next = document.getElementById("nextbtn");
    if (next) next.addEventListener("click", function () {
      run.i++;
      run.revealed = false;
      paintRun();
    });

    var prev = document.getElementById("prevbtn");
    if (prev) prev.addEventListener("click", function () {
      run.i--;
      run.revealed = false;
      paintRun();
    });

    var fin = document.getElementById("finishbtn");
    if (fin) fin.addEventListener("click", function () { finish(false); });

    var sub = document.getElementById("submitbtn");
    if (sub) sub.addEventListener("click", function () {
      if (confirm("Submit your examination paper now?")) finish(false);
    });

    var quit = document.getElementById("quitbtn");
    if (quit) quit.addEventListener("click", function () {
      if (confirm("Quit this quiz? Progress on uncompleted questions will not be saved.")) {
        if (run && run.timer) clearInterval(run.timer);
        resetRun();
        location.hash = "#/quiz";
      }
    });

    // Global keyboard shortcuts (1-4 or A-D for MCQ, T/F for True/False, Enter for Next)
    function handleKey(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      if (!run.revealed && !run.exam) {
        if (q.format === "mcq") {
          var map = { "1": 0, "2": 1, "3": 2, "4": 3, "a": 0, "b": 1, "c": 2, "d": 3, "A": 0, "B": 1, "C": 2, "D": 3 };
          if (map[e.key] !== undefined) {
            run.answers[run.i] = map[e.key];
            paintRun();
            return;
          }
        } else if (q.format === "tf") {
          if (e.key === "t" || e.key === "T" || e.key === "1") { run.answers[run.i] = true; paintRun(); return; }
          if (e.key === "f" || e.key === "F" || e.key === "2") { run.answers[run.i] = false; paintRun(); return; }
        }
      }

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var cb = document.getElementById("checkbtn") || document.getElementById("nextbtn") || document.getElementById("finishbtn");
        if (cb) cb.click();
      }
    }

    // Attach one-time keydown handler
    window.removeEventListener("keydown", run._keyHandler);
    run._keyHandler = handleKey;
    window.addEventListener("keydown", run._keyHandler);
  }

  /* ============================================================
     RESULTS & ANALYTICS
     ============================================================ */
  function finish(timedOut) {
    if (run && run.timer) clearInterval(run.timer);
    if (run && run._keyHandler) window.removeEventListener("keydown", run._keyHandler);

    var correct = 0;
    var wrongList = [];
    var formatStats = {
      mcq: { total: 0, right: 0 },
      tf: { total: 0, right: 0 },
      fib: { total: 0, right: 0 }
    };

    run.qs.forEach(function (q, i) {
      var ok = isCorrect(q, run.answers[i]);
      formatStats[q.format].total++;
      if (ok) {
        correct++;
        formatStats[q.format].right++;
      } else {
        wrongList.push({ q: q, given: run.answers[i] });
      }
      if (run.exam) store.gradeSrs(q.key, ok);
    });

    var total = run.qs.length;
    var percent = app.pct(correct, total);
    var mins = Math.round((Date.now() - run.startedAt) / 60000) || 1;

    store.saveAttempt({
      at: Date.now(),
      scope: run.scope,
      label: run.label,
      total: total,
      correct: correct,
      exam: run.exam,
      minutes: mins
    });

    var verdict = percent >= 85 ? "Rank 1 Distinction" : percent >= 70 ? "Strong First Class" : percent >= 50 ? "Passing Grade" : "Needs Revision";
    var chipCls = percent >= 85 ? "chip--ok" : percent >= 70 ? "chip--accent" : percent >= 50 ? "chip--warn" : "chip--danger";

    host.innerHTML =
      '<div class="result animate-scale-up">' +
        (timedOut ? '<div class="callout mb-6"><div class="callout__title">Time Expired</div>' +
          'Your examination paper was submitted automatically when the countdown reached zero.</div>' : '') +

        '<div class="result__ring">' + app.ringHtml(percent, 150) + '</div>' +
        '<h1 class="mt-6">' + correct + ' out of ' + total + ' Correct</h1>' +

        '<div class="row row--wrap center mt-3 gap-2" style="justify-content:center">' +
          '<span class="chip ' + chipCls + ' font-bold">' + verdict + '</span>' +
          '<span class="chip">' + app.esc(run.label) + '</span>' +
          (run.orderMode === "sequence" ? '<span class="chip">📋 Sequence</span>' : '<span class="chip">🔀 Shuffle</span>') +
          (run.exam ? '<span class="chip">⏱️ Exam Mode · ' + mins + ' min</span>' : '') +
        '</div>' +

        /* Format Breakdown Metrics */
        '<div class="grid grid--3 mt-6 text-left">' +
          '<div class="card stat-card">' +
            '<div class="stat-card__icon">🔘</div>' +
            '<div>' +
              '<div class="small muted">Multiple Choice</div>' +
              '<b>' + formatStats.mcq.right + ' / ' + formatStats.mcq.total + '</b>' +
              '<div class="small faint">' + (formatStats.mcq.total ? Math.round(formatStats.mcq.right / formatStats.mcq.total * 100) : 0) + '% accuracy</div>' +
            '</div>' +
          '</div>' +
          '<div class="card stat-card">' +
            '<div class="stat-card__icon">⚖️</div>' +
            '<div>' +
              '<div class="small muted">True / False</div>' +
              '<b>' + formatStats.tf.right + ' / ' + formatStats.tf.total + '</b>' +
              '<div class="small faint">' + (formatStats.tf.total ? Math.round(formatStats.tf.right / formatStats.tf.total * 100) : 0) + '% accuracy</div>' +
            '</div>' +
          '</div>' +
          '<div class="card stat-card">' +
            '<div class="stat-card__icon">✍️</div>' +
            '<div>' +
              '<div class="small muted">Fill in Blanks</div>' +
              '<b>' + formatStats.fib.right + ' / ' + formatStats.fib.total + '</b>' +
              '<div class="small faint">' + (formatStats.fib.total ? Math.round(formatStats.fib.right / formatStats.fib.total * 100) : 0) + '% accuracy</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* Missed questions review */
        (wrongList.length
          ? '<h2 class="mt-12 mb-4 text-left flex items-center gap-2"><span>🔍</span> Detailed Review of Missed Questions (' + wrongList.length + ')</h2>' +
            '<div class="stack text-left">' + wrongList.map(function (w, idx) {
              var q = w.q;
              var right = q.format === "mcq" ? (q.o || [])[q.a]
                : q.format === "tf" ? (q.a ? "True" : "False")
                : (q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a));
              var mine = w.given === null || w.given === "" ? "Not answered"
                : q.format === "mcq" ? (q.o || [])[w.given]
                : q.format === "tf" ? (w.given ? "True" : "False")
                : w.given;
              return '<div class="card mb-3">' +
                '<div class="row row--wrap items-center gap-2 mb-2">' +
                  '<span class="chip chip--accent">#' + (idx + 1) + '</span>' +
                  '<span class="chip font-mono">' + q.format.toUpperCase() + '</span>' +
                  '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
                '</div>' +
                '<p><b>' + app.esc(q.q) + '</b></p>' +
                '<div class="row row--wrap gap-4 mt-3">' +
                  '<p class="small"><span class="chip chip--danger">Your answer:</span> <b>' + app.esc(String(mine)) + '</b></p>' +
                  '<p class="small"><span class="chip chip--ok">Correct answer:</span> <b>' + app.esc(String(right)) + '</b></p>' +
                '</div>' +
                (q.e ? '<div class="callout mt-3"><div class="callout__title">High-Yield Explanation</div>' + q.e + '</div>' : '') +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm mt-3" href="#/topic/' + q.topicId + '">📖 Read Lesson on ' + app.esc(syllabus.topicById[q.topicId].title) + '</a>' : '') +
              '</div>';
            }).join("") + '</div>'
          : '<div class="callout mt-8"><div class="callout__title">🏆 Clean Sweep! 100% Score!</div>' +
            'Exceptional performance! Every single question was answered correctly with academic precision.</div>') +

        '<div class="row row--wrap mt-12 gap-3" style="justify-content:center">' +
          '<a class="btn btn--primary btn--lg" href="#/quiz">Back to Quiz Hub</a>' +
          '<a class="btn btn--lg" href="#/dashboard">View My Dashboard</a>' +
          (wrongList.length ? '<a class="btn btn--lg" href="#/quiz/review">Review in Smart SRS Queue</a>' : '') +
        '</div>' +
      '</div>';

    if (percent >= 75 && app.burstConfetti) {
      setTimeout(function () {
        var ring = document.querySelector('.result__ring');
        if (ring) app.burstConfetti(ring);
        if (app.popMilestone) app.popMilestone("🏆 " + verdict + ": " + percent + "%!");
      }, 250);
    }

    resetRun();
  }

  return { render: render, reset: resetRun };
})();

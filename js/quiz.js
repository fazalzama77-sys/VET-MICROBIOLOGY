/* ============================================================
   quiz.js — The Interactive Veterinary Microbiology Quiz Arena
   ------------------------------------------------------------
   Features:
     - 1,040 ICAR/VCI Curriculum Questions across Theory Units 1-5 & Practicals
     - 2 : 1 : 1 ratio of MCQ : True/False : Fill-in-the-blank
     - 22 modular sub-sections with individual diagnostic testing
     - Sequence Mode (curriculum order) vs. Shuffle Mode (randomized)
     - Tactile 3D option buttons, instant audio feedback (Web Audio synthesizer)
     - Flame streaks, combo multipliers, particle confetti & milestone badges
     - Collapsible Question Map drawer (zero visual clutter)
     - High-yield explanations with one-tap deep links to theory lessons
     - Smart Spaced Repetition (SRS) & ICAR/VCI mock exam simulations
   ============================================================ */

var quizApp = (function () {

  var host;                 // container element
  var run = null;           // active run state

  /* ============================================================
     WEB AUDIO SYNTHESIZER (Playful & Lightweight)
     ============================================================ */
  var audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      var Cls = window.AudioContext || window.webkitAudioContext;
      audioCtx = new Cls();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function isSoundEnabled() {
    try {
      return localStorage.getItem("vmicro-quiz-sound") !== "off";
    } catch (e) {
      return true;
    }
  }

  function toggleSound() {
    var cur = isSoundEnabled();
    try {
      localStorage.setItem("vmicro-quiz-sound", cur ? "off" : "on");
    } catch (e) {}
    return !cur;
  }

  function playTone(freqs, times, type, duration) {
    if (!isSoundEnabled()) return;
    var ctx = getAudioCtx();
    if (!ctx) return;
    try {
      var now = ctx.currentTime;
      freqs.forEach(function (f, idx) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = type || "sine";
        osc.frequency.setValueAtTime(f, now + times[idx]);
        gain.gain.setValueAtTime(0.12, now + times[idx]);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + times[idx] + (duration || 0.16));
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + times[idx]);
        osc.stop(now + times[idx] + (duration || 0.16) + 0.05);
      });
    } catch (e) {}
  }

  function playSound(name) {
    if (name === "correct") {
      // Bright, cheerful ascending chime (E5 -> B5)
      playTone([659.25, 987.77], [0, 0.08], "sine", 0.18);
    } else if (name === "wrong") {
      // Gentle, subtle descending boop (C3 -> A2)
      playTone([130.81, 110.0], [0, 0.09], "triangle", 0.16);
    } else if (name === "milestone") {
      // Celebratory 4-note arpeggio (C5 -> E5 -> G5 -> C6)
      playTone([523.25, 659.25, 783.99, 1046.50], [0, 0.07, 0.14, 0.22], "triangle", 0.22);
    }
  }

  /* Sub-section metadata for Units 1 to 5 */
  var subSectionsByUnit = {
    "unit-1": [
      { id: "u1-s1", icon: "🔬", title: "Bacterial Morphology & Stains", desc: "Cellular anatomy, Gram staining, Ziehl-Neelsen, capsules, spores & motility" },
      { id: "u1-s2", icon: "🧪", title: "Physiology, Genetics & Resistance", desc: "Nutritional requirements, growth curves, plasmids, transformation & ABST" },
      { id: "u1-s3", icon: "🧫", title: "Gram-Positive Pathogens", desc: "Staphylococcus, Streptococcus, Bacillus anthracis, Clostridium & Mycobacterium" },
      { id: "u1-s4", icon: "🔬", title: "Gram-Negative Pathogens", desc: "E. coli, Salmonella, Klebsiella, Pasteurella, Mannheimia & Brucella" },
      { id: "u1-s5", icon: "🦠", title: "Anaerobes, Spirochetes & Atypicals", desc: "Fusobacterium, Leptospira, Mycoplasma, Chlamydia & Rickettsiales" }
    ],
    "unit-2": [
      { id: "u2-s1", icon: "🍄", title: "General Mycology & Morphology", desc: "Fungal classification, slide culture, SDA cultivation & LPCB mounts" },
      { id: "u2-s2", icon: "🔬", title: "Yeasts & Opportunistic Mycoses", desc: "Candida albicans, Cryptococcus neoformans, Malassezia & Aspergillus" },
      { id: "u2-s3", icon: "🧫", title: "Dermatophytes & Dimorphic Fungi", desc: "Microsporum, Trichophyton, Histoplasma, Blastomyces & Rhinosporidium" },
      { id: "u2-s4", icon: "⚠️", title: "Mycotoxins & Deep Mycoses", desc: "Aflatoxins, ochratoxins, T-2 toxin, mycotic abortion & mycotic mastitis" }
    ],
    "unit-3": [
      { id: "u3-s1", icon: "🧬", title: "Recombinant DNA & Cloning Vectors", desc: "Plasmids, bacteriophages, restriction enzymes, ligation & transformation" },
      { id: "u3-s2", icon: "🧪", title: "Blotting, PCR & Molecular Probes", desc: "Southern/Northern/Western blotting, PCR variants, primers & gel analysis" },
      { id: "u3-s3", icon: "💻", title: "Sequencing, Bioinformatics & IPR", desc: "Sanger sequencing, DNA fingerprinting, BLAST, gene banks & patent ethics" }
    ],
    "unit-4": [
      { id: "u4-s1", icon: "🛡️", title: "Immune Architecture & Innate Immunity", desc: "Thymus, bursa, spleen, lymph nodes, phagocytosis & complement pathways" },
      { id: "u4-s2", icon: "💉", title: "Antigens, Antibodies & Hybridomas", desc: "Immunoglobulin classes, monoclonal antibodies, adjuvants & epitopes" },
      { id: "u4-s3", icon: "🔬", title: "Cell-Mediated Immunity & MHC", desc: "T-cell receptors, antigen processing, MHC class I/II & cytokine networks" },
      { id: "u4-s4", icon: "⚠️", title: "Hypersensitivity & Autoimmunity", desc: "Anaphylaxis, Arthus reaction, DTH tuberculin test & tolerance breakdown" },
      { id: "u4-s5", icon: "🧪", title: "Serological Assays & Vaccines", desc: "Agglutination, AGID, ELISA, inactivated vs live vaccines & biologics" }
    ],
    "unit-5": [
      { id: "u5-s1", icon: "🦠", title: "General Virology & Replication", desc: "Viral symmetry, envelopes, Baltimore classification, CPE & egg culture" },
      { id: "u5-s2", icon: "🧬", title: "RNA Animal Viruses I", desc: "IBDV (Gumboro), Bluetongue, African horse sickness, NDV & PPR virus" },
      { id: "u5-s3", icon: "🔬", title: "RNA Animal Viruses II", desc: "Rabies, Influenza (AI/SI), FMD Aphthovirus & Classical Swine Fever" },
      { id: "u5-s4", icon: "🧫", title: "DNA Animal Viruses", desc: "Capripox, Lumpy skin disease, Marek's disease, IBR/BHV-1 & Parvovirus" },
      { id: "u5-s5", icon: "⚠️", title: "Retroviruses, Prions & African Swine Fever", desc: "Bovine leukemia, Avian leukosis, Scrapie, BSE & Asfarviridae" }
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
    stopTimer();
    detachKeys();
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
      if (id === "paper-1") return ["unit-1", "unit-2", "unit-3"];
      if (id === "paper-2") return ["unit-4", "unit-5"];
    }
    if (kind === "grand") {
      return syllabus.theory.map(function (u) { return u.id; });
    }
    if (kind === "practical") {
      return syllabus.practical.map(function (u) { return u.id; });
    }
    return [];
  }

  function shuffle(a) {
    var out = a.slice();
    for (var i = out.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = out[i]; out[i] = out[j]; out[j] = t;
    }
    return out;
  }

  function countAvailable(unitIds, subSectionId) {
    return bankFor(unitIds, ["mcq", "tf", "fib"], subSectionId).length;
  }

  function sequenceSlice(pool, count) {
    var step = pool.length / count;
    var out = [];
    for (var i = 0; i < count; i++) {
      var idx = Math.min(pool.length - 1, Math.floor(i * step));
      out.push(pool[idx]);
    }
    return out;
  }

  /* ============================================================
     DISPATCH ROUTER
     ============================================================ */
  function render(container, params) {
    host = container;
    var kind = params.a;

    // A quiz is running. Navigating to another section saves state.
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
     HUB — VIBRANT, PLAYFUL QUIZ ARENA
     ============================================================ */
  function renderHub() {
    resetRun();

    var theoryIds = syllabus.theory.map(function (u) { return u.id; });
    var pracIds = syllabus.practical.map(function (u) { return u.id; });
    var allIds = theoryIds.concat(pracIds);
    var totalAll = countAvailable(allIds);
    var due = store.dueSrs().length;
    var q = store.getQuiz();

    var fmtCount = {
      mcq: bankFor(allIds, ["mcq"]).length,
      tf: bankFor(allIds, ["tf"]).length,
      fib: bankFor(allIds, ["fib"]).length
    };
    var subCount = Object.keys(subSectionsByUnit).reduce(function (n, k) { return n + subSectionsByUnit[k].length; }, 0);

    var unitColorMap = {
      "unit-1": { color: "#1565c0", icon: "🔬", bg: "rgba(21, 101, 192, 0.08)" },
      "unit-2": { color: "#00897b", icon: "🍄", bg: "rgba(0, 137, 123, 0.08)" },
      "unit-3": { color: "#6a48b5", icon: "🧬", bg: "rgba(106, 72, 181, 0.08)" },
      "unit-4": { color: "#b25e00", icon: "🛡️", bg: "rgba(178, 94, 0, 0.08)" },
      "unit-5": { color: "#d84315", icon: "🦠", bg: "rgba(216, 67, 21, 0.08)" }
    };

    var unitCardsHtml = syllabus.theory.map(function (u) {
      var n = countAvailable([u.id]);
      var rec = q.byUnit["unit:" + u.id];
      var subList = subSectionsByUnit[u.id] || [];
      var styling = unitColorMap[u.id] || { color: "#1565c0", icon: "🔬", bg: "rgba(21,101,192,0.08)" };

      return '<div class="qz-unit-card" style="border-top: 4px solid ' + styling.color + ';">' +
        '<div class="qz-unit-card-head">' +
          '<div class="qz-unit-title">' +
            '<span style="font-size: 22px;">' + styling.icon + '</span>' +
            '<span>Unit ' + u.no + ' · ' + app.esc(u.short) + '</span>' +
          '</div>' +
          (rec ? '<span class="chip chip--ok font-bold">Best ' + rec.best + '%</span>' : '<span class="chip chip--subtle">Untested</span>') +
        '</div>' +
        '<p class="qz-unit-sub">' +
          '<b>' + n + ' Questions</b> in 2:1:1 ratio across <b>' + subList.length + ' sub-topics</b>.' +
        '</p>' +
        '<div class="qz-unit-actions">' +
          '<button type="button" class="btn btn--sm btn--primary" data-quickunit="' + u.id + '">⚡ Quick 15</button>' +
          '<a class="btn btn--sm btn--ghost" href="#/quiz/unit/' + u.id + '">⚙️ Custom Setup</a>' +
        '</div>' +
      '</div>';
    }).join("");

    // Consolidated Practical Unit Card
    var totalPracQs = countAvailable(pracIds);
    var pracRec = q.byUnit["practical"];
    var pracCardHtml =
      '<div class="qz-unit-card" style="border-top: 4px solid #2e7d32;">' +
        '<div class="qz-unit-card-head">' +
          '<div class="qz-unit-title">' +
            '<span style="font-size: 22px;">🧫</span>' +
            '<span>Practical Diagnostics (Labs 1–17)</span>' +
          '</div>' +
          (pracRec ? '<span class="chip chip--ok font-bold">Best ' + pracRec.best + '%</span>' : '<span class="chip chip--subtle">Untested</span>') +
        '</div>' +
        '<p class="qz-unit-sub">' +
          '<b>' + totalPracQs + ' Questions</b> on staining, media preparation, biochemical kits &amp; serological testing.' +
        '</p>' +
        '<div class="qz-unit-actions">' +
          '<button type="button" class="btn btn--sm btn--primary" data-quickprac="true">⚡ Quick 15</button>' +
          '<a class="btn btn--sm btn--ghost" href="#/quiz/practical">⚙️ Custom Setup</a>' +
        '</div>' +
      '</div>';

    host.innerHTML =
      '<div class="qz-hub-container animate-fade-in">' +

        /* Hero Banner */
        '<div class="qz-hub-hero">' +
          '<div class="row row--wrap items-center gap-2 mb-2">' +
            '<span class="chip chip--accent font-mono">🌟 ' + totalAll + ' Questions Bank</span>' +
            '<span class="chip chip--ok">🎯 2:1:1 Ratio (' + fmtCount.mcq + ' MCQ · ' + fmtCount.tf + ' T/F · ' + fmtCount.fib + ' FIB)</span>' +
            '<span class="chip">📑 ' + subCount + ' Sub-sections</span>' +
          '</div>' +
          '<h1 class="qz-hub-title"><span>🎮</span> Veterinary Microbiology Quiz Arena</h1>' +
          '<p class="lede mb-0">Level up your veterinary diagnosis &amp; retention. ' +
          'Pick a rapid sprint, full university mock exam, or master sub-topics at your own pace with tactile controls, audio chimes, and streak bonuses.</p>' +
        '</div>' +

        resumeCardHtml() +

        /* Challenge Modes Grid */
        '<div>' +
          '<h2 class="flex items-center gap-2 mb-3"><span>🚀</span> Quick Challenge Modes</h2>' +
          '<div class="qz-modes-grid">' +

            /* Rapid 10-Q Sprint */
            '<div class="qz-mode-card" id="btnrapidsprint" style="border-left: 4px solid #ffa726; cursor: pointer;">' +
              '<div class="qz-mode-head">' +
                '<div class="qz-mode-icon-title">' +
                  '<span class="qz-mode-icon">⚡</span>' +
                  '<h3 class="qz-mode-title">Rapid 10-Q Sprint</h3>' +
                '</div>' +
                '<span class="chip chip--warn font-bold">2 Min</span>' +
              '</div>' +
              '<p class="qz-mode-desc">Quick 10-question high-yield diagnostic sprint across random units. Jump straight in!</p>' +
              '<div class="qz-mode-foot">' +
                '<span class="small font-bold" style="color:#b25e00;">Instant Start →</span>' +
                '<span class="chip chip--sm">10 Qs</span>' +
              '</div>' +
            '</div>' +

            /* Paper I Mock */
            '<a class="qz-mode-card" href="#/quiz/paper/paper-1" style="border-left: 4px solid #1565c0;">' +
              '<div class="qz-mode-head">' +
                '<div class="qz-mode-icon-title">' +
                  '<span class="qz-mode-icon">📘</span>' +
                  '<h3 class="qz-mode-title">Paper I Mock</h3>' +
                '</div>' +
                '<span class="chip chip--accent font-bold">Units 1, 2, 3</span>' +
              '</div>' +
              '<p class="qz-mode-desc">Comprehensive test covering General &amp; Systematic Bacteriology, Mycology &amp; Biotechnology.</p>' +
              '<div class="qz-mode-foot">' +
                '<span class="small font-bold" style="color:#1565c0;">Take Exam →</span>' +
                '<span class="chip chip--sm">' + countAvailable(scopeUnits("paper", "paper-1")) + ' Qs</span>' +
              '</div>' +
            '</a>' +

            /* Paper II Mock */
            '<a class="qz-mode-card" href="#/quiz/paper/paper-2" style="border-left: 4px solid #d84315;">' +
              '<div class="qz-mode-head">' +
                '<div class="qz-mode-icon-title">' +
                  '<span class="qz-mode-icon">📕</span>' +
                  '<h3 class="qz-mode-title">Paper II Mock</h3>' +
                '</div>' +
                '<span class="chip chip--danger font-bold">Units 4, 5</span>' +
              '</div>' +
              '<p class="qz-mode-desc">Intensive assessment covering Veterinary Immunology, Serology &amp; Systematic Virology.</p>' +
              '<div class="qz-mode-foot">' +
                '<span class="small font-bold" style="color:#d84315;">Take Exam →</span>' +
                '<span class="chip chip--sm">' + countAvailable(scopeUnits("paper", "paper-2")) + ' Qs</span>' +
              '</div>' +
            '</a>' +

            /* Grand Mock */
            '<a class="qz-mode-card" href="#/quiz/grand" style="border-left: 4px solid #6a48b5;">' +
              '<div class="qz-mode-head">' +
                '<div class="qz-mode-icon-title">' +
                  '<span class="qz-mode-icon">🏆</span>' +
                  '<h3 class="qz-mode-title">Grand Comprehensive</h3>' +
                '</div>' +
                '<span class="chip chip--accent font-bold">All 5 Units</span>' +
              '</div>' +
              '<p class="qz-mode-desc">Full curriculum ICAR/VCI annual examination simulation across all theory syllabus.</p>' +
              '<div class="qz-mode-foot">' +
                '<span class="small font-bold" style="color:#6a48b5;">Simulate Final →</span>' +
                '<span class="chip chip--sm">' + countAvailable(theoryIds) + ' Qs</span>' +
              '</div>' +
            '</a>' +

            /* Practical Diagnostics */
            '<a class="qz-mode-card" href="#/quiz/practical" style="border-left: 4px solid #2e7d32;">' +
              '<div class="qz-mode-head">' +
                '<div class="qz-mode-icon-title">' +
                  '<span class="qz-mode-icon">🧫</span>' +
                  '<h3 class="qz-mode-title">Practical Diagnostics</h3>' +
                '</div>' +
                '<span class="chip chip--ok font-bold">Labs 1–17</span>' +
              '</div>' +
              '<p class="qz-mode-desc">Spotting, differential media, Gram/ZN stains, IMViC reactions &amp; serology.</p>' +
              '<div class="qz-mode-foot">' +
                '<span class="small font-bold" style="color:#2e7d32;">Practice Labs →</span>' +
                '<span class="chip chip--sm">' + countAvailable(pracIds) + ' Qs</span>' +
              '</div>' +
            '</a>' +

            /* Smart Review */
            '<a class="qz-mode-card" href="#/quiz/review" style="border-left: 4px solid #00897b;">' +
              '<div class="qz-mode-head">' +
                '<div class="qz-mode-icon-title">' +
                  '<span class="qz-mode-icon">🔁</span>' +
                  '<h3 class="qz-mode-title">Smart Spaced Review</h3>' +
                '</div>' +
                '<span class="chip ' + (due ? 'chip--warn' : 'chip--ok') + ' font-bold">' + due + ' Due</span>' +
              '</div>' +
              '<p class="qz-mode-desc">Leitner memory queue — questions you struggled with reappear right when you need them.</p>' +
              '<div class="qz-mode-foot">' +
                '<span class="small font-bold" style="color:#00897b;">Review Queue →</span>' +
                '<span class="chip chip--sm">' + due + ' Due Today</span>' +
              '</div>' +
            '</a>' +

          '</div>' +
        '</div>' +

        /* Review & Analytics Banner */
        '<a class="card card--link an-entry" href="#/quiz/analysis" style="border-left: 4px solid var(--accent);">' +
          '<div class="row items-center gap-3">' +
            '<span class="an-entry__icon" style="font-size: 24px;">📊</span>' +
            '<div>' +
              '<b>In-Depth Review &amp; Analytics</b>' +
              '<p class="small muted mt-1">' +
                (q.attempts && q.attempts.length
                  ? q.attempts.length + ' test' + (q.attempts.length === 1 ? '' : 's') +
                    ' recorded · Track accuracy trend, weakest sub-sections, most-missed questions &amp; review every question.'
                  : 'Your accuracy trend, weak spots and question-by-question review will appear here once you take your first quiz.') +
              '</p>' +
            '</div>' +
            '<div class="push"></div>' +
            app.icon("chevron", "faint") +
          '</div>' +
        '</a>' +

        /* Theory & Practical Units Grid */
        '<div>' +
          '<div class="row items-center justify-between mb-3">' +
            '<h2 class="flex items-center gap-2 m-0"><span>🔬</span> Subject &amp; Sub-Section Arena</h2>' +
            '<span class="small muted">Click Quick 15 to play instantly or Custom Setup to pick modules</span>' +
          '</div>' +
          '<div class="qz-units-grid">' +
            unitCardsHtml +
            pracCardHtml +
          '</div>' +
        '</div>' +

      '</div>';

    // Wire Rapid Sprint
    var rapidBtn = document.getElementById("btnrapidsprint");
    if (rapidBtn) {
      rapidBtn.addEventListener("click", function () {
        var pool = bankFor(allIds, ["mcq", "tf", "fib"], "all");
        if (!pool.length) { app.toast("No questions available"); return; }
        start(shuffle(pool).slice(0, 10), {
          scope: "rapid", unitScope: "rapid", label: "⚡ Rapid 10-Q Sprint",
          exam: false, minutes: 0, orderMode: "shuffle", subSectionId: "all"
        });
      });
    }

    // Wire Quick Unit Buttons
    host.querySelectorAll("[data-quickunit]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var uId = btn.getAttribute("data-quickunit");
        var pool = bankFor([uId], ["mcq", "tf", "fib"], "all");
        if (!pool.length) { app.toast("No questions available for this unit"); return; }
        var uShort = (syllabus.unitById[uId] || {}).short || uId;
        start(shuffle(pool).slice(0, 15), {
          scope: "unit:" + uId, unitScope: "unit:" + uId, label: "⚡ Quick " + uShort,
          exam: false, minutes: 0, orderMode: "shuffle", subSectionId: "all", unitId: uId
        });
      });
    });

    // Wire Quick Practical
    var qp = host.querySelector("[data-quickprac]");
    if (qp) {
      qp.addEventListener("click", function () {
        var pool = bankFor(pracIds, ["mcq", "tf", "fib"], "all");
        if (!pool.length) { app.toast("No practical questions available"); return; }
        start(shuffle(pool).slice(0, 15), {
          scope: "practical", unitScope: "practical", label: "⚡ Quick Practical Diagnostics",
          exam: false, minutes: 0, orderMode: "shuffle", subSectionId: "all"
        });
      });
    }

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

  // Card offering to resume an unfinished quiz
  function resumeCardHtml() {
    var s = savedRun();
    if (!s) return "";
    var done = (s.answers || []).filter(isAnswered).length;
    var total = (s.qs || []).length;
    var p = app.pct(done, total);

    return '<div class="card card--accent resume-card animate-fade-in" style="background: color-mix(in srgb, var(--accent) 8%, var(--surface)); border: 1.5px solid var(--accent);">' +
      '<div class="row row--wrap items-center gap-3">' +
        '<div style="font-size: 26px;">🎯</div>' +
        '<div class="resume-card__body">' +
          '<div class="row items-center gap-2">' +
            '<b>Unfinished Quiz: ' + app.esc(s.label || "Practice Run") + '</b>' +
            '<span class="chip chip--accent font-bold">' + done + ' / ' + total + ' Answered (' + p + '%)</span>' +
          '</div>' +
          '<p class="small muted mt-1">Pick up right where you left off. Your answers and timer are saved.</p>' +
        '</div>' +
        '<div class="push"></div>' +
        '<div class="row gap-2">' +
          '<button type="button" class="btn btn--sm btn--ghost" id="discardrun">Discard</button>' +
          '<a class="btn btn--sm btn--primary" href="#/quiz/resume">Resume Quiz →</a>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ============================================================
     SETUP SCREEN — COLORFUL & INTUITIVE
     ============================================================ */
  function renderSetup(kind, id) {
    resetRun();
    var unitIds = scopeUnits(kind, id);
    var subSections = (kind === "unit" && subSectionsByUnit[id]) ? subSectionsByUnit[id] : [];

    var label = kind === "unit"
      ? "Unit " + (syllabus.unitById[id] || {}).no + " · " + (syllabus.unitById[id] || {}).short
      : kind === "paper"
        ? (id === "paper-1" ? "Paper I · Units 1, 2, 3" : "Paper II · Units 4, 5")
        : kind === "grand" ? "Grand Test · All Theory Units" : "Practical Diagnostic Units";

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
              '<b class="flex items-center gap-2" style="font-size: 15px;"><span>📑</span> Choose Sub-Section / Module</b>' +
              '<p class="small muted">Target a specific topic or practice the full unit in 2:1:1 exam ratio.</p>' +
            '</div>' +
            '<div class="subsec-grid mt-3">' +
              '<button type="button" class="subsec-card' + (state.subSectionId === 'all' ? ' is-active' : '') + '" data-sub="all">' +
                '<div class="subsec-card__head">' +
                  '<span class="subsec-card__icon">🌟</span>' +
                  '<span class="subsec-card__title">All Sub-sections (Full Unit)</span>' +
                  '<span class="chip chip--accent subsec-card__badge">' + allCount + ' Qs</span>' +
                '</div>' +
                '<p class="subsec-card__desc">Comprehensive test covering all topics across the entire unit.</p>' +
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
            '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Arena</a>' +
            subHeadingBadge +
            '<span class="chip font-mono">' + maxN + ' Available Questions</span>' +
          '</div>' +
          '<h1>' + app.esc(label) + '</h1>' +
          '<p class="lede">Configure your test parameters below. Pick question count, format filters, and test mode.</p>' +
        '</div>' +

        '<div class="card setup quiz-setup-card" style="box-shadow: 0 4px 20px -4px rgba(0,0,0,0.06);">' +
          subSecHtml +

          /* Order Mode Toggle (Sequence vs Shuffle) */
          '<div class="setup__row">' +
            '<div>' +
              '<b class="flex items-center gap-2" style="font-size: 15px;"><span>🔀</span> Question Order Mode</b>' +
              '<p class="small muted">Attempt questions sequentially according to syllabus or shuffle them randomly.</p>' +
            '</div>' +
            '<div class="quiz-mode-toggle" id="ordermodetoggle">' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'sequence' ? ' is-selected' : '') + '" data-mode="sequence">' +
                '<span class="pill-icon">📖</span>' +
                '<span class="pill-label">Sequence Mode</span>' +
                '<span class="pill-sub">Curriculum order</span>' +
              '</button>' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'shuffle' ? ' is-selected' : '') + '" data-mode="shuffle">' +
                '<span class="pill-icon">🎲</span>' +
                '<span class="pill-label">Shuffle Mode</span>' +
                '<span class="pill-sub">Randomized order</span>' +
              '</button>' +
            '</div>' +
          '</div>' +

          /* Format selection */
          '<div class="setup__row">' +
            '<div>' +
              '<b style="font-size: 15px;">Question Formats (2 : 1 : 1 Ratio)</b>' +
              '<p class="small muted">Select any combination of question types.</p>' +
            '</div>' +
            '<div class="row row--wrap gap-3" id="fmtbox">' +
              ['mcq', 'tf', 'fib'].map(function (f) {
                var lbl = { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blanks" }[f];
                var icon = { mcq: "🎯", tf: "⚖️", fib: "✍️" }[f];
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
              '<b style="font-size: 15px;">Number of Questions</b>' +
              '<p class="small muted">Choose your practice session length.</p>' +
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
              '<b style="font-size: 15px;">⏱️ Exam Mode (Timed)</b>' +
              '<p class="small muted">Timed exam with no answer reveals until final submission — mirrors annual university exam.</p>' +
            '</div>' +
            '<label class="switch"><input type="checkbox" id="exammode"' + (state.exam ? ' checked' : '') + '><span></span></label>' +
          '</div>' +

          /* Time Limit selector */
          '<div class="setup__row" id="timerow"' + (state.exam ? '' : ' hidden') + '>' +
            '<div>' +
              '<b style="font-size: 15px;">Time Limit</b>' +
              '<p class="small muted">Automatic submission when clock reaches zero.</p>' +
            '</div>' +
            '<div class="seg" id="segtime">' +
              [10, 20, 30, 45, 60].map(function (m) {
                return '<button type="button" class="seg__btn' + (state.minutes === m ? ' is-on' : '') + '" data-min="' + m + '">' + m + ' min</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Action Bar */
          '<div class="row row--wrap mt-8 items-center">' +
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
     SMART REVIEW (Spaced Repetition Queue)
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
        '<div class="empty"><div class="empty__icon">✨</div><h3>All Caught Up!</h3>' +
        '<p>Questions you answer incorrectly reappear tomorrow, then after 2, 4, 8 and 16 days ' +
        'as you master them. Take a quiz or rapid sprint to activate your memory queue.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Go to the Quiz Arena</a></div>';
      return;
    }

    start(shuffle(pool), {
      scope: "review", unitScope: "review", label: "Smart Spaced Review",
      exam: false, minutes: 0, orderMode: "shuffle", subSectionId: "all", unitId: null
    });
  }

  /* ============================================================
     RUNNING A QUIZ — GAMEPLAY ENGINE
     ============================================================ */
  var RUN_VERSION = 2;

  function start(questions, opts) {
    opts = opts || {};
    var n = questions.length;
    run = {
      active: true,
      qs: questions,
      i: 0,
      answers: new Array(n).fill(null),
      checked: new Array(n).fill(false),
      flagged: {},
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
      paletteOpen: false,
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
      var remaining = run.endsAt - Date.now();
      var el = document.getElementById("qtimer");
      if (el) el.textContent = fmtTime(remaining);
      if (remaining <= 0) {
        stopTimer();
        finish(true);
      }
    }, 1000);
  }

  function stopTimer() {
    if (run && run.timer) {
      clearInterval(run.timer);
      run.timer = null;
    }
  }

  function fmtTime(ms) {
    if (ms <= 0) return "00:00";
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60);
    s = s % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  function fmtDuration(sec) {
    if (!sec || sec < 60) return (sec || 0) + "s";
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + "m " + (s ? s + "s" : "");
  }

  function saveRun() {
    if (!run || !run.active) return;
    store.setRunState({
      v: RUN_VERSION,
      scope: run.scope,
      unitScope: run.unitScope,
      label: run.label,
      orderMode: run.orderMode,
      subSectionId: run.subSectionId,
      unitId: run.unitId,
      exam: run.exam,
      minutes: run.minutes,
      i: run.i,
      answers: run.answers,
      checked: run.checked,
      flagged: run.flagged,
      streak: run.streak,
      bestStreak: run.bestStreak,
      startedAt: run.startedAt,
      endsAt: run.endsAt,
      qKeys: run.qs.map(function (q) { return q.key; })
    });
  }

  function allQuestionsByKey() {
    var all = bankFor(
      syllabus.allUnits.map(function (u) { return u.id; }),
      ["mcq", "tf", "fib"]
    );
    var map = {};
    all.forEach(function (q) { map[q.key] = q; });
    return map;
  }

  function savedRun() {
    var s = store.getRunState();
    return (s && s.v === RUN_VERSION && s.qKeys && s.qKeys.length) ? s : null;
  }

  function resumeRun() {
    var s = savedRun();
    if (!s) { renderHub(); return; }
    var map = allQuestionsByKey();
    var questions = s.qKeys.map(function (k) { return map[k]; }).filter(Boolean);
    if (questions.length !== s.qKeys.length) {
      store.clearRunState();
      app.toast("The saved quiz contained outdated questions; starting over");
      renderHub();
      return;
    }
    run = {
      active: true,
      qs: questions,
      i: Math.min(s.i || 0, questions.length - 1),
      answers: s.answers || new Array(questions.length).fill(null),
      checked: s.checked || new Array(questions.length).fill(false),
      flagged: s.flagged || {},
      scope: s.scope,
      unitScope: s.unitScope || s.scope,
      label: s.label,
      orderMode: s.orderMode || "sequence",
      subSectionId: s.subSectionId || "all",
      unitId: s.unitId || null,
      exam: !!s.exam,
      minutes: s.minutes || 0,
      startedAt: s.startedAt || Date.now(),
      endsAt: s.endsAt || (s.exam ? Date.now() + (s.minutes || 20) * 60000 : 0),
      streak: s.streak || 0,
      bestStreak: s.bestStreak || 0,
      paletteOpen: false,
      timer: null
    };
    attachKeys();
    startTimer();
    paintRun();
  }

  /* ---------- text normalization & grading ---------- */
  function normalizeText(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, " ");
  }

  function withinOneEdit(a, b) {
    if (Math.abs(a.length - b.length) > 1) return false;
    var diff = 0, i = 0, j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; }
      else {
        diff++;
        if (diff > 1) return false;
        if (a.length > b.length) i++;
        else if (b.length > a.length) j++;
        else { i++; j++; }
      }
    }
    return true;
  }

  function isCorrect(q, given) {
    if (!isAnswered(given)) return false;
    if (q.format === "mcq") return given === q.a;
    if (q.format === "tf") return given === q.a;

    var g = normalizeText(given);
    var accepted = Array.isArray(q.a) ? q.a : [q.a];
    for (var i = 0; i < accepted.length; i++) {
      var normA = normalizeText(accepted[i]);
      if (g === normA) return true;
      if (normA.length >= 6 && withinOneEdit(g, normA)) return true;
    }
    return false;
  }

  function isAnswered(v) {
    return v !== null && v !== undefined && String(v).trim() !== "";
  }

  function answeredCount() {
    return run ? run.answers.filter(isAnswered).length : 0;
  }

  /* ---------- markup generators ---------- */
  function optionsHtml(q, given, reveal) {
    if (q.format === "mcq") {
      return '<div class="qz-opts">' + (q.o || []).map(function (opt, i) {
        var cls = "qz-opt";
        if (given === i) cls += " is-picked";
        if (reveal) {
          if (i === q.a) cls += " is-right";
          else if (given === i) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + i + '"' + (reveal ? ' disabled' : '') + '>' +
          '<span class="qz-opt__key">' + "ABCD".charAt(i) + '</span>' +
          '<span class="qz-opt__text">' + app.esc(opt) + '</span>' +
          '<span class="opt__state" style="font-size: 18px; margin-left: auto;">' +
            (reveal && i === q.a ? '✅' : (reveal && given === i ? '❌' : '')) +
          '</span>' +
        '</button>';
      }).join("") + '</div>';
    }

    if (q.format === "tf") {
      return '<div class="qz-opts" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">' + [true, false].map(function (v) {
        var cls = "qz-opt opt--tf";
        if (given === v) cls += " is-picked";
        if (reveal) {
          if (v === q.a) cls += " is-right";
          else if (given === v) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + v + '"' + (reveal ? ' disabled' : '') + '>' +
          '<span class="qz-opt__key">' + (v ? "T" : "F") + '</span>' +
          '<span class="qz-opt__text font-bold" style="font-size: 16px;">' + (v ? "True" : "False") + '</span>' +
          '<span class="opt__state" style="font-size: 18px; margin-left: auto;">' +
            (reveal && v === q.a ? '✅' : (reveal && given === v ? '❌' : '')) +
          '</span>' +
        '</button>';
      }).join("") + '</div>';
    }

    // Fill in the blank
    return '<div class="fib-card">' +
      '<div class="fib-input-wrap">' +
        '<input type="text" id="fibinput" class="fib-input" placeholder="Type your answer here..." ' +
        'autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="done" ' +
        'value="' + app.esc(isAnswered(given) ? String(given) : "") + '"' + (reveal ? ' disabled' : '') + '>' +
        (!reveal ? '<button type="button" class="btn btn--primary font-bold" id="fibsubmit">Submit Answer</button>' : '') +
      '</div>' +
      (reveal
        ? '<div class="fib-accepted-callout ' + (isCorrect(q, given) ? 'is-ok' : 'is-error') + '">' +
            '<span class="badge">' + (isCorrect(q, given) ? '✅ Correct' : '❌ Incorrect') + '</span>' +
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
        '<span>' + (ok ? '🎉 Correct Diagnosis!' : '💡 High-Yield Key Note &amp; Explanation') + '</span>' +
      '</div>' +
      '<p class="quiz-explanation-box__body">' + q.e + '</p>' +
      (q.topicId && syllabus.topicById[q.topicId]
        ? '<a class="btn btn--sm btn--ghost mt-3" href="#/topic/' + q.topicId + '">📖 Read the full lesson on ' +
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
        ? '<button class="btn btn--primary btn--lg font-bold" id="submitbtn">Submit Paper 🏁</button>'
        : '<button class="btn btn--primary btn--lg font-bold" id="nextbtn">Next Question →</button>';
    } else if (!revealed) {
      right = run.qs[run.i].format === "fib"
        ? '<button class="btn btn--primary btn--lg font-bold" id="checkbtn">Check Answer (Enter)</button>'
        : '<span class="small faint">Tap an option to check instantly</span>';
    } else {
      right = last
        ? '<button class="btn btn--primary btn--lg qz-btn-pulse font-bold" id="finishbtn">Finish &amp; See Results 🏆</button>'
        : '<button class="btn btn--primary btn--lg qz-btn-pulse font-bold" id="nextbtn">Next Question →</button>';
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

  function streakChipHtml() {
    if (!run || run.streak < 2) return "";
    var combo = run.streak >= 5 ? " 🔥 3x Combo!" : (run.streak >= 3 ? " 🔥 2x Combo!" : "");
    return '<span class="qz-streak-flame">🔥 Streak ' + run.streak + combo + '</span>';
  }

  function paintRun() {
    if (!run || !run.active) return;
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var reveal = !run.exam && run.checked[run.i];

    var subMeta = getSubSectionMeta(q.unitId, q.subSection);
    var subBadge = subMeta
      ? '<span class="chip chip--accent">' + subMeta.icon + ' ' + app.esc(subMeta.title) + '</span>'
      : '';

    var diffBadge = q.diff === 1
      ? '<span class="chip chip--subtle">⭐ Foundational</span>'
      : q.diff === 2
        ? '<span class="chip chip--subtle">⭐⭐ Core UG</span>'
        : '<span class="chip chip--warn">⭐⭐⭐ Rank 1 Classic</span>';

    var soundOn = isSoundEnabled();

    host.innerHTML =
      '<div class="quizrun animate-fade-in" id="quizrun" style="max-width: 900px; margin: 0 auto;">' +

        /* Top Game HUD */
        '<div class="qz-game-hud">' +
          '<button class="btn btn--sm btn--ghost" id="quitbtn">Save &amp; Exit</button>' +
          '<button type="button" class="qz-sound-btn' + (soundOn ? '' : ' is-muted') + '" id="soundtogglebtn" title="Toggle audio feedback">' +
            (soundOn ? '🔊 Sound On' : '🔇 Muted') +
          '</button>' +
          '<span class="chip font-medium">' + app.esc(run.label) + '</span>' +
          '<div class="push"></div>' +
          '<span id="qstreak">' + streakChipHtml() + '</span>' +
          (run.exam ? '<span class="chip chip--warn font-bold" id="qtimer">⏱️ ' + fmtTime(run.endsAt - Date.now()) + '</span>' : '') +
          '<span class="chip font-mono font-bold" id="qcounter">' + (run.i + 1) + ' / ' + run.qs.length + '</span>' +
        '</div>' +

        /* Smooth Progress Bar */
        '<div class="bar bar--lg mt-2" style="height: 6px; border-radius: 999px; overflow: hidden; background: var(--border);">' +
          '<div class="bar__fill" id="qprogress" style="width:' + (((run.i + 1) / run.qs.length) * 100) + '%; background: linear-gradient(90deg, #1565c0, #00897b, #ffa726); transition: width 0.3s ease;"></div>' +
        '</div>' +

        /* Collapsible Question Map Drawer */
        '<div class="qz-pal-wrap mt-2">' +
          '<button type="button" class="qz-pal-toggle" id="paltogglebtn">' +
            '<span>📑 Question Map (' + answeredCount() + '/' + run.qs.length + ' Answered)</span>' +
            '<span id="palarrow">' + (run.paletteOpen ? '▲ Hide' : '▼ View All') + '</span>' +
          '</button>' +
          '<div class="qpal mt-2" id="qpalette"' + (run.paletteOpen ? '' : ' style="display:none;"') + '>' +
            paletteHtml() +
          '</div>' +
        '</div>' +

        /* Main Question Card */
        '<div class="card quizcard mt-4" style="border: 1.5px solid var(--border); border-radius: 16px; box-shadow: 0 4px 18px -4px rgba(0,0,0,0.06);">' +
          '<div class="quizcard__meta">' +
            '<span class="chip chip--accent font-bold">' +
              ({ mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blank" }[q.format] || "Question") +
            '</span>' +
            '<span class="chip font-medium">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
            subBadge +
            diffBadge +
            '<button type="button" class="btn btn--sm btn--ghost qflag' + (run.flagged[run.i] ? ' is-on' : '') +
              '" id="flagbtn" title="Mark this question for review">' +
              (run.flagged[run.i] ? '🚩 Flagged' : '🏳️ Flag') +
            '</button>' +
          '</div>' +

          '<h2 class="quizcard__q mt-4" style="font-size: clamp(18px, 2.5vw, 22px); line-height: 1.45; font-weight: 800;">' +
            app.esc(q.q) +
          '</h2>' +

          '<div id="qbody">' + optionsHtml(q, given, reveal) + '</div>' +
          '<div id="qexplain">' + explainHtml(q, given, reveal) + '</div>' +
        '</div>' +

        /* Action Buttons Row */
        '<div class="row mt-6 items-center" id="qactions">' + actionsHtml() + '</div>' +
      '</div>';

    wireRun();

    var fib = document.getElementById("fibinput");
    if (fib && !reveal) setTimeout(function () { fib.focus(); }, 50);
  }

  /* ---------- Answering interactions ---------- */
  function pickAnswer(value) {
    if (!run || !run.active) return;
    if (!run.exam && run.checked[run.i]) return;

    run.answers[run.i] = value;

    if (run.exam) {
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
    var els = document.querySelectorAll("#qbody .qz-opt");
    els.forEach(function (el) {
      var raw = el.getAttribute("data-pick");
      var val = q.format === "tf" ? (raw === "true") : parseInt(raw, 10);
      el.classList.toggle("is-picked", given === val);
      if (reveal) {
        el.classList.toggle("is-right", val === q.a);
        el.classList.toggle("is-wrong", given === val && val !== q.a);
        el.disabled = true;
        var st = el.querySelector(".opt__state");
        if (st) st.textContent = val === q.a ? "✅" : (given === val ? "❌" : "");
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
    var toggle = document.getElementById("paltogglebtn");
    if (toggle) {
      toggle.querySelector("span").textContent = '📑 Question Map (' + answeredCount() + '/' + run.qs.length + ' Answered)';
    }
  }

  function revealCurrent() {
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    if (!isAnswered(given)) { app.toast("Please select or type an answer first"); return; }
    if (run.checked[run.i]) return;

    run.checked[run.i] = true;
    var ok = isCorrect(q, given);
    store.gradeSrs(q.key, ok);

    if (ok) {
      playSound("correct");
      run.streak = (run.streak || 0) + 1;
      if (run.streak > run.bestStreak) run.bestStreak = run.streak;

      var anchor = document.querySelector("#qbody .qz-opt.is-picked") || document.getElementById("qbody");
      if (app.burstConfetti && anchor) app.burstConfetti(anchor);

      if (run.streak === 3) {
        playSound("milestone");
        if (app.popMilestone) app.popMilestone("🔥 3 in a row! You're on fire!");
      } else if (run.streak === 5) {
        playSound("milestone");
        if (app.popMilestone) app.popMilestone("⚡ 5 Streak! Unstoppable Clinician!");
      } else if (run.streak === 10) {
        playSound("milestone");
        if (app.popMilestone) app.popMilestone("👑 10 STREAK! Master Topper!");
      }
    } else {
      playSound("wrong");
      run.streak = 0;
    }

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

  /* ---------- Event Wiring ---------- */
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
        case "soundtogglebtn":
          var on = toggleSound();
          btn.classList.toggle("is-muted", !on);
          btn.textContent = on ? "🔊 Sound On" : "🔇 Muted";
          if (on) playSound("correct");
          break;
        case "paltogglebtn":
          run.paletteOpen = !run.paletteOpen;
          var pal = document.getElementById("qpalette");
          var arr = document.getElementById("palarrow");
          if (pal) pal.style.display = run.paletteOpen ? "flex" : "none";
          if (arr) arr.textContent = run.paletteOpen ? "▲ Hide" : "▼ View All";
          break;
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
          btn.innerHTML = run.flagged[run.i] ? "🚩 Flagged" : "🏳️ Flag";
          refreshMeters();
          saveRun();
          break;
        case "quitbtn":
          saveRun();
          stopRun(true);
          app.toast("Progress saved! You can resume from the Quiz Arena");
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

  /* ---------- Keyboard Shortcuts ---------- */
  var keyHandler = null;

  function attachKeys() {
    detachKeys();
    keyHandler = function (e) {
      if (!run || !run.active) return;
      if (!document.getElementById("quizrun")) return;
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

  function stopRun(keepSaved) {
    stopTimer();
    detachKeys();
    if (!keepSaved) store.clearRunState();
    run = null;
  }

  /* ============================================================
     RESULTS SCREEN — CELEBRATION & TARGETED RETRY
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
    var unitId = run.unitId;

    stopRun(false);

    if (!host || !document.body.contains(host)) return;

    var verdict = percent >= 85 ? "Distinction Topper 🏆" : percent >= 70 ? "First Class Honours 🌟" : percent >= 50 ? "Passing Grade ✅" : "Revision Recommended 📚";
    var ribbonBg = percent >= 85 ? "background: linear-gradient(135deg, #2e7d32, #43a047); color: #fff;" :
                   percent >= 70 ? "background: linear-gradient(135deg, #1565c0, #1e88e5); color: #fff;" :
                   percent >= 50 ? "background: linear-gradient(135deg, #b25e00, #ffa726); color: #fff;" :
                   "background: linear-gradient(135deg, #c62828, #e53935); color: #fff;";

    var subRows = Object.keys(bySub).map(function (sid) {
      var meta = getSubSectionMeta(unitId, sid) || { icon: "📑", title: sid };
      var s = bySub[sid];
      var p = app.pct(s.right, s.seen);
      return { id: sid, meta: meta, p: p, s: s };
    }).sort(function (a, b) { return a.p - b.p; });

    if (percent >= 70) playSound("milestone");

    host.innerHTML =
      '<div class="result animate-scale-up" style="max-width: 860px; margin: 0 auto; text-align: center;">' +
        (timedOut ? '<div class="callout mb-6"><div class="callout__title">Time Expired</div>' +
          'Your examination paper was submitted automatically when the countdown reached zero.</div>' : '') +

        '<div class="qz-verdict-ribbon" style="' + ribbonBg + '">' + verdict + '</div>' +

        '<div class="result__ring mt-3">' + app.ringHtml(percent, 160) + '</div>' +
        '<h1 class="mt-4">' + correct + ' out of ' + total + ' correct (' + percent + '%)</h1>' +

        '<div class="row row--wrap center mt-3 gap-2" style="justify-content:center">' +
          '<span class="chip font-medium">' + app.esc(label) + '</span>' +
          '<span class="chip">⏱️ ' + fmtDuration(seconds) + '</span>' +
          (bestStreak >= 2 ? '<span class="chip chip--accent font-bold">🔥 Best Streak ' + bestStreak + '</span>' : '') +
          (exam ? '<span class="chip">⏱️ Timed Exam</span>' : '') +
          '<span class="chip">' + (orderMode === "sequence" ? '📖 Sequence' : '🎲 Shuffle') + '</span>' +
        '</div>' +

        /* Action Buttons */
        '<div class="row row--wrap center gap-3 mt-6" style="justify-content: center;">' +
          (wrongList.length > 0
            ? '<button type="button" class="btn btn--primary btn--lg font-bold" id="retrymissedbtn">' +
                '🔁 Retry Missed Questions (' + wrongList.length + ')' +
              '</button>'
            : '') +
          '<a class="btn btn--ghost btn--lg" href="#/quiz">⚡ Try Another Quiz</a>' +
          '<a class="btn btn--ghost btn--lg" href="#/quiz/analysis">📊 Full Analytics</a>' +
        '</div>' +

        /* Formats breakdown */
        '<div class="grid grid--3 mt-6 text-left">' +
          [["mcq", "🎯", "Multiple Choice"], ["tf", "⚖️", "True / False"], ["fib", "✍️", "Fill in Blanks"]]
            .filter(function (f) { return formatStats[f[0]].total > 0; })
            .map(function (f) {
              var st = formatStats[f[0]];
              var acc = st.total ? Math.round(st.right / st.total * 100) : 0;
              return '<div class="card stat-card" style="border: 1.5px solid var(--border); border-radius: 14px;">' +
                '<div class="stat-card__icon" style="font-size: 24px;">' + f[1] + '</div>' +
                '<div>' +
                  '<div class="small muted">' + f[2] + '</div>' +
                  '<b style="font-size: 18px;">' + st.right + ' / ' + st.total + '</b>' +
                  '<div class="small font-bold ' + (acc >= 75 ? 'text-ok' : acc >= 50 ? 'text-warn' : 'text-danger') + '">' + acc + '% accuracy</div>' +
                '</div>' +
              '</div>';
            }).join("") +
        '</div>' +

        /* Sub-sections breakdown */
        (subRows.length > 1
          ? '<h2 class="mt-12 mb-3 text-left flex items-center gap-2"><span>📑</span> Sub-Section Mastery</h2>' +
            '<div class="stack text-left">' + subRows.map(function (r) {
              return '<div class="card mb-2" style="border: 1px solid var(--border); border-radius: 12px;">' +
                '<div class="row items-center gap-2">' +
                  '<span style="font-size: 18px;">' + r.meta.icon + '</span>' +
                  '<b>' + app.esc(r.meta.title) + '</b>' +
                  '<div class="push"></div>' +
                  '<span class="chip ' + (r.p >= 75 ? 'chip--ok' : r.p >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                    r.s.right + '/' + r.s.seen + ' · ' + r.p + '%</span>' +
                '</div>' +
                '<div class="bar mt-2" style="height: 6px; border-radius: 999px;"><div class="bar__fill" style="width:' + r.p + '%; background:' + (r.p >= 75 ? '#2e7d32' : r.p >= 50 ? '#ffa726' : '#d84315') + '"></div></div>' +
              '</div>';
            }).join("") + '</div>'
          : '') +

        /* Missed questions review */
        (wrongList.length
          ? '<h2 class="mt-12 mb-4 text-left flex items-center gap-2"><span>🔍</span> Review of Missed Questions (' + wrongList.length + ')</h2>' +
            '<div class="stack text-left">' + wrongList.map(function (w, idx) {
              var q = w.q;
              var right = q.format === "mcq" ? (q.o || [])[q.a]
                : q.format === "tf" ? (q.a ? "True" : "False")
                : (q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a));
              var mine = !isAnswered(w.given) ? "Not answered"
                : q.format === "mcq" ? (q.o || [])[w.given]
                : q.format === "tf" ? (w.given ? "True" : "False")
                : w.given;
              return '<div class="card mb-3" style="border: 1.5px solid var(--border); border-left: 4px solid var(--danger); border-radius: 14px;">' +
                '<div class="row row--wrap items-center gap-2 mb-2">' +
                  '<span class="chip chip--accent font-bold">#' + (idx + 1) + '</span>' +
                  '<span class="chip font-mono">' + String(q.format).toUpperCase() + '</span>' +
                  '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
                '</div>' +
                '<p style="font-size: 16px;"><b>' + app.esc(q.q) + '</b></p>' +
                '<div class="row row--wrap gap-4 mt-3">' +
                  '<p class="small"><span class="chip chip--danger">Your answer:</span> <b>' + app.esc(String(mine)) + '</b></p>' +
                  '<p class="small"><span class="chip chip--ok">Correct answer:</span> <b>' + app.esc(String(right)) + '</b></p>' +
                '</div>' +
                (q.e ? '<div class="callout mt-3" style="border-radius: 10px;"><div class="callout__title">High-Yield Explanation</div>' + q.e + '</div>' : '') +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm btn--ghost mt-3" href="#/topic/' + q.topicId + '">📖 Read ' +
                    app.esc(syllabus.topicById[q.topicId].title) + ' →</a>'
                  : '') +
              '</div>';
            }).join("") + '</div>'
          : '') +

      '</div>';

    var retryBtn = document.getElementById("retrymissedbtn");
    if (retryBtn) {
      retryBtn.addEventListener("click", function () {
        var missedQs = wrongList.map(function (w) { return w.q; });
        start(shuffle(missedQs), {
          scope: "retry",
          unitScope: "retry",
          label: "🔁 Retry Missed (" + missedQs.length + " Qs)",
          exam: false,
          minutes: 0,
          orderMode: "shuffle",
          subSectionId: "all"
        });
      });
    }
  }

  /* ============================================================
     ANALYTICS & ATTEMPT REVIEW
     ============================================================ */
  function pctOf(right, seen) { return seen ? Math.round((right / seen) * 100) : 0; }

  function scoreChip(p) {
    var cls = p >= 85 ? "chip--ok" : p >= 70 ? "chip--accent" : p >= 50 ? "chip--warn" : "chip--danger";
    return '<span class="chip ' + cls + ' font-mono">' + p + '%</span>';
  }

  function barRow(icon, title, right, seen, extra) {
    var p = pctOf(right, seen);
    var color = p >= 85 ? "#2e7d32" : p >= 70 ? "#1565c0" : p >= 50 ? "#ffa726" : "#d84315";
    return '<div class="card mb-2" style="border: 1px solid var(--border); border-radius: 12px;">' +
      '<div class="row items-center gap-2">' +
        '<span style="font-size: 18px;">' + icon + '</span>' +
        '<b>' + app.esc(title) + '</b>' +
        (extra ? '<span class="small muted ml-2">' + app.esc(extra) + '</span>' : '') +
        '<div class="push"></div>' +
        scoreChip(p) +
        '<span class="small muted ml-2 font-mono">' + right + ' / ' + seen + '</span>' +
      '</div>' +
      '<div class="bar mt-2" style="height: 6px; border-radius: 999px;"><div class="bar__fill" style="width:' + p + '%; background:' + color + '"></div></div>' +
    '</div>';
  }

  function coverageByUnit(srs) {
    var cov = {};
    for (var k in srs) {
      var parts = k.split(":");
      var uid = parts[0];
      if (uid) cov[uid] = (cov[uid] || 0) + 1;
    }
    return cov;
  }

  function leechList(limit) {
    var srs = store.getSrs() || {};
    var map = allQuestionsByKey();
    var list = [];
    for (var k in srs) {
      var entry = srs[k];
      if (!entry || !entry.w) continue;
      var q = map[k];
      if (!q) continue;
      list.push({ q: q, w: entry.w, r: entry.r || 0 });
    }
    list.sort(function (a, b) { return b.w - a.w; });
    return list.slice(0, limit || 10);
  }

  function trendChart(attempts) {
    var pts = attempts.slice(-15).map(function (a) {
      return pctOf(a.correct || 0, a.total || 0);
    });
    if (pts.length < 2) return "";
    var W = 460, H = 100, pad = 12;
    var maxIdx = pts.length - 1;
    var coords = pts.map(function (p, i) {
      var x = pad + (i / maxIdx) * (W - pad * 2);
      var y = H - pad - (p / 100) * (H - pad * 2);
      return { x: Math.round(x), y: Math.round(y), p: p };
    });
    var d = "M " + coords[0].x + " " + coords[0].y;
    for (var i = 1; i < coords.length; i++) {
      d += " L " + coords[i].x + " " + coords[i].y;
    }
    var dots = coords.map(function (c) {
      return '<circle cx="' + c.x + '" cy="' + c.y + '" r="3.5" fill="var(--accent)" />' +
        '<title>' + c.p + '%</title>';
    }).join("");

    return '<div class="card p-3 mb-4" style="border: 1.5px solid var(--border); border-radius: 14px;">' +
      '<div class="row items-center justify-between mb-2">' +
        '<b>📈 Accuracy Trend (Last ' + pts.length + ' Tests)</b>' +
        '<span class="small muted">Latest: ' + pts[pts.length - 1] + '%</span>' +
      '</div>' +
      '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width: 100%; height: auto; overflow: visible;">' +
        '<line x1="' + pad + '" y1="' + (H - pad) + '" x2="' + (W - pad) + '" y2="' + (H - pad) + '" stroke="var(--border)" stroke-width="1" />' +
        '<line x1="' + pad + '" y1="' + (H - pad - 0.5 * (H - pad * 2)) + '" x2="' + (W - pad) + '" y2="' + (H - pad - 0.5 * (H - pad * 2)) + '" stroke="var(--border)" stroke-dasharray="3 3" />' +
        '<path d="' + d + '" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />' +
        dots +
      '</svg>' +
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
          '<div class="row row--wrap items-center gap-2 mb-2"><a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Arena</a></div>' +
          '<h1>Review &amp; Analytics</h1>' +
        '</div>' +
        '<div class="empty"><div class="empty__icon">📊</div><h3>No Quiz History Yet</h3>' +
        '<p>Take your first quiz or rapid sprint to view your accuracy trend, weakest sub-sections, and question review.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Go to the Quiz Arena</a></div>';
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
    var leeches = leechList(10);

    var unitRows = syllabus.theory.map(function (u) {
      var rec = (quiz.byUnit || {})["unit:" + u.id] || null;
      var avail = countAvailable([u.id]);
      var seen = cov[u.id] || 0;
      var styling = { "unit-1": "🔬", "unit-2": "🍄", "unit-3": "🧬", "unit-4": "🛡️", "unit-5": "🦠" }[u.id] || "🔬";
      return barRow(styling, "Unit " + u.no + " · " + u.short, rec ? rec.correct : 0, rec ? rec.total : 0, seen + "/" + avail + " questions seen");
    }).join("");

    var recentAttemptsHtml = attempts.slice(-10).reverse().map(function (a, idx) {
      var p = pctOf(a.correct, a.total);
      var origIdx = attempts.length - 1 - idx;
      return '<a class="tlist__row" href="#/quiz/attempt/' + origIdx + '">' +
        '<span class="tlist__no">' + scoreChip(p) + '</span>' +
        '<span class="tlist__body">' +
          '<span class="tlist__title">' + app.esc(a.label || "Quiz") + '</span>' +
          '<span class="tlist__sub">' + a.correct + ' / ' + a.total + ' correct · ' + fmtDuration(a.seconds || a.minutes * 60) + '</span>' +
        '</span>' +
        '<span class="tlist__right">' + app.icon("chevron", "faint") + '</span>' +
      '</a>';
    }).join("");

    host.innerHTML =
      '<div class="pagehead">' +
        '<div class="row row--wrap items-center gap-2 mb-2">' +
          '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Arena</a>' +
          '<span class="chip chip--accent font-bold">' + attempts.length + ' Tests Taken</span>' +
        '</div>' +
        '<h1>📊 Performance Analytics &amp; Mastery</h1>' +
        '<p class="lede">Comprehensive diagnosis of your strengths, time per question, and high-priority revision topics.</p>' +
      '</div>' +

      '<div class="grid grid--4 mb-6">' +
        '<div class="card stat-card"><div class="stat-card__icon">🎯</div><div><div class="small muted">Overall Accuracy</div><b>' + overall + '%</b><div class="small faint">' + totalRight + '/' + totalQ + ' correct</div></div></div>' +
        '<div class="card stat-card"><div class="stat-card__icon">⚡</div><div><div class="small muted">Pace per Question</div><b>' + perQ + 's</b><div class="small faint">Speed indicator</div></div></div>' +
        '<div class="card stat-card"><div class="stat-card__icon">🔥</div><div><div class="small muted">Best Streak</div><b>' + bestStreak + '</b><div class="small faint">Consecutive correct</div></div></div>' +
        '<div class="card stat-card"><div class="stat-card__icon">📚</div><div><div class="small muted">Question Coverage</div><b>' + answeredKeys + '/' + bankTotal + '</b><div class="small faint">' + Math.round(answeredKeys/bankTotal*100) + '% syllabus tested</div></div></div>' +
      '</div>' +

      trendChart(attempts) +

      '<h2 class="mt-8 mb-3 flex items-center gap-2"><span>🔬</span> Mastery by Syllabus Unit</h2>' +
      '<div class="stack mb-8">' + unitRows + '</div>' +

      (leeches.length
        ? '<h2 class="mt-8 mb-3 flex items-center gap-2"><span>⚠️</span> Most Frequently Missed Questions</h2>' +
          '<div class="stack mb-8">' + leeches.map(function (item) {
            return '<div class="card mb-2" style="border-left: 4px solid var(--danger);">' +
              '<div class="row items-center gap-2 mb-1">' +
                '<span class="chip chip--danger font-bold">Missed ' + item.w + ' times</span>' +
                '<span class="chip">' + app.esc((syllabus.unitById[item.q.unitId] || {}).short || item.q.unitId) + '</span>' +
              '</div>' +
              '<p><b>' + app.esc(item.q.q) + '</b></p>' +
              '<p class="small muted mt-1"><b>Correct:</b> ' + app.esc(item.q.a_display || (Array.isArray(item.q.a) ? item.q.a[0] : item.q.a)) + '</p>' +
            '</div>';
          }).join("") + '</div>'
        : '') +

      '<h2 class="mt-8 mb-3 flex items-center gap-2"><span>📜</span> Test History Log</h2>' +
      '<div class="tlist">' + recentAttemptsHtml + '</div>';
  }

  function renderAttemptReview(idxRaw) {
    resetRun();
    var quiz = store.getQuiz();
    var attempts = quiz.attempts || [];
    var idx = parseInt(idxRaw, 10);
    var a = attempts[idx];

    if (!a) {
      host.innerHTML = '<div class="callout callout--error"><div class="callout__title">Attempt not found</div><a class="btn btn--sm mt-2" href="#/quiz/analysis">Back to analytics</a></div>';
      return;
    }

    var map = allQuestionsByKey();
    var p = pctOf(a.correct, a.total);
    var onlyWrong = false;

    function rowsHtml() {
      var rows = [];
      (a.log || []).forEach(function (e, i) {
        if (onlyWrong && e.ok) return;
        var q = map[e.k];
        if (!q) return;

        var right = q.format === "mcq" ? (q.o || [])[q.a]
          : q.format === "tf" ? (q.a ? "True" : "False")
          : (q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a));
        var mine = !isAnswered(e.g) ? "Not answered"
          : q.format === "mcq" ? (q.o || [])[e.g]
          : q.format === "tf" ? (e.g ? "True" : "False")
          : e.g;

        rows.push(
          '<div class="card mb-3" style="border-left: 4px solid ' + (e.ok ? 'var(--ok)' : 'var(--danger)') + ';">' +
            '<div class="row row--wrap items-center gap-2 mb-2">' +
              '<span class="chip ' + (e.ok ? 'chip--ok' : 'chip--danger') + ' font-bold">#' + (i + 1) + ' · ' + (e.ok ? '✅ Correct' : '❌ Wrong') + '</span>' +
              '<span class="chip font-mono">' + String(q.format).toUpperCase() + '</span>' +
              '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
            '</div>' +
            '<p style="font-size: 15px;"><b>' + app.esc(q.q) + '</b></p>' +
            '<div class="row row--wrap gap-4 mt-2">' +
              '<p class="small"><span class="chip ' + (e.ok ? 'chip--ok' : 'chip--danger') + '">Your answer:</span> <b>' + app.esc(String(mine)) + '</b></p>' +
              (!e.ok ? '<p class="small"><span class="chip chip--ok">Correct:</span> <b>' + app.esc(String(right)) + '</b></p>' : '') +
            '</div>' +
            (q.e ? '<div class="callout mt-2" style="border-radius: 8px;"><div class="callout__title">High-Yield Key Note</div>' + q.e + '</div>' : '') +
          '</div>'
        );
      });
      return rows.join("");
    }

    function paint() {
      host.innerHTML =
        '<div class="pagehead">' +
          '<div class="row row--wrap items-center gap-2 mb-2"><a class="btn btn--sm btn--ghost" href="#/quiz/analysis">← Analytics</a></div>' +
          '<h1>' + app.esc(a.label || "Quiz Attempt") + '</h1>' +
          '<div class="row row--wrap items-center gap-2 mt-2">' +
            scoreChip(p) +
            '<span class="chip">' + a.correct + ' / ' + a.total + ' correct</span>' +
            '<span class="chip">⏱️ ' + fmtDuration(a.seconds || a.minutes * 60) + '</span>' +
            '<span class="chip">' + new Date(a.at).toLocaleDateString() + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="row items-center gap-2 mb-4">' +
          '<button class="btn btn--sm' + (!onlyWrong ? ' btn--primary' : '') + '" data-filter="all">All ' + a.total + ' Questions</button>' +
          '<button class="btn btn--sm' + (onlyWrong ? ' btn--primary' : '') + '" data-filter="wrong">Only Missed (' + (a.total - a.correct) + ')</button>' +
          '<div class="push"></div>' +
          '<button class="btn btn--sm btn--primary" id="retryattempt">🔁 Retake This Test</button>' +
        '</div>' +
        '<div class="stack mt-4">' + (rowsHtml() || '<div class="callout">Nothing to show — you got 100% on this test!</div>') + '</div>';

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

  return {
    render: render,
    reset: resetRun,
    findSubSection: findSubSection,
    isSoundEnabled: isSoundEnabled,
    toggleSound: toggleSound,
    playSound: playSound
  };
})();

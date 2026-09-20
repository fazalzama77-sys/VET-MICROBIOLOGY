/* ============================================================
   quiz-shuffle.js  —  SPREADS THE CORRECT MCQ OPTION ACROSS A/B/C/D
   ------------------------------------------------------------
   The question bank is written with the correct option typed first,
   so every MCQ answered "A". This runs once, immediately after
   data-quiz.JS loads and before quiz.js / search.js read the bank,
   and reorders each question's options.

   Two things matter and are guaranteed here:

   1. The shuffle is DETERMINISTIC — it is seeded from the question
      text, so a question keeps the same option order on every
      device, every reload and every revisit. Saved answers, Smart
      Review and the dashboard stay meaningful.

   2. "All of the above" / "None of the above" style options are
      never moved off the bottom of the list.

   Nothing needs to change in data-quiz.JS. New questions written
   with the answer first are spread out automatically too.
   ============================================================ */

(function () {
  "use strict";

  var TAIL = /^\s*(all|none|both)\s+of\s+(the\s+)?(above|these)/i;

  // FNV-1a: question text -> stable 32-bit seed
  function seedOf(text) {
    var h = 2166136261;
    for (var i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    return h >>> 0;
  }

  // mulberry32: small, repeatable pseudo-random generator
  function rng(seed) {
    var s = seed >>> 0;
    return function () {
      s = (s + 0x6D2B79F5) >>> 0;
      var t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleQuestion(q) {
    if (!q || q._shuffled) return false;
    if (!q.q || !String(q.q).trim()) return false;      // empty template row
    var opts = q.o;
    if (!Array.isArray(opts) || opts.length < 2) return false;
    if (typeof q.a !== "number" || q.a < 0 || q.a >= opts.length) return false;

    // Options such as "All of the above" only make sense last, so hold them back.
    var movable = [];
    var pinned = [];
    opts.forEach(function (text, i) {
      (TAIL.test(String(text)) ? pinned : movable).push(i);
    });
    if (movable.length < 2) return false;

    var rand = rng(seedOf(String(q.q)));
    for (var i = movable.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var tmp = movable[i]; movable[i] = movable[j]; movable[j] = tmp;
    }

    var order = movable.concat(pinned);
    q.o = order.map(function (i) { return opts[i]; });
    q.a = order.indexOf(q.a);
    q._shuffled = true;
    return true;
  }

  function run(bank) {
    if (!bank) return 0;
    var n = 0;
    Object.keys(bank).forEach(function (unitId) {
      var unit = bank[unitId];
      if (!unit || !Array.isArray(unit.mcq)) return;
      unit.mcq.forEach(function (q) { if (shuffleQuestion(q)) n++; });
    });
    return n;
  }

  run(window.quizBank);

  // Exposed so the option order can be checked or re-applied if a bank is added later.
  window.quizShuffle = { run: run, shuffleQuestion: shuffleQuestion };
})();

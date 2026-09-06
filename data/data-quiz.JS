/* ============================================================
   data-quiz.JS  —  THE VETERINARY MICROBIOLOGY QUIZ BANK
   ------------------------------------------------------------
   Units 1 to 5: MCQ / True-False / Fill-in-the-Blank.
   
   Empty template rows are filtered out by app.questionCount()
   and quizApp so the hub reports an honest count of written questions.
   ============================================================ */

var quizBank = {
  "unit-1": {
    mcq: [
      { q: "", o: ["", "", "", ""], a: 0, e: "", topicId: "", diff: "easy" }
    ],
    tf: [
      { q: "", a: true, e: "", topicId: "", diff: "easy" }
    ],
    fib: [
      { q: "", a: ["accepted", "spellings"], e: "", topicId: "", diff: "easy" }
    ]
  },
  "unit-2": {
    mcq: [],
    tf: [],
    fib: []
  },
  "unit-3": {
    mcq: [],
    tf: [],
    fib: []
  },
  "unit-4": {
    mcq: [],
    tf: [],
    fib: []
  },
  "unit-5": {
    mcq: [],
    tf: [],
    fib: []
  }
};

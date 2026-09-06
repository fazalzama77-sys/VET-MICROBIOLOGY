# CLAUDE CONTEXT — Veterinary Microbiology Studio

Read this whole file before doing anything else. It tells you who I am, what we are building, the codebase layout, my conventions, and how I prefer to work.

---

## 👤 ABOUT ME

- **Name:** Fazal Zama
- **Role:** B.V.Sc & A.H. UG student at ICAR — Indian Veterinary Research Institute (IVRI), Bareilly (Roll No. B0-350-2025)
- **Background:** Veterinary science — **NOT a coder.** Explain in plain English with concrete file paths and simple steps.
- **Tools I use:** Windows PC, GitHub Desktop, File Explorer. I do NOT use a terminal. Give me GUI instructions or one-click `.bat` scripts.
- **Developer Credit:** `Mr. Fazal Zama · Developer · B.V.Sc & A.H. UG · Roll No. B0-350-2025 · vet.fazalzama@gmail.com`

---

## 🎯 WHAT WE ARE BUILDING

**Veterinary Microbiology Studio** — a free study website for **B.V.Sc second-year Veterinary Microbiology**, strictly aligned with the VCI MSVE syllabus (Credit hours 3+2=5).

- **Working folder:** `D:/VET MICROBIOLOGY APPLICATION/`
- **GitHub Repository:** `https://github.com/fazalzama77-sys/VET-MICROBIOLOGY`
- **Sister projects:**
  - `D:/PATHOLOGY APPLICATION/` (Veterinary Pathology Studio)
  - Anatomy Studio (Live at `https://veterinaryanatomy.com/`)
  - Veterinary Biochemistry

This project follows the exact proven architecture and shared IVRI Academic light theme of the Pathology Studio.

### The 8 Core Sections
1. **Theory** — Units 1–5 of the VCI theory syllabus (106 topics).
2. **Practical** — Units 1–5 of the practical syllabus (55 topics).
3. **WHY** — Comparative mechanism-first explanations.
4. **Question & Answer** — Written-exam practice: short notes, long answers, differentiate-between tables, definitions, practical spotting.
5. **Quiz** — MCQ / True-False / Fill-blank, with unit-wise, paper-wise, grand test, practical, Exam Mode (timed) and Smart Review (spaced repetition).
6. **Dashboard** — Coverage by unit, accuracy, streak, 12-week heatmap, Leitner boxes.
7. **Library** — Bookmarks · Notes · Highlights · Glossary.
8. **Settings** — Theme, backup/restore, about.

### Exam Structure (VCI Annual Examination)
| Paper | Units | Theory Marks | Practical Marks | Weightage |
|---|---|---|---|---|
| **Paper I** | Units 1, 2, 3 (Bacteriology, Mycology, Biotechnology) | 100 | 60 | 20 |
| **Paper II** | Units 4, 5 (Immunology & Serology, Virology) | 100 | 60 | 20 |

---

## 🎨 THE SHARED IVRI THEME — DO NOT TOUCH COLOURS

All IVRI subject sites share one standardised theme: **The Academic Light Theme** (institutional medical blue on a soft blue-grey ground, Inter + JetBrains Mono).

### The Rules
1. **`assets/css/tokens.css` is the single source of truth.** Every colour, font size and spacing value comes from it.
2. **`tokens.css` is copied byte-for-byte** from the Pathology project. Never re-theme per subject.
3. **Never hard-code a hex value** anywhere else.
4. **Light is the default and canonical theme.** Dark is an optional night-reading mode chosen by the student in Settings.
5. Only the **brand mark** (`VM`), site title, and `<meta name="theme-color">` change.

### Palette Tokens
- `--ivri-blue`: `#1565c0` (Primary: Theory, Dashboard, links, brand mark)
- `--ivri-teal`: `#00897b` (Practical / Lab)
- `--ivri-purple`: `#6a48b5` (WHY / Concepts)
- `--ivri-amber`: `#b25e00` (Quiz / Assessment)
- `--ivri-coral`: `#d84315` (Warning / Important)
- `--ivri-sage`: `#2e7d32` (Success / Healthy)
- `--bg`: `#f0f4f8` (Soft blue-grey page background)
- `--surface`: `#ffffff` (Cards and dialogs)
- `--border`: `rgba(21,101,192,.15)` (Subtle blue borders)

---

## 🗂️ FILE STRUCTURE

```
D:\VET MICROBIOLOGY APPLICATION\
├── 1-CLICK-PUSH-TO-GITHUB.bat 🌟 Auto-syncs, stages, commits & pushes to GitHub
├── SYNC-TO-REPO.bat           Local offline robocopy mirror into repo/
├── index.html                 Single-page app shell. All sections live here.
├── manifest.json              PWA manifest
├── service-worker.js          Offline cache (CACHE_VERSION = "vmicro-v1")
├── README.md                  Content writing guide
├── REPO.md                    GitHub repository guide
├── CLAUDE-CONTEXT.md          THIS FILE (AI reads this first)
│
├── repo/                      📦 PRISTINE MIRROR FOR GITHUB / USB SHARING
│   └── (Exact mirror of assets/, data/, images/, js/, tools/ and root files)
│
├── data/                      ← ALL CONTENT LIVES HERE
│   ├── data-syllabus.JS       Master index: units, topic titles, exam papers
│   ├── data-theory-unit1.JS   Unit 1: General & Systematic Bacteriology (34 topics)
│   ├── data-theory-unit2.JS   Unit 2: Veterinary Mycology (10 topics)
│   ├── data-theory-unit3.JS   Unit 3: Microbial Biotechnology (10 topics)
│   ├── data-theory-unit4.JS   Unit 4: Veterinary Immunology & Serology (19 topics)
│   ├── data-theory-unit5.JS   Unit 5: General & Systematic Veterinary Virology (33 topics)
│   ├── data-practical.JS      All 5 practical units (55 topics)
│   ├── data-why.JS            Mechanism-first WHY entries
│   ├── data-qa.JS             Written-exam Q&A bank
│   ├── data-quiz.JS           Quiz question bank
│   └── events-data.js         Department announcements & academic updates
│
├── js/
│   ├── store.js               localStorage layer. ALL keys prefixed "vmicro-"
│   ├── app.js                 Router + shell + section renderers + highlighter + audio
│   ├── quiz.js                Quiz engine (window.quizApp)
│   ├── dashboard.js           Analytics (window.dashboardApp)
│   ├── glossary.js            209+ term UG dictionary + tooltip decorator + SpeechSynthesis
│   ├── search.js              Global search engine (Ctrl+K)
│   ├── deep-guide.js          Contextual deep guide overlay controller
│   └── events.js              Department announcements renderer
│
├── assets/css/
│   ├── tokens.css             ★ SHARED IVRI THEME — copied verbatim
│   ├── main.css               Reset, layout, shared components, tooltip, hideable sidebar
│   ├── sections.css           Per-screen styles (lesson, quiz, dashboard, etc.)
│   ├── animations.css         GPU-accelerated micro-interactions (transform/opacity only)
│   ├── deep-guide.css         Deep guide presentation styles
│   └── events.css             Department announcements styles
│
├── images/                    theory/ practical/ why/ qa/ figures
└── tools/
    ├── start-server.bat       Double-click → http://localhost:5177
    ├── make-data-files.bat    Double-click → scaffolds new topic blocks
    ├── make-data-files.py     Python topic block scaffolding script
    └── sync-repo.bat          Double-click → refreshes repo/ folder
```

---

## ✍️ CONTENT WRITING STANDARD

- **Target:** Full UG marks, rank 1 and 10 CGPA standard.
- **`desc` (Standard view):** The complete UG exam answer — well-structured, scannable, definitions, staining, morphology, culture characteristics, pathogenicity, diagnosis.
- **`eliteDesc` (Deep view):** Molecular and virulence mechanism depth for toppers.
- **`keyPoints`:** Marks-scoring bullet lines (10–18 per topic).
- **`tables`:** Comparison tables asked in university exams (2–3 per topic).
- **`clinical`:** Field veterinary applications for Indian livestock and poultry practice.

### Mandatory Content Boundaries
1. **No Darwinian origin narratives or phylogenetic speculation.** Explanations focus on established biology, cellular physiology, virulence mechanisms, and species comparisons.
2. **Religious and mythological neutrality.**
3. **Analogy boundary:** No alcohol, intoxication, or alcoholic drink analogies.

---

## ⚙️ KEY ARCHITECTURE FACTS

1. **Storage Prefix:** Every localStorage key uses `"vmicro-"` and is listed in `store.KEYS`.
2. **Empty Template Rule:** Empty rows (`q: ""`, `question: ""`, `title: ""`) must always be filtered out when counting questions or topics.
3. **Vanilla JS Only:** No npm, no frameworks, no build step. Static files running from `file:///` and HTTP servers.
4. **Desktop Sidebar:** Hideable via `< Hide Sidebar` button, hamburger button, or <kbd>Ctrl</kbd>+<kbd>B</kbd>.
5. **Mobile Bottom Nav:** Exactly 5 slots (Theory, Practical, Quiz FAB, Q&A, Progress).
6. **Zero Console Errors:** Always verify with `node --check` after editing data files.

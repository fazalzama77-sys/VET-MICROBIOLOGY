# Veterinary Microbiology Studio

A modern, fast, offline-first curriculum companion for **B.V.Sc & A.H. second-year Veterinary Microbiology**, following the official VCI syllabus (Credit hours 3+2=5). Built in pure vanilla JavaScript, HTML, and CSS — zero build steps, zero npm dependencies, zero complex toolchains.

---

## How to Run It

### Option A — Instant Local Server (Recommended)
Double-click **`tools/start-server.bat`**.
Open your browser to:
```
http://localhost:5177
```
*(Press `Ctrl+C` in the command window to stop the server).*

### Option B — Direct Double-Click
Double-click **`index.html`** in File Explorer. Every route, lesson reader, quiz runner, and dashboard view runs directly from `file:///`.

---

## Project Structure

```
D:\VET MICROBIOLOGY APPLICATION\
│
├── index.html                 Single-page application shell.
├── manifest.json              PWA manifest (installable, standalone, theme-color #1565c0).
├── service-worker.js          Offline caching (CACHE_VERSION = "vmicro-v6").
├── offline.html               Shown if a never-visited page is opened with no signal.
├── 1-CLICK-PUSH-TO-GITHUB.bat Double-click → syncs repo, stages, commits, and pushes to GitHub!
├── SYNC-TO-REPO.bat           Double-click → mirrors all files into repo/ sequentially.
├── README.md                  This content guide.
├── REPO.md                    Student repository & GitHub guide.
├── CLAUDE-CONTEXT.md          The project's living context memory file.
│
├── repo/                      📦 PRISTINE MIRROR FOLDER FOR DRAG-AND-DROP UPLOADS
│   ├── assets/                Sequential copy of assets/
│   ├── data/                  Sequential copy of data/
│   ├── images/                Sequential copy of images/
│   ├── js/                    Sequential copy of js/
│   └── tools/                 Sequential copy of tools/
│
├── data/                      ← ★ ALL SUBJECT CONTENT LIVES HERE ★
│   ├── data-syllabus.JS       Master index: units, topic titles, exam papers
│   ├── data-theory-unit1.JS   Unit 1: General & Systematic Bacteriology (34 topics)
│   ├── data-theory-unit2.JS   Unit 2: Veterinary Mycology (10 topics)
│   ├── data-theory-unit3.JS   Unit 3: Microbial Biotechnology (10 topics)
│   ├── data-theory-unit4.JS   Unit 4: Veterinary Immunology and Serology (19 topics)
│   ├── data-theory-unit5.JS   Unit 5: General & Systematic Veterinary Virology (33 topics)
│   ├── data-practical.JS      All 5 practical units (55 topics)
│   ├── data-why.JS            Mechanism-first comparative "WHY" entries
│   ├── data-qa.JS             Written-exam practice bank (Short notes, Long answers, etc.)
│   ├── data-quiz.JS           MCQ / True-False / Fill-in-the-Blank question bank
│   └── events-data.js         Department announcements & academic updates
│
├── js/                        ← Application Engines (Vanilla JS)
│   ├── pwa.js                 Install card, update toast, offline chip, SW registration
│   ├── store.js               localStorage layer with "vmicro-" prefix
│   ├── app.js                 Router, page renderers, highlighter, and audio reader
│   ├── quiz.js                Quiz engine with Paper I, Paper II, Grand Test, & SRS
│   ├── dashboard.js           Microbiology mastery analytics & 12-week heatmap
│   ├── glossary.js            209+ term UG microbiology dictionary with audio & tooltips
│   ├── search.js              Global Ctrl+K search palette
│   ├── deep-guide.js          Contextual deep guide overlay controller
│   └── events.js              Announcements banner and card renderer
│
├── assets/css/
│   ├── tokens.css             ★ SHARED IVRI ACADEMIC THEME (Do not edit per subject)
│   ├── main.css               Layout, typography, sidebar, tooltips
│   ├── sections.css           Per-screen styles (lesson reader, quiz, dashboard)
│   ├── animations.css         GPU-accelerated micro-interactions
│   ├── deep-guide.css         Diagnostic orientation guide styling
│   └── events.css             Department announcements styles
│
├── images/                    theory/ practical/ why/ qa/ figures
└── tools/
    ├── start-server.bat       Launches local Python server at localhost:5177
    ├── make-data-files.bat    Regenerates data blocks for newly added topics
    ├── make-data-files.py     Python topic block scaffolding script
    └── sync-repo.bat          Refreshes the repo/ mirror directory
```

---

## The 5 Syllabus Units

| Unit | Title | Topics | Exam Paper |
|---|---|---|---|
| **Unit 1** | General & Systematic Veterinary Bacteriology | 34 | Paper I |
| **Unit 2** | Veterinary Mycology | 10 | Paper I |
| **Unit 3** | Microbial Biotechnology | 10 | Paper I |
| **Unit 4** | Veterinary Immunology and Serology | 19 | Paper II |
| **Unit 5** | General and Systematic Veterinary Virology | 33 | Paper II |
| **Practical** | Units 1 to 5 Practical Curriculum | 55 | Papers I & II |

---

## Adding Content

1. Open the relevant file in `data/` (e.g. `data-theory-unit1.JS`).
2. Fill in:
   - `summary`: One crisp summary line displayed at the top.
   - `desc`: Standard view — the complete UG exam answer.
   - `eliteDesc`: Deep view — mechanism depth for top rankers.
   - `keyPoints`: 10–18 high-scoring bullet lines.
   - `clinical`: Practical field/clinical notes tailored for Indian veterinary practice.
   - `tables`: Comparison tables (e.g. Gram-positive vs Gram-negative, Exotoxin vs Endotoxin).
3. Save the file. Refresh your browser to see updates instantly.
4. When ready to publish, double-click **`1-CLICK-PUSH-TO-GITHUB.bat`**.

---

## Installing on a Phone (Offline Use)

The site is a fully installable Progressive Web App. Once installed, every
theory unit, practical, question and quiz works with **no internet at all** —
useful in hostels, labs, field postings and on the way to an exam.

**Android (Chrome, Edge, Samsung Internet)**
1. Open the site.
2. An **Install Vet Micro** card appears at the bottom — tap **Install**.
   (Or use the browser menu → *Install app* / *Add to Home screen*.)

**iPhone / iPad (Safari)**
1. Open the site in **Safari** (Chrome on iOS cannot install web apps).
2. Tap **Share**, then **Add to Home Screen**.

**Desktop (Chrome, Edge)**
Click the install icon in the address bar.

It then opens full screen from the home screen, with its own icon, no browser
bars, and no signal required.

### Keeping it up to date

The app checks for new material each time it is brought to the front. When a
newer version is found, a small bar offers **Refresh** — a quiz in progress is
never interrupted; the update waits until the student taps it.

> **For the author:** after changing any file listed in `PRECACHE` inside
> `service-worker.js`, bump `CACHE_VERSION` (e.g. `vmicro-v6` → `vmicro-v7`).
> Students keep seeing the old copy until that number changes.

---

## Credits

Developed by **Mr. Fazal Zama**  
B.V.Sc & A.H. Undergraduate Student  
ICAR — Indian Veterinary Research Institute (IVRI), Izatnagar, Bareilly  
Roll No: B0-350-2025 · Email: vet.fazalzama@gmail.com

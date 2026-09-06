// =========================================================
// GLOBAL SEARCH ENGINE — Site-wide Veterinary Microbiology Search
// Indexes Theory, Practical, WHY, Q&A and Quiz banks
// Veterinary Microbiology Studio
// =========================================================

const searchEngine = {
    index: [],
    isOpen: false,
    selectedIndex: -1,

    init() {
        this.buildIndex();
        this.setupEventListeners();
    },

    buildIndex() {
        this.index = [];

        // 1. Index Theory Units and Topics
        if (typeof syllabus !== 'undefined' && Array.isArray(syllabus.theory)) {
            syllabus.theory.forEach(unit => {
                const unitId = unit.id;
                const unitTitle = unit.title;
                if (Array.isArray(unit.topics)) {
                    unit.topics.forEach(topic => {
                        let fullText = '';
                        if (typeof theoryData !== 'undefined' && theoryData[unitId] && theoryData[unitId][topic.id]) {
                            const data = theoryData[unitId][topic.id];
                            fullText = [
                                data.summary || '',
                                searchEngine.stripHtml(data.desc || ''),
                                searchEngine.stripHtml(data.clinical || ''),
                                (data.keyPoints || []).map(k => typeof k === 'string' ? k : (k.text || '')).join(' ')
                            ].join(' ');
                        }

                        searchEngine.index.push({
                            type: 'theory',
                            id: topic.id,
                            unitId: unitId,
                            title: topic.title,
                            subtitle: `${unit.num || ''} ${unitTitle}`,
                            description: fullText.substring(0, 260),
                            badge: 'Theory',
                            icon: 'fa-book-open',
                            color: 'var(--ivri-blue)',
                            url: `#/theory/${unitId}/${topic.id}`
                        });
                    });
                }
            });
        }

        // 2. Index Practical Units and Topics
        if (typeof syllabus !== 'undefined' && Array.isArray(syllabus.practical)) {
            syllabus.practical.forEach(unit => {
                const unitId = unit.id;
                const unitTitle = unit.title;
                if (Array.isArray(unit.topics)) {
                    unit.topics.forEach(topic => {
                        let fullText = '';
                        if (typeof practicalData !== 'undefined' && practicalData[unitId] && practicalData[unitId][topic.id]) {
                            const data = practicalData[unitId][topic.id];
                            fullText = [
                                data.summary || '',
                                searchEngine.stripHtml(data.desc || ''),
                                searchEngine.stripHtml(data.clinical || '')
                            ].join(' ');
                        }

                        searchEngine.index.push({
                            type: 'practical',
                            id: topic.id,
                            unitId: unitId,
                            title: topic.title,
                            subtitle: `${unit.num || ''} ${unitTitle}`,
                            description: fullText.substring(0, 260),
                            badge: 'Practical',
                            icon: 'fa-flask',
                            color: 'var(--ivri-teal)',
                            url: `#/practical/${unitId}/${topic.id}`
                        });
                    });
                }
            });
        }

        // 3. Index WHY Section
        if (typeof whyData !== 'undefined' && Array.isArray(whyData)) {
            whyData.forEach(item => {
                if (!item.title) return;
                searchEngine.index.push({
                    type: 'why',
                    id: item.id,
                    title: item.title,
                    subtitle: `WHY · ${item.comparison || item.category || 'Mechanism'}`,
                    description: searchEngine.stripHtml(item.why || '').substring(0, 260),
                    badge: 'WHY',
                    icon: 'fa-lightbulb',
                    color: 'var(--ivri-purple)',
                    url: `#/why/${item.id}`
                });
            });
        }

        // 4. Index Q&A Bank
        if (typeof qaBank !== 'undefined') {
            Object.keys(qaBank).forEach(unitId => {
                const list = qaBank[unitId];
                if (Array.isArray(list)) {
                    list.forEach(qa => {
                        if (!qa.question) return;
                        searchEngine.index.push({
                            type: 'qa',
                            id: qa.id,
                            title: qa.question,
                            subtitle: `${unitId.toUpperCase()} · ${qa.type ? qa.type.toUpperCase() : 'Q&A'} (${qa.marks || 5}M)`,
                            description: searchEngine.stripHtml(qa.answer || '').substring(0, 260),
                            badge: 'Q&A',
                            icon: 'fa-pen-to-square',
                            color: 'var(--ivri-sage)',
                            url: `#/qa`
                        });
                    });
                }
            });
        }

        // 5. Index Quiz Bank
        if (typeof quizBank !== 'undefined') {
            Object.keys(quizBank).forEach(unitId => {
                const unit = quizBank[unitId];
                ['mcq', 'tf', 'fib'].forEach(mode => {
                    if (unit[mode] && Array.isArray(unit[mode])) {
                        unit[mode].forEach((q, idx) => {
                            if (!q.q) return;
                            searchEngine.index.push({
                                type: 'quiz',
                                id: `${unitId}-${mode}-${idx}`,
                                title: q.q,
                                subtitle: `${unitId.toUpperCase()} · ${mode.toUpperCase()}`,
                                description: q.e || '',
                                badge: 'Quiz',
                                icon: 'fa-brain',
                                color: 'var(--ivri-amber)',
                                url: `#/quiz`
                            });
                        });
                    }
                });
            });
        }

        // 6. Index Glossary Dictionary (270+ terms)
        if (typeof glossary !== 'undefined' && typeof glossary.getAll === 'function') {
            glossary.getAll().forEach(item => {
                searchEngine.index.push({
                    type: 'glossary',
                    id: 'glossary-' + (item.term || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    title: item.term,
                    subtitle: `Glossary · ${item.category || 'General'}`,
                    description: (item.def || '').substring(0, 260),
                    badge: 'Glossary',
                    icon: 'fa-book-bookmark',
                    color: 'var(--ivri-teal, #00897b)',
                    url: `#/library/glossary/${encodeURIComponent((item.term || '').toLowerCase().replace(/\s+/g, '-'))}`
                });
            });
        }
    },

    stripHtml(html) {
        if (!html) return '';
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    },

    performSearch(query) {
        if (!query || query.trim().length < 2) return [];
        const terms = query.toLowerCase().trim().split(/\s+/);

        const scored = this.index.map(item => {
            const titleLower = item.title.toLowerCase();
            const descLower = item.description.toLowerCase();
            const subtitleLower = item.subtitle.toLowerCase();
            let score = 0;

            terms.forEach(term => {
                if (titleLower === term) score += 100;
                else if (titleLower.startsWith(term)) score += 80;
                else if (titleLower.includes(term)) score += 60;

                if (subtitleLower.includes(term)) score += 30;
                if (descLower.includes(term)) score += 20;
            });

            return { ...item, score };
        });

        return scored
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 30);
    },

    open() {
        this.isOpen = true;
        this.selectedIndex = -1;
        const modal = document.getElementById('searchmodal');
        const input = document.getElementById('searchinput');
        if (!modal || !input) return;

        modal.hidden = false;
        modal.classList.add('is-open');
        input.value = '';
        input.focus();
        this.renderInitialState();
    },

    close() {
        this.isOpen = false;
        this.selectedIndex = -1;
        const modal = document.getElementById('searchmodal');
        if (!modal) return;
        modal.classList.remove('is-open');
        modal.hidden = true;
    },

    renderInitialState() {
        const container = document.getElementById('searchresults');
        if (!container) return;
        container.innerHTML = `
            <div class="search-empty-state">
                <i class="fas fa-search" style="font-size:2rem; opacity:.3; margin-bottom:10px;"></i>
                <div>Search across all 6 Theory Units, Practicals, WHY, and Questions.</div>
                <div style="font-size:0.75rem; opacity:.6; margin-top:6px;">Type at least 2 letters &middot; Press <kbd>ESC</kbd> to exit</div>
            </div>
        `;
    },

    renderResults(results, query) {
        const container = document.getElementById('searchresults');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = `
                <div class="search-empty-state">
                    <i class="fas fa-inbox" style="font-size:2rem; opacity:.3; margin-bottom:10px;"></i>
                    <div>No results found for "<strong>${this.escapeHtml(query)}</strong>"</div>
                    <div style="font-size:0.75rem; opacity:.6; margin-top:6px;">Try terms like <em>necrosis</em>, <em>infarction</em>, <em>anthrax</em>, or <em>cloudy swelling</em>.</div>
                </div>
            `;
            return;
        }

        let html = `<div class="search-count-strip">${results.length} match${results.length === 1 ? '' : 'es'} found</div>`;

        results.forEach((item, idx) => {
            const highTitle = this.highlight(item.title, query);
            const highDesc = item.description ? this.highlight(item.description, query) : '';

            html += `
                <div class="search-item ${idx === this.selectedIndex ? 'is-selected' : ''}" data-index="${idx}" onclick="searchEngine.navigateIndex(${idx})">
                    <div class="search-item-head">
                        <span class="search-item-badge" style="background: ${item.color}15; color: ${item.color}; border: 1px solid ${item.color}35;">
                            ${item.badge}
                        </span>
                        <span class="search-item-title">${highTitle}</span>
                        <span class="search-item-sub">${item.subtitle}</span>
                    </div>
                    ${highDesc ? `<div class="search-item-desc">${highDesc}</div>` : ''}
                </div>
            `;
        });

        container.innerHTML = html;
    },

    highlight(text, query) {
        if (!query) return this.escapeHtml(text);
        const terms = query.trim().split(/\s+/);
        let result = this.escapeHtml(text);
        terms.forEach(term => {
            if (!term) return;
            const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            result = result.replace(regex, '<mark>$1</mark>');
        });
        return result;
    },

    escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },

    navigateIndex(idx) {
        const input = document.getElementById('searchinput');
        const query = input ? input.value : '';
        const results = this.performSearch(query);
        const item = results[idx];
        if (!item) return;

        this.close();
        window.location.hash = item.url;
    },

    setupEventListeners() {
        const searchBtn = document.getElementById('searchbtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.open());
        }

        const scrim = document.getElementById('searchscrim');
        if (scrim) {
            scrim.addEventListener('click', () => this.close());
        }

        const input = document.getElementById('searchinput');
        if (input) {
            input.addEventListener('input', (e) => {
                const query = e.target.value;
                this.selectedIndex = -1;
                if (query.trim().length < 2) {
                    this.renderInitialState();
                    return;
                }
                const results = this.performSearch(query);
                this.renderResults(results, query);
            });

            input.addEventListener('keydown', (e) => {
                const items = document.querySelectorAll('.search-item');
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (items.length > 0) {
                        this.selectedIndex = (this.selectedIndex + 1) % items.length;
                        this.updateSelected(items);
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (items.length > 0) {
                        this.selectedIndex = (this.selectedIndex - 1 + items.length) % items.length;
                        this.updateSelected(items);
                    }
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
                        this.navigateIndex(this.selectedIndex);
                    } else if (items.length > 0) {
                        this.navigateIndex(0);
                    }
                } else if (e.key === 'Escape') {
                    this.close();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                if (this.isOpen) this.close();
                else this.open();
            }
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    },

    updateSelected(items) {
        items.forEach((it, i) => {
            if (i === this.selectedIndex) {
                it.classList.add('is-selected');
                it.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                it.classList.remove('is-selected');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => searchEngine.init(), 300);
});

if (typeof window !== 'undefined') {
    window.searchEngine = searchEngine;
}

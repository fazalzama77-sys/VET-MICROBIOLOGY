/*
 * Contextual Deep View & Topic Orientation Guide
 * Veterinary Microbiology Studio
 * Isolated from app.js so guide events can never affect lesson rendering.
 */
(() => {
    'use strict';

    const DEEP_STORAGE_KEY = 'vmicro-deep-guide-seen';
    let deepGuide = null;
    let observer = null;
    let checkTimer = null;

    const hasSeenDeepGuide = () => {
        try { return localStorage.getItem(DEEP_STORAGE_KEY) === '1'; }
        catch (_) { return false; }
    };

    const markDeepGuideSeen = () => {
        try { localStorage.setItem(DEEP_STORAGE_KEY, '1'); }
        catch (_) { /* non-critical in private browsing */ }
    };

    const isVisible = (el) => {
        if (!el) return false;
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && el.getClientRects().length > 0;
    };

    const isLessonOpenInStandard = () => {
        const toggle = document.getElementById('deep-toggle') || document.querySelector('.depth-toggle-btn');
        const lessonBody = document.querySelector('.lesson-body, .topic-detail');
        if (!toggle || !lessonBody || !isVisible(toggle)) return false;
        // If already in deep mode, do not show
        const isDeepActive = toggle.classList.contains('active') || document.body.classList.contains('mode-deep');
        return !isDeepActive;
    };

    const positionDeepGuide = () => {
        if (!deepGuide) return;
        const toggle = document.getElementById('deep-toggle') || document.querySelector('.depth-toggle-btn');
        if (!isVisible(toggle)) return;

        const rect = toggle.getBoundingClientRect();
        const gap = 12;
        const width = Math.min(360, window.innerWidth - 24);
        deepGuide.style.width = `${width}px`;

        let left = rect.right - width;
        left = Math.max(12, Math.min(left, window.innerWidth - width - 12));

        const expectedHeight = deepGuide.offsetHeight || 190;
        let top = rect.bottom + gap;
        let pointer = 'above';
        if (top + expectedHeight > window.innerHeight - 12) {
            top = Math.max(12, rect.top - expectedHeight - gap);
            pointer = 'below';
        }

        top = Math.max(12, Math.min(top, window.innerHeight - expectedHeight - 12));

        deepGuide.style.left = `${left}px`;
        deepGuide.style.top = `${top}px`;
        deepGuide.dataset.pointer = pointer;
    };

    const dismissDeepGuide = (remember = true) => {
        if (!deepGuide) return;
        if (remember) markDeepGuideSeen();
        deepGuide.classList.remove('is-visible');
        const old = deepGuide;
        deepGuide = null;
        setTimeout(() => old.remove(), 200);
        window.removeEventListener('resize', positionDeepGuide);
        window.removeEventListener('scroll', positionDeepGuide, true);
    };

    const showDeepGuide = () => {
        if (deepGuide || document.querySelector('.topic-guide') || hasSeenDeepGuide() || !isLessonOpenInStandard()) return;
        const toggle = document.getElementById('deep-toggle') || document.querySelector('.depth-toggle-btn');
        if (!toggle) return;

        deepGuide = document.createElement('aside');
        deepGuide.className = 'deep-guide';
        deepGuide.setAttribute('role', 'dialog');
        deepGuide.setAttribute('aria-modal', 'false');
        deepGuide.setAttribute('aria-label', 'Deep View Guide');
        deepGuide.innerHTML = `
            <button class="deep-guide-close" type="button" aria-label="Dismiss guide">&times;</button>
            <div class="deep-guide-kicker"><i class="fas fa-microscope"></i> TWO LEVELS OF DETAIL</div>
            <h2>Unlock Deep Diagnostic View</h2>
            <p>Tap <strong>Deep View</strong> for comprehensive microbial pathogenesis, cultural characteristics, diagnostic workflows, and clinical correlations.</p>
            <div class="deep-guide-actions">
                <button class="deep-guide-secondary" type="button">Got it</button>
                <button class="deep-guide-primary" type="button">Open Deep View</button>
            </div>
        `;

        document.body.appendChild(deepGuide);

        deepGuide.querySelector('.deep-guide-close').addEventListener('click', () => dismissDeepGuide(true));
        deepGuide.querySelector('.deep-guide-secondary').addEventListener('click', () => dismissDeepGuide(true));
        deepGuide.querySelector('.deep-guide-primary').addEventListener('click', () => {
            markDeepGuideSeen();
            toggle.click();
            dismissDeepGuide(false);
        });

        deepGuide.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') dismissDeepGuide(true);
        });

        positionDeepGuide();
        requestAnimationFrame(() => deepGuide && deepGuide.classList.add('is-visible'));
        [80, 240, 600].forEach((delay) => setTimeout(() => deepGuide && positionDeepGuide(), delay));
        window.addEventListener('resize', positionDeepGuide);
        window.addEventListener('scroll', positionDeepGuide, true);
    };

    const scheduleDeepCheck = () => {
        clearTimeout(checkTimer);
        checkTimer = setTimeout(() => {
            if (deepGuide) positionDeepGuide();
            else showDeepGuide();
        }, 150);
    };

    const initDeepGuide = () => {
        if (hasSeenDeepGuide()) return;
        const viewEl = document.getElementById('view');
        if (!viewEl) return;
        observer = new MutationObserver(scheduleDeepCheck);
        observer.observe(viewEl, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['class', 'style']
        });
        window.addEventListener('popstate', scheduleDeepCheck);
        window.addEventListener('hashchange', scheduleDeepCheck);
        scheduleDeepCheck();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDeepGuide, { once: true });
    } else {
        initDeepGuide();
    }
})();

/*
 * One-time Topic Selection Guide shown when a unit is opened without an active topic.
 */
(() => {
    'use strict';

    const TOPIC_STORAGE_KEY = 'vmicro-topic-guide-seen';
    let topicGuide = null;
    let checkTimer = null;

    const hasSeenTopicGuide = () => {
        try { return localStorage.getItem(TOPIC_STORAGE_KEY) === '1'; }
        catch (_) { return false; }
    };

    const markTopicGuideSeen = () => {
        try { localStorage.setItem(TOPIC_STORAGE_KEY, '1'); }
        catch (_) { /* non-critical */ }
    };

    const isTopicWaiting = () => {
        const rail = document.querySelector('.rail, .topic-rail');
        const firstTopic = document.querySelector('.rail__item, .topic-link');
        const activeTopic = document.querySelector('.rail__item.is-active, .topic-link.active');
        const lessonContent = document.querySelector('.lesson-body');
        return Boolean(rail && firstTopic && !activeTopic && !lessonContent);
    };

    const positionTopicGuide = () => {
        if (!topicGuide) return;
        const firstTopic = document.querySelector('.rail__item, .topic-link');
        if (!firstTopic) return;

        const rect = firstTopic.getBoundingClientRect();
        const width = Math.min(340, window.innerWidth - 24);
        topicGuide.style.width = `${width}px`;

        let left = rect.right + 14;
        let pointer = 'left';
        if (left + width > window.innerWidth - 12) {
            left = rect.left;
            pointer = 'above';
        }
        left = Math.max(12, Math.min(left, window.innerWidth - width - 12));

        let top = rect.top;
        if (pointer === 'above') {
            top = Math.max(12, rect.top - (topicGuide.offsetHeight || 180) - 12);
        }
        top = Math.max(12, Math.min(top, window.innerHeight - (topicGuide.offsetHeight || 180) - 12));

        topicGuide.style.left = `${left}px`;
        topicGuide.style.top = `${top}px`;
        topicGuide.dataset.pointer = pointer;
    };

    const dismissTopicGuide = (remember = true) => {
        if (!topicGuide) return;
        if (remember) markTopicGuideSeen();
        topicGuide.classList.remove('is-visible');
        const old = topicGuide;
        topicGuide = null;
        setTimeout(() => old.remove(), 200);
        window.removeEventListener('resize', positionTopicGuide);
        window.removeEventListener('scroll', positionTopicGuide, true);
    };

    const showTopicGuide = () => {
        if (topicGuide || hasSeenTopicGuide() || !isTopicWaiting()) return;
        const firstTopic = document.querySelector('.rail__item, .topic-link');
        if (!firstTopic) return;

        topicGuide = document.createElement('aside');
        topicGuide.className = 'topic-guide';
        topicGuide.setAttribute('role', 'dialog');
        topicGuide.setAttribute('aria-modal', 'false');
        topicGuide.setAttribute('aria-label', 'Topic Selection Guide');
        topicGuide.innerHTML = `
            <button class="topic-guide-close" type="button" aria-label="Dismiss guide">&times;</button>
            <div class="topic-guide-kicker">GET STARTED</div>
            <h2>Select a lesson topic</h2>
            <p>Click any topic in the list to open the complete theory lesson, clinical notes, and comparative tables.</p>
            <div class="topic-guide-actions">
                <button class="topic-guide-secondary" type="button">Dismiss</button>
                <button class="topic-guide-primary" type="button">Open First Topic</button>
            </div>
        `;

        document.body.appendChild(topicGuide);

        topicGuide.querySelector('.topic-guide-close').addEventListener('click', () => dismissTopicGuide(true));
        topicGuide.querySelector('.topic-guide-secondary').addEventListener('click', () => dismissTopicGuide(true));
        topicGuide.querySelector('.topic-guide-primary').addEventListener('click', () => {
            markTopicGuideSeen();
            firstTopic.click();
            dismissTopicGuide(false);
        });

        positionTopicGuide();
        requestAnimationFrame(() => topicGuide && topicGuide.classList.add('is-visible'));
        [80, 240, 600].forEach((delay) => setTimeout(() => topicGuide && positionTopicGuide(), delay));
        window.addEventListener('resize', positionTopicGuide);
        window.addEventListener('scroll', positionTopicGuide, true);
    };

    const scheduleTopicCheck = () => {
        clearTimeout(checkTimer);
        checkTimer = setTimeout(() => {
            if (topicGuide) positionTopicGuide();
            else showTopicGuide();
        }, 180);
    };

    const initTopicGuide = () => {
        if (hasSeenTopicGuide()) return;
        const viewEl = document.getElementById('view');
        if (!viewEl) return;
        const obs = new MutationObserver(scheduleTopicCheck);
        obs.observe(viewEl, { subtree: true, childList: true });
        window.addEventListener('popstate', scheduleTopicCheck);
        window.addEventListener('hashchange', scheduleTopicCheck);
        scheduleTopicCheck();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTopicGuide, { once: true });
    } else {
        initTopicGuide();
    }
})();

/*
 * Safe renderer for ICAR-IVRI Veterinary Microbiology department announcements.
 * Staff content comes only from data/events-data.js.
 * Uses textContent to guarantee zero HTML injection vulnerabilities.
 */
(() => {
    'use strict';

    const SEEN_KEY = 'vmicro-event-announcements-seen';
    const isLocalPreview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);

    const safeText = (value, fallback = '') => typeof value === 'string' ? value.trim() : fallback;
    const safeUrl = (value) => {
        try {
            const url = new URL(value, location.href);
            return url.protocol === 'https:' ? url.href : '';
        } catch (_) { return ''; }
    };

    const make = (tag, className, text) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    };

    const makeLink = (url, label, className, iconClass) => {
        const href = safeUrl(url);
        if (!href) return null;
        const link = make('a', className);
        link.href = href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        if (iconClass) {
            const iconNode = make('i', iconClass);
            iconNode.setAttribute('aria-hidden', 'true');
            link.append(iconNode, document.createTextNode(' '));
        }
        link.append(document.createTextNode(label));
        return link;
    };

    const validDate = (value) => {
        const date = new Date(value);
        return Number.isNaN(date.getTime()) ? null : date;
    };

    const formatDate = (value) => {
        const date = validDate(value);
        if (!date) return 'Date to be announced';
        return new Intl.DateTimeFormat(undefined, {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
            hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
        }).format(date);
    };

    const normalizeConfig = () => {
        const source = window.IVRI_MICROBIOLOGY_EVENTS_CONFIG;
        if (!source || typeof source !== 'object') return null;
        const events = Array.isArray(source.events) ? source.events.filter((event) => {
            if (!event || typeof event !== 'object' || !safeText(event.id) || !safeText(event.title)) return false;
            return event.published === true || (isLocalPreview && event.published === false);
        }) : [];
        return {
            enabled: source.sectionEnabled !== false,
            title: safeText(source.sectionTitle, 'Microbiology Announcements'),
            subtitle: safeText(source.sectionSubtitle),
            emptyMessage: safeText(source.emptyMessage, 'No upcoming events right now.'),
            youtubeUrl: safeUrl(source.youtubeChannelUrl),
            youtubeLabel: safeText(source.youtubeChannelLabel, 'Visit YouTube channel'),
            events
        };
    };

    const buildCard = (event) => {
        const card = make('article', 'vmicro-event-card');
        if (event.featured === true) card.classList.add('is-featured');

        const meta = make('div', 'vmicro-event-meta');
        meta.append(make('span', 'vmicro-event-category', safeText(event.category, 'Academic Event')));
        if (event.published !== true) meta.append(make('span', 'vmicro-event-draft', 'DRAFT PREVIEW'));

        const title = make('h3', '', safeText(event.title));
        const date = make('p', 'vmicro-event-date');
        date.textContent = `📅 ${formatDate(event.date)}`;

        card.append(meta, title, date);
        const speaker = safeText(event.speaker);
        if (speaker) card.append(make('p', 'vmicro-event-speaker', speaker));
        const description = safeText(event.description);
        if (description) card.append(make('p', 'vmicro-event-description', description));

        const actions = make('div', 'vmicro-event-actions');
        const watch = makeLink(event.youtubeUrl, 'Watch Video', 'vmicro-event-action vmicro-event-youtube', 'fas fa-play');
        const register = makeLink(event.registrationUrl, 'View Details', 'vmicro-event-action vmicro-event-register', 'fas fa-arrow-up-right-from-square');
        if (watch) actions.append(watch);
        if (register) actions.append(register);
        if (actions.children.length) card.append(actions);
        return card;
    };

    const injectStructuredData = (events) => {
        const published = events.filter((event) => event.published === true && validDate(event.date));
        if (!published.length) return;
        const payload = published.map((event) => ({
            '@context': 'https://schema.org',
            '@type': 'EducationEvent',
            name: safeText(event.title),
            startDate: event.date,
            ...(validDate(event.endDate) ? { endDate: event.endDate } : {}),
            eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            ...(safeUrl(event.youtubeUrl) ? { location: { '@type': 'VirtualLocation', url: safeUrl(event.youtubeUrl) } } : {}),
            description: safeText(event.description),
            organizer: { '@type': 'Organization', name: 'ICAR-Indian Veterinary Research Institute', url: 'https://veterinarymicrobiology.com/' }
        }));
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.dataset.vpathEvents = 'true';
        script.textContent = JSON.stringify(payload);
        document.head.append(script);
    };

    const readSeen = () => {
        try {
            const value = JSON.parse(localStorage.getItem(SEEN_KEY) || '[]');
            return Array.isArray(value) ? value : [];
        } catch (_) { return []; }
    };

    const markSeen = (id) => {
        try {
            const seen = new Set(readSeen());
            seen.add(id);
            localStorage.setItem(SEEN_KEY, JSON.stringify([...seen].slice(-40)));
        } catch (_) { /* non-critical */ }
    };

    const showAnnouncement = (event) => {
        const eventId = safeText(event.id);
        if (!eventId || readSeen().includes(eventId)) return;
        if (document.querySelector('.vmicro-event-dialog')) return;

        const overlay = make('div', 'vmicro-event-dialog');
        const dialog = make('section', 'vmicro-event-dialog-card');
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-labelledby', 'vmicro-event-dialog-title');

        const close = make('button', 'vmicro-event-dialog-close');
        close.type = 'button';
        close.setAttribute('aria-label', 'Close announcement');
        close.innerHTML = '&times;';

        dialog.append(close, make('div', 'vmicro-event-dialog-kicker', safeText(event.category, 'Upcoming Microbiology Event')));
        const title = make('h2', '', safeText(event.title));
        title.id = 'vmicro-event-dialog-title';
        dialog.append(title, make('p', 'vmicro-event-dialog-date', formatDate(event.date)));
        if (safeText(event.description)) dialog.append(make('p', 'vmicro-event-dialog-description', safeText(event.description)));

        const actions = make('div', 'vmicro-event-dialog-actions');
        const watch = makeLink(event.youtubeUrl, 'Open Video', 'vmicro-event-action vmicro-event-youtube', 'fas fa-play');
        const register = makeLink(event.registrationUrl, 'View details', 'vmicro-event-action vmicro-event-register', 'fas fa-arrow-up-right-from-square');
        if (watch) actions.append(watch);
        if (register) actions.append(register);

        const later = make('button', 'vmicro-event-later', 'Not now');
        actions.append(later);
        dialog.append(actions);
        overlay.append(dialog);
        document.body.append(overlay);

        const dismiss = () => {
            markSeen(eventId);
            overlay.classList.remove('is-visible');
            setTimeout(() => overlay.remove(), 200);
        };

        close.addEventListener('click', dismiss);
        later.addEventListener('click', dismiss);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
        overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') dismiss(); });
        requestAnimationFrame(() => overlay.classList.add('is-visible'));
    };

    const scheduleAnnouncement = (events, attempts = 0) => {
        const event = events.find((item) => item.published === true && item.featured === true && item.showPopup === true);
        if (!event || readSeen().includes(safeText(event.id))) return;
        const onboardModal = document.getElementById('onboard-modal');
        const isModalOpen = (onboardModal && onboardModal.style.display !== 'none');
        if (isModalOpen && attempts < 15) {
            setTimeout(() => scheduleAnnouncement(events, attempts + 1), 800);
            return;
        }
        showAnnouncement(event);
    };

    const mountEventsSection = () => {
        try {
            const config = normalizeConfig();
            if (!config || !config.enabled) return;

            // Mount after hero stats strip or home cards if present
            const anchor = document.querySelector('.hero-stats-strip, .resume-card, .home-hero');
            if (!anchor) return;
            if (document.getElementById('vmicro-events')) return;

            const section = make('section', 'vmicro-events-section');
            section.id = 'vmicro-events';
            section.setAttribute('aria-label', config.title);

            const header = make('div', 'vmicro-events-header');
            const headingWrap = make('div');
            const eyebrow = make('div', 'vmicro-events-eyebrow', 'ACADEMIC ANNOUNCEMENTS');
            const title = make('h2', '', config.title);
            headingWrap.append(eyebrow, title);
            if (config.subtitle) headingWrap.append(make('p', 'vmicro-events-sub', config.subtitle));
            header.append(headingWrap);

            const channel = makeLink(config.youtubeUrl, config.youtubeLabel, 'vmicro-events-channel', 'fas fa-video');
            if (channel) header.append(channel);
            section.append(header);

            if (config.events.length) {
                const grid = make('div', 'vmicro-events-grid');
                config.events.forEach((event) => grid.append(buildCard(event)));
                section.append(grid);
            } else {
                const empty = make('div', 'vmicro-events-empty');
                const emptyText = make('div');
                emptyText.append(
                    make('strong', '', config.emptyMessage),
                    make('span', '', 'New seminars, webinars, and microbiology diagnostic workshops will be posted here.')
                );
                empty.append(emptyText);
                section.append(empty);
            }

            anchor.insertAdjacentElement('afterend', section);
            injectStructuredData(config.events);
            setTimeout(() => scheduleAnnouncement(config.events), 1500);
        } catch (error) {
            console.warn('Microbiology events section skipped:', error);
        }
    };

    // Observe view changes to mount events when landing view is loaded
    const observeHome = () => {
        mountEventsSection();
        const view = document.getElementById('view');
        if (view) {
            const observer = new MutationObserver(() => {
                if (window.location.hash === '' || window.location.hash === '#/' || window.location.hash.startsWith('#/home')) {
                    mountEventsSection();
                }
            });
            observer.observe(view, { childList: true, subtree: false });
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeHome, { once: true });
    } else {
        observeHome();
    }
})();

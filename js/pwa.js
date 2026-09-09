/* ============================================================
   pwa.js  —  Install, update and offline UI
   Veterinary Microbiology Studio
   ------------------------------------------------------------
   Three small pieces of interface, all created from script so
   index.html only needs one <script> tag:

     1. Install card   — appears when the browser says the app is
                         installable; on iPhone/iPad it shows the
                         manual "Add to Home Screen" steps instead,
                         because Safari fires no install event.
     2. Update toast   — appears when a new service worker is
                         waiting, so students are never stuck on a
                         stale copy of the notes.
     3. Offline chip   — a quiet marker that the connection has
                         dropped. Everything still works.

   Nothing here is required for the app to run; if any of it
   fails the study material is unaffected.
   ============================================================ */
(function () {
  "use strict";

  var DISMISS_KEY = "vmicro-install-dismissed";
  var DISMISS_DAYS = 14;

  /* ---------- small helpers ---------- */

  /* Add the "open" class on the next tick rather than inside
     requestAnimationFrame: rAF does not run while the tab is in the
     background, which would leave the element stuck at opacity 0. */
  function openSoon(node) {
    setTimeout(function () { node.classList.add("is-open"); }, 30);
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches
        || window.matchMedia("(display-mode: minimal-ui)").matches
        || window.navigator.standalone === true
        || document.referrer.indexOf("android-app://") === 0;
  }

  function isIos() {
    var ua = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(ua)
        || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }

  function isSafari() {
    var ua = navigator.userAgent;
    return /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|Chrome|Android/.test(ua);
  }

  function dismissedRecently() {
    try {
      var t = parseInt(localStorage.getItem(DISMISS_KEY) || "0", 10);
      return t && (Date.now() - t) < DISMISS_DAYS * 864e5;
    } catch (e) { return false; }
  }

  function remember() {
    try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch (e) {}
  }

  /* ---------- 1. install card ---------- */

  var deferredPrompt = null;
  var card = null;

  function buildCard(mode) {
    if (card) return card;

    card = el("div", "pwa-card", ""
      + '<img class="pwa-card__icon" src="images/icon-192.png" alt="">'
      + '<div class="pwa-card__body">'
      +   '<strong class="pwa-card__title">Install Vet Micro</strong>'
      +   '<p class="pwa-card__text"></p>'
      +   '<div class="pwa-card__actions"></div>'
      + '</div>'
      + '<button class="pwa-card__close" aria-label="Not now">&times;</button>');

    var text = card.querySelector(".pwa-card__text");
    var actions = card.querySelector(".pwa-card__actions");

    if (mode === "ios") {
      text.innerHTML = 'Tap <span class="pwa-share" aria-hidden="true">'
        + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"'
        + ' stroke-linecap="round" stroke-linejoin="round">'
        + '<path d="M12 15V3"/><path d="m8 7 4-4 4 4"/>'
        + '<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg></span>'
        + ' Share, then <strong>Add to Home Screen</strong> — the whole subject then works with no signal.';
      var ok = el("button", "pwa-btn pwa-btn--ghost", "Got it");
      ok.addEventListener("click", hideCard);
      actions.appendChild(ok);
    } else {
      text.textContent = "Add it to your home screen to open it like an app and study with no signal.";
      var install = el("button", "pwa-btn", "Install");
      install.addEventListener("click", doInstall);
      var later = el("button", "pwa-btn pwa-btn--ghost", "Not now");
      later.addEventListener("click", hideCard);
      actions.appendChild(install);
      actions.appendChild(later);
    }

    card.querySelector(".pwa-card__close").addEventListener("click", hideCard);
    document.body.appendChild(card);
    return card;
  }

  function showCard(mode) {
    if (isStandalone() || dismissedRecently()) return;
    var c = buildCard(mode);
    openSoon(c);
  }

  function hideCard() {
    remember();
    if (!card) return;
    card.classList.remove("is-open");
    setTimeout(function () {
      if (card && card.parentNode) card.parentNode.removeChild(card);
      card = null;
    }, 260);
  }

  function doInstall() {
    if (!deferredPrompt) { hideCard(); return; }
    var p = deferredPrompt;
    deferredPrompt = null;
    p.prompt();
    p.userChoice.then(function () { hideCard(); }).catch(function () { hideCard(); });
  }

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredPrompt = e;
    // Give the app a moment to render before interrupting.
    setTimeout(function () { showCard("prompt"); }, 2500);
  });

  window.addEventListener("appinstalled", function () {
    deferredPrompt = null;
    remember();
    if (card) hideCard();
    toast("Installed. Open it from your home screen any time.", null);
  });

  // iPhone / iPad: no install event exists, so offer the manual steps.
  if (isIos() && isSafari() && !isStandalone()) {
    window.addEventListener("load", function () {
      setTimeout(function () { showCard("ios"); }, 3000);
    });
  }

  /* ---------- 2. toast (used for updates and confirmations) ---------- */

  function toast(message, actionLabel, onAction) {
    var t = el("div", "pwa-toast");
    t.appendChild(el("span", "pwa-toast__text", null)).textContent = message;

    if (actionLabel) {
      var b = el("button", "pwa-btn pwa-btn--tiny", actionLabel);
      b.addEventListener("click", function () {
        close();
        if (onAction) onAction();
      });
      t.appendChild(b);
    }

    var x = el("button", "pwa-toast__close", "&times;");
    x.setAttribute("aria-label", "Dismiss");
    x.addEventListener("click", close);
    t.appendChild(x);

    document.body.appendChild(t);
    openSoon(t);

    var timer = actionLabel ? 0 : setTimeout(close, 5000);

    function close() {
      if (timer) clearTimeout(timer);
      t.classList.remove("is-open");
      setTimeout(function () {
        if (t.parentNode) t.parentNode.removeChild(t);
      }, 260);
    }
    return close;
  }

  /* ---------- 3. offline chip ---------- */

  var chip = null;

  function setOnline(online) {
    if (online) {
      if (chip) {
        chip.classList.remove("is-open");
        var c = chip;
        chip = null;
        setTimeout(function () { if (c.parentNode) c.parentNode.removeChild(c); }, 260);
      }
      return;
    }
    if (chip) return;
    chip = el("div", "pwa-chip", ""
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"'
      + ' stroke-linecap="round"><path d="M2 2l20 20"/>'
      + '<path d="M5 12.5a10 10 0 0 1 4-2.4"/><path d="M8.5 16a5 5 0 0 1 2.2-1.3"/>'
      + '<path d="M12 20h.01"/><path d="M19.5 12.4a10 10 0 0 0-6.8-3.3"/></svg>'
      + '<span>Offline — saved notes still work</span>');
    chip.setAttribute("role", "status");
    document.body.appendChild(chip);
    openSoon(chip);
  }

  window.addEventListener("online", function () { setOnline(true); });
  window.addEventListener("offline", function () { setOnline(false); });
  if (navigator.onLine === false) {
    window.addEventListener("load", function () { setOnline(false); });
  }

  /* ---------- service worker registration and updates ---------- */

  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("service-worker.js").then(function (reg) {

        function offerUpdate(worker) {
          toast("A newer version of the notes is ready.", "Refresh", function () {
            worker.postMessage("SKIP_WAITING");
          });
        }

        // A new worker was already waiting when the page opened.
        if (reg.waiting && navigator.serviceWorker.controller) offerUpdate(reg.waiting);

        reg.addEventListener("updatefound", function () {
          var sw = reg.installing;
          if (!sw) return;
          sw.addEventListener("statechange", function () {
            // "installed" with an existing controller means: this is an update,
            // not the very first install.
            if (sw.state === "installed" && navigator.serviceWorker.controller) {
              offerUpdate(sw);
            }
          });
        });

        // Check for new material when the app is brought back to the front.
        document.addEventListener("visibilitychange", function () {
          if (!document.hidden) reg.update().catch(function () {});
        });
      }).catch(function () { /* offline support simply unavailable */ });

      var reloading = false;
      navigator.serviceWorker.addEventListener("controllerchange", function () {
        if (reloading) return;
        reloading = true;
        location.reload();
      });
    });
  }
})();

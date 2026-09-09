/* ============================================================
   service-worker.js  —  Offline support
   Veterinary Microbiology Studio
   ------------------------------------------------------------
   Strategy:
     - App shell (HTML, CSS, JS, data files): cache first, then
       update in the background. The site opens instantly and
       works with no signal.
     - Navigations: try the network, fall back to the cached
       page, then to index.html, then to the offline page.
     - Images: cache as they are used, up to a sensible limit.
     - Google Fonts (revision sheets): cached on first use so the
       sheets still look right offline.

   IMPORTANT: bump CACHE_VERSION whenever you change any file in
   PRECACHE, otherwise students keep seeing the old version.
   ============================================================ */

var CACHE_VERSION = "vmicro-v5";
var SHELL_CACHE = CACHE_VERSION + "-shell";
var IMG_CACHE = CACHE_VERSION + "-img";
var FONT_CACHE = CACHE_VERSION + "-font";

var IMG_LIMIT = 160;      // most recently used images kept offline

var PRECACHE = [
  "./",
  "index.html",
  "offline.html",
  "manifest.json",

  "assets/css/tokens.css",
  "assets/css/main.css",
  "assets/css/sections.css",
  "assets/css/deep-guide.css",
  "assets/css/events.css",
  "assets/css/animations.css",
  "assets/css/pwa.css",

  "data/data-syllabus.JS",
  "data/data-theory-unit1.JS",
  "data/data-theory-unit2.JS",
  "data/data-theory-unit3.JS",
  "data/data-theory-unit4.JS",
  "data/data-theory-unit5.JS",
  "data/data-practical.JS",
  "data/data-why.JS",
  "data/data-qa.JS",
  "data/data-quiz.JS",
  "data/events-data.js",

  "js/store.js",
  "js/quiz.js",
  "js/dashboard.js",
  "js/glossary.js",
  "js/search.js",
  "js/deep-guide.js",
  "js/events.js",
  "js/app.js",
  "js/pwa.js",

  "revision/unit1-bacteriology.html",
  "revision/unit2-mycology.html",
  "revision/unit3-biotechnology.html",
  "revision/unit4-immunology.html",
  "revision/unit5-virology.html",

  "images/icon-192.png",
  "images/icon-512.png",
  "images/icon-maskable-192.png",
  "images/icon-maskable-512.png",
  "images/apple-touch-icon.png",
  "images/favicon.ico"
];

/* ---------- install: pre-cache the shell ---------- */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(SHELL_CACHE)
      .then(function (c) {
        // addAll fails entirely if one file 404s, so add them one by one.
        return Promise.all(PRECACHE.map(function (url) {
          return c.add(new Request(url, { cache: "reload" }))
                  .catch(function () { /* skip missing file */ });
        }));
      })
  );
  // Deliberately NOT calling skipWaiting() here. On an update the new
  // worker waits until the student taps "Refresh" on the toast, so a
  // quiz in progress is never reloaded out from under them. The very
  // first install has no old worker to wait for and activates at once.
});

/* ---------- activate: drop old versions ---------- */
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k.indexOf(CACHE_VERSION) !== 0) return caches.delete(k);
      }));
    }).then(function () {
      if (self.registration.navigationPreload) {
        return self.registration.navigationPreload.enable().catch(function () {});
      }
    }).then(function () { return self.clients.claim(); })
  );
});

/* ---------- let the page trigger an immediate update ---------- */
self.addEventListener("message", function (e) {
  if (e.data === "SKIP_WAITING" || (e.data && e.data.type === "SKIP_WAITING")) {
    self.skipWaiting();
  }
});

/* ---------- helpers ---------- */
function trimCache(name, max) {
  return caches.open(name).then(function (c) {
    return c.keys().then(function (keys) {
      if (keys.length <= max) return;
      return Promise.all(keys.slice(0, keys.length - max).map(function (k) {
        return c.delete(k);
      }));
    });
  });
}

function cacheFirst(req, cacheName) {
  return caches.open(cacheName).then(function (c) {
    return c.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && (res.status === 200 || res.type === "opaque")) {
          c.put(req, res.clone());
        }
        return res;
      });
    });
  });
}

/* ---------- fetch ---------- */
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  /* ---- Google Fonts used by the revision sheets ---- */
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      cacheFirst(req, FONT_CACHE).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || new Response("", { status: 504, statusText: "Offline" });
        });
      })
    );
    return;
  }

  if (url.origin !== location.origin) return;   // never touch other third-party requests

  /* ---- Navigations: network first, then cache, then offline page ---- */
  if (req.mode === "navigate") {
    e.respondWith(
      e.preloadResponse
        .then(function (preload) { return preload || fetch(req); })
        .then(function (res) {
          if (res && res.status === 200) {
            var copy = res.clone();
            caches.open(SHELL_CACHE).then(function (c) { c.put(req, copy); });
          }
          return res;
        })
        .catch(function () {
          // Each caches.match() returns a promise, so these have to be
          // chained — a plain `a || b` would always pick the first
          // promise even when it resolves to nothing.
          return caches.match(req)
            .then(function (hit) { return hit || caches.match("index.html"); })
            .then(function (hit) { return hit || caches.match("./"); })
            .then(function (hit) { return hit || caches.match("offline.html"); })
            .then(function (hit) {
              return hit || new Response(
                "<!doctype html><meta charset=utf-8><title>Offline</title>" +
                "<p style=\"font:16px system-ui;padding:24px\">You are offline and this page has not been saved yet.",
                { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
              );
            });
        })
    );
    return;
  }

  /* ---- Images: cache on first use, keep the most recent ones ---- */
  if (/\.(png|jpg|jpeg|webp|gif|svg|ico|avif)$/i.test(url.pathname)) {
    e.respondWith(
      caches.open(IMG_CACHE).then(function (c) {
        return c.match(req).then(function (hit) {
          if (hit) return hit;
          return fetch(req).then(function (res) {
            if (res && res.status === 200) {
              c.put(req, res.clone()).then(function () {
                trimCache(IMG_CACHE, IMG_LIMIT);
              });
            }
            return res;
          }).catch(function () {
            // Offline and never cached: a transparent pixel keeps the
            // layout intact instead of showing a broken-image icon.
            return new Response(
              Uint8Array.from(atob(
                "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              ), function (ch) { return ch.charCodeAt(0); }),
              { headers: { "Content-Type": "image/gif" } }
            );
          });
        });
      })
    );
    return;
  }

  /* ---- Everything else: cache first, refresh in background ---- */
  e.respondWith(
    caches.match(req).then(function (hit) {
      var network = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(SHELL_CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        // Offline and not cached: fall back to the app shell so
        // hash routes still resolve.
        return hit || caches.match("index.html");
      });
      return hit || network;
    })
  );
});

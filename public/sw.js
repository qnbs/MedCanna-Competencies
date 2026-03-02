/**
 * MedCanna Competencies – Service Worker
 *
 * Strategy: Network-first with offline fallback cache.
 * Caches the app shell on install so the app loads offline.
 * Updates automatically on new deployments via CACHE_VERSION bump.
 */

const CACHE_VERSION = 'medcanna-v1';
const BASE = '/MedCanna-Competencies/';

const PRECACHE_URLS = [
  BASE,
  BASE + 'index.html',
  BASE + 'favicon.svg',
  BASE + 'manifest.json',
];

// Install: pre-cache app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: network-first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Skip non-GET and cross-origin requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone and cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match(BASE + 'index.html')))
  );
});

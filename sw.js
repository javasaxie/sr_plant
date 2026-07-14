const CACHE_NAME = 'sr-plant-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Membiarkan iframe berjalan normal tanpa di-cache paksa agar data selalu realtime
    event.respondWith(fetch(event.request));
});

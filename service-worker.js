﻿self.addEventListener('install', event => {
    console.log('Service Worker: Yüklendi');
    event.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./', './index.html', './styles.css', './app.js']);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});


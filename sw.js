// Minimal service worker: Chrome offers "Install app" only when one with a fetch handler is registered.
// It caches nothing; every request goes straight to the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  if (new URL(event.request.url).origin === self.location.origin) event.respondWith(fetch(event.request));
});

// Service worker for the OF Ledger launcher.
// - fetch: Chrome offers "Install app" only when a service worker with a fetch handler is registered.
//   It caches nothing; every request goes straight to the network.
// - push / notificationclick: shows the 10:00 morning brief sent through Firebase Cloud Messaging and
//   opens the ledger's Tasks tab when it is tapped.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  if (new URL(event.request.url).origin === self.location.origin) event.respondWith(fetch(event.request));
});

self.addEventListener('push', (event) => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch (_) { payload = {}; }
  const d = payload.data || payload;
  const title = d.title || 'OF Ledger';
  event.waitUntil(self.registration.showNotification(title, {
    body: d.body || '',
    icon: 'icons/icon-192.png',
    badge: 'icons/badge-96.png',
    tag: d.tag || 'of-ledger-brief',
    renotify: true,
    data: { url: d.url || './?source=app&tab=tasks' }
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = new URL((event.notification.data && event.notification.data.url) || './?source=app&tab=tasks', self.registration.scope).href;
  event.waitUntil(self.clients.openWindow(url));
});

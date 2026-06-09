// Service worker: shell offline + HTML fresco cuando haya conexión.
const CACHE = 'gctrip-v14';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './img/portada.jpg',
  './img/ferry.jpg',
  './img/coche-lado.jpg',
  './img/ferrari.jpg',
  './img/coche-frente.jpg',
  './img/comida.jpg',
  './img/playa.jpg',
  './img/hotel.jpg',
  './img/alisios.jpg',
  './img/dari-flores.jpg',
  './img/beso.jpg',
  './img/lavando.jpg',
  './img/dari.jpg',
  './img/arenas.jpg',
  './img/conduciendo.jpg',
  './img/holidayworld.jpg',
  './img/burger.jpg',
  './img/madrugon.jpg',
  './img/conduciendo2.jpg',
  './img/delfines.jpg',
  './img/mogan.jpg',
  './img/muelle.jpg',
  './img/tenerife.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isSameOrigin = e.request.url.startsWith(self.location.origin);
  const wantsHTML = e.request.mode === 'navigate' || (e.request.headers.get('accept') || '').includes('text/html');

  if (wantsHTML) {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok && isSameOrigin) {
          const copy = res.clone();
          e.waitUntil(caches.open(CACHE).then(c => c.put('./index.html', copy)));
        }
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && isSameOrigin) {
        const copy = res.clone();
        e.waitUntil(caches.open(CACHE).then(c => c.put(e.request, copy)));
      }
      return res;
    }))
  );
});

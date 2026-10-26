const CACHE='manabikko-v4';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./characters/chick.jpg','./characters/cat.jpg','./characters/dog.jpg','./characters/rabbit.jpg','./characters/fox.jpg','./characters/bear.jpg','./characters/penguin.jpg','./characters/frog.jpg','./characters/hamster.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

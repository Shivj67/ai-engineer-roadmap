const CACHE='ai-roadmap-os-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json']))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const q=r.clone();caches.open(CACHE).then(x=>x.put(e.request,q));return r}).catch(()=>caches.match('./index.html'))))});

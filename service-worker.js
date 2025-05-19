self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('attendance-cache').then((cache) => {
        return cache.addAll([
          'attendance_system_pwa.html',
          'manifest.json',
          'https://cdn.sheetjs.com/xlsx-latest/package/dist/shim.min.js',
          'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js'
        ]);
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });

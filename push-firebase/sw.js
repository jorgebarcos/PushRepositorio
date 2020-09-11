


const nombreCache = 'sakura-v1';

const archivos = [
    '/',
    '/index.html'
];


// Cuando se instala el service Worker
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                return cache.addAll(archivos)
            })
        )
});

// Activar el Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e);
});

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e)

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache
            })
    )
})
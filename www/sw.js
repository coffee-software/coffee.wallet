'use strict';
/* jshint esversion: 6 */
/* global self */
/* global caches */
/* global console */

const CACHE_KEY = 'DEVELOP';

const CACHE_URLS = [
];

/* END OF GENERATED CODE, do not touch this line */

self.addEventListener('install', event => {
  console.log('sw: install');
  event.waitUntil(
    caches.open(CACHE_KEY).then(function(cache){
        var toFetch = CACHE_URLS.length;
        CACHE_URLS.forEach(function(url){
            fetch(url + '?v=' + CACHE_KEY).then(function(response) {
                if (!response.ok) {
                    throw new TypeError('bad response status');
                }
                toFetch --;
                cache.put(url, response);
                if (toFetch == 0) {
                    self.skipWaiting();
                }
            });
        });
    })
  );
});

self.addEventListener('activate', event => {
  console.log('sw: activate');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => cacheName != CACHE_KEY);
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        console.log('sw: clearing cache ' + cacheToDelete);
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    if (CACHE_KEY == 'DEVELOP') {
       return fetch(event.request);
    }
    var url = new URL(event.request.url);
    if (url.pathname == '/version.json') {
       console.log('sw: checking for updates..');
       return fetch(event.request);
    }
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        console.log('sw: error NO MATCH', event.request.url);
      })
    );
  }
});
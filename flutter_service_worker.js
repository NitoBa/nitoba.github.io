'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6e83eb32664b4ef557e1cfe387a2b704",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/bolls.png": "6d12ee37a5301f14c0d7a88e714e4c38",
"assets/assets/images/circles1.png": "667296df15dea6cee168bb02a84afae9",
"assets/assets/images/circles2.png": "e08d3d80ea3447d68d4528c8856c38cd",
"assets/assets/images/ilustration.png": "5def35b3e3444126a057f73b80722b29",
"assets/assets/images/perfil3.png": "4e4aea38933322bd5f7b13c9014da33e",
"assets/assets/images/perfilgithub.jpg": "59a882d51509866fe1a189db16abe7f9",
"assets/FontManifest.json": "12ee285c78f795aa87cc3cbe27be9e92",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "ace0432726f8051f55c4b2e890e47320",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "8900ed45d539c001b67113df0f58607b",
"icons/Icon-192.png": "0278c96df9a400f575911afb8b9cc914",
"icons/Icon-512.png": "b0d87766c09aa3661d0b206574b0d3e9",
"index.html": "1b40108d8b1e8bd3cdc9ab87c26ee15f",
"/": "1b40108d8b1e8bd3cdc9ab87c26ee15f",
"main.dart.js": "5c6afac1ff6b6d89536016837b5d30e9",
"manifest.json": "adaffb29b627e19ad8ea51e8d512972c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

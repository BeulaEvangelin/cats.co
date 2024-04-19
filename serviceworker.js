// ZIM Zapps PWA Service Worker to cache app files
// Please check to see all files have been listed with local links
// (Do not worry about icon files)

var cacheName = "zim_pwa_Cat_on_the_wall";
var filesToCache = [
  "./",
  "index.html",
  "level1.html",
  "level2.html",
  "level3.html",
  "libraries/createjs.js",
  "libraries/zim_min.js",
  "libraries/box2d.js",
  "libraries/physics_2.2.js",
  "assets/angyMeow.wav",
  "assets/Asset1.png",
  "assets/Asset2.png",
  "assets/Asset3.png",
  "assets/Asset4.png",
  "assets/bg.png",
  "assets/bgM.mp3",
  "assets/cat1.png",
  "assets/cat2.png",
  "assets/cat3.png",
  "assets/click.wav",
  "assets/introanim1.png",
  "assets/menu.png",
  "assets/RandomThought.ttf",
  "assets/startButton.png",
  "assets/title.png",
  "assets/wall.json",
  "assets/wall.png",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

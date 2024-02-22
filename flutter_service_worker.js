'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "47e0e6421974cfb54718fc12f0ea576c",
".git/config": "7967219706710613994cb0ea4c8218b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "79532c7cba0d429f5583ea35c9cda0e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c793b0b1b90a642dae6c8c2bb86b75b",
".git/logs/refs/heads/main": "500fbe445477b77043b32847a4e3f33a",
".git/logs/refs/remotes/origin/main": "e3ea11f93f48ea52cf5d04efdfec2e38",
".git/objects/04/6dd5f438c1ffcaeecd51bdddc14dfdeffade25": "1a5b54e95a495f6674fa4718ee55ef4c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/8a2e17209215c693665996d0dff83a42f3624c": "9d183ba9c3723419f9c4234bda25f2f2",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/a8dce8414de0b1573b2a8aae68bb8dd84b3b56": "f31a6940f3113e463419e94f3508aeaf",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/06d11710124248c47987423d12eed67a3a15af": "ae32c7d07b13309410824b11754eae3f",
".git/objects/2f/9fcf61edd963cf5fc849f258b36068aab4efb9": "68059dd39ec9195284c118cc5cb7509d",
".git/objects/34/dbdca5b8ddfc87c1ad4364b3cbb9d08c3e18f1": "7fe9ab4ef984ac285a640ad211117cf7",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/382e8401acac971dd8e919ebbe19941f824733": "ad5d5a95d7307bb24082aa661c3932fb",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/28617cb543358560409106df4ece78879cad4b": "a45a2dea5462f7e3088550404a063419",
".git/objects/3e/a180f4f958cc4feda7947f0fa0f5262b8a7c6d": "8835492d11ce16582fe6d46d4b2ad7c9",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/f308ef56831300d787061434a6aa2b41328b11": "4181cf9700ac4becf3b371c9028af324",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/e79410525e292b633bd00ae10a33fa201518ec": "0f47971f39274c4fcb791cb1806909cd",
".git/objects/55/ea51ac75aa1fdd81b8f8389e881c0559cb71a6": "96102a9d28f166d0862a947ef07c501d",
".git/objects/55/eb85e09615a952df432e01d18f8f646febd684": "e952ba33d4293a788209650fc1b0cc3d",
".git/objects/57/d6c0a2ed4f036048cefbcaf338bb34b997d913": "a338fba8c896721376a89195f8bfb804",
".git/objects/5b/46e88b4030eb8c6ccfaf123e2c03fc5b5e0203": "c8e577ccb3be00d9fe5e3398e967af5b",
".git/objects/61/a447768d2a6b3dfa8a1364102672a7c6acdb8d": "591d02fb94c5909638b123c42d1df7f6",
".git/objects/62/27285d51e8031f94a2443b7a1e52ed2952a2f0": "ff365738593d4ff436049843436e0d3e",
".git/objects/63/74ab42b7dafccfa5006533d8a729bf5f61435b": "180a39b1ba34f9316745a106db505461",
".git/objects/6d/99c3759e9100aac1610f1304df74a0a929a529": "e609039dcb571d2708127679eaea3025",
".git/objects/77/69d667c205ae08867e150f6decb4011a87b5fe": "8bf734f44587e0812050faf02fa9e6ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/8d449d9594f0f11b5b8161223b428764ace314": "0758572a43dbb82bae7b0a70c69aadd7",
".git/objects/95/b34e0c4aa26b09d9bf6a4a192eece2a78b2eaa": "dffe6a329cd94b8aa0f396f5e35a0958",
".git/objects/96/90854eb19d6d78b425232578d2682322807555": "bceb37abdfa32477bbbda26a19062bf9",
".git/objects/ad/4d861a28b3fbfb402954679c556817bb8f5ffe": "db5a1c030c79ec7da8b41139f2dd2c77",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/1f6737c3c7d227efa32f269647621b5a791f9a": "005c17d9b6777ce8b3c849e06372f0a9",
".git/objects/c1/d83742df63a1f46ba3ea12a08253cc47bc15f6": "dfd905b70566553ddbc7d343d2d84f4f",
".git/objects/c3/aa364c43e5282f69d2611d3226d978c48ac0ed": "547c1d002e1ec27461720d4b8087ad18",
".git/objects/cc/f5416fd6adcdf1ac31e450ca45ae6c25ef53c7": "3f9e66191f3e67dd269583d83637178a",
".git/objects/cd/1516683722f38b7dfc6136de17293e3a4d79e4": "2d71ebbf1c61d796bbb3531e4b9c5d48",
".git/objects/ce/a1ddde278a5f4c70e926480c598d57eceba0bf": "b68fe0a6082371aa56c1ba24bea72243",
".git/objects/d1/49644cd642fd345e2e0d85c0d5609a28e88709": "0ec7358bae9d929dd6bc12fd90c978cc",
".git/objects/d2/d9a42e24b30c07a9de98668cd0e9954bdb7717": "e3ef97609827afebabb61ac388b9821c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/5d59170ea9390c9ced0bcac289be1a1f378fba": "8480fe080e032c4d5ab3312f3e1d0bb7",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/3ffd9b2e4fc9ac3b3fb73ac105cfbd8d75ab11": "b097b7572fbefaede7f077193070f8e4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3d2455fc24a8ce90bd961a6ab13d8b56663021": "4948af515d168b1d79764f612520bc86",
".git/objects/f9/3ddc0ee09f39f5920ff77ae32ca5f2b8fcb84e": "b9266d4935fd36aead94b5e57740cb6d",
".git/objects/fb/da6b0d27dc30cba5d9cd4e57c4261ac9b120f2": "7d016ac0a32287a13540c0117aeb2edd",
".git/objects/ff/348252178a7788142f3e7457e3a82aafb27dfe": "8a3fba05dddceed2f6bc8bba1a1ae117",
".git/refs/heads/main": "674813a907c9cd9b079cc422759b43ae",
".git/refs/remotes/origin/main": "674813a907c9cd9b079cc422759b43ae",
"assets/AssetManifest.bin": "75636d49a4f0a104ca12103c13416404",
"assets/AssetManifest.bin.json": "f9f2c9bff1d68b4e087da8dd621f487f",
"assets/AssetManifest.json": "14267cf8235e2f7f20a189cd8a7d864b",
"assets/assets/fonts/Cabin-Bold.ttf": "bbd44d52dace612e07fe4e4a28fd8def",
"assets/assets/fonts/Cabin-Medium.ttf": "326c11d42e7d2d32a0c568e8348b294f",
"assets/assets/fonts/Cabin-Regular.ttf": "a1d77c9c8493112f933aaf70c017f817",
"assets/assets/fonts/Cabin-SemiBold.ttf": "aff0ce7dd1504ade3d0b9a4e585314cb",
"assets/assets/images/app_logo.png": "bf5351ff5555c5e3487ab35dbf018b95",
"assets/assets/svgs/doc_svg.svg": "a54286e3b4c0f907748183fda191d3a6",
"assets/assets/svgs/image_svg.svg": "82de95404d2f7f78c7e9785055da6666",
"assets/assets/svgs/logout_svg.svg": "636830e0538ae2ac2f5ab8c59b422fb2",
"assets/assets/svgs/notification.svg": "fa432ceb1d0fbea1d5cdb2b6df60d01d",
"assets/FontManifest.json": "902f3de7f1f90f3de24c45bce7287ec6",
"assets/fonts/MaterialIcons-Regular.otf": "6a4ec918fda580b2f79565c2e7b10e0d",
"assets/NOTICES": "29d60ae5861a63a543e421926fe819c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e25dcefaeb12407b331139777edbe5ad",
"/": "e25dcefaeb12407b331139777edbe5ad",
"main.dart.js": "cde389aae00ae4794187f7ee92973326",
"manifest.json": "ad999fee23c464b02cce3191b086dd18",
"version.json": "be123cb5b91c978d7a75dfab0c2a73a7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

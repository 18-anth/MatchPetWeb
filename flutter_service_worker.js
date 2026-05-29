'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bc182006ae16fc7ec737bb1f7a9e86ba",
"version.json": "fbfd0ab3d2e1a265d78e55e3bf21e5a9",
"favicon.ico": "bb86e4001f8b4bd57641e9dc418e1e28",
"index.html": "cb3a87941a4eed0ab8b8766c87f06af7",
"/": "cb3a87941a4eed0ab8b8766c87f06af7",
"LICENSE": "89c4e4684a3ba70776694e49ff45e92d",
"main.dart.js": "489f556bb3078910020a7a83d14dc20c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"git.txt": "6f8d0ac7bd4fd317195c598e22b9e34a",
"icons/Icon-192.png": "6d9ac022c3b32676e499041e8bcda6e0",
"icons/Icon-maskable-192.png": "6d9ac022c3b32676e499041e8bcda6e0",
"icons/Icon-maskable-512.png": "e028506859d067c414584c4d02d9fdac",
"icons/Icon-512.png": "e028506859d067c414584c4d02d9fdac",
"manifest.json": "d10bd905ddd290016eb4c1a97774d30d",
"sitemap.xml": "924a8c90fd44a2d4b5d434436f4a900c",
".git/config": "bb90f18489b310d3f28fe59f7c370f15",
".git/objects/0c/50fb1e8b2508772a9fb200256fcc684ccbc3ed": "db82af77669135ebe890de375a66501d",
".git/objects/57/2bce0df871a9c1e67835e9252e81b13565899d": "96b2a813f5774957b5bc8097693cdde1",
".git/objects/3b/4cbaa04ce068273cd35657e8a7ac4f45189a66": "e61c400df6356b69965268dc4eb2aca8",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/69/91c64fb66f816f4254f05b1775c0de2380fec4": "8106a1954bfb476664920882edd44689",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "e46bc161d4da3ce1d34234badc3f7a34",
".git/objects/9c/c2d3e2261d46be3632227046415a8ed9ca248d": "c34675663515fed7f40204d3c320e9a8",
".git/objects/d0/d0c1d4d10926d4e264304794235617404f0199": "50c456d55ee6c1dd2590fc2c2cee7d33",
".git/objects/c0/873685388faf3ca49c7217b581d29e80e8497a": "d5eb0ea24dce8e966dda3db84f9a5b95",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "ab44c9734516beeebec6230aeae5d2ce",
".git/objects/c9/a4ebfc53314602911c57ab9beb349b39acc34b": "49ddf9903a421f8975f9baec2423f298",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/e3/9470bc5ac8e1059ac1ebef4dc93856346b7529": "8befedc60c2d5cb1fd3d3e31fcc99211",
".git/objects/fe/4a306705cf8eafdbe4b7aeeea450955df9b141": "5348d140c065eb405aa4789514a6de61",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "0c4bbf647e92f25144f535178c7f7f15",
".git/objects/11/98bd22764082e361cc098d84cfd335d92fdcac": "65d36141e5debbd3f5955057f22c8442",
".git/objects/45/77ec95ac975ade3c51376ae82ee9d5361e1b08": "f32e9fd2b5baf53528b4dd4bc37a5dd3",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "e14aa589bb7e68e3a524c297a802bde9",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "dee38288e294701bf8f665ae546a43e3",
".git/objects/1a/e85cc8ce54d2f3f50d4e9f7fd95e0653d149fb": "e969218d503415d8a71110a2ce265afa",
".git/objects/19/cb54070dd7f0eb11b3fc7b6af7e31ba9f23575": "033c2b7037b2f8c5bd64f9ae566bacba",
".git/objects/4c/5601d16a6b0befa5965502540b1abd90bc104a": "cf3d4c0c5f7be3ae1ee19d1520c3d0cf",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "6d3233e152cc961ab4c42dea037894aa",
".git/objects/75/48687a48759f7164d969649e35cec6bfd0b602": "9f76c4819e7632e500ec373f35164626",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/07/0540de8f43d359a2474680a1e1c041e440d343": "83c6fbb7aa8e746d55c4f608bb9f691f",
".git/objects/38/090d79f9e04c62381e8c63299111ec9f312a23": "90b6ea561e636d5c6f84e19ec6aec2b6",
".git/objects/38/a7cf8b5f08299f06c08f2adf653852a78f143c": "46293b51d263c820e5593a47ad9c5a98",
".git/objects/91/90fe2a916caa0b112f98c346459568169025bb": "a530aeb0c4f34923d32eed50496e66d9",
".git/objects/65/f7363ab3084ba6b03e0f94c9517a2c64adbac9": "3753da321b2daf3338b1785237eac568",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "23e8f7ce2c2856c1943e6cb51334416e",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "6d57e2d4816384a5236f4a52d9f1014b",
".git/objects/bf/7a6330a73f581bec0755fc895c5e6180d9e3cc": "5842c6ef9ad8ef6ebeec537f5bdf7d80",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/a7/0be08eb4589c30f115f11e3bfbc199be5ee23c": "4d070c1c8799bd0399b902bd37cc357c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/d2/6da585d9d24e044c96c182db435e2aeecda884": "4af04568424e1c4ea257aa7dce803a50",
".git/objects/a8/b234ee0a448e93c3c459b1f0ad8854fe56557d": "a5b6b5d25c2618257637aa5a515a7eae",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/ef/12185eb9099b5db2a7fbd6e359089031822462": "890fd2ec373151ed7998e04faf1107f1",
".git/objects/cd/783b42064076a8342c0572cf4e4a25dbd7b353": "cb2686640755742af872bf3c278fa976",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "bb2eac7ac7b6a9c500a94c9e6289e6ec",
".git/objects/f0/8f1499651e3da974ec93c6d8767c515bcea3e3": "cbbb966b725b46305159e622ab9d41ce",
".git/objects/f0/c8dea374ede0d91c835756793fac512693f96d": "ab1c6da8fd8c749ca835e71c8658e0d9",
".git/objects/ff/d528ffc64b6c3a514aff4ee1696c4abb67ae47": "f5472fe76e7e0b5af433e163708664cf",
".git/objects/c5/1b9b49b9101512a4ce170ab498473309bcd6ef": "8a3a5f426450700b1d14479d6588b6c1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "786019e79ddf260dafe33297b93b2151",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "eaf69ee68e07ccd33759fba4b5e36d4e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/46/3958f2693211782f2bb1b6fd45f2a86a5ffab3": "21571f591fbd041378df711b1be02a34",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "20f626d45eb3c9e3f81b2b860aa28f84",
".git/objects/85/de5f366a531af01c701ed522ce61aa71089d78": "0d937f067276b1a28fc48b510b6c5d40",
".git/objects/1c/6003d6378be684f6f986933f928e0dd3316bc4": "bc4634f4d21c2e7d5cb9ee14ee765660",
".git/objects/13/f83273e5ec2888b48eb2ceecafa7143bed766d": "bb03b732323addb3f523354e5b2ec7cf",
".git/objects/8e/655b71941587c33a7d22756e8e56a7433156af": "0f3de698a77746dc7fd016e9e86af35e",
".git/objects/22/7cac5220d9b2d4881f7a91eb89fbfb70a88dcf": "8c22abacb129aef86d5b7826cac4a2ae",
".git/HEAD": "6bf18e9e3b6344d0dc431b44a76eb623",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0b94899c2d72c495b8dd567fe36d064",
".git/logs/refs/heads/proyecto": "6f1454b34dcddc390a9eb9c947aaebc1",
".git/logs/refs/remotes/origin/proyecto": "fcb73db8eeded5897b867669fb193112",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/proyecto": "76d30881cb6d0bb087af39f1ac676771",
".git/refs/remotes/origin/proyecto": "76d30881cb6d0bb087af39f1ac676771",
".git/index": "597af728fae20c60e0835f4c571f8d5d",
".git/COMMIT_EDITMSG": "d4790652b48d41469dd26dd97c71a894",
"assets/AssetManifest.json": "9c66f9fe5782c5c4f3235bc02a803214",
"assets/NOTICES": "22a79dc4492f3c53be6bbd4b2799621b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b96ecf0237ad0f7766f33cf38f3dbdbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_paypal/lib/src/assets/img/cloud_state.png": "e695e021561a6d9754f06038b4d6b1d9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2f534f0b199584a1f3c720baee3cf6f4",
"assets/fonts/MaterialIcons-Regular.otf": "62c6d35959d084aab0451bd9469b3cca",
"assets/assets/images/matchpet_logo.jpeg": "ebb47ae6b4e1c743ccc95685080d7708",
"robot.txt": "e69e516f13c91334b6e3e55a550f6f86",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

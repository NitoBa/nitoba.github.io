'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a27a393e364623c3733e5a79ccec34fc",
".git/config": "3f19d2f0eeb289be189165eeb55c2358",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "793901d64f8bf617db749d22991f306c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "af7f3943f5fbdd791f436ec3e5beb245",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3933e8456a5884b9d9802e34c30b8de1",
".git/logs/refs/heads/master": "3933e8456a5884b9d9802e34c30b8de1",
".git/logs/refs/remotes/origin/master": "4c3bf6e90d00e9b1d4dc0a8a37860f37",
".git/objects/00/b8f83c1fc087dadf17c7c1b7e77fdafb75f9e8": "65221d6756f537d6718081e9ea8cbbe7",
".git/objects/01/380d0f912ee6c8476d1cc45b9ce3279bf9c9ca": "5f3a97232998288d74344dfd12c67530",
".git/objects/04/ed40f171aa929aed534894dafb3a53b40878ad": "c3fe4e0cd9fb3e96535ddd0c67b64a6d",
".git/objects/05/f5f80f738ce3eca4ac05f49a14ade6d5a09f45": "2bca49617cb463deb3a707f700701256",
".git/objects/0e/6613240860d39ff3f6e41ac45293245e9edabe": "f606dcf55971da942accaa8fa2c3ecbf",
".git/objects/14/3ccb0925cf8fa6e7a391a2fddf6fd7c67f02f5": "f622f747fa8f281dbfc13e74abd18022",
".git/objects/14/bff016895b877bd6e5d1093e7160d5722fc21a": "4f195172a9a3620ad04ef4b1eb20ee90",
".git/objects/16/b6b1a1c2c852808c7bfc9849a4292166f053ce": "8cb0b8b642e65feed2c068bf37601624",
".git/objects/21/068fe75581619c97dab9895f4b66dfe95db854": "b8ead2137e22d49fbd69cef0350105ad",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/2a/a7010bff9aec26aed43b1a73f7ddcfd3882df9": "45cba4fa3112340a5b390035cd56ea2f",
".git/objects/38/e9a04167f6658c5c286e3dd36823b8f54b0715": "7fdca1ef84f07f6ef694ac5bd6e1f239",
".git/objects/3a/ad7f26b7e5ffc125081e213727ea5049c4b3be": "cb9a4656fd53f9f22fcae7278f23ffa6",
".git/objects/3a/cb4ae00b9d8f45318a11a4776e99593c47bca9": "75bf7d4d727ec8afad26a396a1e3668a",
".git/objects/3d/9dc46872c50e97a531b856ed8e514d56c30110": "16005e1568d91b63ff8b89f0118a436e",
".git/objects/43/14a4f05a1f19b72a3c1f03e75041623f2c9aa1": "5187209d618d4057a89ec6de7fd4469d",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/45/c7f0e370220c4a2127f7c99232ac80245f9986": "2ed128ba010150bff566a2ed2ce798c4",
".git/objects/4a/a4016724a1954ab741c1ca508a8db0e0600ce4": "2ef55c23d2404a3a8d08b21d86dc057d",
".git/objects/50/5f9b0320751c5c1be2674ff50091d5774b88b4": "ae724e31f5a2ddf9d42a896e1d770d81",
".git/objects/50/918099612e51a81188fa8db2adb6f6c9c32de4": "ee89b3b4d6a6d54a31b39a3135ce4507",
".git/objects/5d/d1a5a90a0a70f0ef8face7c8549af8410dce3a": "d8bd94c4fde4e188af9325cdfb2382a5",
".git/objects/5e/6997d8f534834789407315047df72b3a0a38a5": "771ff81b1858c6236236663da8e2b443",
".git/objects/61/32a9f92311a423e46ad8d5e1b6b60b6202fd0d": "858ad893af77ba3db256daa91378b693",
".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/69/06b95893f293fce4e977febabbdb6548696db6": "68bcae55e89d4b2f00e4b9488bbf0c43",
".git/objects/6a/5f6eb70304112d7dcc60133989697adf70c369": "13aab025ea15ca316a0e0b210ada35c8",
".git/objects/6c/75af712330b066e9421499a66f446161bc17d0": "fad47a7f67927a8a7bd367838282a14f",
".git/objects/70/426110bcf814f8536b2e50275c3e6c378bd469": "bf38eccfd9fd6426f5b8216e5d001289",
".git/objects/74/f9ce2088a94cafc617b6f10cd9d378fb81217a": "de4a4725a85d7166ef2e63903f9932ce",
".git/objects/79/fa406cc02bdd177894d793b98ec4f78a34d7e6": "4e7653de589eedfd934878048a7f9fbd",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/7c/32b204cb59e85d5afbe27901b3ae98c1493d60": "6394ef8dacfbe2090b0fd64bc736bbf5",
".git/objects/80/93278100ab2937d2232ff2d73d6ce8e4e40cd2": "1c235ec8edccb8f415b2aa9f1fc23ac7",
".git/objects/80/af1c6898b403b8f3aab3a2d9a40494f74029bc": "d9c82ffca6f1d62f58d2e77771f23d90",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/86/9808f6a8d4a4a997c9f7f1e5061d0e84ca29e1": "8b30e12b387a4d9304399bdea1a3ae44",
".git/objects/87/4669f19e829b0bf4faadd038ca97730cfb520f": "2d3f07ba9ee64119f6e81e7ceb70e08f",
".git/objects/89/79538bb45ae00dd1ad238763a62103684dd58b": "c4d174f6d54c648551a52c4cbb5d070d",
".git/objects/8a/c1456107c6203b365787cced0e78469fc753fa": "135b076fe442a396a8ce502536555e13",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/90/1cb34338ab4f9dbc9fbe0be8b6fb96214d83de": "8f64d1307d712a599b39ba80ad67e7fb",
".git/objects/91/a1ef62f2f86448f8cf0d9daf2c471a34f6104d": "97469c990727e4a1ce663a5001360003",
".git/objects/94/2233904fe7a6e6a826559de69612b8cb098278": "0e0e47c9a5bf5116ad49d48fc5f7ff13",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/8478ee59787ed73940d398c0e5888dde80b5b1": "20a525d109aa28fbb5e0382ebfbac73b",
".git/objects/99/cc653438e350e9189a7c402dcad1fc8f886c7f": "f3713f54947139ac41bff88c6f5de639",
".git/objects/a7/1f03718a95801941855659eb7617d4c8b64511": "aed4a8f168a0edd7ad34d989a34c7fd0",
".git/objects/a7/fc8a39532b804c5e262afff9c1114a99473a92": "70fd49c2179e3e18cdc09496d86b0571",
".git/objects/a8/3d4f7cdb420b377dcab3aa27bc63fee55a1453": "12939b85390ff6690ae09f9a09cf6805",
".git/objects/a9/81e9c27e5afd9746e2635b8c9b2c1eb5a2a782": "9da25af225c4223c61a7e8693b662738",
".git/objects/a9/a12c89f93f02b4ef27b7ef63eb8e629e230d83": "aaac5f3684a0e52ace325400adb755cf",
".git/objects/af/0d048a6689a49a48da64e6110618c3ed5847fc": "ce26471e0cde6cc799a5e4ace8055a98",
".git/objects/af/9c138a2afffd632ee4bc2fd9c32ab32ae74d9d": "09a75aa2e1e5321df912a6025a152add",
".git/objects/af/9c33c42db80970f7875849d338cfac5c6d7e74": "36da57361fdd44f0d4cdff3fba1a2233",
".git/objects/af/bf4fe473f0c7e7516e84cfbdf84acce7e768a0": "37f289cfb6f1e92e5bf4aa7dd9efc198",
".git/objects/be/7e8df016d3a7970fcf389e3d8b1e9fd88403a6": "f6d4957d3ebbbcb0ac9389d4cd818153",
".git/objects/bf/46a7711eca9099ec44414c827f355bb250ddf6": "6e9232b87dbafcf562f5d29fc2db5610",
".git/objects/c1/9ec52c1f63b9de1f2b522320af1299ab0a4638": "b914b20a94b9f6ae0bfd9c758e7eaa0a",
".git/objects/c2/0a4cec08b9e532a1787807c4f46f04f8e609bf": "9ee1de208f0e74d63ec0e84df51cf0e5",
".git/objects/c2/a1c9b94d8087b72096e2672bbe843691d390da": "b48e8f144169f2ddef95d29ad9fe4b45",
".git/objects/c3/c3b085a377def51570c8d01eec33fc9eb6777f": "1c8afd547151d68fa9c21dee15895443",
".git/objects/c5/9a3a1ed8e501e16a19235d6b3a6c0c379e1857": "adbc789b0c27873fbea28bb9e27ca8c1",
".git/objects/cd/e9f8f77e56ca5e0f624fafff5518e2f81e2d0f": "2da18421898ef3a35743f8cf79452901",
".git/objects/d2/c4fa9ea4ef48962d5c8f6297a2fb7e3c8cbc2f": "76807c6dab52446f33014f1111f07ea0",
".git/objects/d7/b10a2f0dbe2c0821715dda2280163b6e75cc13": "d180bde547cfd3cb503f8a4d60f8eb98",
".git/objects/da/f33f9b7f1a36c81818d45899c83abb0205752e": "9067bf3668e5538d3fea89dc4e486cfe",
".git/objects/dc/a92d2c795bffb2e22d3c7896bc42c2b4a8ba03": "cbf9ffe3d8f55f22f5a7b52f7fc36eb9",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/de/f93f0cea047f1ee0de88a305c2cd2000bd9258": "34d40acaf10dd3cf1f6ebaf498930a34",
".git/objects/e1/28484dac8ba519bc1cb4968f7f3176e123f344": "86d8b64b127e8940bf925a0ef87e7c6a",
".git/objects/e3/6af37d68de6b257111d91f135cfc7d95d4b218": "855c5852c542044b2371124ac25a7075",
".git/objects/e4/675b0cab27bceffddac1ede92a1fd7f0df88eb": "5671e7b1f29c9b8a11ca4c33e0558d73",
".git/objects/e5/af88ee52d35f7c161dcff4032852dfec800aa6": "9e170b858bef84c05952560a605bf177",
".git/objects/e6/62a3ad11f75e34462c33ab0123503f20f947b1": "80e86a10655a3d5c56b6012508215f9b",
".git/objects/eb/9cf816ab449ba3f5dbf58452113dc65d2fa636": "70568f2542c8322041c878ab3e694522",
".git/objects/ed/d44fc008a27c7bf204b58e34e78dcd1b9525a9": "605e1f6cec088269ea1640f1a731014b",
".git/objects/ee/702a556d7384f9c81f51e50cb71f6128653380": "1cbeb19b0751ba07cd575fdb1517f37c",
".git/objects/f1/6b485b537f2df463252e9223f80714bb7544cc": "d1b70fbe151073f6ece7b17a748cdea7",
".git/objects/f3/666a5dbd2a218c90ad32fe9a04e3c6e9b62735": "732283ba8630513475338e7ec67f23af",
".git/objects/f3/fb4a91d09906ae9568fafb0c67bed7c75fbbf5": "c7b31224b3e9e6535e1a1c19a2c0443e",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fa/4c883a8d06240a76e39652372118c9f092fc6b": "30b96d711939dddce78ae421ca60d048",
".git/objects/ff/dd98fe7b53ae12584a69ab8b655dd24171718f": "8a77bc0b5b21a6404801f72ac479b50f",
".git/ORIG_HEAD": "9d5fc555088d0ebbe79bcd8fd8ffe15a",
".git/refs/heads/master": "f5a1396392eb1de8996410ef4d8ad12e",
".git/refs/remotes/origin/master": "f5a1396392eb1de8996410ef4d8ad12e",
"assets/AssetManifest.json": "9ccce3c996f8c39f67781a3a1d41a2d1",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/bolls.png": "6d12ee37a5301f14c0d7a88e714e4c38",
"assets/assets/images/circles1.png": "667296df15dea6cee168bb02a84afae9",
"assets/assets/images/circles2.png": "e08d3d80ea3447d68d4528c8856c38cd",
"assets/assets/images/ilustration.png": "5def35b3e3444126a057f73b80722b29",
"assets/assets/images/logo.png": "68f0bba3308d52f415195c2d1e023e9f",
"assets/assets/images/perfil3.png": "4e4aea38933322bd5f7b13c9014da33e",
"assets/assets/images/perfilgithub.jpg": "59a882d51509866fe1a189db16abe7f9",
"assets/FontManifest.json": "84c8e3843368e4f827816df4557c3d56",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "869d9fed1e134ed2865410cfe86a7c13",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "8900ed45d539c001b67113df0f58607b",
"icons/Icon-192.png": "0278c96df9a400f575911afb8b9cc914",
"icons/Icon-512.png": "b0d87766c09aa3661d0b206574b0d3e9",
"index.html": "3d2c1b56256e84a17dde8a0f99270277",
"/": "3d2c1b56256e84a17dde8a0f99270277",
"main.dart.js": "363a219e258ae43f7a62bc79d1c9b9de",
"manifest.json": "adaffb29b627e19ad8ea51e8d512972c",
"README.md": "2427fc9211401d00a345fb95e3a0d154",
"screenshots/Mobile.png": "7e128fc360685123bd214d3d86b25bc2",
"screenshots/Web.png": "11f7955934bf53b1f913a243f3033cc5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}

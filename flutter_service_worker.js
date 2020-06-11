'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "3f19d2f0eeb289be189165eeb55c2358",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "87b9f5ebd8bbd16dbe76c9b34e145529",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3cf80e81bff24b0432d81a8e41415041",
".git/logs/refs/heads/master": "3cf80e81bff24b0432d81a8e41415041",
".git/logs/refs/remotes/origin/master": "7404601ffbf940168698cf8fb514050e",
".git/objects/05/f5f80f738ce3eca4ac05f49a14ade6d5a09f45": "2bca49617cb463deb3a707f700701256",
".git/objects/16/b6b1a1c2c852808c7bfc9849a4292166f053ce": "8cb0b8b642e65feed2c068bf37601624",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/43/14a4f05a1f19b72a3c1f03e75041623f2c9aa1": "5187209d618d4057a89ec6de7fd4469d",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/50/5f9b0320751c5c1be2674ff50091d5774b88b4": "ae724e31f5a2ddf9d42a896e1d770d81",
".git/objects/50/918099612e51a81188fa8db2adb6f6c9c32de4": "ee89b3b4d6a6d54a31b39a3135ce4507",
".git/objects/5e/6997d8f534834789407315047df72b3a0a38a5": "771ff81b1858c6236236663da8e2b443",
".git/objects/69/06b95893f293fce4e977febabbdb6548696db6": "68bcae55e89d4b2f00e4b9488bbf0c43",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/7c/32b204cb59e85d5afbe27901b3ae98c1493d60": "6394ef8dacfbe2090b0fd64bc736bbf5",
".git/objects/80/93278100ab2937d2232ff2d73d6ce8e4e40cd2": "1c235ec8edccb8f415b2aa9f1fc23ac7",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/94/2233904fe7a6e6a826559de69612b8cb098278": "0e0e47c9a5bf5116ad49d48fc5f7ff13",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/8478ee59787ed73940d398c0e5888dde80b5b1": "20a525d109aa28fbb5e0382ebfbac73b",
".git/objects/99/cc653438e350e9189a7c402dcad1fc8f886c7f": "f3713f54947139ac41bff88c6f5de639",
".git/objects/a7/1f03718a95801941855659eb7617d4c8b64511": "aed4a8f168a0edd7ad34d989a34c7fd0",
".git/objects/a9/a12c89f93f02b4ef27b7ef63eb8e629e230d83": "aaac5f3684a0e52ace325400adb755cf",
".git/objects/af/0d048a6689a49a48da64e6110618c3ed5847fc": "ce26471e0cde6cc799a5e4ace8055a98",
".git/objects/bf/46a7711eca9099ec44414c827f355bb250ddf6": "6e9232b87dbafcf562f5d29fc2db5610",
".git/objects/c1/9ec52c1f63b9de1f2b522320af1299ab0a4638": "b914b20a94b9f6ae0bfd9c758e7eaa0a",
".git/objects/c2/a1c9b94d8087b72096e2672bbe843691d390da": "b48e8f144169f2ddef95d29ad9fe4b45",
".git/objects/c5/9a3a1ed8e501e16a19235d6b3a6c0c379e1857": "adbc789b0c27873fbea28bb9e27ca8c1",
".git/objects/d7/b10a2f0dbe2c0821715dda2280163b6e75cc13": "d180bde547cfd3cb503f8a4d60f8eb98",
".git/objects/da/f33f9b7f1a36c81818d45899c83abb0205752e": "9067bf3668e5538d3fea89dc4e486cfe",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/de/f93f0cea047f1ee0de88a305c2cd2000bd9258": "34d40acaf10dd3cf1f6ebaf498930a34",
".git/objects/e3/6af37d68de6b257111d91f135cfc7d95d4b218": "855c5852c542044b2371124ac25a7075",
".git/objects/e4/675b0cab27bceffddac1ede92a1fd7f0df88eb": "5671e7b1f29c9b8a11ca4c33e0558d73",
".git/objects/e5/af88ee52d35f7c161dcff4032852dfec800aa6": "9e170b858bef84c05952560a605bf177",
".git/objects/ed/d44fc008a27c7bf204b58e34e78dcd1b9525a9": "605e1f6cec088269ea1640f1a731014b",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/refs/heads/master": "30f2aed16ebf7fc262a4d72a2a03c4bd",
".git/refs/remotes/origin/master": "30f2aed16ebf7fc262a4d72a2a03c4bd",
"assets/AssetManifest.json": "9ccce3c996f8c39f67781a3a1d41a2d1",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/bolls.png": "6d12ee37a5301f14c0d7a88e714e4c38",
"assets/assets/images/circles1.png": "667296df15dea6cee168bb02a84afae9",
"assets/assets/images/circles2.png": "e08d3d80ea3447d68d4528c8856c38cd",
"assets/assets/images/ilustration.png": "5def35b3e3444126a057f73b80722b29",
"assets/assets/images/perfil3.png": "4e4aea38933322bd5f7b13c9014da33e",
"assets/assets/images/perfilgithub.jpg": "59a882d51509866fe1a189db16abe7f9",
"assets/FontManifest.json": "84c8e3843368e4f827816df4557c3d56",
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
"main.dart.js": "a29ee29bab3c8252cb5fab9d80e153ab",
"manifest.json": "adaffb29b627e19ad8ea51e8d512972c",
"README.md": "2427fc9211401d00a345fb95e3a0d154",
"screenshots/Mobile.png": "7e128fc360685123bd214d3d86b25bc2",
"screenshots/Web.png": "11f7955934bf53b1f913a243f3033cc5"
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

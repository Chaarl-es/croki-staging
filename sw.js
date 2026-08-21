/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-8061e182'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "sw-push-handlers.js",
    "revision": "78da9be70602844b8f96fcc9a283b1bc"
  }, {
    "url": "reset.html",
    "revision": "628ad8fe8d6d599d5973b0e6ed29f162"
  }, {
    "url": "pwa-capture.js",
    "revision": "c73dab27be2f4e06d425747b390c1ce2"
  }, {
    "url": "index.html",
    "revision": "c97990386f07cc9c88d1feba341a5771"
  }, {
    "url": "favicon.svg",
    "revision": "2f8733321a8ff6c12fdc0644a61a26f1"
  }, {
    "url": "favicon.png",
    "revision": "f6dcddad64136532e74e6bdd2c9b1d1d"
  }, {
    "url": "favicon.ico",
    "revision": "8530e58be25d884c0876ed93bc8ea294"
  }, {
    "url": "maplibre/maplibre-gl-worker.mjs",
    "revision": "2facd66a892dd2e63b0c198943486a8c"
  }, {
    "url": "maplibre/maplibre-gl-shared.mjs",
    "revision": "b0f7bba2311a1320147c04e209ca0198"
  }, {
    "url": "icons/icon-512.png",
    "revision": "3ef0aff0a15fc5fc3048131159b5fd3e"
  }, {
    "url": "icons/icon-192.png",
    "revision": "203117e4bc063df57f15fbb2abc33464"
  }, {
    "url": "icons/apple-touch-icon.png",
    "revision": "52db0b23d743b5aa34941c2a2a7f51dc"
  }, {
    "url": "fonts/Inter-700.woff2",
    "revision": "b5b6e1af95a07412caf886530fe26e1d"
  }, {
    "url": "assets/assets/brand/official/croki-noir-variants.3e1a1906c2537eac019a28acad1d3aaa.png",
    "revision": "3e1a1906c2537eac019a28acad1d3aaa"
  }, {
    "url": "assets/assets/brand/official/transparent/croki-green.5f3e804bbf272a925e6e35955d7ed424.png",
    "revision": "5f3e804bbf272a925e6e35955d7ed424"
  }, {
    "url": "assets/assets/brand/official/transparent/croki-beige.960c92762f1cc46995c0aec803e469cf.png",
    "revision": "960c92762f1cc46995c0aec803e469cf"
  }, {
    "url": "assets/assets/app-icon/icon.522ce72acbc59163c2f6ad62ad7e73ee.png",
    "revision": "522ce72acbc59163c2f6ad62ad7e73ee"
  }, {
    "url": "_expo/static/js/web/thumbhash-5cb297b66f3c769c4a2dd155c259aefd.js",
    "revision": "5cb297b66f3c769c4a2dd155c259aefd"
  }, {
    "url": "_expo/static/js/web/suppression-c78bdb136079a4e58ba2ad030c02bd0c.js",
    "revision": "c78bdb136079a4e58ba2ad030c02bd0c"
  }, {
    "url": "_expo/static/js/web/signalement-27ce4b88cb8f38bb0e13945bb916d058.js",
    "revision": "27ce4b88cb8f38bb0e13945bb916d058"
  }, {
    "url": "_expo/static/js/web/professionnels-af155b18e9f2195bc9eb81348b0bde77.js",
    "revision": "af155b18e9f2195bc9eb81348b0bde77"
  }, {
    "url": "_expo/static/js/web/mentions-e7da6bc18e2c322d5caef8b4e419d887.js",
    "revision": "e7da6bc18e2c322d5caef8b4e419d887"
  }, {
    "url": "_expo/static/js/web/marketplace-6cfec6e82fcd448f1180bb042f32c834.js",
    "revision": "6cfec6e82fcd448f1180bb042f32c834"
  }, {
    "url": "_expo/static/js/web/maplibre-gl-292211045a8536c4f1cc895205a94eb6.js",
    "revision": "292211045a8536c4f1cc895205a94eb6"
  }, {
    "url": "_expo/static/js/web/index-eea2492f7e4c8987e9619ce64edf7e95.js",
    "revision": "eea2492f7e4c8987e9619ce64edf7e95"
  }, {
    "url": "_expo/static/js/web/index-6940a22019e8d7496063f72f6a71516d.js",
    "revision": "6940a22019e8d7496063f72f6a71516d"
  }, {
    "url": "_expo/static/js/web/droits-dba76941473b2201aac25d7f8e94a954.js",
    "revision": "dba76941473b2201aac25d7f8e94a954"
  }, {
    "url": "_expo/static/js/web/cookies-05a7281d9caacb25456241e02232b781.js",
    "revision": "05a7281d9caacb25456241e02232b781"
  }, {
    "url": "_expo/static/js/web/confidentialite-e0f8fbe2645310820dd1d118b43a3030.js",
    "revision": "e0f8fbe2645310820dd1d118b43a3030"
  }, {
    "url": "_expo/static/js/web/classement-e86bb40dd5cdc9cd0146953decb8aa6e.js",
    "revision": "e86bb40dd5cdc9cd0146953decb8aa6e"
  }, {
    "url": "_expo/static/js/web/cgv-8c276d4c5b84981f54166e0bf4ba92e8.js",
    "revision": "8c276d4c5b84981f54166e0bf4ba92e8"
  }, {
    "url": "_expo/static/js/web/cgu-21d5b55b4d87ecd9dbdbd0a8ab3e04bd.js",
    "revision": "21d5b55b4d87ecd9dbdbd0a8ab3e04bd"
  }, {
    "url": "_expo/static/js/web/avis-eee70fdeebc53e560bcb3ff80d253e3d.js",
    "revision": "eee70fdeebc53e560bcb3ff80d253e3d"
  }, {
    "url": "_expo/static/js/web/accessibilite-738d89da3db4fc1f0525e7f0c53964e8.js",
    "revision": "738d89da3db4fc1f0525e7f0c53964e8"
  }, {
    "url": "_expo/static/js/web/__expo-metro-runtime-1f8f5d3ca6b7f58204d51e14506d73fb.js",
    "revision": "1f8f5d3ca6b7f58204d51e14506d73fb"
  }, {
    "url": "_expo/static/js/web/__common-78b4147eda027e362e4e5c1bc85a6324.js",
    "revision": "78b4147eda027e362e4e5c1bc85a6324"
  }, {
    "url": "_expo/static/js/web/WebBrowser-af1ebca9a5f46d0aed4213796b5f5d75.js",
    "revision": "af1ebca9a5f46d0aed4213796b5f5d75"
  }, {
    "url": "_expo/static/js/web/SecureStore-1f58c2f191b31ceb09c682292d210ff6.js",
    "revision": "1f58c2f191b31ceb09c682292d210ff6"
  }, {
    "url": "_expo/static/js/web/ProDashboardPreview-d6e9a4826b13db98c6013181b4ae4a0d.js",
    "revision": "d6e9a4826b13db98c6013181b4ae4a0d"
  }, {
    "url": "_expo/static/js/web/Network-6493bd7af63173956e76d4200c8d37fd.js",
    "revision": "6493bd7af63173956e76d4200c8d37fd"
  }, {
    "url": "_expo/static/js/web/LocalAuthentication-ed04280999c2c50ebb5eb19fd73ad0a8.js",
    "revision": "ed04280999c2c50ebb5eb19fd73ad0a8"
  }, {
    "url": "_expo/static/js/web/ImagePicker-74627e13237969bf62b2a4e5066b9369.js",
    "revision": "74627e13237969bf62b2a4e5066b9369"
  }, {
    "url": "_expo/static/js/web/Haptics-cba17e7a988d89121732d1458c402dba.js",
    "revision": "cba17e7a988d89121732d1458c402dba"
  }, {
    "url": "_expo/static/js/web/DiscoverProductPreview-3cda8ff3ae5f53a03d33e5dc4f88560f.js",
    "revision": "3cda8ff3ae5f53a03d33e5dc4f88560f"
  }, {
    "url": "_expo/static/js/web/ConnectEmbeddedLive-dc12d88b3c8b3dfca65cad439191cae0.js",
    "revision": "dc12d88b3c8b3dfca65cad439191cae0"
  }, {
    "url": "_expo/static/js/web/ConnectEmbeddedDashboard-ec00139d658d71932f45fbcdbf8d1a83.js",
    "revision": "9cc91112d285d846afd66c895286b0f7"
  }, {
    "url": "_expo/static/js/web/Clipboard-9ad1dc85570e129e6d6ad075e103d947.js",
    "revision": "9ad1dc85570e129e6d6ad075e103d947"
  }, {
    "url": "_expo/static/css/maplibre-gl-9ee142d85ebe8fc90c36b0bed2634e4f.css",
    "revision": "9ee142d85ebe8fc90c36b0bed2634e4f"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/index.html"), {
    denylist: [/^\/(?:auth|pro|sign-in|sign-up|recover|checkout|orders|cart|account|profile|favorites|home|kitchen|catalog|service|hours|locations|documents|opening|finance|stripe|payments|settings|support|reviews|notifications|users|establishments|compliance|billing|admin|login)(?:\/|$)/, /\/reset\.html(?:\?|$)/]
  }));
  workbox.registerRoute(({
    url
  }) => url.hostname.endsWith("supabase.co") || url.hostname.endsWith("stripe.com") || url.hostname.includes("js.stripe.com") || url.hostname.endsWith("openfreemap.org") || url.pathname.startsWith("/maplibre/"), new workbox.NetworkOnly(), 'GET');
  workbox.registerRoute(({
    request,
    url
  }) => request.method !== "GET" || isSensitivePathname(url.pathname), new workbox.NetworkOnly(), 'GET');
  workbox.registerRoute(({
    request
  }) => request.destination === "script" || request.destination === "style", new workbox.CacheFirst({
    "cacheName": "croki-shell",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 48,
      maxAgeSeconds: 2592000
    })]
  }), 'GET');
  workbox.registerRoute(({
    request
  }) => request.destination === "font" || request.destination === "manifest", new workbox.CacheFirst({
    "cacheName": "croki-fonts",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 16,
      maxAgeSeconds: 2592000
    })]
  }), 'GET');
  workbox.registerRoute(({
    request,
    url
  }) => url.origin === self.location.origin && (request.destination === "image" || url.pathname.startsWith("/icons/")), new workbox.CacheFirst({
    "cacheName": "croki-images",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 64,
      maxAgeSeconds: 1209600
    })]
  }), 'GET');
  workbox.registerRoute(({
    request
  }) => request.mode === "navigate", new workbox.NetworkFirst({
    "cacheName": "croki-pages-v3",
    "networkTimeoutSeconds": 8,
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 16,
      maxAgeSeconds: 60
    }), new workbox.CacheableResponsePlugin({
      statuses: [200]
    })]
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
//# sourceMappingURL=sw.js.map

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter(
            (key) =>
              key === "croki-pages" ||
              key === "croki-pages-v2" ||
              key === "croki-shell" ||
              key === "croki-fonts" ||
              key === "croki-images",
          )
          .map((key) => caches.delete(key)),
      ),
    ),
  );
});
/* Push Web Croki — importé par sw.js (dev) et append Workbox (prod). */
"use strict";

function crokiPushPayload(event) {
  try {
    return event.data ? event.data.json() : {};
  } catch (_e) {
    return {};
  }
}

self.addEventListener("push", function (event) {
  var data = crokiPushPayload(event);
  var title = data.title || "Croki";
  var body = data.body || "Nouvelle notification";
  var href = data.href || "/";
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
      tag: data.event || data.tag || "croki",
      renotify: true,
      data: {
        href: href,
        order_id: data.order_id || "",
        event: data.event || "",
        audience: data.audience || "",
        source: "web-push",
      },
    }),
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var href = (event.notification.data && event.notification.data.href) || "/";
  var target = new URL(href, self.location.origin).href;
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i += 1) {
        var client = list[i];
        if (!client.url.startsWith(self.location.origin)) {
          continue;
        }
        client.postMessage({ type: "croki-push-open", href: href });
        if ("focus" in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(target);
      }
      return undefined;
    }),
  );
});


self.addEventListener("fetch", (event) => {
  try {
    const url = new URL(event.request.url);
    if (
      url.hostname.endsWith("supabase.co") ||
      url.port === "54321" ||
      url.pathname.startsWith("/rest/v1/") ||
      url.pathname.startsWith("/auth/v1/") ||
      url.pathname.startsWith("/realtime/v1/") ||
      url.pathname.startsWith("/functions/v1/") ||
      url.hostname.endsWith("stripe.com") ||
      url.hostname.includes("js.stripe.com")
    ) {
      event.stopImmediatePropagation();
    }
  } catch (_error) {}
});
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
    "url": "users.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "sw-push-handlers.js",
    "revision": "78da9be70602844b8f96fcc9a283b1bc"
  }, {
    "url": "support.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "settings.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "service.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "security.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "reviews.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "reset.html",
    "revision": "628ad8fe8d6d599d5973b0e6ed29f162"
  }, {
    "url": "register.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "register-pro.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "pwa-capture.js",
    "revision": "c73dab27be2f4e06d425747b390c1ce2"
  }, {
    "url": "profile.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "profil.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "performance.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "payments.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "orders.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "opening.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "onboarding.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "notifications.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "more.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "manifest.webmanifest",
    "revision": "b12d0026328dc8866383f776695446ce"
  }, {
    "url": "login.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "kitchen.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "identity.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "idee.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "ideas.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "idea.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "hours.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "home.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "forgot-password.html",
    "revision": "82147f9e49ef472f4e968479a810d29a"
  }, {
    "url": "favorites.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "favicon.svg",
    "revision": "2f8733321a8ff6c12fdc0644a61a26f1"
  }, {
    "url": "favicon.png",
    "revision": "f6dcddad64136532e74e6bdd2c9b1d1d"
  }, {
    "url": "favicon.ico",
    "revision": "f6dcddad64136532e74e6bdd2c9b1d1d"
  }, {
    "url": "explore.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "establishments.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "establishment.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "documents.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "delete-account.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "decouvrir.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "compliance.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "commercants.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "checkout.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "catalog.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "cart.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "callback.html",
    "revision": "1893966d4a4b7a4a26d2d9797417e7a6"
  }, {
    "url": "appearance.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "account.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "_sitemap.html",
    "revision": "c01d47b1177f5455388f7bd51d0a983b"
  }, {
    "url": "404.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "+not-found.html",
    "revision": "957d91041a27c0412760ce131e9859f2"
  }, {
    "url": "users/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "support/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "settings/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "service/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "security/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "reviews/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "register-pro/index.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "register/index.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "profile/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "profil/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "performance/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "payments/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "payments/connect.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "payments/index/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "payments/connect/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "orders/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "orders/[id].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "orders/index/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "orders/[id]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "opening/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "onboarding/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "notifications/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "more/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "maplibre/maplibre-gl-worker.mjs",
    "revision": "2facd66a892dd2e63b0c198943486a8c"
  }, {
    "url": "maplibre/maplibre-gl-shared.mjs",
    "revision": "b0f7bba2311a1320147c04e209ca0198"
  }, {
    "url": "login/index.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "legal/suppression.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/signalement.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/professionnels.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/mentions.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/marketplace.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/droits.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/cookies.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/confidentialite.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/classement.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/cgv.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/cgu.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/avis.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/accessibilite.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/[slug].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/suppression/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/signalement/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/professionnels/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/mentions/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/marketplace/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/index/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/droits/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/cookies/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/confidentialite/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/classement/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/cgv/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/cgu/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/avis/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/accessibilite/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "legal/[slug]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "kitchen/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "identity/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "idee/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "ideas/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "idea/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
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
    "url": "hours/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "home/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "forgot-password/index.html",
    "revision": "82147f9e49ef472f4e968479a810d29a"
  }, {
    "url": "fonts/Inter-700.woff2",
    "revision": "b5b6e1af95a07412caf886530fe26e1d"
  }, {
    "url": "favorites/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "explore/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "establishments/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "establishment/pause-pain.html",
    "revision": "5eb4f8be50fe0299e1f602045499f274"
  }, {
    "url": "establishment/le-croki-truck.html",
    "revision": "1085c20d2dc105c2702f59e441e42192"
  }, {
    "url": "establishment/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "establishment/chez-sable.html",
    "revision": "0d1c0e0db69d880f685af4bc3d3be8d6"
  }, {
    "url": "establishment/[slug].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "establishment/pause-pain/index.html",
    "revision": "5eb4f8be50fe0299e1f602045499f274"
  }, {
    "url": "establishment/le-croki-truck/index.html",
    "revision": "1085c20d2dc105c2702f59e441e42192"
  }, {
    "url": "establishment/foodtruck-demo-croki/index.html",
    "revision": "f73e81d7b7abdf970df0667173db85a3"
  }, {
    "url": "establishment/chez-sable/index.html",
    "revision": "0d1c0e0db69d880f685af4bc3d3be8d6"
  }, {
    "url": "establishment/[slug]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "documents/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "delete-account/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "decouvrir/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "compliance/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "commercants/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "city/paris.html",
    "revision": "e67190d6a146da26f3b52a31d6065c05"
  }, {
    "url": "city/lyon.html",
    "revision": "9ca33c3c04c07b24f20bf0b1b48c52a1"
  }, {
    "url": "city/[slug].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "city/paris/index.html",
    "revision": "e67190d6a146da26f3b52a31d6065c05"
  }, {
    "url": "city/lyon/index.html",
    "revision": "9ca33c3c04c07b24f20bf0b1b48c52a1"
  }, {
    "url": "city/[slug]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "checkout/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "category/sandwich.html",
    "revision": "ef3f13c555845799aed12addf2172512"
  }, {
    "url": "category/burger.html",
    "revision": "5f99d4780891b08e2f7b553bf67d9bd7"
  }, {
    "url": "category/bakery.html",
    "revision": "425d46ed4fc8ad520428224dacfdc33c"
  }, {
    "url": "category/[slug].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "category/sandwich/index.html",
    "revision": "ef3f13c555845799aed12addf2172512"
  }, {
    "url": "category/burger/index.html",
    "revision": "5f99d4780891b08e2f7b553bf67d9bd7"
  }, {
    "url": "category/bakery/index.html",
    "revision": "425d46ed4fc8ad520428224dacfdc33c"
  }, {
    "url": "category/[slug]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "catalog/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "cart/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "callback/index.html",
    "revision": "1893966d4a4b7a4a26d2d9797417e7a6"
  }, {
    "url": "assets/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png",
    "revision": "20e71bdf79e3a97bf55fd9e164041578"
  }, {
    "url": "assets/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png",
    "revision": "412dd9275b6b48ad28f5e3d81bb1f626"
  }, {
    "url": "assets/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png",
    "revision": "ab19f4cbc543357183a20571f68380a3"
  }, {
    "url": "assets/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png",
    "revision": "d8b800c443b8972542883e0b9de2bdc6"
  }, {
    "url": "assets/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png",
    "revision": "19eeb73b9593a38f8e9f418337fc7d10"
  }, {
    "url": "assets/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png",
    "revision": "d1ea1496f9057eb392d5bbf3732a61b7"
  }, {
    "url": "assets/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png",
    "revision": "017bc6ba3fc25503e5eb5e53826d48a8"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png",
    "revision": "286d67d3f74808a60a78d3ebf1a5fb57"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png",
    "revision": "0747a1317bbe9c6fc340b889ef8ab3ae"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png",
    "revision": "78c625386b4d0690b421eb0fc78f7b9c"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png",
    "revision": "1190ab078c57159f4245a328118fcd9a"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png",
    "revision": "d84e297c3b3e49a614248143d53e40ca"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png",
    "revision": "3cd68ccdb8938e3711da2e8831b85493"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png",
    "revision": "d8e7601e3df962f83c62371ac14964d8"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png",
    "revision": "aff2c65b39a296d4f7e96d0f58169170"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png",
    "revision": "61ca7e64b7d605716c57706cef640b9a"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png",
    "revision": "35ba0eaec5a4f5ed12ca16fabeae451d"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png",
    "revision": "0a328cd9c1afd0afe8e3b1ec5165b1b4"
  }, {
    "url": "assets/assets/icons/icon.522ce72acbc59163c2f6ad62ad7e73ee.png",
    "revision": "522ce72acbc59163c2f6ad62ad7e73ee"
  }, {
    "url": "assets/assets/branding/official/croki-noir-variants.3e1a1906c2537eac019a28acad1d3aaa.png",
    "revision": "3e1a1906c2537eac019a28acad1d3aaa"
  }, {
    "url": "assets/assets/branding/official/transparent/croki-green.5f3e804bbf272a925e6e35955d7ed424.png",
    "revision": "5f3e804bbf272a925e6e35955d7ed424"
  }, {
    "url": "assets/assets/branding/official/transparent/croki-beige.960c92762f1cc46995c0aec803e469cf.png",
    "revision": "960c92762f1cc46995c0aec803e469cf"
  }, {
    "url": "appearance/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "account/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "_sitemap/index.html",
    "revision": "c01d47b1177f5455388f7bd51d0a983b"
  }, {
    "url": "_expo/static/js/web/thumbhash-44b0910073e3723a60dadd2a6482accb.js",
    "revision": "44b0910073e3723a60dadd2a6482accb"
  }, {
    "url": "_expo/static/js/web/maplibre-gl-15a5185f9697ddc1f9591f003f571ae6.js",
    "revision": "15a5185f9697ddc1f9591f003f571ae6"
  }, {
    "url": "_expo/static/js/web/index-ca3ecbda071fa8fa233f0ab688b8d086.js",
    "revision": "ca3ecbda071fa8fa233f0ab688b8d086"
  }, {
    "url": "_expo/static/js/web/index-1542b2129c0e1fbe9529dbaa9588909c.js",
    "revision": "1542b2129c0e1fbe9529dbaa9588909c"
  }, {
    "url": "_expo/static/js/web/__expo-metro-runtime-1f8f5d3ca6b7f58204d51e14506d73fb.js",
    "revision": "1f8f5d3ca6b7f58204d51e14506d73fb"
  }, {
    "url": "_expo/static/js/web/__common-652dbc56baf00c32800fcc714cb487e7.js",
    "revision": "652dbc56baf00c32800fcc714cb487e7"
  }, {
    "url": "_expo/static/js/web/WebBrowser-6642e88e5f71dfcd6bca1c24297eb6f0.js",
    "revision": "6642e88e5f71dfcd6bca1c24297eb6f0"
  }, {
    "url": "_expo/static/js/web/SecureStore-cb0b6b0eed1f3332517ed3cd60c5e353.js",
    "revision": "cb0b6b0eed1f3332517ed3cd60c5e353"
  }, {
    "url": "_expo/static/js/web/ProDashboardPreview-064a3ef3b109533f1138885531ef2f25.js",
    "revision": "064a3ef3b109533f1138885531ef2f25"
  }, {
    "url": "_expo/static/js/web/Network-3aac1553ba3044151c594d766902db38.js",
    "revision": "3aac1553ba3044151c594d766902db38"
  }, {
    "url": "_expo/static/js/web/LocalAuthentication-cd01418c0ed97695bf05d33c7f881e88.js",
    "revision": "cd01418c0ed97695bf05d33c7f881e88"
  }, {
    "url": "_expo/static/js/web/DiscoverProductPreview-be09a21a20a819f66a6b6cbd72204dfc.js",
    "revision": "be09a21a20a819f66a6b6cbd72204dfc"
  }, {
    "url": "_expo/static/js/web/ConnectEmbeddedLive-6737f65cfe8f7c610e8df7a64a90acf0.js",
    "revision": "6737f65cfe8f7c610e8df7a64a90acf0"
  }, {
    "url": "_expo/static/js/web/ConnectEmbeddedDashboard-086c30e8902afc209fc3a6268598f716.js",
    "revision": "4944554e85764e6770502cef42e2897b"
  }, {
    "url": "_expo/static/js/web/Clipboard-4a842a9ed243435ceaeb20ff35c069f8.js",
    "revision": "4a842a9ed243435ceaeb20ff35c069f8"
  }, {
    "url": "_expo/static/css/maplibre-gl-9ee142d85ebe8fc90c36b0bed2634e4f.css",
    "revision": "9ee142d85ebe8fc90c36b0bed2634e4f"
  }, {
    "url": "+not-found/index.html",
    "revision": "957d91041a27c0412760ce131e9859f2"
  }, {
    "url": "(public)/settings.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/profil.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/idee.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/explore.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/decouvrir.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/commercants.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/cart.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/account.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/settings/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/profil/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/suppression.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/signalement.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/professionnels.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/mentions.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/marketplace.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/droits.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/cookies.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/confidentialite.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/classement.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/cgv.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/cgu.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/avis.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/accessibilite.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/[slug].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/suppression/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/signalement/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/professionnels/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/mentions/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/marketplace/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/index/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/droits/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/cookies/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/confidentialite/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/classement/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/cgv/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/cgu/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/avis/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/accessibilite/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/legal/[slug]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/index/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/idee/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/explore/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/establishment/pause-pain.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/establishment/le-croki-truck.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/establishment/chez-sable.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/establishment/[slug].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/establishment/pause-pain/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/establishment/le-croki-truck/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/establishment/chez-sable/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/establishment/[slug]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/decouvrir/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/commercants/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/city/paris.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/city/lyon.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/city/[slug].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/city/paris/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/city/lyon/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/city/[slug]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/category/sandwich.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/category/burger.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/category/bakery.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/category/[slug].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/category/sandwich/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/category/burger/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/category/bakery/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/category/[slug]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/cart/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(public)/account/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/support.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/settings.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/service.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/security.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/reviews.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/profile.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/performance.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/orders.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/opening.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/onboarding.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/notifications.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/more.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/kitchen.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/identity.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/idea.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/hours.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/home.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/establishment.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/documents.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/delete-account.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/catalog.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/appearance.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/support/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/settings/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/service/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/security/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/reviews/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/profile/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/performance/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/payments/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/payments/connect.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/payments/index/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/payments/connect/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/orders/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/orders/[id].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/orders/[id]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/opening/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/onboarding/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/notifications/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/more/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/kitchen/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/identity/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/idea/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/hours/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/home/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/establishment/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/documents/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/delete-account/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/catalog/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(pro)/appearance/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/support.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/notifications.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/home.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/favorites.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/checkout.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/support/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/orders/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/orders/[id].html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/orders/index/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/orders/[id]/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/notifications/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/home/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/favorites/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(client)/checkout/index.html",
    "revision": "a43eacc44156026acc5bab0f0152923a"
  }, {
    "url": "(auth)/register.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "(auth)/register-pro.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "(auth)/login.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "(auth)/forgot-password.html",
    "revision": "82147f9e49ef472f4e968479a810d29a"
  }, {
    "url": "(auth)/callback.html",
    "revision": "1893966d4a4b7a4a26d2d9797417e7a6"
  }, {
    "url": "(auth)/register-pro/index.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "(auth)/register/index.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "(auth)/login/index.html",
    "revision": "f1ca82c45d45df1f8868d0dc9bd61a3b"
  }, {
    "url": "(auth)/forgot-password/index.html",
    "revision": "82147f9e49ef472f4e968479a810d29a"
  }, {
    "url": "(auth)/callback/index.html",
    "revision": "1893966d4a4b7a4a26d2d9797417e7a6"
  }, {
    "url": "(admin)/users.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/support.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/settings.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/reviews.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/payments.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/orders.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/notifications.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/more.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/ideas.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/home.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/establishments.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/compliance.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/users/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/support/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/settings/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/reviews/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/payments/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/orders/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/notifications/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/more/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/ideas/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/home/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/establishments/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }, {
    "url": "(admin)/compliance/index.html",
    "revision": "d1bdfefc211dc542f6a3dd5da51f49f3"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/index.html"), {
    denylist: [/^\/(?:auth|pro|admin|checkout|orders|cart|account|profile|favorites|settings|support|reviews|notifications)(?:\/|$)/, /\/reset\.html(?:\?|$)/]
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
      maxEntries: 64,
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


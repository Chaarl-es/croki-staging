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

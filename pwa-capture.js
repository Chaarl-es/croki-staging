/**
 * Unique capture of beforeinstallprompt for Expo Web (SPA + +html).
 * The React hook only reads window.__bipEvent / "bip-captured".
 */
(function () {
  try {
    if (window.__bipCaptureInstalled) {
      return;
    }
    window.__bipCaptureInstalled = true;
    window.addEventListener(
      "beforeinstallprompt",
      function (event) {
        event.preventDefault();
        window.__bipEvent = event;
        window.dispatchEvent(new CustomEvent("bip-captured", { detail: event }));
      },
      { once: true },
    );
  } catch (error) {}
})();

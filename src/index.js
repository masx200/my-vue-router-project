"use strict";
import "./index.css";
// eslint-disable-next-line no-undef
import("bootstrap");
import("./clipboard.min.js").then(module => {
  const ClipboardJS = module.default;
  new ClipboardJS(".btn").on("success", function(e) {
    e.clearSelection();
  });
});

(() => {
  try {
    "serviceWorker" in navigator &&
      window.addEventListener("load", function() {
        navigator.serviceWorker.register("service-worker.js");
      });
  } catch (error) {}
  /* 注册google的workbox的serviceworker */
})();
import("./vue-index-render.js");

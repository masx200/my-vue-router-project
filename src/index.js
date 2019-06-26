"use strict";
import "./index.css";
import("bootstrap");
import("./clipboard.min.js").then(module => {
  const ClipboardJS = module.default;
  new ClipboardJS(".btn").on("success", function(e) {
    e.clearSelection();
  });
});

(() => {
  /* 注册google的workbox的serviceworker */
  "serviceWorker" in navigator &&
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("service-worker.js");
    });
})();
import("./vue-index-render.js");

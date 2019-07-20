"use strict";
import("./vue-index-render.js");
import "./index.css";
// eslint-disable-next-line no-undef
import("bootstrap/dist/js/bootstrap.bundle");
import("./clipboard.min.js").then(module => {
  const ClipboardJS = module.default;
  new ClipboardJS(".btn").on("success", function(e) {
    e.clearSelection();
  });
});
import "webpack-react-vue-spa-awesome-config/registerserviceworker.js"
//import "./registerserviceworker";
// (() => {
//   try {
//     "serviceWorker" in navigator &&
//       window.addEventListener("load", function() {
//         navigator.serviceWorker.register("service-worker.js");
//       });
//   } catch (error) {}
//   /* 注册google的workbox的serviceworker */
// })();

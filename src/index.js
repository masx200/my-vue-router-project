import "webpack-react-vue-spa-awesome-config/ie11babelpolyfill";
("use strict");
document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`;
import("./vue-index-render.js");
import "./index.css";
// eslint-disable-next-line no-undef

window.addEventListener("load", () => {
  import("bootstrap/dist/js/bootstrap.bundle");
  import("./clipboard").then(module => {
    const ClipboardJS = module.default;
    new ClipboardJS(".btn").on("success", function(e) {
      e.clearSelection();
    });
  });
});

import "webpack-react-vue-spa-awesome-config/registerserviceworker.js";
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

import "webpack-react-vue-spa-awesome-config/ie11babelpolyfill";
("use strict");
document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`;
import("./vue-index-render.js");
import "./index.css";
import "./mystyle.css";
// eslint-disable-next-line no-undef

window.addEventListener(
  "load",
  () => {
    //   import("bootstrap/dist/js/bootstrap.bundle");
    import("./clipboard").then(module => {
      const ClipboardJS = module.default;
      new ClipboardJS(".btn").on("success", function(e) {
        e.clearSelection();
      });
    });
  },
  { once: true }
);

import "webpack-react-vue-spa-awesome-config/registerserviceworker.js";

import Vue from "vue/dist/vue.esm.browser";
import VueRouter from "vue-router/dist/vue-router.esm.browser";
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.devtools = true;
Vue.use(VueRouter);
import SimpleStoreManager from "vue-simple-global-state-store-manager"; // bindGlobalStore // initGlobalState,
// console.log(SimpleStore);
Vue.use(SimpleStoreManager);
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
// import("./vue-simple-global-state-store-manager.vue").then(console.log);

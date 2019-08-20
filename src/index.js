import "webpack-react-vue-spa-awesome-config/ie11babelpolyfill";
("use strict");
document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`;

import "./index.css";
import "./mystyle.css";
// eslint-disable-next-line no-undef

window.addEventListener(
  "load",
  () => {
    //   import("bootstrap/dist/js/bootstrap.bundle");
    import("./assetsutils/clipboard").then(module => {
      const ClipboardJS = module.default;
      new ClipboardJS(".btn").on("success", function(e) {
        e.clearSelection();
      });
    });
  },
  { once: true }
);

import "webpack-react-vue-spa-awesome-config/registerserviceworker.js";

import Vue from "vue/dist/vue.esm.browser.min.js";
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
import("./vue-index-render.js").then(({ router, default: AppHome }) => {
  // var AppHome=default
  new Vue({
    el: document.querySelector("#root"),
    router,
    //   components: {
    //     //   App
    //   },
    // template: "<App/>"
    render(h) {
      return h(AppHome);
    }
    // data() {
    //   return {};
    // }
  });
});

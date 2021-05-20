import "./error-alert.js";
import VueRouter from "vue-router";
import SimpleStoreManager from "@masx200/vue-simple-global-state-store-manager"; // bindGlobalStore // initGlobalState,
import Vue from "vue";
import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import "./index.css";
import "./juejin-highlight-markdown-0.c4305b077afc652cb76a.css";
import "./mystyle.css";
import "./pre-wrap.css";
// import "webpack-react-vue-spa-awesome-config/ie11babelpolyfill";
("use strict");
document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`;

// eslint-disable-next-line no-undef

window.addEventListener(
    "load",
    () => {
        //   import("bootstrap/dist/js/bootstrap.bundle");
        import("./assetsutils/clipboard").then((module) => {
            const ClipboardJS = module.default;
            new ClipboardJS(".btn").on("success", function (e) {
                e.clearSelection();
            });
        });
    },
    { once: true }
);

Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.devtools = true;
Vue.use(VueRouter);
// console.log(SimpleStore);
Vue.use(SimpleStoreManager);

import("./vue-index-render.js").then(({ router, default: AppHome }) => {
    // var AppHome=default
    new Vue({
        el: document
            .querySelector("#root")
            .appendChild(document.createElement("div")),
        router,
        //   components: {
        //     //   App
        //   },
        // template: "<App/>"
        render(h) {
            return h(AppHome);
        },
        // data() {
        //   return {};
        // }
    });
});

//@ts-ignore
import { initloadingid } from "./initloadingid.ts";
import "./error-alert.js";
import VueRouter from "vue-router";
//@ts-ignore
// import SimpleStoreManager from "@masx200/vue-simple-global-state-store-manager"; // bindGlobalStore // initGlobalState,
import Vue from "vue";
import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import "./index.css";
import "./juejin-highlight-markdown-0.c4305b077afc652cb76a.css";
import "./mystyle.css";
import "./pre-wrap.css";
// import "webpack-react-vue-spa-awesome-config/ie11babelpolyfill";
("use strict");
const rootele =
    document.getElementById("root") ||
    document.body.appendChild(document.createElement("div"));
Object.assign(rootele, { id: "root" });
if (!document.getElementById("app")) {
    rootele &&
        (rootele.innerHTML = `<div id=${initloadingid}>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>`);
}
// eslint-disable-next-line no-undef

window.addEventListener(
    "load",
    () => {
        //   import("bootstrap/dist/js/bootstrap.bundle");
        import("clipboard").then((module) => {
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
// Vue.use(SimpleStoreManager);
Vue.config.errorHandler = function (err, vm, info) {
    throw err;
};
import("./vue-index-render.js").then(({ router, default: AppHome }) => {
    const container =
        document.getElementById("app") ||
        rootele.appendChild(document.createElement("div"));
    Object.assign(container, { id: "app" });
    // var AppHome=default
    const vm = new Vue({
        router,

        render(h) {
            return h(AppHome);
        },
    });
    rootele && vm.$mount(container);
    Object.assign(vm.$el, {
        id: "app",
    });
});

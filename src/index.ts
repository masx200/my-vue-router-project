import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import * as Vue from "vue";
import "./error-alert.js";
//@ts-ignore
import { initloadingid } from "./initloadingid.ts";
import "./styles.ts";

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

import("./vue-index-render.js").then(({ router, default: AppHome }) => {
    const container =
        document.getElementById("app") ||
        rootele.appendChild(document.createElement("div"));
    Object.assign(container, { id: "app" });
    // var AppHome=default
    const vm = Vue.createApp({
        mounted() {
            var initloadele = document.getElementById(initloadingid);

            initloadele?.remove();
        },
        render() {
            return Vue.h(AppHome);
        },
    });
    vm.use(router);
    // vm.config.silent = true;
    // vm.config.devtools = true;
    // console.log(SimpleStore);
    // Vue.use(SimpleStoreManager);
    vm.config.errorHandler = function (err, vm, info) {
        throw err;
    };
    if (rootele) {
        const instance = vm.mount(container);
        Object.assign(instance.$el, {
            id: "app",
        });
    }
});

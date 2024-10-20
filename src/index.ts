import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import * as Vue from "vue";
import { defineAsyncComponent } from "vue";
import "./error-alert.js";
//@ts-ignore
import { initloadingid } from "./initloadingid.ts";
import Loading from "./loading.vue";
import router from "./router路由";
import "./styles.ts";

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
    { once: true },
);
const container =
    document.getElementById("app") ||
    rootele.appendChild(document.createElement("div"));
Object.assign(container, { id: "app" });
const AppHome = defineAsyncComponent({
    timeout: 500,
    loadingComponent: Loading,
    loader: () => import("./vue-index-render"),
});
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
vm.config.errorHandler = function (err, vm, info) {
    throw err;
};
// if (rootele) {
const instance = vm.mount(container);
Object.assign(instance.$el, {
    id: "app",
});

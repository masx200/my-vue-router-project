import * as VueRouter from "vue-router";
import * as Vue from "vue";
import { defineAsyncComponent } from "vue";

const about = Vue.defineAsyncComponent(
    () => import("./vue-component-about.vue"),
);
const home = Vue.defineAsyncComponent(() => import("./vue-component-home.vue"));
// @ts-ignore
const huami = Vue.defineAsyncComponent(
    () => import("./huami/vue-component-huami.vue"),
);
const beautifyjavascript = Vue.defineAsyncComponent(
    () => import("./beautify-javascript/beautify-javascript.vue"),
);
const 我的路由列表: [string, Vue.Component][] = [
    ["/about", about],

    ["/huami", huami],

    ["/beautify-javascript", beautifyjavascript],

    [
        "/jsfuck-encoder",
        defineAsyncComponent(
            () =>
                import(
                    "./jsfuck-and-hieroglyphy-decoder-and-encoder/jsfuck-encoder.vue"
                ),
        ),
    ],
    [
        "/JSfuck-and-hieroglyphy-decoder",
        defineAsyncComponent(
            () =>
                import(
                    "./jsfuck-and-hieroglyphy-decoder-and-encoder/JSfuck-and-hieroglyphy-decoder.vue"
                ),
        ),
    ],
    [
        "/hieroglyphy-encoder",
        defineAsyncComponent(
            () =>
                import(
                    "./jsfuck-and-hieroglyphy-decoder-and-encoder/hieroglyphy-encoder.vue"
                ),
        ),
    ],
    ["", home],
    ["/:pathMatch(.*)*", home],
];
const routes = [
    ...我的路由列表.map((e) => {
        return { path: e[0], component: e[1] };
    }),
];
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
});
router.onError((err) => {
    throw err;
});

export default router;

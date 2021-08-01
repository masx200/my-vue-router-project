import * as VueRouter from "vue-router";
import * as Vue from "vue";
// @ts-ignore

// @ts-ignore
const about = Vue.defineAsyncComponent(
    () => import("./vue-component-about.vue")
);
const home = Vue.defineAsyncComponent(() => import("./vue-component-home.vue"));
// @ts-ignore
const huami = Vue.defineAsyncComponent(
    () => import("./huami/vue-component-huami.vue")
);
var 我的路由列表: [string, Vue.Component][] = [
    ["/about", about],
    ["/", home],
    ["/huami", huami],

    [
        "/beautify-javascript",
        Vue.defineAsyncComponent(
            () => import("./beautify-javascript/beautify-javascript.vue")
        ),
    ],
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

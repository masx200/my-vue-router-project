import VueRouter from "vue-router";
// @ts-ignore
import loading from "./loading.vue";
function 处理加载状态loading组件(component) {
    return () => ({
        component: component(),
        loading,
    });
}
// @ts-ignore
const about = () => import("./vue-component-about.vue");
const home = () => import("./vue-component-home.vue");
// @ts-ignore
const huami = () => import("./vue-component-huami.vue");
var 我的路由列表 = [
    ["/about", about],
    ["/", home],
    ["/huami", huami],
    // [
    //     "/vue-simple-global-state-store-manager",
    //     // @ts-ignore
    //     () => import("./vue-simple-global-state-store-manager.vue"),
    // ],
    // @ts-ignore
    [
        "/beautify-javascript",
        () => import("./beautify-javascript/beautify-javascript.vue"),
    ],
    ["*", home],
];
const router = new VueRouter({
    routes: [
        ...我的路由列表.map((e) => {
            return { path: e[0], component: 处理加载状态loading组件(e[1]) };
        }),
    ],
});
router.onError((err) => {
    throw err;
});

export default router;

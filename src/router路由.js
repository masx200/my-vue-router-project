import VueRouter from "vue-router/dist/vue-router.esm.browser";
import loading from "./loading.vue";
function 处理加载状态loading组件(component) {
  return () => ({
    component: component(),
    loading
  });
}
const about = () => import("./vue-component-about.vue");
const home = () => import("./vue-component-home.vue");
const huami = () => import("./vue-component-huami.vue");
var 我的路由列表 = [
  ["/about", about],
  ["/", home],
  ["/huami", huami],
  [
    "/vue-simple-global-state-store-manager",
    () => import("./vue-simple-global-state-store-manager.vue")
  ],
  ["/beautify-javascript", () => import("./beautify-javascript.vue")],
  ["*", home]
];
const router = new VueRouter({
  routes: [
    ...我的路由列表.map(e => {
      return { path: e[0], component: 处理加载状态loading组件(e[1]) };
    })
    // {
    //   path: "/about",
    //   // name: "about",
    //   //   //   component:require('./vue-component-about').default
    //   //   component: () => {
    //   //     var com = import("./vue-component-about");
    //   //     // console.log(com);
    //   //     return com;
    //   //   }
    //   component: about
    // },
    // {
    //   path: "/",
    //   // name: "home",
    //   component: home
    // },
    // {
    //   path: "/huami",
    //   // name: "huami",
    //   component: huami
    // },
    // {
    //   path: "/vue-simple-global-state-store-manager",
    //   // name: "vue-simple-global-state-store-manager",
    //   component: () => import("./vue-simple-global-state-store-manager.vue")
    // },
    // {
    //   path: "/beautify-javascript",
    //   // name: "beautify-javascript",
    //   component: () => import("./beautify-javascript.vue")
    // },
    // {
    //   path: "*",
    //   //   redirect: "/"
    //   // name: "home",
    //   component: home
    // }
  ]
});
// console.log(router);
export default router;

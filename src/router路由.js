import VueRouter from "vue-router/dist/vue-router.esm.browser";
const about = () => import("./vue-component-about.vue");
const home = () => import("./vue-component-home.vue");
const huami = () => import("./vue-component-huami.vue");
const router = new VueRouter({
  routes: [
    {
      path: "/about",
      name: "about",
      //   //   component:require('./vue-component-about').default
      //   component: () => {
      //     var com = import("./vue-component-about");
      //     // console.log(com);
      //     return com;
      //   }
      component: about
    },
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/huami",
      name: "huami",
      component: huami
    },
    {
      path: "/vue-simple-global-state-store-manager",
      name: "vue-simple-global-state-store-manager",
      component: () => import("./vue-simple-global-state-store-manager.vue")
    },
    {
      path: "*",
      //   redirect: "/"
      name: "home",
      component: home
    }
  ]
});
export default router;

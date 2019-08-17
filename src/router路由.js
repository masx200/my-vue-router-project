import VueRouter from "vue-router/dist/vue-router.esm.browser";
const about = () => import("./vue-component-about.js");
const home = () => import("./vue-component-home.js");
const huami = () => import("./vue-component-huami.js");
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
    //   {
    //     path: "",
    //     //   redirect: "/"
    //     name: "home",
    //     component: home
    //   },
    {
      path: "*",
      //   redirect: "/"
      name: "home",
      component: home
    }
  ]
});
export default router;

"use strict";
import AppHome from "./vue-app-home.vue";
import $ from "jquery";
// import Vue from "vue";
//import VueRouter from "vue-router/dist/vue-router.esm.browser";
import router from "./router路由";

// import "../RegisteraServiceWorkerFile.js";
// import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";

//edge和Firefox不支持动态import函数加载模块！
// import "./vue-render-all.css";
// import "../myindexrender.css";
// eslint-disable-next-line
/* eslint-disable */
// import Vue from 'vue';
// import React from 'react';
// import("../IMPORTCJSAMDUMD").then(IMPORTCJSAMDUMD => {
//   (() => {
//     "use strict";
//     $(window).one("load", () => {
//       jQuery(
//         '<style>\n        @import "https://cdn.staticfile.org/mui/3.7.1/css/mui.min.css";\n  \n        @import "https://github.githubassets.com/assets/frameworks-a2fba223d5af91496cac70d4ec3624df.css";\n        @import "https://github.githubassets.com/assets/github-6556dfa9be535e551ffffaadfecdad99.css";\n        @import "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css";\n      </style>'
//       ).appendTo(document.head);
export const hashchangehandler = onhashchange;
function onhashchange() {
    scrollTo(0, 0);
    /*  $("#collapsibleNavbar") 不存在!*/
    //   $("#example-navbar-collapse").removeClass("show");
    // $("#collapsibleNavbar").removeClass("show");

    $("#example-navbar-collapse").hide();
    $("#my主体").css("padding-top", $("#my导航栏").height());
}
$(window).on("hashchange", onhashchange);
let haverun = 0;
// let myonloadfunc = myonload2;
herewindowonload();

function herewindowonload() {
    if (haverun == 0) {
        haverun = 1;
        //   console.log("开始运行此onload函数");

        //   Promise.all([
        //     IMPORTCJSAMDUMD(
        //       `https://cdn.staticfile.org/vue-router/3.0.6/vue-router.min.js`,
        //       "vue-router"
        //     ),
        //     IMPORTCJSAMDUMD(
        //       `https://cdn.staticfile.org/vue/2.6.10/vue.min.js`,
        //       "vue"
        //     )
        //   ]).then(myonloadfunc);

        myonloadfunc();
    } else {
        console.log("不要重复运行此onload函数");
    }
}
// $(window).one(herewindowonload);
/* 不要写两次window onload */
//   var Router;
// var myvueobj;

// setTimeout(()=>{
//     herewindowonload()
// }
// , 1000)

// window.mychangemenu = function () {

function myonloadfunc() {
    //   console.log(modulearray);
    // var VueRouter = modulearray[0].default;
    // var Vue = modulearray[1].default;
    //   Router = VueRouter;
    // window.keysave = "";
    // $(window).on("hashchange", () => {
    //   console.log("hashchange");
    //   $("#mynavul").click();
    // });
    //   $(window).on("hashchange", hashchangehandler);
    //   function hashchangehandler() {
    //     jQuery("#example-navbar-collapse").removeClass("show");
    //   }
    //   Vue.component("App", App);
    //   new Vue({
    //     el: document.querySelector("#root"),
    //     router,
    //     components: {
    //       //   App
    //     },
    //     // template: "<App/>"
    //     render(h) {
    //       return h(AppHome);
    //     }
    //     // data() {
    //     //   return {};
    //     // }
    //   });
}
//     });
//   })();
// });
window.addEventListener("resize", () => {
    requestAnimationFrame(() => {
        $("#my主体").css("padding-top", $("#my导航栏").height());
    });
});
export default AppHome;
export { router };

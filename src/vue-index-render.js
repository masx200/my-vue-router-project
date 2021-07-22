import $ from "jquery";
import router from "./router路由";
// @ts-ignore
import AppHome from "./vue-app-home.vue";
import { 调整导航栏和主体的距离 } from "./调整导航栏和主体的距离";
("use strict");
export const hashchangehandler = onhashchange;
function onhashchange() {
    scrollTo(0, 0);
    $("#example-navbar-collapse").hide();
    // $("#my主体").css("padding-top", $("#my导航栏").height());
    调整导航栏和主体的距离();
}
$(window).on("hashchange", onhashchange);
let haverun = 0;
herewindowonload();
function herewindowonload() {
    if (haverun == 0) {
        haverun = 1;
        // myonloadfunc();
    } else {
        console.log("不要重复运行此onload函数");
    }
}
//function myonloadfunc() {}
window.addEventListener("resize", () => {
    requestAnimationFrame(() => {
        $("#my主体").css("padding-top", $("#my导航栏").height());
    });
});
export default AppHome;
export { router };

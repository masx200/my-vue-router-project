import $ from "jquery";
import { defineComponent, h } from "vue";
import router from "./router路由";
// @ts-ignore
import AppHome from "./vue-app-home.vue";
import { 调整导航栏和主体的距离 } from "./调整导航栏和主体的距离";
("use strict");
export const hashchangehandler = onhashchange;
function onhashchange() {
    scrollTo(0, 0);
    $(".example-navbar-collapse").hide();
    // $(".my主体").css("padding-top", $(".my导航栏").height());
    调整导航栏和主体的距离();
}

export default defineComponent({
    mounted() {
        $(window).on("hashchange", onhashchange);

        window.addEventListener("resize", resizelistener);
    },
    render() {
        return h(AppHome);
    },
});
export { router };
function resizelistener() {
    requestAnimationFrame(() => {
        $(".my主体").css("padding-top", $(".my导航栏").height() || 0);
    });
}

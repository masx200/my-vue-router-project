import $ from "jquery";
import { defineComponent, h } from "vue";
import router from "./router路由";
// @ts-ignore
import AppHome from "./vue-app-layout.vue";
("use strict");

export default defineComponent({
    mounted() {
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

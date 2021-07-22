import $ from "jquery";
import * as Vue from "vue";
import { initloadingid } from "./initloadingid.ts";
import { hashchangehandler } from "./vue-index-render";
import { 调整导航栏和主体的距离 } from "./调整导航栏和主体的距离";
import loading from "./loading.vue";
let App = Vue.defineComponent({
    components: { loading },
    name: "App",
    data() {
        return {
            isActive1: window.location.hash == "#/" ? true : false,
            isActive2: window.location.hash == "#/huami" ? true : false,
            isActive3: window.location.hash == "#/about" ? true : false,
        };
    },
    methods: {
        togglecollapsenavbar() {
            $("#example-navbar-collapse").toggle();
        },
        myfreshdata() {
            (this.isActive1 = window.location.hash === "#/"),
                (this.isActive2 = window.location.hash === "#/huami"),
                (this.isActive3 = window.location.hash === "#/about");
        },
    },
    mounted() {
        var initloadele = document.getElementById(initloadingid);
        initloadele && (initloadele.style.display = "none");
        this.myfreshdata();
        hashchangehandler();
        $("#mynavul").on("click", hashchangehandler);
        // $("#my主体").css("padding-top", $("#my导航栏").height());
        // requestAnimationFrame(() => {
        //     $("#my主体").css("padding-top", $("#my导航栏").height());
        // });
        // let timer = setInterval(() => {
        //     $("#my主体").css("padding-top", $("#my导航栏").height());
        //     //console.log($("#my导航栏").height());
        // }, 0);
        // setTimeout(() => {
        //     $("#my主体").css("padding-top", $("#my导航栏").height());
        //     //console.log($("#my导航栏").height());
        //     clearInterval(timer);
        // }, 1000);
        调整导航栏和主体的距离();
    },
});
export default App;

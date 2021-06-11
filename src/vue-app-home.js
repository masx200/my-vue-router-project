import { hashchangehandler } from "./vue-index-render";
import $ from "jquery";
import Vue from "vue";
let App = Vue.extend({
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
        $("#mynavul").click(hashchangehandler);
        $("#my主体").css("padding-top", $("#my导航栏").height());
        requestAnimationFrame(() => {
            $("#my主体").css("padding-top", $("#my导航栏").height());
        });
        let timer = setInterval(() => {
            $("#my主体").css("padding-top", $("#my导航栏").height());
            //console.log($("#my导航栏").height());
        }, 0);
        setTimeout(() => {
            $("#my主体").css("padding-top", $("#my导航栏").height());
            //console.log($("#my导航栏").height());
            clearInterval(timer);
        }, 1000);
    },
});
export default App;
import { initloadingid } from "./initloadingid.ts";

import * as Vue from "vue";
import { initloadingid } from "./initloadingid";
import Loading from "./loading.vue";
import { navlinks } from "./navlinks";
import { useobservesize } from "./useobservesize";
// import { 调整导航栏和主体的距离 } from "./调整导航栏和主体的距离";

const App = Vue.defineComponent({
    setup() {
        const { height: navbarheight, ref: navbarref } = useobservesize({
            height: 60,
        });
        return { navbarheight, navbarref };
    },
    watch: {
        navbarheight(v) {
            console.log(v);
        },
    },
    components: { Loading },
    name: "App",
    data() {
        return {
            shownavbar: window.innerWidth > 500,
            navlinks,
        };
    },
    methods: {
        togglecollapsenavbar() {
            this.shownavbar = !this.shownavbar;
        },
    },
    mounted() {
        const selfo = this;
        function onhashchange() {
            scrollTo(0, 0);
            if (window.innerWidth <= 500) {
                selfo.shownavbar = false;
            }

            // $(".my主体").css("padding-top", $(".my导航栏").height());
            // 调整导航栏和主体的距离();
        }

        window.addEventListener("hashchange", onhashchange);
        var initloadele = document.getElementById(initloadingid);
        initloadele && (initloadele.style.display = "none");

        // 调整导航栏和主体的距离();
    },
});
export default App;

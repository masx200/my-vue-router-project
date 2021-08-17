import * as Vue from "vue";
import { initloadingid } from "./initloadingid";
import Loading from "./loading.vue";
import { navlinks } from "./navlinks";
import { hashchangehandler } from "./vue-index-render";
import { 调整导航栏和主体的距离 } from "./调整导航栏和主体的距离";
const App = Vue.defineComponent({
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
        myfreshdata() {
            hashchangehandler();
        },
    },
    mounted() {
        var initloadele = document.getElementById(initloadingid);
        initloadele && (initloadele.style.display = "none");
        this.myfreshdata();
        hashchangehandler();

        调整导航栏和主体的距离();
    },
});
export default App;

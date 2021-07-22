function 获取当前时间() {
    return new Date().toString().slice(0, new Date().toString().indexOf("GMT"));
}
// @ts-ignore
import * as Vue from "vue";
import picture1 from "./pictures/babeljs.png";
import picture3 from "./pictures/bootstrap.png";
// @ts-ignore
import picture4 from "./pictures/logo-jquery.png";
// @ts-ignore
import picture2 from "./pictures/parcel.jpg";
// @ts-ignore
import picture5 from "./pictures/react.svg";
import picture6 from "./pictures/vue.png";
// @ts-ignore
import picture7 from "./pictures/webpack.svg";

let home = Vue.defineComponent({
    name: "home",
    data() {
        return {
            timer: 0,
            nowtime: 获取当前时间(),
            msg: "Welcome to Your Vue.js App",
            picture1,
            picture2,
            picture3,
            picture4,
            picture5,
            picture6,
            picture7,
        };
    },
    methods: {},
    mounted() {
        let setnowtime = (t) => {
            this.nowtime = t;
        };
        document.title = "masx200的github主页" + "vue-router-project-" + "home";
        window.location.hash = "#/";
        this.timer = setInterval(() => {
            setnowtime(获取当前时间());
        }, 1100);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
});
export default home;

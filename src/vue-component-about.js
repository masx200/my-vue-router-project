"use strict";
function 获取当前时间() {
    return new Date().toString().slice(0, new Date().toString().indexOf("GMT"));
}
import * as Vue from "vue";
var timer;
var about = Vue.defineComponent({
    name: "about",
    data() {
        return {
            nowtime: 获取当前时间(),
            msg: "Welcome to Your Vue.js App",
        };
    },
    methods: {},
    mounted() {
        document.title = "vue-router-project-" + "about";
        let setnowtime = (t) => {
            this.nowtime = t;
        };
        timer = setInterval(() => {
            setnowtime(获取当前时间());
        }, 1100);
    },
    beforeDestroy() {
        clearInterval(timer);
    },
});
export default about;

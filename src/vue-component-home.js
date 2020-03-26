function 获取当前时间() {
    return new Date().toString().slice(0, new Date().toString().indexOf('GMT'));
}
// @ts-ignore
import picture1 from './pictures/babeljs.png';
// @ts-ignore
import picture2 from './pictures/parcel.jpg';
import picture3 from './pictures/bootstrap.png';
// @ts-ignore
import picture4 from './pictures/logo-jquery.png';
// @ts-ignore
import picture5 from './pictures/react.svg';
import picture6 from './pictures/vue.png';
// @ts-ignore
import picture7 from './pictures/webpack.svg';
var timer;
import Vue from 'vue';
let home = Vue.extend({
    name: 'home',
    data() {
        return {
            nowtime: 获取当前时间(),
            msg: 'Welcome to Your Vue.js App',
            picture1,
            picture2,
            picture3,
            picture4,
            picture5,
            picture6,
            picture7
        };
    },
    methods: {},
    mounted() {
        let setnowtime = t => {
            this.nowtime = t;
        };
        document.title = 'masx200的github主页' + 'vue-router-project-' + 'home';
        window.location.hash = '#/';
        timer = setInterval(() => {
            setnowtime(获取当前时间());
        }, 1100);
    },
    beforeDestroy() {
        clearInterval(timer);
    }
});
export default home;
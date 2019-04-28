//alert("webapck test");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
/* eslint-disable */
import 'babel-polyfill';

//////////////
// let func = () => {};
// const NUM = 45;
// let arr = [1, 2, 4];
// let arrB = arr.map(item => item * 2);

// console.log(arrB.includes(8));
// console.log("new Set(arrB) is ", new Set(arrB));
///////////////

//import Vue from 'vue'
//从cdn加载依赖包
import App from './App'
import router from './router'
window.onload = () => {
    

    Vue.config.productionTip = false

    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        router,
        components: {
            App
        },
        template: '<App/>'
    })
}


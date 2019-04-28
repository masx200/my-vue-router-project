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
   

    if (window.location.hash == "#/") {
        global.myisactive1 = true
        global.myisactive2 = false
        global.myisactive3 = false
    } else if (window.location.hash == "#/huami") {
        global.myisactive2 = true
        global.myisactive1 = false
        global.myisactive3 = false
    } else  if (window.location.hash == "#/about"){
        global.myisactive3 = true
        global.myisactive1 = false
        global.myisactive2 = false
    }

    global.handleClick1=function handleClick1() {
        global.myisactive1 = true
        global.myisactive2 = false
        global.myisactive3 = false
        $("#mynav1").click()
    }
    global.handleClick2=function handleClick2() {
        global.myisactive2 = true
        global.myisactive1 = false
        global.myisactive3 = false
        $("#mynav2").click()
    }
    global.handleClick3=function handleClick3() {
        global.myisactive3 = true
        global.myisactive1 = false
        global.myisactive2 = false
        $("#mynav3").click()
    }
    global.myvueobj=new Vue({
        el: '#app',
        router,
        components: {
            App
        },
        template: '<App/>',
        data() {
            return {
              isActive1:global.myisactive1,
              isActive2:global.myisactive1,
              isActive3: global.myisactive1,
            //   myroutename: this.$route.name
            };
          }
    })
}


// eslint-disable-next-line
/* eslint-disable */
//从cdn加载依赖包
//import Vue from 'vue'
// //import Router from 'vue-router'
// import about from '@/components/about'
// import home from '@/components/home'
// import huami from '@/components/huami'
// function myimport(b){
//     // import a from b;
//     return a=require(b)
// }

const about=()=>import("./components/about")
const home=()=>import("./components/home")
const huami=()=>import("./components/huami")
var Router=VueRouter
Vue.use(Router)
// Vue.use(VueRouter)

export default new Router({
  routes: [{
      path: '/about',
      name: 'about',
      component: about
    // component:()=>import( '@/components/about')
    },
    {
      path: '/',
      name: 'home',
      component: home
    // component:()=>import( '@/components/home')
    },
    {
      path: '/huami',
      name: 'huami',
      component: huami
    // component:()=>import( '@/components/home')
    },
   {
    path:'*',
    redirect:'/'
   } 
  ]
})

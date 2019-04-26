// eslint-disable-next-line
/* eslint-disable */

//import Vue from 'vue'
//import Router from 'vue-router'
import about from '@/components/about'
import home from '@/components/home'
import huami from '@/components/huami'
var Router=VueRouter
Vue.use(Router)
// Vue.use(VueRouter)

export default new Router({
  routes: [{
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/huami',
      name: 'huami',
      component: huami
    },
   {
    path:'*',
    redirect:'/'
   } 
  ]
})

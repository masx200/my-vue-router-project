// eslint-disable-next-line
/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import huami from '@/components/huami'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/about',
      name: 'about',
      component: HelloWorld
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

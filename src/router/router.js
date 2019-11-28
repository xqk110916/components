import Vue from 'vue'
import Router from 'vue-router'

import test from '@/views/test'
import home from '@/pages/home' 
import profile from '@/pages/profile' 
import order from '@/pages/order' 
import discover from '@/pages/discover' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: test
    },
    // page页
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
    }
  ]
})

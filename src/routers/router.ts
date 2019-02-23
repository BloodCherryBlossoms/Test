import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/menu/menu.vue'
import Errors from '@/components/Error/Error.vue'
import HHome from '@/components/Home/HHome.vue'
import Txt from '@/components/Home/scroll/txt.vue'
import Tree from '@/components/Home/scroll2/tree1.1.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/hhome',
      name: 'hhome',
      component: HHome
    },
    {
      path: '/txt',
      name: 'txt',
      component: Txt
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/e',
      name: 'Errors',
      component: Errors
    },
    {
      path: '*',
      name: 'Errors',
      component: Errors
    }
  ]
})

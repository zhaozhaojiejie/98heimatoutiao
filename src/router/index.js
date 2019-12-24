import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import Login from '../views/login/index'
import Home2 from '../views/home/home/home'// 默认背景

Vue.use(VueRouter)

const routes = [
  {
  // 强制跳转
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Home2
    }]
  },
  {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

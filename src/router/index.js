import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../pages/Create/template.vue'
import Detail from '../pages/Detail/template.vue'
import User from '../pages/User/template.vue'
import Mine from '../pages/Mine/template.vue'
import Edit from '../pages/Edit/template.vue'
import Index from '../pages/Index/template.vue'
import Login from '../pages/Login/template.vue'
import Register from '../pages/Register/template.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    component: Create
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/user',
    component: User
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

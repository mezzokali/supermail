import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home/home";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('views/profile/profile.vue')
  },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('views/cart/cart.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('views/category/category.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

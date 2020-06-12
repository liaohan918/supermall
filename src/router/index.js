import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("@/views/home/Home.vue")
const category = () => import("@/views/category/Category.vue")
const profile = () => import("@/views/profile/Profile.vue")
const shopcart = () => import("@/views/shopcart/Shopcart.vue")

const routes = [
  {
    path:'',
    redirect: home
  },
  {
    path:'/home',
    component: home
  },
  {
    path:'/category',
    component: category
  },
  {
    path:'/shopcart',
    component: shopcart
  },
  {
    path:'/profile',
    component: profile
  }
 ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../Login";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from "../views/Profile";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //用你的方式获取登录的用户信息
  const userInfo = localStorage.userinfo
  if(userInfo || to.name === 'Login'){
    //如果存在用户信息，或者进入的页面是登录页面，则直接进入
    next()
  }else {
    //不存在用户信息则说明用户未登录，跳转到登录页面，带上当前的页面地址，登录完成后做回跳，
    //如未登录用户进入用户中心的页面地址，检测到未登录，
    //自动跳转到登录页面，并且带上用户中心的页面地址，登录完成后重新跳到个人中心页面。
    next({
      name: 'Login',
      query: {
        redirect: to.path
      }
    })
  }
})

export default router

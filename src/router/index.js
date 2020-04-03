import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Home from '../views/categories/Home.vue'
import History from '../views/categories/History.vue'
import Profile from "../views/categories/Profile";
import ProfileUpdatePassword from "../views/categories/ProfileUpdatePassword";
import Categories from "../views/Categories";
import RealTime from "../views/categories/RealTime";
import Register from "../views/Register"

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
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'realTime',
        name: 'RealTime',
        component: RealTime,
      },
      {
        path: 'history',
        name: 'History',
        component: History
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
      },
      {
        path: 'profile/updatePassword',
        name: ProfileUpdatePassword,
        component: ProfileUpdatePassword
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   //用你的方式获取登录的用户信息
//   const userInfo = localStorage.userinfo
//   if(userInfo || to.name === 'Login'){
//     //如果存在用户信息，或者进入的页面是登录页面，则直接进入
//     next()
//   }else {
//     //不存在用户信息则说明用户未登录，跳转到登录页面，带上当前的页面地址，登录完成后做回跳，
//     //如未登录用户进入用户中心的页面地址，检测到未登录，
//     //自动跳转到登录页面，并且带上用户中心的页面地址，登录完成后重新跳到个人中心页面。
//     next({
//       name: 'Login',
//       query: {
//         redirect: to.path
//       }
//     })
//   }
// })

export default router

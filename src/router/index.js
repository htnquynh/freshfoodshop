import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import RecommendMenu from '../views/RecommendMenu.vue'
import Group from '../views/Group.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import VerifyUser from '../views/VerifyUser.vue'
import VerifyChangePassword from '../views/VerifyChangePassword.vue'
import ChangeForgotPassword from '../views/ChangeForgotPassword.vue'
import MyAccount from '../views/MyAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("user_login")) {
        next();
      }
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/verify-user',
    name: 'VerifyUser',
    component: VerifyUser
  },
  {
    path: '/verify-change-password',
    name: 'VerifyChangePassword',
    component: VerifyChangePassword
  },
  {
    path: '/change-forgot-password',
    name: 'ChangeForgotPassword',
    component: ChangeForgotPassword
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("user_login")) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/recommend-menu',
    name: 'RecommendMenu',
    component: RecommendMenu
  },
  {
    path: '/group',
    name: 'Group',
    component: Group
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("user_login")) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("user_login")) {
        next("/login");
      } else {
        next();
      }
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

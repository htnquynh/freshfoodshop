import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";

const Home = () => import("../views/Home.vue");
const Shop = () => import("../views/Shop.vue");
const Product = () => import("../views/Product.vue");
const RecommendMenu = () => import("../views/RecommendMenu.vue");
const Group = () => import("../views/Group.vue");
const ShoppingCart = () => import("../views/ShoppingCart.vue");
const Checkout = () => import("../views/Checkout.vue");
const Login = () => import("../views/Login.vue");

const Signup = () => import("../views/Signup.vue");
const ForgotPassword = () => import("../views/ForgotPassword.vue");
const VerifyUser = () => import("../views/VerifyUser.vue");
const VerifyResetPassword = () => import("../views/VerifyResetPassword.vue");
const ResetPassword = () => import("../views/ResetPassword.vue");

const MyAccount = () => import("../views/MyAccount.vue");
const Profile = () => import("../views/Profile.vue");
const MyOrders = () => import("../views/MyOrders.vue");
const ChangePassword = () => import("../views/ChangePassword.vue");

const Wishlist = () => import('../views/Wishlist.vue')
const Compare = () => import('../views/Compare.vue')
const PageNotFound = () => import('../views/PageNotFound.vue')

Vue.use(VueRouter);

const routes = [
  { path: "*", name: "PageNotFound", component: PageNotFound },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem("user_login")) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/verify-user",
    name: "VerifyUser",
    component: VerifyUser,
  },
  {
    path: "/verify-reset-password",
    name: "VerifyResetPassword",
    component: VerifyResetPassword,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/compare",
    name: "Compare",
    component: Compare,
  },
  {
    path: "/account",
    component: MyAccount,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("user_login")) {
        next("/login");
      } else {
        next();
      }
    },
    children: [
      {
        path: "",
        name: "MyAccount",
        component: Profile,
      },
      {
        path: "my-order",
        name: "MyOrder",
        component: MyOrders,
      },
      {
        path: "change-password",
        name: "ChangePassword",
        component: ChangePassword,
      },
    ],
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("user_login")) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/shop/:key",
    name: "Shop_Filter",
    component: Shop,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/recommend-menu",
    name: "RecommendMenu",
    component: RecommendMenu,
  },
  {
    path: "/group/:id",
    name: "Group",
    component: Group,
  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
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
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("user_login")) {
        next("/login");
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    store.dispatch("start_load");
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  store.dispatch("stop_load");
  // setTimeout(() => store.dispatch("stop_load"), 1700);
});

export default router;

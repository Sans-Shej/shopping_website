import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Men from "../views/Men.vue";
import Women from "../views/Women.vue";
import Search from "../views/Search.vue";
import Checkout from "../views/Checkout.vue";
import ProductDetails from "../views/ProductDetails.vue";
import login from "../views/login.vue";
import Signup from "../views/Signup.vue";
// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/men",
    name: "Men",
    component: Men,
    props: true,
  },
  {
    path: "/women",
    name: "Women",
    component: Women,
    props: true,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    props: true,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: login,
    props: true,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
    props: true,
  },
  {
    path: "/shop/:gender/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

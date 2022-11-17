import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Home from "../views/admin-panel/Home.vue";
import Calendar from "../views/admin-panel/Calendar.vue";
import Login from "../views/admin-panel/Login.vue";
import Shop from "../views/admin-panel/Shop.vue";
import Orders from "../views/admin-panel/home-children/Orders.vue";
import Comments from "../views/admin-panel/home-children/Comments.vue";
import Revenue from "../views/admin-panel/home-children/Revenue.vue";

// import useMeta from "vue-meta";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: "Home page",
      },
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders,
      meta: {
        title: "Orders",
      },
    },
    {
      path: "/comments",
      name: "comments",
      component: Comments,
      meta: {
        title: "Comments",
      },
    },
    {
      path: "/revenue",
      name: "revenue",
      component: Revenue,
      meta: {
        title: "Revenue",
      },
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar,
      meta: {
        title: "Calendar",
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "Login Page",
      },
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
      meta: {
        title: "Shop Page",
      },
    },
  ],
});

//to - actual root we are going to, from - root that we just came from, next -  method we need to fire to load root -
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = `Admin Panel - ${to.meta.title}`;
  next();
});

export default router;

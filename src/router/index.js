import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Home from "../views/admin-panel/Home.vue";
import Calendar from "../views/admin-panel/Calendar.vue";
import Login from "../views/admin-panel/Login.vue";
import Shop from "../views/admin-panel/Shop.vue";

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

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = `Admin Panel - ${to.meta.title}`;
  next();
});
export default router;

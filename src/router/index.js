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
      path: "/",
      name: "app",
      component: App,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Home from "../views/admin-panel/Home.vue";
import Calendar from "../views/admin-panel/Calendar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "../views/ToDoList.vue";
import Users from "../views/Users.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/todolist",
      name: "todolist",
      component: ToDoList,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "../views/ToDoList.vue";
import Users from "../views/Users.vue";
import App from "../App.vue";
import Form from "../views/Form.vue";
import Create from "../views/Create.vue";
import Update from "../views/Update.vue";

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
    {
      path: "/helloworld",
      name: "helloworld",
      component: App,
    },
    {
      path: "/form",
      name: "form",
      component: Form,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/update",
      name: "update",
      component: Update,
    },
  ],
});

export default router;

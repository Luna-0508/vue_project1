import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "../views/ToDoList.vue";
import Users from "../views/Users.vue";
import App from "../App.vue";
import Form from "../views/form/Form.vue";
import Create from "../views/form/Create.vue";
import Update from "../views/form/Update.vue";
import Show from "../views/Show.vue";

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
    {
      path: "/show",
      name: "show",
      component: Show,
    },
  ],
});

export default router;

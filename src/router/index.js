import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "../views/ToDoList.vue";
import Users from "../views/users/Users.vue";
import App from "../App.vue";
import Form from "../views/form/Form.vue";
import Create from "../views/form/Create.vue";
import Update from "../views/form/Update.vue";
import Show from "../views/users/Show.vue";
import Edit from "../views/users/Edit.vue";

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
      path: "/show/:id", // tak się deklaruje elementy, które chcesz przenieść. to to samo id, które przekazałaś w this.$route.params.
      name: "show",
      component: Show,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit,
    },
  ],
});

export default router;

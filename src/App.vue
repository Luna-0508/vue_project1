<script>
import { def } from "@vue/shared";
import { setupMaster } from "cluster";
import { RouterLink, RouterView } from "vue-router";
import Layout from "./components/Layout.vue";
import useUsers from "./stores/users";
const user = useUsers();

// export default {
//   computed: {
//     mapStore(useUser) {},
//   },
// };
</script>

<template>
  <Layout
    ><div class="content">
      <router-link to="/todolist">ToDo List</router-link>
      <router-link to="/users">Users List</router-link>
      <router-link to="/form">Form</router-link>
    </div>
    <RouterView />
  </Layout>
</template>

<style>
.content {
  margin: 10px auto;
  position: relative;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  width: 20%;
}

a {
  font-weight: bold;
  margin-right: 20px;
  display: flex;
  justify-content: center;
}
</style>

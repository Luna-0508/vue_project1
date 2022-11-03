<script>
import Users from "../components/Users.vue";

import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users/").then(response => {
      this.posts = response.data;
    });
  },
};
</script>

<template>
  <div id="table">
    <table>
      <tr v-for="post in posts" v-bind:key="post.id">
        <td>{{ post.name }}</td>
        <td>{{ post.username }}</td>
        <td>{{ post.address.street }}</td>
        <td>{{ post.address.suite }}</td>
        <td>{{ post.address.city }}</td>
        <td>{{ post.phone }}</td>
        <td>{{ post.website }}</td>
        <td>{{ post.company.name }}</td>
        <td>{{ post.company.catchPhrase }}</td>
        <td>{{ post.company.bs }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table,
tr,
td {
  border: 1px solid;
}
</style>

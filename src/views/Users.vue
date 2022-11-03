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
    <DataTable
      :value="posts"
      class="p-datatable-sm"
      showGridlines
      responsiveLayout="scroll"
    >
      <Column field="name" header="NAME"></Column>
      <Column field="username" header="USERNAME"></Column>
      <Column field="address" header="ADDRESS"></Column>
      <Column field="phone" header="PHONE"></Column>
      <Column field="website" header="WEBSITE"></Column>
      <Column field="company" header="COMPANY"></Column>

      <!-- <td>{{ post.address.street }}</td>
      <td>{{ post.address.suite }}</td>
      <td>{{ post.address.city }}</td>
      <td>{{ post.company.name }}</td>
      <td>{{ post.company.catchPhrase }}</td>
      <td>{{ post.company.bs }}</td> -->
    </DataTable>
  </div>
</template>

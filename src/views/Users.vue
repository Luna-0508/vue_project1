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
      class="p-datatable-lg"
      showGridlines
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="table-header">USERS LIST</div>
      </template>

      <Column field="name" header="NAME" :sortable="true"></Column>
      <Column field="username" header="USERNAME" :sortable="true"></Column>
      <Column field="address" header="ADDRESS">
        <!-- <template #body="slotProps">
          <div>
            {{ slotProps.data.street }}
          </div>
        </template>-->
      </Column>
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

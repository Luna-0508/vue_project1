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
      :resizableColumns="true"
      columnResizeMode="expand"
    >
      <template #header>
        <div class="table-header">USERS LIST</div>
      </template>

      <Column field="name" header="NAME" :sortable="true"></Column>
      <Column field="username" header="USERNAME" :sortable="true"></Column>
      <Column field="address.street" header="ADDRESS"> </Column>
      <Column field="address.suite"></Column>
      <Column field="address.city"></Column>
      <Column field="phone" header="PHONE"></Column>
      <Column field="website" header="WEBSITE"></Column>
      <Column field="company.name" header="COMPANY"></Column>
      <Column field="company.catchPhrase"></Column>
      <Column field="company.bs"></Column>
      <Column field="button" header="PRZEJDŻ DO">
        <template #body>
          <Button type="button" icon="pi pi-arrow-right"></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

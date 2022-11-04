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

      <!-- TODO: merge cells (address, company) without moving data to the right -->

      <!-- <ColumnGroup type="header">
        <Row>
          <Column header="NAME" :sortable="true" />
          <Column header="USERNAME" :sortable="true" />
          <Column header="ADDRESS" :colspan="3" />
          <Column header="PHONE" />
        </Row>
      </ColumnGroup>

      <Column field="name"></Column>
      <Column field="username"></Column>
      <Column field="address.street"> </Column>
      <Column field="address.suite"></Column>
      <Column field="address.city"></Column>
      <Column field="phone"></Column> -->
    </DataTable>
  </div>
</template>

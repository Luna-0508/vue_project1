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
  methods: {
    goToShow(index) {
      //to co zostało wywołane będzie tędy przychodziło
      //metodę przygotowałaś dobrą - jednak struktura jest źle stworzona.
      //przy methods nie musisz (choć możesz) dawać return, ale dajesz to jako inline
      console.log(index);
      this.$router.push({
        name: "show",
        params: { id: index }, // dobrze dałaś name, ale params musisz wskazać jaki obiekt przenosisz. w tym wypadku id.
      });
      /// teraz pytanie - skąd wziąć to id?!
    },
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
      <Column header="#" headerStyle="width:3em">
        <template #body="slotProps">
          <Button
            type="button"
            icon="pi pi-arrow-right"
            @click="goToShow(slotProps.index)"
          ></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

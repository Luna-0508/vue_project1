<template>
  <div id="page">
    <!-- HEADER -->
    <div id="header" class="sticky bg-indigo-400 bg-contain w-full right-0">
      <div id="mainTitle" class="text-5xl text-white font-semibold">
        <h1>VUE APP</h1>
      </div>
      <div id="menubar">
        <Menubar :model="items">
          <template #start
            ><InputText placeholder="Search" type="text" />
          </template>
          <template #end> </template>
        </Menubar>
      </div>
    </div>

    <!-- MAIN -->
    <div id="main">
      <slot> </slot>
    </div>
    <!-- FOOTER -->
    <div id="footer" class="bg-indigo-400 h-4rem">
      <div class="flex align-items-center justify-content-center">
        <p>&copy; Vue.js APP 2022</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsers } from "../stores/users.js";
export default {
  data() {
    return {
      items: [
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    };
  },
  // mounted() {
  //   console.log(this.getUser());
  // },
  methods: {
    getUser() {
      return this.state.user;
    },
  },
};
</script>

<style></style>

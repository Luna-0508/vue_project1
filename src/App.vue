<script>
import { def } from "@vue/shared";
import { RouterLink, RouterView } from "vue-router";
import Layout from "./components/LayoutAdminPanel.vue";
import { useHead } from "@vueuse/head";
import GoBack from "./components/admin-panel/GoBack.vue";

export default {
  //   setup() {
  //     useHead({
  //       title: `Admin Page - ${}`,
  //     });
  //   },

  components: {
    Layout,
    GoBack,
  },
};
</script>

<template>
  <head>
    <title></title>
  </head>

  <Layout></Layout>
</template>

<style></style>

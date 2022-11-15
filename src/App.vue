<script>
import { def } from "@vue/shared";
import { RouterLink, RouterView } from "vue-router";
import Layout from "./components/LayoutAdminPanel.vue";
import { useHead } from "@vueuse/head";

export default {
  //   setup() {
  //     useHead({
  //       title: `Admin Page - ${}`,
  //     });
  //   },

  components: {
    Layout,
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

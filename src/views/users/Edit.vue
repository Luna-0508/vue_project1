<script>
export default {
  computed: {
    id() {
      return this.$route.params.id || "Brak danych";
      // this.$route.params.id || "Brak id",
    },
  },
};
</script>

<template>
  <h1>ID: {{ id }}</h1>
</template>

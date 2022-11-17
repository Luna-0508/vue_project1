<template>
  <span class="go-back absolute">
    <Button
      @click="goBack"
      icon="pi pi-heart"
      class="p-button-rounded p-button-help"
    />
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

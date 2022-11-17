<template>
  <div class="go-back absolute z-999">
    <Button
      @click="goBack"
      icon="pi pi-heart"
      class="p-button-rounded p-button-help"
    />
  </div>
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

<script>
import Form from "./Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<template>
  <section>
    <h1 :isEdit="true" v-if="isEdit">JESTEŚ W TRYBIE EDYCYJNYM</h1>
    <Form></Form>
  </section>
</template>

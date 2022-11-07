<script>
import Form from "./Form.vue";

export default {
  methods: {
    message() {
      alert("Poszło");
    },
  },

  components: {
    Form,
  },
};
</script>

<template>
  <Form :isEdit="false" @message="test"></Form>
</template>

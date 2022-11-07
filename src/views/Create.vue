<script>
import Form from "./Form.vue";

export default {
  props: {
    isEdit: {
      required: true,
    },
  },

  methods: {
    test() {
      alert("Poszło");
    },
  },

  components: {
    Form,
  },
};
</script>

<template>
  <Form :isEdit="false" @test="test"></Form>
</template>

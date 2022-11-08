<script>
import Form from "../form/Form.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      v$: useVuelidate(),
      value: {
        name: "",
        surname: "",
        email: "",
        street: "",
        zipcode: "",
        city: "",
        terms: true,
      },
    };
  },
  validations() {
    return {
      name: { required },
      surname: { required },
      email: { required },
      street: { required },
      zipcode: { required },
      city: { required },
      terms: { required },
    };
  },

  props: {
    isEdit: {
      required: true,
    },
  },

  methods: {
    handleEdit() {
      this.$emit("test");
    },
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form submit success!");
      } else {
        alert("Form failed");
      }
    },
  },
};
</script>

<template>
  <h1 v-if="isEdit">JESTEŚ W TRYBIE EDYCYJNYM</h1>
  <h1>NEW CLIENT</h1>
  <form isEdit="{true}">
    <div class="card">
      <div class="p-fluid grid">
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="name" type="text" v-model="value.name" />
            <label for="name">Name</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="surname" type="text" v-model="value.surname" />
            <label for="surname">Surname</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="email" type="email" v-model="value.email" />
            <label for="email">Email</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="street" type="text" v-model="value.street" />
            <label for="street">Street</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="zipCode" type="number" v-model="value.zipcode" />
            <label for="zipCode">Zip-code</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="city" type="text" v-model="value.city" />
            <label for="city">City</label>
          </span>
        </div>
      </div>
      <div id="term">
        <InputSwitch v-model="value.terms" />
        <h2>Agree to Terms and Conditions</h2>
      </div>
    </div>
    <Button label="Submit" @click="handleEdit, submit" />
  </form>
</template>

<style lang="scss">
.card {
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 10px;

  span {
    padding: 10px;
  }

  #term h2 {
    display: inline;
    padding-left: 5px;
  }
}
</style>

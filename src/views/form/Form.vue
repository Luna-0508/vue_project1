<script>
import Form from "../form/Form.vue";

export default {
  methods: {
    handleEdit() {
      this.$emit("test");
    },
  },
};
</script>

<template>
  <h1>NEW CLIENT</h1>
  <form isEdit="{true}">
    <div class="card">
      <div class="p-fluid grid">
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="name" type="text" v-model="value" />
            <label for="name">Name</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="surname" type="text" v-model="value" />
            <label for="surname">Surname</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="email" type="email" v-model="value" />
            <label for="email">Email</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="street" type="text" v-model="value" />
            <label for="street">Street</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="zipCode" type="number" v-model="value" />
            <label for="zipCode">Zip-code</label>
          </span>
        </div>
        <div class="field col-12 md:col-4">
          <span class="p-float-label">
            <InputText id="city" type="text" v-model="value" />
            <label for="city">City</label>
          </span>
        </div>
      </div>
      <div id="term">
        <InputSwitch v-model="value" />
        <h2>Agree to Terms and Conditions</h2>
      </div>
    </div>
    <Button label="Submit" @click="handleEdit" />
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

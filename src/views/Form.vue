<script>
import Form from "../components/FORM/Form.vue";
export default {};
</script>

<template>
  <h1>NEW CLIENT</h1>
  <form style="">
    <span class="p-float-label">
      <InputText id="name" type="text" v-model="value" />
      <label for="name">Name</label>
    </span>
    <span class="p-float-label">
      <InputText id="surname" type="text" v-model="value" />
      <label for="surname">Surname</label>
    </span>
    <span class="p-float-label">
      <InputText id="email" type="email" v-model="value" />
      <label for="email">Email</label>
    </span>
    <div id="term">
      <InputSwitch v-model="terms" />
      <h2>Agree to Terms and Conditions</h2>
    </div>
  </form>
</template>

<style lang="scss">
form {
  border: 1px solid black;
  padding: 10px;

  span {
    padding: 10px;
  }

  #term h2 {
    display: inline;
  }
}
</style>

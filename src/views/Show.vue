<script>
export default {
  // czyli inaczej OBLICZONE lub przetworzone. ta sekcja służy do przetwarzania jakiś wartości co chcesz wyświetlić
  computed: {
    id() {
      return this.$route.params.id || "Brak numeru id";
    },
  },
};
</script>

<template>
  <h1>TUTAJ WYŚWIETLĄ SIĘ WYBRANE DANE dla id: {{ id }}</h1>
  <!-- <p>{{ goToShow().userId }}</p> -->
</template>

<style>
h1,
p {
  text-align: center;
}
</style>

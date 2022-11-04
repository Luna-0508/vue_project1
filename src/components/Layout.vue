<template>
  <div>
    <!-- BACKGROUND -->
    <div class="card">
      <div class="surface-500 bg-cover">
        <!-- HEADER -->
        <div class="sticky bg-indigo-400 bg-contain w-full h-7rem right-0">
          <div class="text-5xl text-white font-semibold">
            <h1>VUE APP</h1>
          </div>
        </div>

        <!-- MAIN -->
        <div>
          <slot> </slot>
        </div>
        <!-- FOOTER -->
        <div class="bg-indigo-400 h-4rem">
          <div class="flex align-items-center justify-content-center">
            <p>&copy; Vue.js APP 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

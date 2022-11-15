<template>
  <div class="bg-blue-700 flex flex-column min-h-screen w-full p-0 relative">
    <!-- HEADER -->
    <div id="header" class="card flex justify-content-between max-h-9rem p-4">
      <div class="flex align-items-center justify-content-left">
        <img
          id="logo"
          alt="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
          class="shadow-5 w-2"
        />
      </div>

      <div
        class="card flex align-items-center justify-content-center p-right-5"
      >
        <router-link to="/login" class="no-underline shadow-5">
          <Button label="LOG IN"
        /></router-link>
      </div>
    </div>

    <!-- MENU -->
    <div id="menu" class="card p-3">
      <TabMenu :model="items" class="shadow-5 border-round-sm" />
    </div>

    <!-- CONTENT -->
    <div
      class="card p-4 flex flex-wrap align-items-center justify-content-center pb-8"
    >
      <RouterView v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </RouterView>

      <!-- FOOTER -->
      <div
        d="footer"
        class="card flex align-items-end justify-content-center border-top-1 border-200 absolute bottom-0 w-full"
      >
        <p class="text-center">FOOTER ADMIN-PANEL 2022</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 3,
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/home",
          meta: { transition: "slide-right" },
        },
        {
          label: "Calendar",
          icon: "pi pi-fw pi-calendar",
          to: "/calendar",
        },
        {
          label: "Buy now",
          icon: "pi pi-cart-plus",
          to: "/shop",
        },
        {
          label: "Documentation",
          icon: "pi pi-fw pi-file",
          to: "",
        },
        {
          label: "Settings",
          icon: "pi pi-fw pi-cog",
          to: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
::v-deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

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
      <div>
        <Menubar :model="items" class="shadow-5 border-round-sm">
          <template #start>
            <img
              alt="logo"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
              height="40"
              class="mr-2"
            />
          </template>
        </Menubar>
      </div>
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
      active: 6,
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/home",
          meta: { transition: "slide-right" },
        },

        {
          label: "Shop",
          icon: "pi pi-cart-plus",
          to: "/shop",
        },
        {
          label: "Calendar",
          icon: "pi pi-fw pi-calendar",
          to: "/calendar",
        },
        {
          label: "Files",
          icon: "pi pi-fw pi-file",
          to: "/files",
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-user-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-user-minus",
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      label: "Print",
                      icon: "pi pi-fw pi-print",
                    },
                  ],
                },
                {
                  icon: "pi pi-fw pi-bars",
                  label: "List",
                },
              ],
            },
          ],
        },
        {
          label: "Settings",
          icon: "pi pi-fw pi-cog",
          to: "/settings",
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

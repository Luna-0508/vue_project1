<template>
  <div id="body">
    <!-- HEADER -->
    <div id="header">
      <img
        id="logo"
        alt="logo"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
      />
      <div>PANEL UŻYTKOWNIKA</div>
    </div>

    <!-- MENU -->
    <div id="menu">
      <div class="card">
        <TabMenu :model="items" />
        <!-- <RouterView /> -->
      </div>
    </div>

    <!-- FOOTER -->
    <div id="footer">
      <p>ADMIN-PANEL 2022</p>
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
          to: "/",
        },
        {
          label: "Calendar",
          icon: "pi pi-fw pi-calendar",
          to: "/calendar",
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          to: "/edit",
        },
        {
          label: "Documentation",
          icon: "pi pi-fw pi-file",
          to: "/documentation",
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

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
</style>

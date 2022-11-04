<template>
  <div>
    <!-- BACKGROUND -->
    <div class="card">
      <div class="surface-500 bg-cover">
        <!-- HEADER -->
        <div class="sticky bg-indigo-400 bg-contain w-full right-0">
          <div class="text-5xl text-white font-semibold">
            <h1>VUE APP</h1>
          </div>
          <div
            class="z-2 relative flex align-items-center justify-content-center"
          >
            <Menubar :model="items">
              <template #start
                ><InputText placeholder="Search" type="text" />
              </template>
              <template #end> </template>
            </Menubar>
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
export default {
  data() {
    return {
      items: [
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
    };
  },
};
//         {
//           label: "File",
//           icon: "pi pi-fw pi-file",
//           items: [
//             {
//               label: "New",
//               icon: "pi pi-fw pi-plus",
//               items: [
//                 {
//                   label: "Bookmark",
//                   icon: "pi pi-fw pi-bookmark",
//                 },
//                 {
//                   label: "Video",
//                   icon: "pi pi-fw pi-video",
//                 },
//               ],
//             },
//             {
//               label: "Delete",
//               icon: "pi pi-fw pi-trash",
//             },
//             {
//               separator: true,
//             },
//             {
//               label: "Export",
//               icon: "pi pi-fw pi-external-link",
//             },
//           ],
//         },
//         {
//           label: "Edit",
//           icon: "pi pi-fw pi-pencil",
//           items: [
//             {
//               label: "Left",
//               icon: "pi pi-fw pi-align-left",
//             },
//             {
//               label: "Right",
//               icon: "pi pi-fw pi-align-right",
//             },
//             {
//               label: "Center",
//               icon: "pi pi-fw pi-align-center",
//             },
//             {
//               label: "Justify",
//               icon: "pi pi-fw pi-align-justify",
//             },
//           ],
//         },
//         {
//           label: "Users",
//           icon: "pi pi-fw pi-user",
//           items: [
//             {
//               label: "New",
//               icon: "pi pi-fw pi-user-plus",
//             },
//             {
//               label: "Delete",
//               icon: "pi pi-fw pi-user-minus",
//             },
//             {
//               label: "Search",
//               icon: "pi pi-fw pi-users",
//               items: [
//                 {
//                   label: "Filter",
//                   icon: "pi pi-fw pi-filter",
//                   items: [
//                     {
//                       label: "Print",
//                       icon: "pi pi-fw pi-print",
//                     },
//                   ],
//                 },
//                 {
//                   icon: "pi pi-fw pi-bars",
//                   label: "List",
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           label: "Events",
//           icon: "pi pi-fw pi-calendar",
//           items: [
//             {
//               label: "Edit",
//               icon: "pi pi-fw pi-pencil",
//               items: [
//                 {
//                   label: "Save",
//                   icon: "pi pi-fw pi-calendar-plus",
//                 },
//                 {
//                   label: "Delete",
//                   icon: "pi pi-fw pi-calendar-minus",
//                 },
//               ],
//             },
//             {
//               label: "Archieve",
//               icon: "pi pi-fw pi-calendar-times",
//               items: [
//                 {
//                   label: "Remove",
//                   icon: "pi pi-fw pi-calendar-minus",
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           label: "Quit",
//           icon: "pi pi-fw pi-power-off",
//         },
//       ],
//     };
//   },
</script>

<style></style>

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog/sfc";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import "primevue/resources/themes/lara-light-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "./assets/_app.scss";
import "/node_modules/primeflex/primeflex.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

app.use(PrimeVue);
app.component("Dialog", Dialog);
app.component("DataTable", DataTable);
app.component("Column", Column);

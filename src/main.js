import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog/sfc";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import "primevue/resources/themes/lara-light-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import Menubar from "primevue/menubar";
import Checkbox from "primevue/checkbox";
import InputSwitch from "primevue/inputswitch";
import "./assets/_app.scss";
import "/node_modules/primeflex/primeflex.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue);
app.component("Dialog", Dialog);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("Checkbox", Checkbox);
app.component("InputSwitch", InputSwitch);

app.mount("#app");

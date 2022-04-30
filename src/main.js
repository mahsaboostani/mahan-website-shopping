import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import fullpage from "fullpage.js/dist/fullpage.extensions";
import "fullpage.js/dist/fullpage.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App).use(store).use(router).use(BootstrapVue3);
app.use(VueToast, { position: "top", duration: 5000, queue: true });
app.provide("fullpage", fullpage);
app.mount("#app");

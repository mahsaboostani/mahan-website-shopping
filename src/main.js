import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import fullpage from "fullpage.js/dist/fullpage.extensions";
import "fullpage.js/dist/fullpage.css";

const app = createApp(App).use(store).use(router);
app.provide("fullpage", fullpage);
app.mount("#app");

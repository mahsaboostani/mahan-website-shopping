import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import vueScrollTo from "vue-scroll-to";

createApp(App).use(vueScrollTo).use(store).use(router).mount("#app");

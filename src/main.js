/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/alert";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
createApp(App).use(store).use(router).mount("#app");
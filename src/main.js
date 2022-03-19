import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import "https://unpkg.com/ionicons@5.0.0/dist/ionicons.js";

createApp(App).use(store).use(router).mount("#app");

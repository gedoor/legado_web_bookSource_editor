import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/main.css";
import "element-plus/theme-chalk/dark/css-vars.css";

createApp(App).use(store).use(router).mount("#app");

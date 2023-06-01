import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

import "./assets/main.css";

const app = createApp(App);

// modo devtools QUITAR LUEGO
app.config.devtools = true;

app.use(router);

app.use(store).mount("#app");

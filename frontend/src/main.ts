import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { getAllFlights } from "./store/actions";

createApp(App).use(store).use(router).mount("#app");

getAllFlights(store);

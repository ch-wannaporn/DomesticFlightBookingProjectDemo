import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);

app.use(
  createAuth0({
    domain: process.env.VUE_APP_AUTH0_DOMAIN as string,
    clientId: process.env.VUE_APP_AUTH0_CLIENTID as string,
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
    cacheLocation: "localstorage",
  })
);

app.use(store);
app.use(router);
app.mount("#app");

import { createApp } from "vue";
// import vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

// Vue.config.productionTip = false

createApp(App).use(router).use(store).mount("#app");
const base = axios.create({
    baseURL: "http://localhost:8080"
  });

  // var Vue = require('vue');
  // Vue.prototype.$http = base;
  // Vue.config.productionTip = false;
  // new Vue({
  //   router,
  //   render: h => h(App)
  // }).$mount("#app");
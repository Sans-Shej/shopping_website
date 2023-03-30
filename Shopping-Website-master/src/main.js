import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(router).use(store).mount("#app");
// const base = axios.create({
//     baseURL: "http://localhost:8080"
//   });
  
//   Vue.prototype.$http = base;
//   Vue.config.productionTip = false;
//   new Vue({
//     router,
//     render: h => h(App)
//   }).$mount("#app");
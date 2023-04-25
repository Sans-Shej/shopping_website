import { createApp } from "vue";
// import vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import './registerServiceWorker'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue.config.productionTip = false

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(router).use(store).use(vuetify).mount("#app");

// setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
// load the token from local storage
const token = localStorage.getItem("token");
// is there any default auth headers
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

createApp(App).use(router).use(store).use(vuetify).mount("#app");

// createApp(App).use(router).use(store).mount("#app");
// const base = axios.create({
//     baseURL: "http://localhost:8080"
//   });


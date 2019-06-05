import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import { rootUrl } from "./firebase/config";

Vue.config.productionTip = false;

Vue.use(VueResource);

// setup api root url
Vue.http.options.root = rootUrl;

// setup global interceptors
Vue.http.interceptors.push((request, next) => {
  console.log("request", request);
  next(response => {
    console.log("response", response);
  });
});

new Vue({
  render: h => h(App)
}).$mount("#app");

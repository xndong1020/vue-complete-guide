import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

new Vue({
  render: h => h(App)
}).$mount("#app");

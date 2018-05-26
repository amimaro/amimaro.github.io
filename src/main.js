import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

Vue.config.productionTip = false;

Vue.component("icon", Icon);

require("./main.scss");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

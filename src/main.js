import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import Ohyeah from "vue-ohyeah-scroll";

Vue.config.productionTip = false;

// Vue.use(Ohyeah);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

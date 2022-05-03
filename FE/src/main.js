import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import draggable from "vuedraggable";
import Datepicker from "vuejs-datepicker";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './routes/router';
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(draggable)

Vue.use(Datepicker)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

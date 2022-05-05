import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import draggable from "vuedraggable";
import Datepicker from "vuejs-datepicker";
import vSelect from "vue-select";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';
import router from './routes/router';
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(draggable)

Vue.use(Datepicker)

Vue.use(vSelect)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/base.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  el : '#app',
  router,
  store,
  render: h => h(App)
})


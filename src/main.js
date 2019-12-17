import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import App from './app.vue';
import store from './store';
import router from './router';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import ServiceCache from './services/ServiceCache';

Vue.use(VueRouter)
Vue.config.productionTip = false;
 new Vue({
  render: h => h(App),
  VueRouter
}).$mount('#app')
ServiceCache.initialize();


import Vue from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import ServiceCache from './services/ServiceCache';
import router from './router';
export const routes = router.getRouter();

Vue.use(routes);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  routes
}).$mount('#app')
ServiceCache.initialize();


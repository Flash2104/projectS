import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import User from './components/armory/User.vue';
import People from './components/People.vue';
import Command from './components/Command.vue';
import Calendar from './components/Calendar.vue';
import UrlStock from './components/leftNavigation/UrlStock';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: UrlStock.getLeftNavigationUrl('Armory'), component: User },
      { path: UrlStock.getLeftNavigationUrl('People'), component: People },
      { path: UrlStock.getLeftNavigationUrl('Command'), component: Command },
      { path: UrlStock.getLeftNavigationUrl('Calendar'), component: Calendar },
      { path: '/login', component: Login },
    ]
});

export default {
    getRouter() {
        return router;
    }
}
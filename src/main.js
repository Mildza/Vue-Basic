import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import { routes } from './routes';
import directives from './shared/Directive';
import filters from './shared/filters';
import { store } from './store/store';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.use(VueResource);
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/';
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  next();
});

Vue.use(Vuelidate);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});

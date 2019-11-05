/* eslint-disable linebreak-style */
import Directive from './components/directive/Directive.vue';
import Form from './components/form/Form.vue';
import Router from './components/router/Router.vue';
import Filter from './components/filter/Filter.vue';
import Holder from './components/vuex/Holder.vue';
import Parent from './components/Communication/Parent.vue';

const Service = resolve => {
  require.ensure(['./components/http/service.vue'], () => {
    resolve(require('./components/http/service.vue'));
  });
};

export const routes = [
  { path: '/', component: Form },
  { path: '/directive', component: Directive },
  { path: '/form', component: Form, name: 'form' },
  { path: '/filter', component: Filter },
  { path: '/router', component: Router, name: 'router', children: [{ path: ':id', component: Router }] },
  { path: '/vuex', component: Holder },
  { path: '/communication', component: Parent, name: 'communication' },
  { path: '/http', component: Service },
  { path: '*', redirect: '/' },
];

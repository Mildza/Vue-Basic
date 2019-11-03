/* eslint-disable linebreak-style */
import Directive from './components/directive/Directive.vue';
import Form from './components/form/Form.vue';
import Home from './shared/Home.vue';
import Router from './components/router/Router.vue';
import Filter from './components/filter/Filter.vue';
import Holder from './components/vuex/Holder.vue';
import Parent from './components/Communication/Parent.vue';
import ChildOne from './components/Communication/ChildOne.vue';
import ChildTwo from './components/Communication/ChildTwo.vue';
import Service from './components/http/service.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/directive', component: Directive },
  { path: '/form', component: Form, name: 'form' },
  { path: '/filter', component: Filter },
  { path: '/router/:id', component: Router, name: 'router' },
  { path: '/vuex', component: Holder },
  { path: '/communication', component: Parent },
  { path: '/http', component: Service },
  { path: '*', redirect: '/' },
];

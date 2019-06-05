import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mjollnir from './views/Mjollnir.vue';
import PatjMngr from './views/PatjMngr.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/mjollnirsws',
      name: 'mjollnirsws',
      component: Mjollnir,
    },
    {
      path: '/patjmngr',
      name: 'patjmngr',
      component: PatjMngr,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

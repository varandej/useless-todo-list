import Vue from 'vue';
import VueRouter from 'vue-router';
import TheMostUselessPage from './pages/the-most-useless-page';
import TheMostUsefullPage from './pages/the-most-usefull-page';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/most-useless-page', component: TheMostUselessPage },
    { path: '/most-usefull-page', component: TheMostUsefullPage },
    { path: '*', redirect: '/most-useless-page' },
  ],
});

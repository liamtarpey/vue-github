import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import RoutesData from '@/routes/router.constants';

Vue.use(VueRouter);
const routes: Array<RouteConfig> = RoutesData;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

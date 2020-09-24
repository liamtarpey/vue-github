/** Routes imports */
import Home from '@/routes/home/Home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search/:type/:query',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ './search/Search.vue'),
  },
];

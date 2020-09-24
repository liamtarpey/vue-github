import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/router';
import '@/assets/styles/main.scss';

/** TODO: What is this? */
Vue.config.productionTip = false;

/** Init app */
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

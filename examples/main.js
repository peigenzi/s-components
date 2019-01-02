import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import sui from '../src/index';

Vue.use(VueRouter);
Vue.use(sui);

Vue.config.debug = true;

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      component: resolve => require(['./routers/1hello.vue'], resolve)
    }
  ]
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

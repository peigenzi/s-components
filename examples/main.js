import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import sui, { version } from '../dist/sui';
// import sui, { version } from '../src/index';
import '../dist/styles/sui.css';
import 'vue-router';
import './components/index';

Vue.use(VueRouter);
Vue.use(sui);

Vue.config.debug = true;

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/button',
      meta: {
        title: 'Button'
      },
      component: () => import('./views/button.vue')
    },
    {
      path: '/toast',
      meta: {
        title: 'Toast'
      },
      component: () => import('./views/toast.vue')
    },
    {
      path: '*',
      redirect: '/button'
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

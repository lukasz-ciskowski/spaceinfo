import APODPageVue from '@/pages/APODPage/APODPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { APOD_URL } from './url';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: () => ({ path: APOD_URL }) },
    {
      path: APOD_URL,
      name: 'apod',
      component: APODPageVue,
    },
  ],
});

export default router;

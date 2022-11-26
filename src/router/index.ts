import APODPageVue from '@/pages/APODPage/APODPage.vue';
import SearchPageVue from '@/pages/SearchPage/SearchPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { APOD_URL, SEARCH_URL } from './url';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: () => ({ path: APOD_URL }) },
    {
      path: APOD_URL,
      name: 'apod',
      component: APODPageVue,
    },
    {
      path: SEARCH_URL,
      name: 'search',
      component: SearchPageVue,
    },
  ],
});

export default router;

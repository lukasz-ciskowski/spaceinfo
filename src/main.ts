import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from 'vue-query';
import MasonryWall from '@yeger/vue-masonry-wall'

import 'bootstrap';
import './scss/main.scss';
import './config/axiosConfig';

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(MasonryWall)

app.mount('#app');

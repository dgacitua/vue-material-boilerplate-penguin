import Home from '../templates/Home.vue';
import Services from '../templates/Services.vue';
import About from '../templates/About.vue';
import NotFound from '../templates/NotFound.vue';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/services', name: 'services', component: Services },
  { path: '/about', name: 'about', component: About },
  { path: '*', name: 'not-found', component: NotFound }
];
import Vue from 'vue';
import VueRouter from 'vue-router';
import enterRace from './../views/enterRace'
import results from './../views/results'

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Enter the race',
    components: { default: enterRace }
  },
  {
    path: '/results',
    name: 'Results',
    components: { default: results }
  },

  {
    path: '/*',
    component: 404
    },
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

export default router;

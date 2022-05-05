import Vue from 'vue';
import VueRouter from 'vue-router';
import enterRace from './../views/enterRace'
import races from './../views/races'
import betting from './../views/betting'

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Enter the race',
    components: { default: enterRace }
  },
  {
    path: '/races',
    name: 'Races',
    components: { default: races }
  },
  {
    path: '/betting',
    name: 'Betting',
    components: { default: betting }
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

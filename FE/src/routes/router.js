import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasks from './../views/getTasks'

Vue.use(VueRouter);

export const routes = [
 //* {
 //*   path: '/',
 //*   name: 'Your name',
 //*   components: { default: Name }
 //* },
  {
    path: '/',
    name: 'Your tasks',
    components: { default: Tasks }
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

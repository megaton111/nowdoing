
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/test',
    name : 'test', 
    component: () => import('../pages/test.vue'),
  },
];

// const routes = [ ...baseRoutes ];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export {router}


// export default routes;

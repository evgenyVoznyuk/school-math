import {createRouter, createWebHashHistory} from 'vue-router';
import MainPage from './../views/MainPage.vue';
import TaskPage from './../components/TaskPage.vue';

const routes = [
    {
      path: '/',
      redirect: () => ({ name: 'math'}),
    },
    {
      path: '/math',
      name: 'math',
      component: MainPage,
    },
    {
      path: '/math/:name',
      name: 'task',
      component: TaskPage,
    },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export { routes };

export default router

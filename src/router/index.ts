import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './../views/MainPage.vue';
import TaskPage from './../components/TaskPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('../views/MainPage.vue'),
    },
  ],
})

export default router

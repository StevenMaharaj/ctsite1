import { createRouter, createWebHistory } from 'vue-router'
import CoderTraderView from '../views/CoderTraderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'coder-trader',
      component: CoderTraderView
    },
  ]
})

export default router
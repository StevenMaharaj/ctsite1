import { createRouter, createWebHistory } from 'vue-router'
import CoderTraderView from '../views/CoderTraderView.vue'
import PhoneAddictionView from '../views/PhoneAddictionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'coder-trader',
      component: CoderTraderView
    },
    {
      path: '/phone',
      name: 'phone-addiction',
      component: PhoneAddictionView
    },
  ]
})

export default router
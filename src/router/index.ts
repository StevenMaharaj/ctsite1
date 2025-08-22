import { createRouter, createWebHistory } from 'vue-router'
import CoderTraderView from '../views/CoderTraderView.vue'
import CoderTraderLiteView from '../views/CoderTraderLiteView.vue'
import GridWebinarView from '../views/GridWebinarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'coder-trader',
      component: CoderTraderView
    },
    {
      path: '/lite',
      name: 'coder-trader-lite',
      component: CoderTraderLiteView
    },
    {
      path: '/grid',
      name: 'grid-webinar',
      component: GridWebinarView
    }
  ]
})

export default router
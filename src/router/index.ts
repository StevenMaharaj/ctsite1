import { createRouter, createWebHistory } from 'vue-router'
import CoderTraderView from '../views/CoderTraderView.vue'
import CoderTraderLiteView from '../views/CoderTraderLiteView.vue'
import GridWebinarView from '../views/GridWebinarView.vue'
import GridVipView from '../views/GridVipView.vue'

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
    },
    {
      path: '/grid/vip',
      name: 'grid-vip',
      component: GridVipView,
      props: () => ({
        webinarDate: '2025-09-29T10:00:00+10:00',
        webinarDateFormatted: 'September 29, 2025',
        webinarTimeZone: 'Australian Eastern Standard Time'
      })
    }
  ]
})

export default router
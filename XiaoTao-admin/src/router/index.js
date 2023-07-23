import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Layout/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/Home/index.vue')
        },
        {
          path: 'goods/all',
          component: () => import('../views/Goods/index.vue')
        },
        {
          path: 'goods/add',
          component: () => import('../views/Goods/components/GoodsAdd.vue')
        },
        {
          path: 'order/all',
          component: () => import('../views/Order/index.vue')
        },
        {
          path: 'user',
          component: () => import('../views/User/index.vue')
        },
        {
          path: 'join',
          component: () => import('../views/Join/index.vue')
        }
      ]
    }
  ]
})

export default router

import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/main/Main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router

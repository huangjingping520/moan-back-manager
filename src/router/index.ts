import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import localCache from '../composables/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
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

router.beforeEach(to => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token)
      return '/login'
  }
})

export default router

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
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/Main.vue')
  }, {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/404.vue')
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

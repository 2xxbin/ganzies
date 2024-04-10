import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/eula',
    name: 'Eula',
    component: () => import('@/pages/Eula.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('@/pages/Download/Download.vue')
  },
  {
    path: '/download/:id',
    name: 'downloadDetail',
    component: () => import('@/pages/Download/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

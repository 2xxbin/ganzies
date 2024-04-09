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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

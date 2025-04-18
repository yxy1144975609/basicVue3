import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/scss',
      name: 'scss',
      component: () => import('../views/Scss.vue'),
    },
    {
      path: '/typeScript',
      name: 'typeScript',
      component: () => import('../views/TypeScript/TypeScript1.vue'),
    },
    {
      path: '/setupDemo1',
      name: 'setupDemo1',
      component: () => import('../views/SetupDemo/SetupDemo1.vue'),
    },
    {
      path: '/setupDemo2',
      name: 'setupDemo2',
      component: () => import('../views/SetupDemo/SetupDemo2.vue'),
    },
  ],
})

export default router

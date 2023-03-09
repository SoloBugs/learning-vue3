import { createRouter, createWebHashHistory } from 'vue-router'

import TodoVuex from '../views/TodoVuex.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import(/* webpackChunkName: "slots" */ '../views/CustomSlots.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoVuex
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

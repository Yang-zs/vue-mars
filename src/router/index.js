import { createRouter, createWebHashHistory } from 'vue-router'
// system
import User from './modules/system/user'
import Role from './modules/system/role'
import Menu from './modules/system/menu'
import Dept from './modules/system/dept'
// audit
import Approve from './modules/audit/approve'
import Leave from './modules/audit/leave'
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import('../layout'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '欢迎体验Vue3全栈课程'
        },
        component: () => import('../views/welcome')
      },
      {
        path: '/system/menu',
        component: () => import('@/views/system/menu'),
        meta: {
          title: '菜单管理'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../views/404')
  }
]
// 私有路由表
export const privateRoutes = [User, Role, Menu, Dept, Approve, Leave]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router

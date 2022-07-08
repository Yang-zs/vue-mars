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
          title: '首页',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/home')
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
  routes: [...publicRoutes]
})

export default router

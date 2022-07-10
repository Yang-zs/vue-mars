import { createRouter, createWebHashHistory } from 'vue-router'
import { getItem } from '@/utils/storage'
import { ElMessage } from 'element-plus'
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

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === '/login') return next()
  const tokenStr = getItem('token')
  if (!tokenStr) {
    next('/login')
    ElMessage('请重新登录')
    return
  }

  next()
})

export default router

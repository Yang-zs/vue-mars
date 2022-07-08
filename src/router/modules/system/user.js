import Layout from '@/layout'
export default {
  path: '/system',
  component: Layout,
  name: 'user',
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/syste/user',
      component: () => import('@/views/system/user'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}

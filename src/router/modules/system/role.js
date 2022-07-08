import Layout from '@/layout'
export default {
  path: '/system',
  component: Layout,
  name: 'role',
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/syste/role',
      component: () => import('@/views/system/role'),
      meta: {
        title: '角色管理'
      }
    }
  ]
}

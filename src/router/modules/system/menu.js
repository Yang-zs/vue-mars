import Layout from '@/layout'
export default {
  path: '/system',
  component: Layout,
  name: 'menu',
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/syste/menu',
      component: () => import('@/views/system/menu'),
      meta: {
        title: '菜单管理'
      }
    }
  ]
}

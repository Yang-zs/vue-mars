import Layout from '@/layout'
export default {
  path: '/system',
  component: Layout,
  name: 'dept',
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/syste/dept',
      component: () => import('@/views/system/dept'),
      meta: {
        title: '部门'
      }
    }
  ]
}

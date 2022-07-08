import Layout from '@/layout'
export default {
  path: '/audit',
  component: Layout,
  name: 'approve',
  meta: {
    title: '审批管理'
  },
  children: [
    {
      path: '/audit/approve',
      component: () => import('@/views/audit/approve'),
      meta: {
        title: '待审批'
      }
    }
  ]
}

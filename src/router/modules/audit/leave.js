import Layout from '@/layout'
export default {
  path: '/audit',
  component: Layout,
  name: 'leave',
  meta: {
    title: '审批管理'
  },
  children: [
    {
      path: '/audit/leave',
      component: () => import('@/views/audit/leave'),
      meta: {
        title: '休假申请'
      }
    }
  ]
}

/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const itemsRouter = {
  path: '/items',
  component: Layout,
  redirect: 'noRedirect',
  name: 'items',
  meta: {
    title: '内容管理',
    icon: 'list'
  },
  children: [
    {
      path: 'create',
      component: () => import('@/views/items/ItemEdit'),
      name: 'CreateItems',
      meta: { title: '新建物品', noCache: true }
    },
    {
      path: 'edit/:id',
      component: () => import('@/views/items/ItemEdit'),
      props: true
    },
    {
      path: 'list',
      component: () => import('@/views/items/ItemList'),
      name: 'ListItems',
      meta: { title: '物品列表', noCache: true }
    },
  ]
}

export default itemsRouter

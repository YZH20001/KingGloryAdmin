/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const heroesRouter = {
  path: '/heroes',
  component: Layout,
  redirect: 'noRedirect',
  name: 'heroes',
  meta: {
    title: '英雄管理',
    icon: 'list'
  },
  children: [
    {
      path: 'create',
      component: () => import('@/views/heroes/HeroEdit'),
      name: 'CreateItems',
      meta: { title: '新建英雄', noCache: true }
    },
    {
      path: 'edit/:id',
      component: () => import('@/views/heroes/HeroEdit'),
      props: true
    },
    {
      path: 'list',
      component: () => import('@/views/heroes/HeroList'),
      name: 'ListItems',
      meta: { title: '英雄列表', noCache: true }
    },
  ]
}

export default heroesRouter

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: 'blank-page',
    icon: 'smile',
    path: '/emptypagetwo',
    component: './EmptyPageTwo',
  },
  {
    path: '/product',
    name: '产品管理',
    routes: [
      { path: '/product', redirect: 'product/list' },
      {
        path: '/product/list',
        name: '产品列表',
      },
      {
        path: '/product/new',
        name: '新建产品',
      },
      {
        path: '/product/:id',
        hideInMenu: true,
        name: '产品详情',
      },
      {
        path: '/product/update/:id',
        hideInMenu: true,
        name: '修改产品',
      },
      {
        path: '/1/b',
        name: '修改产品2',
        parentKeys: ['/product'],
      },
    ],
  },
  {
    name: '空白页面',
    icon: 'smile',
    path: '/emptypage',
    component: './EmptyPageThree',
  }, // {
  //   name: 'blank-page',
  //   icon: 'smile',
  //   path: '/emptypage',
  //   component: './EmptyPage',
  // },
  {
    component: './404',
  },
];

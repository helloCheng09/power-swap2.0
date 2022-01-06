
import { createRouter, createWebHistory } from 'vue-router'
// import component from '*.vue'
// import Layout from '@/layout/index.vue';

interface RouteType {
  layout?:string;
  path: string;
  name: string;
  redirect: string;
  meta?: {
    layout?: string;
  };
  children?: RouteType[] | undefined;
}

// @ts-ignore
let routes: RouteType[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/table-main'
  },
  {
    path: '/data-screen',
    name: 'DataScreen',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "DataScreen" */ '/@/pages/data-screen.vue')
  },
  {
    path: '/panel',
    name: 'Panel',
    layout: 'dashboard',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "dashboard" */ '/@/pages/panel.vue')
  },
  {
    path: '/table-main',
    name: 'TableMain',
    layout: 'dashboard',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "TableMain" */ '/@/pages/table-main.vue')
  }, {
    path: '/table-dic',
    name: 'TableDic',
    layout: 'dashboard',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "TableDic" */ '/@/pages/table-dic.vue')
  }, {
    path: '/upload',
    name: 'Upload',
    layout: 'dashboard',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "upload" */ '/@/pages/upload.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    layout: 'dashboard',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "chart" */ '/@/pages/chart.vue')
  }
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route:RouteType, parentLayout = 'default') {
  route.meta = route.meta || {}
  route.meta.layout = route.layout || parentLayout
  if (route.children) {
    route.children = route.children.map((childRoute) => addLayoutToRoute(childRoute, route.layout))
  }
  return route
}

routes = routes.map((route) => addLayoutToRoute(route))

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

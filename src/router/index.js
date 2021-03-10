import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // {
  //   path: '/auth-redirect',
  //   component: () => import('@/views/login/auth-redirect'),
  //   hidden: true
  // },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'el-icon-odometer', affix: true }
      }
    ]
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */

let list = [
  {
    path: '/agency',
    component: Layout,
    redirect: '/agency',
    meta: {
      title: 'agency',
      icon: 'el-icon-odometer'
    },
    children: [
      {
        path: 'agencyList',
        component: () => import('@/views/agency/agencyList'),
        name: 'agencyList',
        meta: { title: 'agencyList', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'addAgency',
        component: () => import('@/views/agency/addAgency'),
        name: 'addAgency',
        meta: { title: 'addAgency', icon: 'el-icon-odometer', affix: true }
      },
    ]
  },
  {
    path: '/member',
    component: Layout,
    redirect: '/member',
    meta: {
      title: 'member',
      icon: 'el-icon-odometer'
    },
    children: [
      {
        path: 'addMember',
        component: () => import('@/views/member/add-member'),
        name: 'addMember',
        meta: { title: 'addMember', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'memberList',
        component: () => import('@/views/member/member-list'),
        name: 'memberList',
        meta: { title: 'memberList', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'memberCard',
        component: () => import('@/views/member/memberCard'),
        name: 'memberCard',
        meta: { title: 'memberCard', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'memberUpgrade',
        component: () => import('@/views/member/memberUpgrade'),
        name: 'memberUpgrade',
        meta: { title: 'memberUpgrade', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'addIntegral',
        component: () => import('@/views/member/addIntegral'),
        name: 'addIntegral',
        meta: { title: 'addIntegral', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'delIntegral',
        component: () => import('@/views/member/delIntegral'),
        name: 'delIntegral',
        meta: { title: 'delIntegral', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'memberRecharge',
        component: () => import('@/views/member/memberRecharge'),
        name: 'memberRecharge',
        meta: { title: 'memberRecharge', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'memberDeductions',
        component: () => import('@/views/member/memberDeductions'),
        name: 'memberDeductions',
        meta: { title: 'memberDeductions', icon: 'el-icon-odometer', affix: true }
      },
    ]
  },
  {
    path: '/registration',
    component: Layout,
    redirect: '/registration',
    meta: {
      title: 'registration',
      icon: 'el-icon-odometer'
    },
    children: [
      {
        path: 'oneBilling',
        component: () => import('@/views/registration/oneBilling'),
        name: 'oneBilling',
        meta: { title: 'oneBilling', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'moreBilling',
        component: () => import('@/views/registration/moreBilling'),
        name: 'moreBilling',
        meta: { title: 'moreBilling', icon: 'el-icon-odometer', affix: true }
      },
      {
        path: 'reservation',
        component: () => import('@/views/registration/reservation'),
        name: 'reservation',
        meta: { title: 'reservation', icon: 'el-icon-odometer', affix: true }
      },
    ]
  },
]
// let data = localStorage.getItem('userInfo')
// let data1 = []
// if(data){
//   let userInfo = JSON.parse(data)
//   let jurisdiction = JSON.parse(userInfo.data[0].power).member
//   for(let i=0 ; i<jurisdiction.length ; i++){
//     for(let j=0 ; j<jurisdiction[i].children.length ; j++){
//       if(jurisdiction[i].children[j].isShow){
        
//       }else{
//         jurisdiction[i].children[j] = ''
//       }
//     }
//   }
//   for(let i=0 ; i<jurisdiction.length ; i++){
//     for(let j=0 ; j<jurisdiction[i].children.length ; j++){
//       if(jurisdiction[i].children[j] == ''){
//         jurisdiction[i].children.splice(j,1);  
//         j= j-1;
//       }
//     }
//   }
//   jurisdiction.forEach(function(value){
//     if(value.children.length > '0'){
//       data1.push(value)
//     }
//   })
//   for(let w=0 ; w<data1.length ; w++){
//     data1[w].component = Layout
//     for(let z=0 ; z<data1[w].children.length ; z++){
//       for(let y=0 ; y<list.length ; y++){
//         for(let a=0 ; a<list[y].children.length ; a++){
//           if(data1[w].children[z].path == list[y].children[a].path){
//             data1[w].children[z].component = list[y].children[a].component
//           }
//         }
//       }
//     }
//   }
//   data1.push({ path: '*', redirect: '/404', hidden: true })
// }else{
  let data1 = list
// }


export const asyncRoutes = data1

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

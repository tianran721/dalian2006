import Vue from 'vue'
import VueRouter from 'vue-router'// 已经安装
import Film from '@/views/Film'
import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'
import Cinema from '@/views/Cinema'
// import Center from '@/views/Center'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
// import Login from '@/views/Login'
Vue.use(VueRouter) //注册模块,全局组件 router-view

//路由配置数组
const routes = [
  // 1. 一级路由
  {
    path: '/film',
    component: Film,
    //4. 嵌套路由
    children: [
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '/film',
        redirect: '/film/nowplaying' // 重定向
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    name: 'KerwinDetail', // 8-命名路由
    path: '/detail/:myid', //6-动态路由
    component: Detail
  },
  {
    path: '/cinema/search',
    component: Search
  },

  {
    path: '/center',
    component: () => import('@/views/Center') //懒加载
  },
  {
    path: '/login',
    component: () => import('@/views/Login') ////懒加载
  },
  {
    path: '*',
    redirect: '/film' //2. 重定向
  }
]
const router = new VueRouter({
  mode: 'hash', // hash ,history
  routes
})

//全局守卫/拦截
router.beforeEach((to, from, next) => {
  // console.log(to)

  var permission = ['/order', '/card', '/money', '/center']

  if (permission.includes(to.path)) {
    // 是否已经登录
    // console.log("检查")
    if (localStorage.getItem('token')) {
      next()
    } else {
      //重定向到 login
      next('/login')
    }
  } else {
    next()
  }
})
export default router

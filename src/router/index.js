import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/view/Homepage'
import Classification from '@/view/Classification'
import Message from '@/view/Message'
import Myself from '@/view/Myself'
import ShoppingCart from '@/view/ShoppingCart'
import Recommended from '@/view/homepage/Recommended'
import Goodies from '@/view/homepage/Goodies'
import Potential from '@/view/homepage/Potential'
import Detail from '@/view/Detail'
import Shafa from '@/view//Shafa'
//shafa
import ShafaDetail from '@/view/Classification/ShafaDetail'
//登录拦截
import Login from '@/view/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    component: Homepage,
    children: [
      // 二级路由
      {
        path: '/homepage/recommended', //推荐
        component: Recommended
      },
      {
        path: '/homepage/goodies', //好物
        component: Goodies
      },
      {
        path: '/homepage/potential', //品质
        component: Potential
      },
      {
        path: '/homepage', // 重定向
        redirect: '/homepage/recommended'
      }
    ]
  },
  {
    path: '/classification',
    component: Classification
  },
  {
    path: '/classification/shafa/',
    component: Shafa
  },
  {
    path: '/item/:myid', //沙发详情页
    component: ShafaDetail
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/search/view',
    component: () => import('@/view/Search')
  },
  {
    path: '/search/result',
    component: () => import('@/view/search/result')
  },
  {
    path: '/myself',
    component: Myself
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/item/:id',
    component: () => import('@/view/search/Item')
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart
  },
  {
    path: '/login',
    component: Login
  },

  {
    path: '*', // 重定向
    redirect: '/homepage'
  }
]

const router = new VueRouter({
  routes: routes
})

//全局守卫

router.beforeEach((to, from, next) => {
  // console.log(to)

  var permission = ['/shoppingcart', '/myself', '/message']

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

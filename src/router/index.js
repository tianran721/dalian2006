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
import Shafa from '@/view/Shafa'
import quanbu from '@/view/homepage/goodies/quanbu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    component: Homepage,
    children: [ // 二级路由
      {
        path: '/homepage/recommended', //推荐
        component: Recommended
      },
      {
        path: '/homepage/goodies', //好物
        component: Goodies
      },
      {
        path: '/homepage/goodies/quanbu', //好物
        component: quanbu
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
    path: '/classification/shafa',
    component: Shafa
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/myself',
    component: Myself
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart
  },
  {
    path: '*', // 重定向
    redirect: '/homepage'
  }
]

const router = new VueRouter({
  routes: routes

})

export default router

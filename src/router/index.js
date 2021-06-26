import { createRouter, createWebHashHistory } from 'vue-router'

// 主页
const Home  = () => import(/* webpackChunkName: "home" */ '@/pages/Home')
// 商品详情页
const ProductDetail = () => import(/* webpackChunkName: "product-detail" */ '@/pages/product-detail')

// 分类
const Classify = () => import(/* webpackChunkName: "classify" */ '@/pages/classify')

// 购物车
const Car = () => import(/* webpackChunkName: "classify" */ '@/pages/car')

// 我的
const Mine = () => import(/* webpackChunkName: "classify" */ '@/pages/mine')

// 注册
const Login = () => import(/* webpackChunkName: "classify" */ '@/pages/login/Login.vue')

// 视频
const video = () => import(/* webpackChunkName: "video" */ '@/pages/video/index.vue')

// 城市列表
const CityList = () => import(/* webpackChunkName: "cityList" */ '@/pages/cityList/index.vue')

const routes = [
    {
      path: '/',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home,
        },
      ],
    },
    {
      path: '/product-detail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/video/:id',
      component: video
    }, 
    {
      path: '/city-list',
      component: CityList
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem("user"))
  let isLogin = localStorage.getItem("isLogin")

  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    (isLogin && user)  ? next() : next('/login');
  }
  // next()
})

export default router
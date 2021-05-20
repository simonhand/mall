import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home')
const Cart = () => import('../views/cart/cart')
const Category = () => import('../views/category/category')
const Profile = () => import('../views/profile/profile')
const Detail = () => import('../views/detail/detail')


Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home',

  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title: '我的'
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      title: '详情'
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach( (to,form,next) =>{
    document.title = to.matched[0].meta.title;
    next();
  }
)

export default router

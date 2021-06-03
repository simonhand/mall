import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../p_views/home/home')
const Cart = () => import('../p_views/cart/cart')
const Category = () => import('../p_views/category/category')
const Profile = () => import('../p_views/profile/profile')
const Detail = () => import('../p_views\/detail/detail')


Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/p_home',

  },
  {
    path: '/p_home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/p_category',
    component: Category,
    meta:{
      title: '分类'
    }
  },
  {
    path: '/p_cart',
    component: Cart,
    meta:{
      title: '购物车'
    }
  },
  {
    path: '/p_profile',
    component: Profile,
    meta:{
      title: '我的'
    }
  },
  {
    path: '/p_detail/:iid',
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

// router.beforeEach( (to,form,next) =>{
//     document.title = to.matched[0].meta.title;
//     next();
//   }
// )

export default router

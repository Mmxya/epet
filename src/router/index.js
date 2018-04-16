import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Msite from '../pages/Msite/Msite.vue'
import ShopList from '../pages/ShopList/ShopList.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'*/
const Home=()=>import('../pages/Home/Home.vue')
const ShopList=()=>import('../pages/ShopList/ShopList.vue')
const Cart=()=>import('../pages/Cart/Cart.vue')
const Profile=()=>import('../pages/Profile/Profile.vue')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shopList',
      component: ShopList,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },

  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import LogIn from '../views/LogIn.vue'
import CheckOut from '../views/CheckOut.vue'
import JoinUs from '../views/SignUp.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: ProductView
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/joinus',
    name: 'joinus',
    component: JoinUs
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOut
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

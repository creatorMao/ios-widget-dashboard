import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/dashboard.vue'
import DashboardConfig from '@/views/dashboardConfig.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/config',
    component: DashboardConfig
  },
  {
    path: '/dashboard/:configId',
    component: Dashboard,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router

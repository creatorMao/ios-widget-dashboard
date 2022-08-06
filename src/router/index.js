import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@./views/dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  routes
})

export default router

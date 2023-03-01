import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import axios from 'axios'
import { Octokit } from '@octokit/core'
import * as echarts from 'echarts'
import './css/variable.less'
import './css/common.less'
import globalComponents from '@/components/index.js'
import store from '@/store/index.js'
import { request } from '@/utils/request.js'

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$Octokit = Octokit
Vue.prototype.$request = request
Vue.use(globalComponents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

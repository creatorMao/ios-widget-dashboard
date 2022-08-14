import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import axios from 'axios'
import { Octokit } from '@octokit/core'
import * as echarts from 'echarts'
import './css/variable.less'
Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$Octokit = Octokit

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

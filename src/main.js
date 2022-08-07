import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

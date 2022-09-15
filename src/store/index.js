import { config } from '@/views/dashboardConfig.js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  actions: {

  },
  mutations: {

  },
  state: {
    dashboardConfig: config
  },
  getters: {
  }
})

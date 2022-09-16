import { config } from '@/views/dashboardConfig.js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const dashboardConfig = {
  namespaced: true,
  actions: {

  },
  mutations: {

  },
  state: {
    config
  },
  getters: {
  }
}

export default new Vuex.Store({
  modules: {
    dashboardConfig
  }
})

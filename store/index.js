import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex) // vue的插件机制

const store = new Vuex.Store({
  state: {
    menuList: [],
  },
  getters,
  mutations: {},
  actions: {},
  modules: {
    app,
  },
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabbar: true
  },
  mutations: {
    tabbarHideMutation(state) {
      state.tabbar = false
    },
    tabbarShowMutation(state) {
      state.tabbar = true
    }
  }
})

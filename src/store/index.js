import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  actions: {
    increment: ({commit, state}) => commit('SET_COUNT', state.count + 1),
    decrement: ({commit, state}) => commit('SET_COUNT', state.count - 1),
  },
  mutations: {
    SET_COUNT: (state, count) => {
      state.count = count
    },
  },
})

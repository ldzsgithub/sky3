import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: ''
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token;
      state.user = payload.user;
    }
  },
  actions: {
    setToken(context, payload) {
      context.commit('setToken', payload);
    }
  },
  modules: {
  }
})

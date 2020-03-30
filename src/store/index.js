import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: '',
    org: []
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token;
      state.user = payload.user;
    },
    setOrg(state, payload) {
      state.org = payload.org;
    }
  },
  actions: {
    setToken(context, payload) {
      context.commit('setToken', payload);
    },
    setOrg(context, payload) {
      context.commit('setOrg', payload);
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: '',
    org: ''
  },
  mutations: {
    setToken(state, payload) {
      this.state.token = payload.token;
      this.state.user = payload.user;
    },
    setOrg(state, payload) {
      this.state.org = payload.org;
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
  },
  getters: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    permission : {

      token : '',
      refresh_token : '',
    },


  },
  mutations: {

    updateToken(state, payload) {
     state.permission.token = payload
    },
    refreshToken(state, payload) {
     state.permission.refresh_token = payload
   }

  },
  actions: {

    updateToken({commit}, payload) {
      commit('updateToken', payload);
    },
    refreshToken({commit}, payload) {
      commit('refreshToken', payload);
    }

    
  }
})

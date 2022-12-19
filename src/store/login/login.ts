import type { Module } from 'vuex'
import type { LoginState, RootState } from '../types'
import { accountLoginRequest } from '../../service/login/index'

export const loginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload)
      const { token } = loginResult.data
      commit('changeToken', token)
    }
  }
}


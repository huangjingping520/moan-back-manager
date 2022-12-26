import type { Module } from 'vuex'
import type { LoginState, RootState } from '../types'
import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from '../../service/login/index'
import localCache from '../../composables/cache'
import router from '../../router'
import { mapMenusToRoutes } from '../../composables/map-menus'

export const loginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      const routes = mapMenusToRoutes(userMenus)
      routes.forEach(route => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // login
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // get user info
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // get user menus
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // move to main page
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token)
        commit('changeToken', token)

      const userInfo = localCache.getCache('userInfo')
      if (userInfo)
        commit('changeUserInfo', userInfo)

      const userMenus = localCache.getCache('userMenus')
      if (userMenus)
        commit('changeUserMenus', userMenus)
    }
  }
}


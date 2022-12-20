import type { Store } from 'vuex'
import { createStore, useStore as useVuexStore } from 'vuex'

import type { RootState, StoreType } from './types'

import { loginModule } from './login/login'

const store = createStore<RootState>({
  state() {
    return {
      name: 'merlin'
    }
  },
  modules: {
    login: loginModule
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store

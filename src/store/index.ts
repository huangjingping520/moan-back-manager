import { createStore } from 'vuex'

import type { RootState } from './types'

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

export default store

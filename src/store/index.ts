import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'merlin'
    }
  }
})

export default store

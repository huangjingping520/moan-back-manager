import { createApp } from 'vue'
import App from './App.vue'

import maRequest from './service'

import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

maRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

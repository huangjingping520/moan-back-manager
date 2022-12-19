import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/index.less'

// import maRequest from './service'

import router from './router'
import store from './store'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue))
  app.component(key, component)

app.use(store).use(router).mount('#app')

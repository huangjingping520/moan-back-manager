import localCache from '../composables/cache'
import MARequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const maRequest = new MARequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: config => {
      const token = localCache.getCache('token')

      if (token) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch: error => {
      return error
    },
    responseInterceptor: res => {
      return res
    },
    responseInterceptorCatch: error => {
      return error
    }
  }
})

export default maRequest

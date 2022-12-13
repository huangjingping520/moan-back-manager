import MARequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const maRequest = new MARequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: config => {
      console.log('req success')
      return config
    },
    requestInterceptorCatch: error => {
      console.log('req error')

      return error
    },
    responseInterceptor: res => {
      console.log('res success')

      return res
    },
    responseInterceptorCatch: error => {
      console.log('res error')

      return error
    }
  }
})

export default maRequest

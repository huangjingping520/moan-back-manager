import type { AxiosInstance } from 'axios'
import axios from 'axios'

import type { MARequestConfig, MARequestInterceptors } from './types'

class MARequest {
  instance: AxiosInstance
  interceptors: MARequestInterceptors

  constructor(config: MARequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors!

    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      config => {
        console.log('所有实例请求拦截成功')
        return config
      },
      err => {
        console.log('所有实例请求拦截失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      res => {
        console.log('所有实例响应拦截成功')
        return res.data
      },
      err => {
        console.log('所有实例响应拦截失败')
        return err
      }
    )
  }

  request(config: MARequestConfig): void {
    if (config.interceptors?.requestInterceptor)
      config = config.interceptors.requestInterceptor(config)

    this.instance.request(config).then(res => {
      if (config.interceptors?.responseInterceptor)
        res = config.interceptors.responseInterceptor(res)

      console.log(res)
    })
  }
}

export default MARequest

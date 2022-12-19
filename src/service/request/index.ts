import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { ElLoading } from 'element-plus'

import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import type { MARequestConfig, MARequestInterceptors } from './types'

class MARequest {
  instance: AxiosInstance
  interceptors: MARequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: MARequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors!
    this.showLoading = config.showLoading ?? true

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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      err => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      res => {
        this.loading?.close()

        return res.data
      },
      err => {
        this.loading?.close()

        return err
      }
    )
  }

  request<T>(config: MARequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor)
        config = config.interceptors.requestInterceptor(config)

      if (config.showLoading === false)
        this.showLoading = config.showLoading

      this.instance.request<any, T>(config).then(res => {
        if (config.interceptors?.responseInterceptor)
          res = config.interceptors.responseInterceptor(res)

        this.showLoading = true

        resolve(res)
      }).catch(err => {
        this.showLoading = true
        reject(err)
        console.log(err)
      })
    })
  }

  get<T>(config: MARequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: MARequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: MARequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: MARequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default MARequest

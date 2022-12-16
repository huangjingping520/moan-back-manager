import type { AxiosRequestConfig } from 'axios'

export interface MARequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface MARequestConfig extends AxiosRequestConfig {
  interceptors?: MARequestInterceptors
  showLoading?: boolean
}

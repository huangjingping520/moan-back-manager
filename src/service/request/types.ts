import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MARequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface MARequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MARequestInterceptors<T>
  showLoading?: boolean
}

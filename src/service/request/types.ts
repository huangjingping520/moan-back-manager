import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MARequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface MARequestConfig extends AxiosRequestConfig {
  interceptors?: MARequestInterceptors
}

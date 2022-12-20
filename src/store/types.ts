export interface RootState {
  name: string
}

export interface LoginState {
  token: string
  userInfo: any
  userMenus: any
}

export interface RootWithModule {
  login: LoginState
}

export type StoreType = RootState & RootWithModule

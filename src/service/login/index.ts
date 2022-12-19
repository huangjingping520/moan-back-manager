import maRequest from '../index'
import type { Account, DataType, LoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export const accountLoginRequest = (account: Account) => {
  return maRequest.post<DataType<LoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export const requestUserInfoById = (id: number) => {
  return maRequest.get<DataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export const requestUserMenusByRoleId = (id: number) => {
  return maRequest.get<DataType>({
    url: `${LoginAPI.UserMenus + id}/menu`
  })
}

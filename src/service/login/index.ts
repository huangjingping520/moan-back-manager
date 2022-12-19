import maRequest from '../index'
import type { Account, DataType, LoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/login'
}

export const accountLoginRequest = (account: Account) => {
  return maRequest.post<DataType<LoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

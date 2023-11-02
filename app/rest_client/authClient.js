import Client from './baseClient'

const http = new Client()

export const login = async (payload) => {
  return http.post('auth/identity/login', payload)
}

export const register = async (payload) => {
  return http.post('auth/identity/regist', payload)
}

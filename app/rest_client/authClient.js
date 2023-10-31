import Client from './baseClient'

const http = new Client('http://localhost:1111')

export const login = async (payload) => {
  return http.post('auth/identity/login', payload)
}

export const register = async (payload) => {
  return http.post('auth/identity/register', payload)
}

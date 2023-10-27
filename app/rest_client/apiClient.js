import Client from './baseClient'

const http = new Client()

export const login = async (payload) => {
  return http.post('api/login', payload)
}

export const logout = async () => {
  return http.post('api/logout')
}

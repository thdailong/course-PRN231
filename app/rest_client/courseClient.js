import Client from './baseClient'

const http = new Client()

export const courseNotLearn = async () => {
  return http.get(`learn/courses/all`)
}

export const courseById = async (id) => {
  return http.get(`learn/courses/get?id=${id}`)
}

export const getCategory = async () => {
  return http.get('learn/categories/get')
}

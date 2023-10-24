import Client from './baseClient'

const http = new Client()

export const getAllCourses = async () => {
  return http.get('api/courses')
}

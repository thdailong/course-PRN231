import Client from './baseClient'

const http = new Client()

export const courseNotLearn = async () => {
  return http.get(`learn/courses/all`)
}

export const courseById = async (id) => {
  return http.get(`learn/courses/get??id=${id}`)
}

export const getCategory = async () => {
  return http.get('learn/categories/get')
}

export const getBought = async (idCourse) =>{
  return http.get(`pay/payments/check?course=${idCourse}`)
}

export const getCourseById = async (idCourse) =>{
  return http.get(`learn/courses/get?id=${idCourse}`)
}

export const getDocumentById = async (document, chapter) =>{
  return http.get(`learn/documents/get?chapter=${chapter}&id=${document}`)
}
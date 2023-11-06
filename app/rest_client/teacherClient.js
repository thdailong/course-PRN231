import Client from './baseClient'

const http = new Client()

/**
 * Sends a request to become a teacher.
 *
 * @param {object} payload - The data to be sent in the request.
 * @return {Promise} A promise that resolves to the response of the request.
 * @example
 * const payload = {
   "content": "I want to be a teacher."
 }
 */
export const requestToBecomeTeacher = async (payload) => {
  return http.post('form/teacher-forms/post', payload)
}

/**
 * Creates a course.
 *
 * @param {object} payload - The data to be sent in the request.
 * @return {Promise} A promise that resolves to the response of the request.
 * @example
 * const payload = {
   "name": "Course 03",
    "description": "very long description.",
    "level": 1,
    "price": 1000,
    "categoryId": "085917d0-d677-421b-402c-08dbdde61efa"
 }
 */
export const createCourse = async (payload) => {
  return http.post('learn/courses/post', payload)
}

/**
 * Get my created course.
 *
 * @return {Promise} A promise that resolves to the response of the request.
 **/
export const getMyCreatedCourse = async () => {
  return http.get('learn/courses/my-published')
}

/**
 * Get my created chapter.
 * @param {object} payload - The data to be sent in the request.
 * @return {Promise} A promise that resolves to the response of the request.
 * @example
 * const payload = {
    "name": "Chap 3",
    "courseId": "da0ace9f-7eb0-4246-7c4b-08dbdde671ff"
 }
 **/
export const createChapter = async (payload) => {
  return http.post('learn/chapters/post', payload)
}

/**
 * Create document in chapter.
 * @param {object} payload - The data to be sent in the request.
 * @return {Promise} A promise that resolves to the response of the request.
 * @example
 * const payload = {
    "Name": "Chap 3",
    "ChapterId": "da0ace9f-7eb0-4246-7c4b-08dbdde671ff",
    "Url": "https://www.google.com",
 }
 **/
export const createDocument = async (payload) => {
  return http.postForm('learn/documents/post', payload)
}

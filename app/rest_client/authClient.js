import Client from './baseClient'

const http = new Client()

export const login = async (payload) => {
  return http.post('auth/identity/login', payload)
}

export const register = async (payload) => {
  return http.post('auth/identity/regist', payload)
}

export const getListCategory = async () => {
  return http.get('learn/categories/get')
}

/**
 * Get all course available.
 * 
 * @return {Promise} A promise that resolves with the response from the server.
 * 
 * @example
 * response = [
    {
        "id": "085917d0-d677-421b-402c-08dbdde61efa",
        "name": "Course 01",
        "description": "very long description.",
        "level": 1,
        "price": 1000,
        "categoryId": "085917d0-d677-421b-402c-08dbdde61efa",
        "isStudying": false //true for user is studying or false for not
        "status": 1 //1 for active and 2 for waiting to approve(hidden)
        "imageUrl": "urlImage"
    }
 ]
 */
export const getListCourse = async () => {
  return http.get('learn/courses/get')
}

/**
 * Please filter from the list of course by id.
 */
export const getCourseDetail = async (id) => {
  // return http.get(`learn/courses/get/${id}`)
}

/**
 * Creates a new category.
 *
 * @param {Object} payload - The payload containing the category information. {name: string}
 * @return {Promise} A promise that resolves with the response from the server.
 */
export const createCategory = async (payload) => {
  return http.post('learn/categories/post', payload)
}

/**
 * Retrieves the current balance.
 *
 * @return {Promise} A promise that resolves with the response from the server.
 *
 * @example
 * response = 12000
 */
export const getCurrentBalance = async () => {
  return http.get('auth/budgets/current')
}

/**
 * Retrieves the balance of a user.
 *
 * @param {string} userId - The ID of the user whose balance is being retrieved.
 * @return {Promise} A promise that resolves with the response from the server.
 */
export const getBalanceOfaUser = async (userId) => {
  return http.get(`auth/budgets/get?owner=${userId}`)
}

/**
 * Retrieves the history of payment of current user.
 *
 * @return {Promise} A promise that resolves with the response from the server.
 *
 * @example // 1 for success and 2 for fail
 * response = [
 *   {
 *     "id": "3c9f7e3e-9aa3-44f0-1ef2-08dbddeacf6d",
        "studentId": "79cb0f3c-38a0-49d2-03a5-08dbdc4d7ad1",
        "courseId": "da0ace9f-7eb0-4246-7c4b-08dbdde671ff",
        "status": 1,
        "price": 1000.00,
        "createdDate": "2023-11-05T17:34:37.4649739"
 *   }
 * ]
 */
export const getHistoryPayment = async () => {
  return http.get('pay/payments/get')
}

export const verifyUser = async () => {
  return http.get('auth/identity/profile')
}

export const getAllChapterByCourseID = async (courseId) => {
  return http.get(`learn/chapters/by-course?id=${courseId}`)
}

/**
 * Retrieves all documents from the server with chapter id.
 * 
 * @param {string} chapterId - The ID of the chapter whose documents are being retrieved.
 * @return {Promise} A promise that resolves with the response from the server.
 *
 * @example
 * response = [
    {
        "id": "af4b7010-ab32-43c5-7f53-08dbdde7f205",
        "name": "Doc 1",
        "order": 1,
        "chapter": {
            "id": "099e9872-56ac-4a9a-858f-08dbdde77d88",
            "name": "Chap 1",
            "courseId": "da0ace9f-7eb0-4246-7c4b-08dbdde671ff"
        },
        "resource": "https://www.google.com/",
        "hasDone": false
    },
    {
        "id": "ff8787c2-a25e-42dd-a995-08dbde073ce4",
        "name": "Doc 2",
        "order": 2,
        "chapter": {
            "id": "099e9872-56ac-4a9a-858f-08dbdde77d88",
            "name": "Chap 1",
            "courseId": "da0ace9f-7eb0-4246-7c4b-08dbdde671ff"
        },
        "resource": "http://localhost:11111/social/media/get?id=d023543c-81fc-4078-ec41-08dbde073d17",
        "hasDone": false
    }
]

  */
export const getAllDocsByChapterID = async (chapterId) => {
  return http.get(`learn/documents/get?chapter=${chapterId}`)
}

/**
 * Buy a course with course id.
 * @param {string} courseId - The ID of the course to be purchased.
 * @return {Promise} A promise that resolves with the response from the server.
 */
export const buyCourse = async (courseId) => {
  return http.post(`learn/courses/buy?id=${courseId}`)
}

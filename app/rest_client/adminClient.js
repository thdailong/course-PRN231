import Client from './baseClient'

const http = new Client()

export const getAllCourses = async () => {
  return http.get('learn/courses/get')
}

/**
 * Retrieves all accounts from the server.
 *
 * @return {Promise} A promise that resolves to the response from the server.
 */
export const getAllAccount = async () => {
  return http.get('auth/accounts/get')
}

/**
 * Updates the balance of a user.
 *
 * @param {Object} payload - The payload containing the updated balance.
 * @return {Promise} - A promise that resolves with the updated balance.
 * @example
 * const payload = {
   "userId": "79cb0f3c-38a0-49d2-03a5-08dbdc4d7ad1",
    "balance": 10000
 }
 */
export const updateBalanceUser = async (payload) => {
  return http.post('auth/budgets/post', payload)
}

/**
 * Approve a user to become a teacher for a given user ID with the provided payload.
 *
 * @param {string} userId - The ID of the user whose teacher form is being updated.
 * @param {Object} payload - The data to be updated in the teacher form.
 * @returns {Promise} A promise that resolves with the updated teacher form data.
 * 
 * @example 
 * const payload = {
   "status": true,
  "note": "Ok man, now u r a teacher!"
 }
 */
export const approveTeacher = async (userId, payload) => {
  return http.put(`form/teacher-forms/put?id=${userId}`, payload)
}

/**
 * Retrieves all teacher requests forms from the server.
 *
 * @return {Promise} A promise that resolves with the retrieved teacher requests forms.
 */
export const getAllTeacherRequestsForm = async () => {
  return http.get('form/teacher-forms/get')
}

/**
 * Publish course with course ID to be public.
 *
 * @param {string} courseId - The ID of the course to be updated and published.
 * @param {Object} payload - The payload containing the data to update the course with.
 * @return {Promise} A promise that resolves with the response from the HTTP request.
 * @example
 * const payload = {
   "status": true,
  "note": "Ok let it publish"
 }
 */
export const approveCourseToBePublic = async (courseId, payload) => {
  return http.put(`form/publishes/put?id=${courseId}`, payload)
}

export const getAllPublishesForm = async () => {
  return http.get('form/publishes/get')
}

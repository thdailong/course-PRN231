export const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isPasswordValid = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  return regex.test(password)
}

export function objectToFormData(obj) {
  const formData = new FormData()

  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value)
  })

  return formData
}

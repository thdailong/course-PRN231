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

export function formatDatetime(isoDate) {
  const date = new Date(isoDate)
  console.log(isoDate)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDay()
  console.log(day, month, year)
  return `${year}/${month}/${day}`
}

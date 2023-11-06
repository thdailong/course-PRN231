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
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${day}/${month}/${year}`
}

export function formatDateToISO(dateString) {
  const parts = dateString.split('/')
  const year = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10) - 1
  const day = parseInt(parts[2], 10)

  const isoDate = new Date(year, month, day).toISOString()

  return isoDate
}

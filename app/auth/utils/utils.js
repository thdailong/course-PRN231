export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export const isUppercase = (str) => {
  return /[A-Z]/.test(str);
}

export const checkSpecialSymbol = (str) => {
  return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
}

export const checkSpace = (str) => {
  return /[ \s*]/.test(str);
}

export const isUserValid = (userName) => {
  if (isUppercase(userName) || checkSpecialSymbol(userName) || userName.length === 0) {
    return true
  }
  
  if (!isUppercase(userName) && !checkSpecialSymbol(userName) || !userName.length === 0) {
    return false
  }
}

export const isPasswordValid = (password) => {
  return password.length === 0 || checkSpace(password)
}
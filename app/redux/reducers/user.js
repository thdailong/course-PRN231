import { ACCESS_TOKEN } from '@/app/constant/constant'
import { eraseCookie, readCookie } from '@/app/utils/cookies'
import { createSlice } from '@reduxjs/toolkit'

const initialState = () => {
  let access_token = readCookie('access_token')
  return {
    isLogin: access_token ? true : false,
  }
}

const userReducers = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true
    },
    logout: (state, action) => {
      eraseCookie(ACCESS_TOKEN)
      state.isLogin = false
    },
  },
})

export const { login, logout } = userReducers.actions
export default userReducers.reducer

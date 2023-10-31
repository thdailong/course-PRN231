import { ACCESS_TOKEN, ROLE } from '@/app/constant/constant'
import { createCookie, eraseCookie, readCookie } from '@/app/utils/cookies'
import { createSlice } from '@reduxjs/toolkit'

const initialState = () => {
  let access_token = readCookie(ACCESS_TOKEN)
  return {
    isLogin: access_token ? true : false,
    error: null,
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const days = new Date(action.payload.expiredIn).getDay()
      createCookie(ACCESS_TOKEN, action.payload.accessToken, days)
      createCookie(ROLE, action.payload.role)
      state.isLogin = true
      state.error = null
    },
    loginFailure: (state, action) => {
      state.error = action.payload
      state.isLogin = false
    },
    logout: (state) => {
      eraseCookie(ACCESS_TOKEN)
      eraseCookie(ROLE)
      state.isLogin = false
      state.error = null
    },
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer

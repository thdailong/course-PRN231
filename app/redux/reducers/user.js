import { ACCESS_TOKEN, USER_ID, USER_ROLE } from '@/app/constant/constant'
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
      createCookie(USER_ROLE, action.payload.role, days)
      createCookie(USER_ID, action.payload.id, days)
      state.isLogin = true
      state.error = null
    },
    loginFailure: (state, action) => {
      state.error = action.payload
      state.isLogin = false
    },
    logout: (state) => {
      eraseCookie(ACCESS_TOKEN)
      eraseCookie(USER_ROLE)
      eraseCookie(USER_ID)
      state.isLogin = false
      state.error = null
    },
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer

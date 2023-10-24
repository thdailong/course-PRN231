import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './reducers/user'

const reducers = { user }
const rootReducer = combineReducers(reducers)

const resetableRootReducer = (state, action) => {
  return rootReducer(state, action)
}

export default configureStore({
  reducer: resetableRootReducer,
})

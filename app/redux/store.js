import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './reducers/user'
import snackbar from './reducers/snackbar'

const reducers = { user, snackbar }
const rootReducer = combineReducers(reducers)

const resetableRootReducer = (state, action) => {
  return rootReducer(state, action)
}

export default configureStore({
  reducer: resetableRootReducer,
})

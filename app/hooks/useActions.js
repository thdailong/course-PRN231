import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export default function useActions(actionCreator) {
  const dispatch = useDispatch()
  return bindActionCreators(actionCreator, dispatch)
}

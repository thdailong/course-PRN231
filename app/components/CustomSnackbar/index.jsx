import React from 'react'
import { Alert, Snackbar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { hide } from '@/app/redux/reducers/snackbar'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'

function CustomSnackbar() {
  const dispatch = useDispatch()
  const snackbarManage = useShallowEqualSelector((state) => state.snackbar)
  const { open, severity, message, autoHideDuration } = snackbarManage
  const handleClose = () => {
    dispatch(hide())
  }
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar

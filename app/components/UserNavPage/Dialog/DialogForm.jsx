import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import * as snackbar from '@/app/redux/reducers/snackbar'
import * as teacher from '@/app/rest_client/teacherClient'
import useActions from '@/app/hooks/useActions'

const DialogForm = ({ text }) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const { show } = useActions(snackbar)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await teacher.requestToBecomeTeacher({ content: value })
      show({
        message: 'Submit form success',
        severity: snackbar.SNACKBAR_SEVERITY.SUCCESS,
      })
    } catch (error) {
      console.log(error)
      // show({
      //   message: error.response.data.errors[0],
      //   severity: snackbar.SNACKBAR_SEVERITY.ERROR,
      // })
    }

    setOpen(false)
    setValue('')
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <React.Fragment>
      <Typography onClick={handleClickOpen}>{text}</Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Why you want become to teacher?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tell me your reasons about you want to become teacher role.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Reason"
            value={value}
            fullWidth
            onChange={handleChange}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default DialogForm

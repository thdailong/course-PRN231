'use client'
import React from 'react'
import {
  Paper,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import LockIcon from '@mui/icons-material/Lock'
import { isPasswordValid } from '@/app/utils/user.util'

const ChangePassword = ({ password, ...props }) => {
  const [values, setValues] = React.useState({
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  })

  const [formValues, setFormValues] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleTogglePassword = (field) => {
    setValues({
      ...values,
      [field]: !values[field],
    })
  }

  const handleInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    })
  }

  const onSubmit = () => {
    if (
      isPasswordValid(formValues.newPassword) &&
      formValues.newPassword === formValues.confirmPassword
    ) {
      console.log('Submitted data:', formValues)
    } else {
      console.log('Invalid password or passwords do not match')
    }
  }

  return (
    <Paper elevation={3} {...props}>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: 'bold', mb: 2 }}
      >
        Change your password
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          disabled
          value={password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">🔒</InputAdornment>
            ),
          }}
        />
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Note: This change will change your password immediately. Be very
          careful and remember your new password information.
        </Typography>
        <TextField
          label="Current Password"
          type={values.showCurrentPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={formValues.currentPassword}
          onChange={(e) => handleInputChange('currentPassword', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleTogglePassword('showCurrentPassword')}
                  edge="end"
                >
                  {values.showCurrentPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="New Password"
          type={values.showNewPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={formValues.newPassword}
          onChange={(e) => handleInputChange('newPassword', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleTogglePassword('showNewPassword')}
                  edge="end"
                >
                  {values.showNewPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          type={values.showConfirmPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={formValues.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleTogglePassword('showConfirmPassword')}
                  edge="end"
                >
                  {values.showConfirmPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          startIcon={<LockIcon />}
        >
          Save
        </Button>
      </form>
    </Paper>
  )
}

export default ChangePassword

import ChangePassword from '@/app/components/UserPage/ChangePassword'
import { Box } from '@mui/material'
import React from 'react'

const PasswordPage = () => {
  return (
    <Box>
      <ChangePassword
        password="123456789"
        sx={{ padding: 2, width: 700, height: 500 }}
      />
    </Box>
  )
}

export default PasswordPage

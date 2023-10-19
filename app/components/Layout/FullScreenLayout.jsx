import { Box } from '@mui/material'
import React from 'react'

const FullScreenLayout = ({ children, sx }) => {
  return (
    <Box minHeight={'100vh'} minWidth={'100vw'} sx={sx}>
      {children}
    </Box>
  )
}

export default FullScreenLayout

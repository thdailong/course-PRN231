'use client'
import UserNavPage from '@/app/components/UserNavPage/page'
import { Box } from '@mui/material'

export default function Layout({ children }) {
  return (
    <Box>
      <UserNavPage />
      {children}
    </Box>
  )
}

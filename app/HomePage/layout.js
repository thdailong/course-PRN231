'use client'
import UserNavBar from '@/app/components/UserPage/NavBar'
import { Box } from '@mui/material'

export default function Layout({ children }) {
  return (
    <Box>
      <UserNavBar />
      {children}
    </Box>
  )
}

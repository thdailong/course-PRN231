'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@mui/material'
import HomeNavBar from '@/app/components/HomePage/NavBar'

export default function Home() {
  return (
    <Box>
      <HomeNavBar />
    </Box>
  )
}
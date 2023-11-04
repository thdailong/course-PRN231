'use client'
import AboutUs from '@/app/HomePage/AboutUs/page'
import ProductNav from '@/app/HomePage/FamousProduct/pages/page'
import TitleHome from '@/app/HomePage/TitleHomePage/TitleHome'
import UserNavPage from '@/app/components/UserNavPage/page'
// import UserNavBar from '@/app/components/UserPage/NavBar'
// import UserNavPage from '../components/UserNavPage/page'
import { Box, Container, CssBaseline } from '@mui/material'

function page() {
  return (
    <>
      <UserNavPage />
      <Box sx={{ userSelect: 'none' }}>
        <TitleHome />
        <ProductNav />
        <AboutUs />
      </Box>
    </>
  )
}

export default page

'use client'
import { Box } from '@mui/material'
import AboutUs from '../HomePage/AboutUs/page'
import AllCourseUser from './AllProduct/pages/page'
import OwnProduct from './OwnProduct/pages/page'
import SliderHero from './SliderHero/page'
import FootView from './footViewAll/page'
import UserNavPage from '../components/UserNavPage/page'
import { useState } from 'react'

export default function page() {

const [searchText, setSearchText] = useState('')

const holdSearch = (vl) =>{
  setSearchText(vl)
}
  return (
    <Box sx={{ height: 'auto', width: '100%',position:"relative" }}>
       <UserNavPage holdSearch={holdSearch}/>
      <SliderHero />
      <OwnProduct searchText={searchText}/>
      <AboutUs />
      <AllCourseUser searchText={searchText}/>
      <FootView />
    </Box>
  )
}

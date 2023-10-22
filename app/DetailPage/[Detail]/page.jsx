"use client"
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { GetDataById } from './util';
import DetailHero from '../DetailHero/page';
import HomeNavBar from '@/app/components/HomePage/NavBar';
import DetailBody from '../DetailBody/page';
import Describe from '../Describe/page';
import CourseSubject from '../CourseSubject/Page';
import CardPrice from '../CardPrice/Page';

export default function page({ params }) {

  // const [dataState, Setdata] = useState()
  const[passParam, setParam] = useState(params.Detail)

  return (
    <Box
      sx={
        {
          position: "relative"
        }
      }
    >
      <HomeNavBar />
      <DetailHero />
      <DetailBody />
      <Describe />
      <CourseSubject />
      <CardPrice passParam={passParam}/>
    </Box>
  )
}

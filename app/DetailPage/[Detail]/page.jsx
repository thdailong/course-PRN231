"use client"
import { Box } from '@mui/material';
import { useState } from 'react';
import CardPrice from '../CardPrice/Page';
import CourseSubject from '../CourseSubject/Page';
import Describe from '../Describe/page';
import DetailBody from '../DetailBody/page';
import DetailHero from '../DetailHero/page';

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
      <DetailHero />
      <DetailBody />
      <Describe />
      <CourseSubject />
      <CardPrice passParam={passParam}/>
    </Box>
  )
}

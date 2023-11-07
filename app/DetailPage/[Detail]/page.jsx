"use client"
import { courseById } from '@/app/rest_client/courseClient';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import CardPrice from '../CardPrice/Page';
import CourseSubject from '../CourseSubject/Page';
import Describe from '../Describe/page';
import DetailBody from '../DetailBody/page';
import DetailHero from '../DetailHero/page';

export default function page({ params }) {

  const [IdCourseData, setDataIdCourse] = useState()

  const idParams = params.Detail

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await courseById(params.Detail)
      setDataIdCourse(response)
    }

    fetchMyAPI()
  }, [])


  return (
    <Box
      sx={
        {
          position: "relative"
        }
      }
    >
      <DetailHero IdCourseData={IdCourseData}/>
      <DetailBody />
      <Describe />
      <CourseSubject />
      <CardPrice IdCourseData={IdCourseData} idParams={idParams} />
    </Box>
  )
}

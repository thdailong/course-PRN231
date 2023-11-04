"use client"
import { Box } from '@mui/material';
import CardPrice from '../CardPrice/Page';
import CourseSubject from '../CourseSubject/Page';
import Describe from '../Describe/page';
import DetailBody from '../DetailBody/page';
import DetailHero from '../DetailHero/page';
import { GetDataById } from './util';

export default function page({ params }) {


  let data = GetDataById(params.Detail)

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
      <CardPrice data={data}/>
    </Box>
  )
}

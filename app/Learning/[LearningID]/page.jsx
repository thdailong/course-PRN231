"use client"
import { Stack } from '@mui/material'
import Chapter from '../Chapter/pages/page'
import ContentChapter from '../ContentChapter/page'

export default function page({ params }) {

  const paramsPage = params.LearningID

  return (
    <Stack
      direction="row"
      spacing={0}
      sx={
        {
          width: "100%",
          height: "100vh",
          overflow: "hidden"
        }
      }
    >
      <Chapter paramsPage={paramsPage} />
      <ContentChapter paramsPage={paramsPage}/>
    </Stack>
  )
}

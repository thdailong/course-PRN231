"use client"
import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { getDocumentByCourse } from '../[LearningID]/callingChapterAPI';

export default function ContentChapter({ paramsPage }) {


  const searchParams = useSearchParams()

  const documentID = searchParams.get('documentID')
  const chapterID = searchParams.get('ChapterId')

  // chekc if we have querystring
  const documentData = () => {
    if (documentID && chapterID) {
      return getDocumentByCourse(paramsPage, chapterID, documentID)
    }
    else return "khong co gi het"
  }

  return (
    <Box
      sx={
        {
          flex: "3",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          p: "80px 5px 0 10px",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "lightgrey",
            borderRadius: "4px",
          },
          display: "flex",
          flexDirection:"column"
        }
      }
    >
      <Box
        sx={
          {
            width: "100%",
            height: "600px"
          }
        }
      >
        <iframe style={{ height: "100%", width: "100%" }} src={documentData().VideoURL}></iframe>
      </Box>
      <Typography sx={{fontSize:"30px", fontWeight:"700", color:"#7f56d9", m:"20px 0 0 20px"}}>{documentData().Name}</Typography>
    </Box>
  )
}

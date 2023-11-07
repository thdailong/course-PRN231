"use client"
import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { getDocumentByCourse } from '../[LearningID]/callingChapterAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCourseById, getDocumentById } from '@/app/rest_client/courseClient';

export default function ContentChapter({ paramsPage }) {


  const searchParams = useSearchParams()
  const [contentDT, setContentDT] = useState()

  const documentID = searchParams.get('documentID')
  const chapterID = searchParams.get('chapterid')


  useEffect(() => {
    const getDataByDocument = async () => {
      if (documentID) {
        const rsp = await getDocumentById(documentID, chapterID)
        setContentDT(rsp.data)
      }
    }

    getDataByDocument()
  }, [documentID])


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
          flexDirection: "column"
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
        <iframe style={{ height: "100%", width: "100%" }} src={contentDT?.resourceUri}></iframe>
      </Box>
      <Typography sx={{ fontSize: "30px", fontWeight: "700", color: "#7f56d9", m: "20px 0 0 20px" }}>{contentDT?.name}</Typography>
    </Box>
  )
}

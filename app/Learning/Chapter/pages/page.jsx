"use client"
import { Box } from '@mui/material'
import React from 'react'
import ChapterList from '../ChapterList/page';
import { getCourseByID } from '../../[LearningID]/callingChapterAPI';
import { useEffect } from 'react';
import { getCourseById } from '@/app/rest_client/courseClient';
import { useState } from 'react';

export default function Chapter({ paramsPage }) {

  const chapterData = getCourseByID(paramsPage)
  const[dataChapter, setDataChapter] = useState([])

  useEffect(() => {
    const getChapter = async () =>{
      const resp = await getCourseById(paramsPage)
      setDataChapter(resp.data.chapters)
    }

    getChapter()
  }, [])
  

  return (
    <Box sx={{ flex: "1",height:"100vh", overflowY:"scroll", pt:"70px","&::-webkit-scrollbar":{width:"2px"}, "&::-webkit-scrollbar-thumb":{ backgroundColor: "lightgrey",  borderRadius: "4px"},borderRight:"1px solid #dedfe0"}}>
      <Box sx={{height:"50px", textAlign:"center", lineHeight:"50px", fontSize:"20px", fontWeight:"700"}}>course content</Box>
      <ChapterList chapterData={chapterData} dataChapter={dataChapter}/>
    </Box>
  )
}

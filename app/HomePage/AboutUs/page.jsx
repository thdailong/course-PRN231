"use client"
import { Box, Typography } from '@mui/material'
import aboutUsImage from '../images/Rectangle.svg'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <Box
      sx={
        {
          minHeight: '619px',
          width: '100%',
          position:'relative',
          display:'flex',
          alignItems:'center',
        }
      }
    >
      <Box sx={
        {
          position:'absolute',
          left:'72px',
          height:'100%',
          width:'620px'
        }
      }>
        <Image
        alt='aboutus'
        src={aboutUsImage}
        fill={true}
        />
      </Box>
      <Box
        sx={
          {
            maxHeight: '496px',
            width: '100%',
            backgroundColor: '#24024F',
            padding: '64px 222px 100px 0'
          }
        }
      >
        <Box
          sx={
            {
              height: '100%',
              display: 'flex',
              flexDirection:'column',
              justifyContent: 'flex-start',
              gap:'35px',
              marginLeft: '720px',
              minWidth:'634px',
            }
          }
        >
          <Typography variant='h1' sx={{ color: '#FFF', fontWeight: '700' }}>About Us</Typography>
          <Typography variant='body1' sx={{ color: '#FFF', fontSize: '14px', fontWeight: '400' }}>With the motto "From learner to learner", we comfortably understand the problems students are facing today. Because we are all learners, we want to bring value to learners as well as want the website to be effective and constantly innovate.</Typography>
          <Typography variant='body1' sx={{ color: '#FFF', fontSize: '14px', fontWeight: '400' }}>At EASY QUIZZY, students can consolidate and absorb knowledge more easily through a variety of learning methods and learning tools, increasing their ability to self-study and actively review in their own time. Improve your knowledge and connect with other students through forums and blogs.</Typography>
        </Box>
      </Box>
    </Box>
  )
}

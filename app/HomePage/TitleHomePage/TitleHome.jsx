"use client";
import React from 'react';
import { Box, Button, Card, CardMedia, Container, CssBaseline, Paper, Typography, styled } from '@mui/material';
import { shadows } from '@mui/system';
import Image from 'next/image';
import styles from './page.module.css'
import circleHero from '../images/herocircle.png'
import womenHero from '../images/women.png'
import asmtHero from '../images/heroAsm.png'
import circleOnline from '../images/circleOnline.png'
import lectureHero from '../images/lecturehero.svg'
import womenCircleHero from '../images/circleWomenHero.svg'

const TitleHome = (props) => {

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: 'none',
    lineHeight: 1.5,
    backgroundColor: '#F4EBFF',
    borderColor: 'none',
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    '&:hover': {
      backgroundColor: '#ffff',
      borderColor: '#6941C6',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#6941C6',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


  return (

    <Box sx={{ width: "100%", height: "808px", background: "#FBFAFF", display: "flex", userSelect: "none", }}>
      <CssBaseline />
      <Box sx={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", padding: '150px 0 0 75px' }}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px", padding: "0px 0px 0px 140px", position: "relative" }}>
          <Paper elevation={0} className={styles['hero-title']} sx={{ width: "100%", backgroundColor: "#FBFAFF", }}>
            <Typography className={styles['hero-title']} sx={{ fontSize: "40px", fontWeight: "600", }}>
              <span>Học</span> Chưa bao giờ <br /> <span >dễ đến vậy <br /></span> Hãy để Chúng tôi <span ><br /> Giúp bạn!</span>
            </Typography>
          </Paper>
          <Typography variant='body1'>Cung cấp cho bạn hệ thống tài liệu học tập trực tuyến mới nhất,<br /> củng cố kiến thức để phát triển.</Typography>
          <Image
            src={circleHero}
            alt="Your Image"
            height={340}
            width={340}
            style={{
              border: 'solid',
              position: 'absolute',
              top: "-46px",
              left: '0'
            }}
          />
        </Box>
        <Box sx={{ display: "flex", width: "100%", padding: "0 0 0 140px", justifyContent: "flex-start", gap: "20px", marginTop: "30px" }}>
          <Button variant="contained" disableElevation sx={{ backgroundColor: "#7F56D9", '&:hover': { backgroundColor: '#6941C6' } }}>
            Bắt đầu học
          </Button>
          <BootstrapButton variant="contained" disableElevation sx={{ color: "#6941C6", fontWeight: "600" }}>
            Tìm hiểu thêm
          </BootstrapButton>
        </Box>

      </Box>
      <Box sx={{ flex: "1", display: 'flex', padding: '16px 75px 0 50px', alignItems: 'center' }}>
        <Box sx={
          {
            border: 'solid #7F56D9 2px',
            height: '500px',
            width: '500px',
            borderRadius: '100%',
            position: 'relative',
          }
        }>
          <Image
            src={womenHero}
            alt='women image'
            style={{
              height: '100%',
              width: '100%',
              borderRadius: "100%",
              objectFit: 'contain',
              backgroundColor: '#7F56D9',
              position: "absolute",
              zIndex: '1',
              top: "20px",
              left: "18px"
            }}
          />
          <Box
            sx={
              {
                borderRadius: '18px',
                boxShadow: 3,
                height: '94px',
                width: '220px',
                backgroundColor: '#F5F5F4',
                border: 'solid 2px #7F56D9',
                position: 'absolute',
                zIndex: '1',
                top: '120px',
                left: '-45px',
                display: 'flex',
                gap: '10px'
              }
            }
          >
            <Image
              src={asmtHero}
              alt='asmhero'
            />
            <Box
              className={styles['hero-asm']}
              display='flex'
              sx={
                {
                  width: '80px',
                  height: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }
              }>
              <span>5K+</span>
              <span>Đề kiểm tra</span>
            </Box>
          </Box>
          <Box
            sx={
              {
                borderRadius: '18px',
                boxShadow: 3,
                height: '94px',
                width: '220px',
                backgroundColor: '#F5F5F4',
                border: 'solid 2px #7F56D9',
                position: 'absolute',
                zIndex: '1',
                bottom: '0',
                right: '-115px',
                display: 'flex',
                gap: '10px'
              }
            }
          >
            <Image
              src={lectureHero}
              alt='lecturehero'
            />
            <Box
              className={styles['hero-lecture']}
              display='flex'
              sx={
                {
                  width: '80px',
                  height: '100%',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }
              }>
              <span>5K+</span>
              <span>Video</span>
            </Box>
          </Box>
          <Box
            sx={
              {
                borderRadius: '18px',
                boxShadow: 3,
                padding: '10px 0 0 0',
                height: '200px',
                width: '150px',
                backgroundColor: '#F5F5F4',
                border: 'solid 2px #7F56D9',
                position: 'absolute',
                zIndex: '1',
                top: '0',
                right: '-115px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
              }
            }
          >
            <Image
              src={circleOnline}
              alt='circle'
              style={
                {
                }
              }
            />
            <Box
              className={styles['hero-online']}
              display='flex'
              sx={
                {
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              }>
              <span>250+</span>
              <span>Khóa học online</span>
            </Box>
          </Box>
          <Image
            src={womenCircleHero}
            alt='women'
            style={
              {
                width: '380px',
                height: '473px',
                position: 'absolute',
                bottom: '-180px',
                right: '-10px',
                zIndex: '0'
              }
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default TitleHome;
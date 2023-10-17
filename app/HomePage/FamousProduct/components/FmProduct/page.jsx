// rfec
import { Box, Button, Rating, ThemeProvider, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { shadows } from '@mui/system';
import Image from 'next/image';
import React from 'react'
import styles from './page.module.css'




function FmProduct({ item }) {
  return (
    <Box
      className={styles['box-navigate']}
      borderRadius={3}
      sx={
        {
          padding: '14px 14px 22px 14px',
          boxShadow: 5,
          width: 'calc(16.7% - 10px)',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.2s',
          position: 'relative'
        }
      }
    >
      <CssBaseline />
      <Image
        alt='course Image'
        src={item.avatar}
        height={201}
        width={200}
        objectFit='cover'
        layout='fixed'
        style={{
          height: '100px',
          width: '100%',
          borderRadius: '8px',
          objectFit: 'cover'
        }}
      />
      <Box className={styles['title-card']}
        sx={
          {
            marginTop: '10px'
          }
        }>
        <span>{item.email}</span>
        <span>{item.first_name}</span>
        <span>this is description about course maybe add later</span>
      </Box>
      <Box className={styles['star-rating']} component="fieldset" mb={3} borderColor="transparent" sx={{
        margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '0', gap: '2px', marginBlock: '0',
        marginInlineStart: '0',
        marginInlineEnd: '0',
        paddingInlineStart: '0',
        paddingInlineEnd: '0',
        borderWidth: '0',
        paddingBlockEnd: '0'
      }}>
        <Rating name="read-only" value={2} size='small' readOnly />
        <Typography sx={{ fontSize: '10px', fontWeight: '600', color: '#7F56D9', marginTop: '2px' }}>({item.id})</Typography>
      </Box>
      <Box
        sx={
          {
            marginTop: "20px",
            width: '100%',
            height: '40px',
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
          }
        }
      >
        <Box
          sx={
            {
              borderRadius: '100%',
              height: '30px',
              width: '30px',
            }
          }
        >
          <Image
            alt='avatar'
            src={item.avatar}
            height={201}
            width={200}
            objectFit='cover'
            layout='fixed'
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
        <Box
          the
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
        >
          <Typography variant='body1' sx={{ fontSize: '14px', color: '#101828' }}>Mentor: {item.first_name}</Typography>
          <Typography variant='body1' sx={{ fontSize: '8px', color: '#667085' }}>so nguoi da dang ky</Typography>
        </Box>
        <Button variant="contained" className={styles['btn-learning']}>Learn</Button>
      </Box>
    </Box >

  )
}

export default FmProduct
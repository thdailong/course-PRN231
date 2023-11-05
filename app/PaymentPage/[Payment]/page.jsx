'use client'
import { Box, Typography } from '@mui/material'
import Credit from '../CreditCard/page'
import { GetDataById } from './util'

export default function page({ params }) {
  const data = GetDataById(params.Payment)

  console.log(data)
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        background:
          'linear-gradient(90deg, rgba(86,0,202,1) 0%, rgba(141,56,255,1) 35%, rgba(168,104,255,1) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#FFF',
      }}
    >
      <Typography textAlign={'center'} fontWeight={700} fontSize={20}>
        Your request to buy course ___name___ has been sent!{' '}
      </Typography>
      <Typography textAlign={'center'} fontWeight={700} fontSize={20} mb={3}>
        Please transfer the money to the following account with message:
        ___uId___ buy course ___IdCourse___
      </Typography>
      <Credit />
    </Box>
  )
}

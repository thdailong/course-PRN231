import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import EastIcon from '@mui/icons-material/East'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'

const CardAdmin = ({ title, value, Icon, colorIcon, url }) => {
  const user = useShallowEqualSelector((state) => state.user)
  console.log(user)
  const route = useRouter()
  const onClickRedirect = () => {
    route.push(url)
  }
  return (
    <Box
      position={'relative'}
      sx={{
        bgcolor: '#FFF',
        borderRadius: '12px',
        padding: '20px',
        color: '#000',
        boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography fontSize={12} fontWeight={500} color={'rgba(0, 0, 0, 0.8)'}>
        {title}
      </Typography>
      <Typography fontSize={32} fontWeight={700}>
        {value}
      </Typography>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        mt={2}
      >
        <Button
          onClick={onClickRedirect}
          sx={{
            textTransform: 'none',
            color: colorIcon,
          }}
        >
          View More{' '}
          <EastIcon
            fontSize="small"
            sx={{
              ml: 1,
              color: colorIcon,
            }}
          />
        </Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 25,
          top: 25,
          bgcolor: colorIcon,
          p: 2,
          borderRadius: '50%',
          color: '#FFF',
        }}
      >
        <Icon />
      </Box>
    </Box>
  )
}

export default CardAdmin

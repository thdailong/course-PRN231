'use client'
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import BorderLinearProgress from '@mui/material/LinearProgress'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Box } from '@mui/material'

const CourseCard = ({
  image,
  title,
  categories,
  description,
  progress,
  price,
  invoice,
}) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/course/detail')
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        boxShadow: 3,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 6,
        },
        mb: '8px',
      }}
      onClick={handleClick}
    >
      <Box sx={{ m: '12px', mr: '4px' }}>
        <Image src={image} alt="Course Thumbnail" width={100} height={100} />
      </Box>
      <Box
        sx={{ borderLeft: '1px solid #e0e0e0', width: '1px', m: '0 12px' }}
      />
      <CardContent sx={{ padding: '8px' }}>
        <Typography
          variant="h5"
          sx={{ fontSize: '1.2rem', marginBottom: '8px' }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: '1rem', marginBottom: '8px' }}
        >
          {categories.join(', ')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: '8px', fontSize: '0.9rem' }}
        >
          {description.length > 200
            ? description.slice(0, 200) + '...'
            : description}
        </Typography>
        {invoice ? (
          <Typography sx={{ fontSize: '1.2rem', opacity: 0.7 }}>
            $ {price}
          </Typography>
        ) : (
          <>
            <Typography sx={{ fontSize: '1.2rem', opacity: 0.7 }}>
              {progress}%
            </Typography>
            <BorderLinearProgress
              variant="determinate"
              value={progress}
              sx={{
                marginBottom: 2,
                height: 10,
                borderRadius: 5,
                '& .MuiLinearProgress-barColorPrimary': {
                  backgroundColor: '#4CAF50',
                },
              }}
            />
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default CourseCard

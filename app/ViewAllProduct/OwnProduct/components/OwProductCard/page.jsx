"use client"
import { Box, Button, Card, CardActionArea, CardMedia, IconButton, Typography } from '@mui/material'
import ShareIcon from "@mui/icons-material/Share";
import React, { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';


export default function OwProductCard(props) {

  const router = useRouter()

  const { item } = props

  const [catchHover, setCatchHover] = useState(false)

  const handleHover = () => {
    if (item.id) {
      setCatchHover(true)
    }
  }

  const handleUnHover = () => {
    setCatchHover(false)
  }

  const handleNavigate = () => {
    // router.push(`/Learning/${item.id}`)
    router.push(`/Learning/${item.id}`)

  }

  return (
    <Box onClick={handleNavigate} sx={{ width: "calc(25% - 5px)", minWidth: 'calc(25% - 5px)', height: '100%', borderRadius: "20px", boxShadow: "10", padding: "10px 10px 5px 10px", display: 'flex', flexDirection: "column", alignItems: "flex-start" }}>
      <Card sx={{ minWidth: '100%', minHeight: '150px', borderRadius: "10px", cursor: 'pointer', overflow: "hidden", position: 'relative' }}>
        <CardActionArea >
          <CardMedia
            sx={{ height: 150, objectFit: 'cover' }}
            image='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'
            title="green iguana"
            className={`${styles['card-img']} ${catchHover && styles.active}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnHover}
          />
        </CardActionArea>
        <Button variant="contained" size="small" className={`${styles['btn-learn']} ${catchHover ? styles.active : styles.unactive}`} sx={
          {
            position: 'absolute',
            top: '50%',
            left: ' 50%',
            transform: 'translate(-50%,-50%)',
            color: ' #000',
            fontSize: '20px',
            fontWeight: 600,
            padding: '0 12px',
            borderRadius: '50px',
            backgroundColor: 'white',
          }
        }
          onMouseEnter={handleHover}
        >Learning</Button>
      </Card>
      <Typography variant='body1' sx={{ marginTop: '10px', fontSize: '18px', fontWeight: '600', color: "#6941C6" }}>{item?.name.length > 20 ? item?.name.slice(0,20)+'...' : item?.name}</Typography>
      <Typography variant='body1' sx={{ marginTop: "10px", color: "#667085", fontSize: "10px" }}>{item?.description.length > 200 ? item?.description.slice(0, 200) + ' ...' : item?.description}</Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", marginTop: "10px" }}>
        <IconButton color="secondary" aria-label="add an alarm">
          <ShareIcon />
        </IconButton>
      </Box>


    </Box>
  )
}

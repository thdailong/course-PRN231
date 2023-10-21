"use client"
import { Box, Rating, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import React from 'react'

export default function DetailHero() {
    return (
        <Box
            sx={
                {
                    backgroundColor: "#24024F",
                    width: "100%",
                    height: "375px",
                    padding: "59px 55px"
                }
            }
        >
            <Stack
                direction="column"
                spacing={1}
                alignItems='flex-start'
                sx={
                    {
                        maxWidth:"700px",
                        width:"50%"
                    }
                }
            >
                <Typography variant='h2' sx={{ fontWeight: "600", color: "#FFF" }}>This is title</Typography>
                <Typography variant='body2' sx={{ color: "#FFF", fontSize: "18px", fontWeight: "400", lineHeight: "177%" }}>This is description about ur web You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.</Typography>
                <Typography variant='caption' sx={{color:"#FFF", marginTop:"20px"}}>Mentor: The name of mentor here</Typography>
                <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                >
                    <Typography variant='caption' sx={{fontSize:"14px", color:"#9C81D5", fontWeight:"700"}}>4.3</Typography>
                    <Rating name="read-only" value={3} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55, color:"white" }} fontSize="inherit" />}  />
                    <Typography variant='caption' sx={{fontSize:"14px", color:"#FFF"}}>(123)</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

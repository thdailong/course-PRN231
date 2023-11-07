"use client"
import { Box, Rating, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import Link from 'next/link';

export default function DetailHero({ IdCourseData }) {

    const data = IdCourseData?.data

    return (
        <Box
            sx={
                {
                    backgroundColor: "#24024F",
                    width: "100%",
                    height: "375px",
                    padding: "80px 0 0 50px",
                }
            }
        >
            <Stack
                direction="column"
                spacing={3}
                alignItems='flex-start'
                sx={
                    {
                        maxWidth: "700px",
                        width: "50%"
                    }
                }
            >
                <Typography variant='h2' sx={{ fontWeight: "600", color: "#FFF" }}>
                    {
                            data?.name.length > 20 ?
                            data?.name.slice(0, 20) + " ...." :
                            data?.name
                    }
                </Typography>
                <Box
                    sx={
                        {
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }
                    }
                >
                    <Typography variant='body2' sx={{ color: "#FFF", fontSize: "18px", fontWeight: "400",textAlign:"justify" }}>
                        {
                            data?.description.length > 200 ?
                                data?.description.slice(0, 300) + " ....." :
                                data?.description
                        }
                    </Typography>
                    <Typography variant='caption' sx={{ color: "#FFF", fontSize: "18px" }}>Mentor : <Link style={{ fontSize: "18px", color: "white" }} href='/teacher'>Tan Nguyen</Link></Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >
                        <Typography variant='caption' sx={{ fontSize: "14px", color: "#9C81D5", fontWeight: "700" }}>4.3</Typography>
                        <Rating name="read-only" value={3} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55, color: "white" }} fontSize="inherit" />} />
                        <Typography variant='caption' sx={{ fontSize: "14px", color: "#FFF" }}>(123)</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

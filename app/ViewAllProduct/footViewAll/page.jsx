"use client"
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import computer from '../Images/computerFT.png'

export default function FootView() {
    return (
        <Box sx={{ display: "flex", height: "627px", width: "100%", position: "relative", padding: "0 32px 32px" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "421px",
                    backgroundColor: "#7F56D9",
                    position: "absolute",
                    bottom: "-10px",
                    left: "0",
                }}
                zIndex={-1}
            >

            </Box>
            <Stack
                direction='column'
                alignItems="flex-start"
                justifyContent="center"
                sx={{
                    flex: "1",
                    pt:"100px"
                }}
                spacing={2}
            >
                <Typography variant='h3' sx={{ color: "#FFF", fontWeight: "600" }}>You're ready to get started
                    with Easy Quizzy yet?</Typography>
                <Typography variant='body2' sx={{ color: "#FFF" }} >Choose courses that interest you. Learn once, remember many times. Always be diligent. Good luck</Typography>
            </Stack>
            <Box
                sx={{
                    flex: "1",
                }}
            >
                <Image
                    src={computer}
                    alt="Picture of the author"
                    height={600}
                    width={790}
                    objectFit='contain'
                />
            </Box>
        </Box>
    )
}

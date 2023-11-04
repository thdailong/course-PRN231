"use client"
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Describe() {
    return (
        <Stack
            direction="column"
            spacing={0}
            m="50px 0 0 73px"
            sx={
                {
                    maxWidth: "1200px",
                    width: "1020px",
                }
            }
        >
            <Box
                sx={
                    {
                        width: "100%",
                        height: "85px"
                    }
                }
            >
                <Typography variant='h4' sx={{ color: "#24024F", fontSize: "36px", fontWeight: "700", letterSpacing: "-0.5px", lineHeight: "85px" }}>Describe</Typography>
            </Box>
            <Stack
                direction="column"
                spacing={2}
                m="15px 10px 0 45px"
                gap="20px"
                sx={
                    {
                        color: "#24024F"
                    }
                }
            >
                <Box
                    sx={
                        {
                            maxWidth: "100%"
                        }
                    }
                >
                    <Typography >This course teaches you how to take control of your websites using the same methods as any other professionally created website.</Typography>
                </Box>
                <Box
                    sx={
                        {
                            maxWidth: "100%"
                        }
                    }
                >
                    <Typography >This course does not require any previous experience. We start from the very beginning and learn together little by little. By the end of the course, you'll be able to create (by hand) a website that looks great on phones, tablets, laptops, and desktops.</Typography>
                </Box>
            </Stack>
        </Stack>
    )
}

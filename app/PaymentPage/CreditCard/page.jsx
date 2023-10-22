"use client"
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Credit() {

    const [showQR, setShowQR] = useState(false)

    return (
        showQR ?
            <Box>this is qr</Box>
            :
            <Box
                m="60px 0 0 500px"
                p="30px"
                sx={
                    {
                        height: "350px",
                        width: "600px",
                        boxShadow: "10",
                        borderRadius: "10px",
                        backdropFilter: "blur(5px)",
                        background: "rgba(255, 255, 255, 0.4)",
                        border: "2px solid rgba(255, 255, 255, 0.2)"
                    }
                }>
                <Box
                    sx={{ width: "100%", display: "flex", justifyContent: "space-between", userSelect: "none" }}
                >
                    <Image
                        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                        alt="SIM"
                        width={70}
                        height={50}
                        objectFit='cover'
                    />
                    <Image
                        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                        alt="SIM"
                        width={100}
                        height={60}
                        objectFit='cover'
                    />
                </Box>
                <Stack
                    direction="column"
                    spacing={2}
                    mt="30px"
                    sx={{ color: "white", fontWeight: "700" }}
                >
                    <Stack
                        direction="column"
                    >
                        <Typography variant='h4' sx={{ fontSize: "20px" }}>CARD NO.</Typography>
                        <Typography variant='h6' sx={{ fontSize: "30px" }}>4444 2222 9999 5555</Typography>
                    </Stack>
                    <Stack
                        direction="column"
                    >
                        <Typography variant='h4' sx={{ fontSize: "20px" }}>CARDHOLDER.</Typography>
                        <Typography variant='h6' sx={{ fontSize: "30px" }}>CHARIL PUTH</Typography>
                    </Stack>
                </Stack>
            </Box>
    )
}

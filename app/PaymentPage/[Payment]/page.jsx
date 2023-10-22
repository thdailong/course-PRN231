"use client"
import React from 'react'
import { GetDataById } from './util'
import { Box, Container } from '@mui/material';
import HomeNavBar from '@/app/components/HomePage/NavBar';
import Credit from '../CreditCard/page';

export default function page({ params }) {

    const data = GetDataById(params.Payment)

    console.log(data);
    return (
        <Box sx={{ height: "100vh", width: "100%", background: "linear-gradient(90deg, rgba(86,0,202,1) 0%, rgba(141,56,255,1) 35%, rgba(168,104,255,1) 100%)" }}>
            <HomeNavBar />
            <Credit />
        </Box>
    )
}
0
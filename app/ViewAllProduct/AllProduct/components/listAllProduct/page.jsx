"use client"
import { Box } from '@mui/material'
import React from 'react'
import './page.css'
import AllProductCard from '../AllProductCard/page'

export default function ListAllProduct({ displayedData }) {



    return (
        <Box sx={
            {
                height: "auto",
                width: "100%",
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: '10px',
                columnGap: "10px",
                marginTop: "30px"
            }
        }>
            {
                displayedData.length && displayedData.map((item, index) => (
                    <AllProductCard key={index} item={item} />
                ))
            }

        </Box>
    )
}

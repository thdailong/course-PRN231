"use client"
import { Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import OwProductCard from '../OwProductCard/page';
export default function OwProductList(props) {

  // detruc props
  const { displayedData } = props

  return (
    <Box sx={
      {
        width: '100%',
        height: '320px',
        marginTop: '30px',
        display: 'flex',
        gap: '10px',
      }
    }>
      {
        displayedData?.length > 0 ? displayedData?.map((item, index) =>
        (
          <OwProductCard key={index} item={item} />
        )
        ):'No result'
      }
    </Box>
  )
}

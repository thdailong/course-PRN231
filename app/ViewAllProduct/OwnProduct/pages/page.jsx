"use client"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Pagination, Typography } from '@mui/material'
import { OwnProductList, handlePageOnw } from './callAPI'
import OwProductList from '../components/OwProductList/page'

export default function OwnProduct() {
  // usestate space
  const [currentPage, setCurrentPage] = useState(1)

  const data = handlePageOnw().data

  // xac dinh moi page hien thi bn card
  const itemsPerPage = 4

  // so dot can hien thi
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // phan tu can duoc render trong trang day
  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    ((currentPage - 1) + 1) * itemsPerPage
  );

  // xac dinh page hien tai
  const handleCrPage = (e, vl) => {
    setCurrentPage(vl)
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: "30px" }}>
      <Box>
        <Typography variant='h1' sx={{ fontSize: '30px', color: '#252424', fontWeight: '800' }}>Your Course</Typography>
      </Box>
      <OwProductList displayedData={displayedData} />
      <Pagination count={pageCount} color="secondary" onChange={handleCrPage} sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "15px" }} />
    </Box>
  )
}

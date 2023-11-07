"use client"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Pagination, Typography } from '@mui/material'
import { OwnProductList, handlePageOnw } from './callAPI'
import OwProductList from '../components/OwProductList/page'
import { courseNotLearn } from '@/app/rest_client/courseClient'

export default function OwnProduct({ searchText }) {
  // usestate space
  const [currentPage, setCurrentPage] = useState(1)
  const [course, setCourse] = useState()

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await courseNotLearn()
      const data = response.data
      const dataBuying = data.filter((value) => {
        if (searchText.length > 0) {
          return value.name.toLowerCase().includes(searchText.toLowerCase()) && value.isStudying === true
        }
        else {
          return value.isStudying === true
        }
      })
      setCourse(dataBuying)
    }
    fetchMyAPI()

  }, [searchText])

  // xac dinh moi page hien thi bn card
  const itemsPerPage = 4

  // so dot can hien thi
  const pageCount = Math.ceil(course?.length / itemsPerPage);

  // phan tu can duoc render trong trang day
  const displayedData = course?.slice(
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

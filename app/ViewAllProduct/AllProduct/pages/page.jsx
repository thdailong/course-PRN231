"use client"
import { Box, Pagination, Typography } from '@mui/material'
import React, { useState } from 'react'
import ListAllProduct from '../components/listAllProduct/page'
import { GetAllData } from './callAPI'

export default function AllCourseUser() {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8

    const data = GetAllData().data

    // xac dinh so trang
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // xac dinh san pham nao se duoc render
    const displayedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        ((currentPage - 1) + 1) * itemsPerPage
    );


    // kiem tra trang action hien tai dang o trang nao
    const handlePagnating = (e, vl) => {
        setCurrentPage(vl)
    }
    return (
        <Box sx={{ height: 'auto', width: "100%", marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography variant='h1' sx={{ fontSize: '30px', color: '#252424', fontWeight: '800' }}>All course contain</Typography>
            <ListAllProduct displayedData={displayedData} />
            <Pagination count={pageCount} color="secondary" onChange={handlePagnating} sx={{ marginTop: "30px", width: "100%", display: "flex", justifyContent: "center" }} />
        </Box>
    )
}

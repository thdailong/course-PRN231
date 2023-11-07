"use client"
import { courseNotLearn, getCategory } from '@/app/rest_client/courseClient'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ListAllProduct from '../components/listAllProduct/page'
import { useSearchParams } from 'next/navigation'

export default function AllCourseUser({searchText}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState(1)
    const [course, setCourse] = useState([])
    const [categoryByCoure, setCategoryByCourse] = useState([])
    const searchParams = useSearchParams()
    const itemsPerPage = 8

    const searching = searchParams.get('seach')

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await courseNotLearn()
            const data = response.data
            const dataNonBuy = data.filter((value) => {
                if (searchText.length > 0) {
                    return value.name.toLowerCase().includes(searchText.toLowerCase()) && value.isStudying === false
                }
                else {
                    return value.isStudying === false;
                }
            })
            setCourse(dataNonBuy)
        }

        fetchMyAPI()
    }, [searchText])

    // xac dinh so trang
    const pageCount = Math.ceil(course.length / itemsPerPage);

    // xac dinh san pham nao se duoc render
    const displayedData = course.slice(
        (currentPage - 1) * itemsPerPage,
        ((currentPage - 1) + 1) * itemsPerPage
    );

    // kiem tra trang action hien tai dang o trang nao
    const handlePagnating = (e, vl) => {
        setCurrentPage(vl)
    }

    // set category my choose
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <Box sx={{ height: 'auto', width: "100%", marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant='h1' sx={{ fontSize: '30px', color: '#252424', fontWeight: '800' }}>All course contain</Typography>
                {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Search By Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={category}
                        onChange={handleCategory}
                        label="Category"
                    >
                        {
                            categoryByCoure?.length && categoryByCoure?.map((item, idx) =>(
                                <MenuItem key={item.id} value={idx}>{item.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl> */}
            </Stack>
            <ListAllProduct displayedData={displayedData} />
            <Pagination count={pageCount} color="secondary" onChange={handlePagnating} sx={{ marginTop: "30px", width: "100%", display: "flex", justifyContent: "center" }} />
        </Box>
    )
}

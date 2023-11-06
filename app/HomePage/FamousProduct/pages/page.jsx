"use client"
import { courseNotLearn } from '@/app/rest_client/courseClient';
import { Box, Button, Pagination, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ListFamous from '../components/ListFamousProduct/page';
import { getAllCard } from './apiCalling';
import styles from './page.module.css';
// rfec

function ProductNav() {

    const router = useRouter()

    const [currentPage, setCurrentPage] = useState(1)
    const [courseFm, setCourseFM] = useState([])

    // xac dinh so phan tu trong trang
    const itemPerPage = 4

    // xac dinh so trang
    const pageCount = Math.ceil(courseFm.length / itemPerPage);

    // phan tu nao se display trong trang 
    const displayedData = courseFm.slice(
        (currentPage - 1) * itemPerPage,
        ((currentPage - 1) + 1) * itemPerPage
    );

    const handlePagnating = (e, vl) => {
        setCurrentPage(vl)
    }

    useEffect(() => {
        const getAllProduct = async () => {
            const response = await courseNotLearn()
            setCourseFM(response.data)
        }

        getAllProduct()
    }, [])

console.log(courseFm);

    const handlePageClick = (event) => {
        console.log('click hompage');
    }

    const navViewmore = () => {
        router.push('/ViewAllProduct')
    }

    return (
        <Box sx={
            {
                minHeight: '600px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: "30px",
                backgroundColor: "#FBFAFF",
                padding: '21px 72px 0px 75px'
            }
        }>
            <Box sx={
                {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }
            }>
                <Typography variant='body1' sx={{ color: '#24024F', fontSize: '24px', fontWeight: '600' }}>Explore our courses and you will receive many great things</Typography>
                <Typography variant='body1' sx={{ color: '#7F56D9', fontSize: "60px", fontWeight: "700" }}>FAMOUS COURSE HERE</Typography>
                <Typography variant='body2' sx={{ color: '#667085', fontSize: "18px", fontWeight: "400" }}>Please join our class, the knowledge provided will definitely be useful to you.</Typography>
            </Box>

            <Box sx={
                {
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    flexDirection: 'column',
                    alignItems: 'center',
                }
            }>
                <ListFamous dataProduct={displayedData} />
                <Pagination count={pageCount} color="secondary" onChange={handlePagnating} sx={{ marginTop: "30px", width: "100%", display: "flex", justifyContent: "center" }} />
                <Button variant="outlined" className={styles['btn-famous']} onClick={navViewmore}>View more</Button>
            </Box>
        </Box>
    )
}


export default ProductNav;

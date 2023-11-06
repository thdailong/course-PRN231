"use client"
import { buyCourse } from '@/app/rest_client/authClient'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CardPrice(props) {

    const { IdCourseData } = props
    const router = useRouter()
    let dataCourse = IdCourseData?.data
    // usestate place
    const [hoverImg, setHoverImg] = useState(false)

    const handleGetByID = (e) => {
        const IdProduct = dataCourse.id
        postBuyCourse(IdProduct)
    }

    const postBuyCourse = async (val) => {
        const response = await buyCourse(val)
        if (response.status ===  200 || response.status ===  204) {
            router.push('/ViewAllProduct?pay=true')
        }
        if (response.status === 404) {
            return 'fail'
        }
    }

    return (
        <Card
            sx={
                {
                    position: "fixed",
                    top: "170px",
                    right: "65px",
                    maxWidth: "380px",
                    boxShadow: "10",
                    userSelect: "none",
                    paddingBottom: "10px",
                    borderRadius: "10px",
                }
            }
        >
            <Box
                sx={
                    {
                        overflow: "hidden",
                        width: "100%",
                        height: "180px",
                    }
                }
                onMouseEnter={() => setHoverImg(true)}
                onMouseLeave={() => setHoverImg(false)}
            >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
                    sx={
                        {
                            transition: "all 0.2s",
                            transform: hoverImg ? "scale(1.2)" : "scale(1)"
                        }
                    }
                />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "700", color: "#7F56D9" }}>
                    {dataCourse?.price + ' VND'}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
                    {
                        dataCourse?.description.length > 200 ?
                            dataCourse?.description.slice(0, 160) + "..." :
                            dataCourse?.description
                    }
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button variant='contained' size="small" sx={{ backgroundColor: "#7F56D9" }} onClick={e => handleGetByID(e)}>Buy the course</Button>
            </CardActions>
        </Card>
    )
}

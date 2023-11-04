"use client"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CardPrice({ data }) {

    const router = useRouter()
    // usestate place
    const [hoverImg, setHoverImg] = useState(false)

    const handleGetByID = (e) => {
        const IdProduct = data.id
        router.push(`/PaymentPage/${IdProduct}`)
    }


    return (
        <Card
            sx={
                {
                    position: "fixed",
                    top: "170px",
                    right: "65px",
                    maxWidth: "350px",
                    boxShadow: "10",
                    userSelect: "none",
                    paddingBottom: "34px",
                    borderRadius: "10px",
                }
            }
        >
            <Box
                sx={
                    {
                        overflow: "hidden",
                        width: "100%",
                        height: "200px",
                    }
                }
                onMouseEnter={() => setHoverImg(true)}
                onMouseLeave={() => setHoverImg(false)}
            >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image="https://images.unsplash.com/photo-1696958363946-b58f40cda426"
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
                    500.000đ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button variant='contained' size="small" sx={{ backgroundColor: "#7F56D9" }} onClick={e => handleGetByID(e)}>Buy the course</Button>
            </CardActions>
        </Card>
    )
}

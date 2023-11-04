import { Avatar, Box, Card, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import ShareIcon from "@mui/icons-material/Share";
import React, { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function AllProductCard({ item }) {

    const router = useRouter()

    const handleGetByID = (e) =>{
        const IdProduct = item.id
        router.push(`/DetailPage/${IdProduct}`)
    }

    return (
        <Box
            sx={
                {
                    maxWidth: 'calc(25% - 7.5px)',
                    width: 'calc(25% - 7.5px)',
                    height: "350px",
                    display: 'flex',
                    alignItems: "center",
                    position: "relative",
                    cursor: "pointer"
                }
            }
            className={styles['box-contain']}
              onClick={e => handleGetByID(e)}
        >
            <Box component='span' className={styles.span}>120.000 đ</Box>
            <Card
                sx={
                    {
                        width: "100%",
                        height: "100%",
                        overflow: 'hidden',
                        p: "10px",
                        boxShadow: "10",
                        borderRadius: "15px",

                    }
                }
            >
                <Box
                    className={styles["box-img"]}
                    sx={{
                        height: "140px",
                        width: "100%",
                        borderRadius: "5px",
                        cursor: "pointer",
                        overflow: "hidden"
                    }}
                >
                    <CardMedia
                        className={styles["img-card"]}
                        sx={{
                            height: "100%", width: "100%", borderRadius: "5px", transition: "all 0.2s"
                        }}
                        image={item.avatar}
                        title="green iguana"
                    />
                </Box>
                <CardContent sx={{ p: 0, margin: "10px 0 0 0" }}>
                    <Typography variant="h5" component="div" sx={{ color: "#6941c6" }} >
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "10px" }}>
                        {item.des.slice(0, 200)}
                    </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "10px" }}>
                    <Rating name="read-only" value={2} size='small' readOnly />
                    <Typography variant='body2' color="text.secondary">(121231)</Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    display: 'flex',
                    alignItems: "center",
                    marginTop: "15px",
                    justifyContent: "space-between"
                }}>
                    <Box
                        sx={{ display: "flex", gap: "20px", height: "100%", alignItems: "center", maxWidth: "200px" }}
                    >
                        <Avatar alt="Remy Sharp" src={item.avatar} sx={{ width: 30, height: 30 }} />
                        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "flex-start" }}>
                            <Typography variant="h6" sx={{ fontWeight: "600" }}>
                                Author
                            </Typography>
                            <Typography variant='caption'>
                                {item.last_name.slice(0, 20)}
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton color="secondary" aria-label="add an alarm" >
                        <ShareIcon />
                    </IconButton>
                </Box>
            </Card>
        </Box>

    )
}

"use client"
import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import React from 'react'

export default function CourseSubject() {
    return (
        <Stack
            direction="column"
            spacing={0}
            m="50px 0 0 73px"
            sx={
                {
                    maxWidth: "1200px",
                    width: "1020px",
                }
            }
        >
            <Box
                sx={
                    {
                        width: "100%",
                        height: "85px"
                    }
                }
            >
                <Typography variant='h4' sx={{ color: "#24024F", fontSize: "36px", fontWeight: "700", letterSpacing: "-0.5px", lineHeight: "85px" }}>Subject course</Typography>
            </Box>
            <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', paddingLeft:"35px"}}>
                <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Anyone who wants to build a website in a professional way" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Anyone who has practiced web design as a hobby but is not confident about their skills in a professional arena" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Experienced developers wanting to refresh their HTML5 & CSS3 knowledge" />
                </ListItem>
            </List>
        </Stack>
    )
}

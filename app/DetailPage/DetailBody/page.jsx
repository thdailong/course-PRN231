"use client"
import { Box, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'

export default function DetailBody() {
    return (
        <Stack
            direction='column'
            spacing={0}
            mt="30px"
            ml="50px"
            sx={
                {
                    maxWidth: "1200px",
                    width: "1020px",
                    height:"260px",
                    border: "1px solid #24024F",
                    borderRadius:"10px"
                }
            }
        >
            <Box
                sx={
                    {
                        width: "100%",
                        flex: "1",
                        padding: "15px 34px"
                    }
                }
            >
                <Typography variant='h4' sx={{ color: "#24024F", fontSize: "36px", fontWeight: "700", letterSpacing: "-0.5px" }}>The thing you will learn here:</Typography>
            </Box>
            <Stack
                direction='row'
                spacing={0}
                sx={
                    {
                        flex: "4"
                    }
                }
            >
                <Grid item xs={12} md={6} sx={{flex:1}}>
                    <List sx={{color:"#24024F",pl:"30px"}}>
                        <ListItem>
                            <ListItemText
                                primary="You will learn how to build ur web with this course"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="You will learn how to make change to your code"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="you will learn how to make performance of your web be better and more powerfull"
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={6} sx={{flex:1}}>
                    <List sx={{color:"#24024F", pl:"20px"}}>
                        <ListItem>
                            <ListItemText
                                primary="You will gain more knowledge about UX"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="You will learn more about creating animations"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="You will understand how the code works"
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Stack>
        </Stack>
    )
}

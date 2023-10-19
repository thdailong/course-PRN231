"use client";
import { Box, Button, TextField } from "@mui/material";
import Layout from "../layout";
import styles from './page.module.css'
import { useState } from "react";
import Link from "next/link";
import { validateEmail } from "../utils/utils";

export default () => {

    const [emails, setEmail] = useState('')
    const [emilValid, setEmailValid] = useState(true)


    const handelReset = () => {
        if (validateEmail(emails)) {
            setEmailValid(true)
        }
        else setEmailValid(false)
    }

    
    return (
            <Box
                sx={
                    {
                        paddingTop: '30px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }
                }
            >
                <Box sx={{
                    display: 'flex',
                    height: '400px',
                    flexDirection: 'column',
                    width: '25%',
                    borderRadius: '10px',
                    boxShadow: "#a6a6a6 0px 2px 8px 3px",
                    userSelect: 'none',
                    alignContent: 'flex-start',
                    padding: "30px 12px",
                    gap: "10px",
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        alignItems: 'center',
                    }}>
                        <Box sx={{ height: '100%', width: '30px', borderRadius: '100%', cursor: 'pointer', }}>
                            <img className={styles['img-icon']}  alt="" />
                        </Box>
                        <p className={styles['icon-text']}>COURSE PRN</p>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', color: '#1976d2' }}><h1>Password reset</h1></Box>
                    <TextField
                        error={emilValid == false}
                        id="outlined-textarea"
                        label={emilValid?"Email":"Email invalid"}
                        placeholder="name@gmail.com"
                        sx={{ marginTop: "30px" }}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Button size="large" variant="contained" style={{ backgroundColor: '#537bde', marginTop: "10px" }} onClick={handelReset}>Reset Password</Button>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                        <Link href="/auth/login" style={{ color: "#537bde", textDecoration: "none", fontWeight: "600", fontSize: "16px", marginTop: "30px" }}>Back to sign in</Link>
                    </Box>
                </Box>
            </Box>

    );
}
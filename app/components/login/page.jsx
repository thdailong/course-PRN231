"use client";
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import styles from './page.module.css'

export default function Login(props) {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')



  // Ham check cac chu viet hoa tra ve true
  const containsUppercase = (str) => {
    return /[A-Z]/.test(str);
  }


  // Ham check ky tu dac biet
  const checkSpecialSymbol = (str) => {
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
  }


  // ham check space
  const checkSpace = (str) => {
    return /[ ]/.test(str);
  }


  // ham check validation cua username
  const userValidation = () => {
    if (containsUppercase(userName) || checkSpecialSymbol(userName) || userName.length === 0) {
      return true
    }
    if (!containsUppercase(userName) && !checkSpecialSymbol(userName) || !userName.length === 0) {
      return false
    }
  }


  //ham check validation cua password
  function passValida() {
    if (password.length === 0 || checkSpace(password)) {
      return true;
    }
    else {
      return false;
    }
  }


  //ham handle click login button
  const submitLogin = (e) => {
    e.preventDefault()
  }


  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
    }}
    >
      <Box sx={{
        height: '50%',
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '#c5c5c5 0px 2px 8px 3px',
        borderRadius: '10px',
        gap: '10px',
        padding: '18px 18px',
        backgroundColor: 'white',
      }}>
        <TextField
          sx={{
            width: '100%',
            userSelect: 'none',
          }}
          error={userValidation() == true}
          id="filled-username"
          label="UserName"
          type="search"
          variant="filled"
          onChange={e => setUserName(e.target.value)}
          helperText={userValidation() ? 'only contain normal text' : ''}
        />
        <TextField
          error={passValida() == true}
          sx={{
            width: '100%',
            userSelect: 'none',
          }}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={e => setPassword(e.target.value)}
          helperText={passValida() ? 'psw cant be empty or have space' : ''}
        />
        <Box className={styles['login-btn']}>
          <Button variant="contained" onClick={e => submitLogin(e)}>Login</Button>
          <Button variant="contained" onClick={e => submitLogin(e)}>forgot password</Button>
        </Box>
        <a href="#">register</a>
      </Box>
    </Box>
  );
}
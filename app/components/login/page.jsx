"use client"; 
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./page.css";

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
    <div className="container_login">
      <div className="login_box">
        <span className="login__span username">
          <TextField
            error={userValidation() == true}
            className="input"
            id="filled-username"
            label="UserName"
            type="search"
            variant="filled"
            onChange={e => setUserName(e.target.value)}
            helperText={userValidation() ? 'only contain normal text' : ''}
          />
        </span>
        <span className="login__span psw">
          <TextField
            error={passValida() == true}
            className="input"
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            onChange={e => setPassword(e.target.value)}
            helperText={passValida() ? 'psw cant be empty or have space' : ''}
          />
        </span>
        <div className="login_btn">
          <Button variant="contained" onClick={e => submitLogin(e)}>Login</Button>
          <Button variant="contained" onClick={e => submitLogin(e)}>forgot password</Button>
        </div>
          <a href="#">register</a>
      </div>
    </div>
  );
}
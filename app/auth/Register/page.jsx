'use client'
import { register } from '@/app/rest_client/authClient'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as Style from '@/app/auth/register/Register.styled'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'
import { useRouter } from 'next/navigation'
import useComponentWillMount from '@/app/hooks/useComponentWillMount'

const RegisterForm = () => {
  const { isLogin } = useShallowEqualSelector((state) => state.user)
  const router = useRouter()

  useComponentWillMount(() => {
    if (isLogin) {
      router.push('/home')
    }
  })

  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleShowPassword = () => setShowPassword((show) => !show)
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isLogin) {
      try {
        await register(formData)
        router.push('/auth/login')
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={Style.Title}>
        Welcome to CoursePRN
      </Typography>
      <Typography variant="subtitle1" sx={Style.SubTitle}>
        Sign up to receive offers and manage your courses better
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          value={formData.username}
        />
        <TextField
          label="Full Name"
          variant="outlined"
          name="fullName"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          value={formData.fullName}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          value={formData.email}
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleInputChange}
            value={formData.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            onChange={handleInputChange}
            value={formData.confirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleShowConfirmPassword} edge="end">
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Create Account
        </Button>
      </form>
      <Typography variant="body2" sx={Style.BottomText}>
        Already have an account?{' '}
        <Link href="/login" color="primary">
          Log in
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={Style.BottomText}>
        By registering on CoursePRN, you agree to our Policies and Privacy
        Policy. This site is protected by the reCAPTCHA consortium and under the
        Google Privacy Policy and Terms of Service.
      </Typography>
    </Container>
  )
}

export default RegisterForm

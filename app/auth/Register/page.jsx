'use client'
import * as Style from './Register.styled'
import useComponentWillMount from '@/app/hooks/useComponentWillMount'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'
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
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const TextInput = ({ label, name, onChange, value }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      name={name}
      fullWidth
      margin="normal"
      onChange={onChange}
      value={value}
    />
  )
}

const PasswordInput = ({ label, name, onChange, value, type, onClick }) => {
  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        type={type ? 'text' : 'password'}
        name={name}
        onChange={onChange}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onClick} edge="end">
              {type ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  )
}

const RegisterForm = () => {
  const { isLogin } = useShallowEqualSelector((state) => state.user)
  const router = useRouter()

  useComponentWillMount(() => {
    if (isLogin) {
      router.push('/home')
    }
  })

  const [formData, setFormData] = useState({
    userName: '',
    name: '',
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

  const inputs = [
    {
      id: 1,
      label: 'Username',
      name: 'userName',
      onChange: handleInputChange,
      value: formData.userName,
    },
    {
      id: 2,
      label: 'Full Name',
      name: 'name',
      onChange: handleInputChange,
      value: formData.name,
    },
    {
      id: 3,
      label: 'Email',
      name: 'email',
      onChange: handleInputChange,
      value: formData.email,
    },
  ]

  const passwords = [
    {
      id: 1,
      label: 'Password',
      name: 'password',
      onChange: handleInputChange,
      value: formData.password,
      type: showPassword,
      onClick: handleShowPassword,
    },
    {
      id: 2,
      label: 'Confirm Password',
      name: 'confirmPassword',
      onChange: handleInputChange,
      value: formData.confirmPassword,
      type: showConfirmPassword,
      onClick: handleShowConfirmPassword,
    },
  ]

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={Style.Title}>
        Welcome to CoursePRN
      </Typography>
      <Typography variant="subtitle1" sx={Style.SubTitle}>
        Sign up to receive offers and manage your courses better
      </Typography>
      <form onSubmit={handleSubmit}>
        {inputs && inputs.map((obj) => <TextInput key={obj.id} {...obj} />)}

        {passwords &&
          passwords.map((obj) => <PasswordInput key={obj.id} {...obj} />)}

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
        <Link href="/auth/login" color="primary">
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

'use client'
import styles from '@/app/auth/login/page.module.css'
import { isPasswordValid, isUserValid } from '@/app/auth/utils/utils'
import useActions from '@/app/hooks/useActions'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'
import { userActions } from '@/app/redux/reducers/user'
import * as auth from '@/app/rest_client/authClient'
import { Box, Button, TextField } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const { login, loginFailure } = useActions(userActions)
  const router = useRouter()
  const { isLogin } = useShallowEqualSelector((state) => state.user)

  useEffect(() => {
    if (isLogin) {
      router.push('/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin])

  const submitLogin = async () => {
    if (!isLogin) {
      try {
        const res = await auth.login({ userName, password })
        login(res.data)
      } catch (error) {
        loginFailure(error.message)
      }
    }
  }

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <Box
        sx={{
          height: '50%',
          width: '25%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '#c5c5c5 0px 2px 8px 3px',
          borderRadius: '10px',
          gap: '10px',
          padding: '18px 18px',
          backgroundColor: 'white',
        }}
      >
        <TextField
          sx={{
            width: '100%',
            userSelect: 'none',
          }}
          error={isUserValid(userName) == true}
          id="filled-username"
          label="UserName"
          type="search"
          variant="filled"
          onChange={(e) => setUserName(e.target.value)}
          helperText={isUserValid(userName) ? 'only contain normal text' : ''}
        />
        <TextField
          error={isPasswordValid(password) == true}
          sx={{
            width: '100%',
            userSelect: 'none',
          }}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={(e) => setPassword(e.target.value)}
          helperText={
            isPasswordValid(password) ? 'passsword cant be empty or have space' : ''
          }
        />
        <Box className={styles['login-btn']}>
          <Button variant="contained" onClick={submitLogin}>
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => router.push('/auth/FogotPassword')}
          >
            Forgot password
          </Button>
        </Box>
        <Link href="/auth/register">Register</Link>
      </Box>
    </Box>
  )
}

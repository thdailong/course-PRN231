'use client'
import styles from '@/app/auth/login/page.module.css'
import { isPasswordValid, isUserValid } from '@/app/auth/utils/utils'
import { USER_ROLE } from '@/app/constant/constant'
import useActions from '@/app/hooks/useActions'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'
import { userActions } from '@/app/redux/reducers/user'
import * as auth from '@/app/rest_client/authClient'
import { readCookie } from '@/app/utils/cookies'
import { Box, Button, TextField } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as snackbar from '@/app/redux/reducers/snackbar'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [vldUser, setVldUser] = useState(false)
  const [vldPass, setVldPass] = useState(false)
  const { login, loginFailure } = useActions(userActions)
  const { show } = useActions(snackbar)
  const router = useRouter()
  const { isLogin } = useShallowEqualSelector((state) => state.user)
  const isAdmin = readCookie(USER_ROLE) === 'Admin'

  useEffect(() => {
    if (isLogin && isAdmin) {
      router.push('/admin')
    } else if (isLogin) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin])

  const submitLogin = async () => {
    if (!isLogin) {
      try {
        const res = await auth.login({ userName, password })
        login(res.data)
        show({
          message: 'Login successfully',
          severity: snackbar.SNACKBAR_SEVERITY.SUCCESS,
        })
      } catch (err) {
        loginFailure(err.response.data.errors[0])
        show({
          message: 'Invalid username or password',
          severity: snackbar.SNACKBAR_SEVERITY.ERROR,
        })
      }
    }
  }

  const onUsername = (value) => {
    if (isUserValid(value)) {
      setVldUser(true)
    }
    if (!isUserValid(value) || value === '') {
      setVldUser(false)
    }
  }

  const onPass = (value) => {
    if (isPasswordValid(value)) {
      setVldPass(true)
    }
    if (!isPasswordValid(value) || value === '') {
      setVldPass(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:"#24024F"
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
          mt:"150px"
        }}
      >
        <TextField
          sx={{
            width: '100%',
            userSelect: 'none',
          }}
          error={vldUser == true}
          id="filled-username"
          label="UserName"
          type="search"
          variant="filled"
          onChange={(e) => { setUserName(e.target.value); onUsername(e.target.value) }}
          helperText={vldUser ? 'only contain normal text' : ''}
        />
        <TextField
          error={vldPass == true}
          sx={{
            width: '100%',
            userSelect: 'none',
          }}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={(e) => { setPassword(e.target.value); onPass(e.target.value) }}
          helperText={
            vldPass
              ? 'passsword cant be empty or have space'
              : ''
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
        <Link href="/auth/Register">Register</Link>
      </Box>
    </Box>
  )
}

'use client'
import UserNavPage from '@/app/components/UserNavPage/page'
import Profile from '@/app/components/UserPage/Profile'
import Sidebar from '@/app/components/UserPage/Sidebar'
import * as S from '@/app/components/UserPage/User.styled'
import useComponentWillMount from '@/app/hooks/useComponentWillMount'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import LockIcon from '@mui/icons-material/Lock'
import SchoolIcon from '@mui/icons-material/School'
import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'

const options = [
  { id: 1, label: 'View Profile', path: '/user', icon: <AccountCircleIcon /> },
  {
    id: 2,
    label: 'Change Password',
    path: '/user/password',
    icon: <LockIcon />,
  },
  {
    id: 3,
    label: 'Learning Status',
    path: '/user/status',
    icon: <SchoolIcon />,
  },
  { id: 4, label: 'Invoice', path: '/user/invoice', icon: <FileCopyIcon /> },
]

const Layout = ({ children }) => {
  const { isLogin } = useShallowEqualSelector((state) => state.user)
  const router = useRouter()

  useComponentWillMount(() => {
    if (!isLogin) {
      router.push('/auth/login')
    }
  })

  return (
    <Box sx={{m:"0"}}>
      <UserNavPage />
      <Box sx={{ backgroundColor: '#dfe6e9', height:"100vh", pt:"100px"}}>
        <Grid container sx={S.UserWrapper}>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Profile username='' sx={S.CardWrapper} />

              <Sidebar options={options} sx={S.CardWrapper} />
            </Box>
          </Grid>
          <Grid item xs={8} sx={S.ContentWrapper}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Layout

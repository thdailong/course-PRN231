import * as S from '@/app/components/UserPage/User.styled'
import useActions from '@/app/hooks/useActions'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'
import { userActions } from '@/app/redux/reducers/user'
import LogoutIcon from '@mui/icons-material/Logout'
import { Avatar, Button, Divider, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Profile = ({ username, avatarUrl, ...props }) => {
  const { logout } = useActions(userActions)
  const { isLogin } = useShallowEqualSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!isLogin) {
      router.push('/auth/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin])

  return (
    <Paper elevation={3} {...props}>
      <Typography variant="subtitle1" sx={S.ProfileSubTitle} gutterBottom>
        Personal Details
      </Typography>
      <Avatar
        src={avatarUrl}
        alt="User Avatar"
        sx={{ width: 140, height: 140 }}
      />
      <Typography variant="subtitle2" sx={S.ProfileTitle} gutterBottom>
        {username}
      </Typography>
      <Button variant="outlined" sx={S.ButtonChangeAvatar}>
        Change Avatar
      </Button>
      <Divider variant="middle" sx={{ width: '100%' }} />
      <Button
        variant="text"
        color="error"
        sx={{ textTransform: 'none', fontSize: '16px', width: '100%' }}
        onClick={() => logout()}
      >
        <LogoutIcon
          sx={{ transform: 'rotate(180deg)', fontWeight: 'regular' }}
        />
        <Typography sx={{ ml: 1, letterSpacing: 2 }}>Logout</Typography>
      </Button>
    </Paper>
  )
}

export default Profile

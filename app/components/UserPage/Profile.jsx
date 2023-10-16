import { Button, Paper, Typography, Avatar, Divider } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import * as S from '@/app/components/UserPage/User.styled'

const Profile = ({ username, avatarUrl, ...props }) => {
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

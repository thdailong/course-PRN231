export const UserWrapper = (theme) => ({
  margin: theme.spacing(1.5),
  ml: theme.spacing(0),
  mb: theme.spacing(0),
})

export const CardWrapper = (theme) => ({
  width: theme.spacing(37.5),
  mt: theme.spacing(1.25),
  mb: theme.spacing(3.25),
  py: theme.spacing(1.125),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProfileTitle = (theme) => ({
  fontSize: theme.spacing(3.25),
  my: theme.spacing(1),
  fontWeight: 'regular',
})

export const ProfileSubTitle = (theme) => ({
  fontSize: theme.spacing(2),
  my: theme.spacing(1),
  fontWeight: 'medium',
})

export const ContentWrapper = (theme) => ({
  width: theme.spacing(50),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  mt: theme.spacing(0),
  p: theme.spacing(1),
  pr: theme.spacing(3),
})

export const ButtonChangeAvatar = (theme) => ({
  fontSize: theme.spacing(1.5),
  mb: theme.spacing(2),
  mt: theme.spacing(1),
  px: 4,
  fontWeight: 'medium',
})

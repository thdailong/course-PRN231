'use client'
import FullScreenLayout from '@/app/components/Layout/FullScreenLayout'
import { ADMIN_ROUTES, ROLE, USER_ROLE } from '@/app/constant/constant'
import useComponentWillMount from '@/app/hooks/useComponentWillMount'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'
import { readCookie } from '@/app/utils/cookies'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PersonIcon from '@mui/icons-material/Person'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import SchoolIcon from '@mui/icons-material/School'
import SubjectIcon from '@mui/icons-material/Subject'
import VerifiedIcon from '@mui/icons-material/Verified'
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import useActions from '@/app/hooks/useActions'
import { userActions } from '@/app/redux/reducers/user'

const sideBarWidth = 300
const SideBarItems = [
  {
    name: 'Overview',
    href: ADMIN_ROUTES.OVERVIEW,
    icon: SubjectIcon,
  },
  // {
  //   name: 'Reports',
  //   href: ADMIN_ROUTES.REPORT,
  //   icon: ReportGmailerrorredIcon,
  // },
  {
    name: 'Courses',
    href: ADMIN_ROUTES.COURSE,
    icon: SchoolIcon,
  },
  // {
  //   name: 'Payments',
  //   href: ADMIN_ROUTES.PAYMENT,
  //   icon: AttachMoneyIcon,
  // },
  {
    name: 'Users',
    href: ADMIN_ROUTES.USER,
    icon: ManageAccountsIcon,
  },
  {
    name: 'Approval',
    href: ADMIN_ROUTES.APPROVAL,
    icon: VerifiedIcon,
  },
]

const SideBar = () => {
  const path = usePathname()
  const router = useRouter()
  const { isLogin } = useShallowEqualSelector((state) => state.user)

  useComponentWillMount(() => {
    if (!isLogin) {
      router.push('/auth/login')
    }
  })

  const onClickRedirect = (url) => {
    router.push(url)
  }
  return (
    <Box
      width={sideBarWidth}
      minHeight={'100%'}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        bgcolor: 'rgb(28, 37, 54)',
        color: '#FFF',
      }}
    >
      <Toolbar>Project Icon</Toolbar>
      <Divider></Divider>
      <Stack gap={'10px'}>
        {SideBarItems.map((item) => (
          <Button
            key={item.name}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'none',
              justifyContent: 'flex-start',
              px: 2,
              mx: 2,
              bgcolor:
                path === item.href ? 'rgba(255,255,255,0.04)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.04)',
                color: '#FFF',
              },
              borderRadius: '8px',
            }}
            onClick={() => onClickRedirect(item.href)}
          >
            {item.icon && (
              <item.icon
                fontSize="small"
                sx={{
                  color: path !== item.href ? 'inherit' : 'rgb(103 151 240)',
                }}
              />
            )}
            <Typography
              sx={{
                color: path === item.href ? '#FFF' : 'inherit',
                ml: 2,
              }}
            >
              {item?.name}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Box>
  )
}

const NavBar = () => {
  const { logout } = useActions(userActions)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    logout()
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sideBarWidth}px)`,
        ml: sideBarWidth,
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(6px)',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button
          sx={{
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            bgcolor: 'rgba(0, 0, 0, 0.2)',
            p: 1,
            px: 2,
            borderRadius: '24px',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.4)',
            },
          }}
          onClick={handleClick}
        >
          <PersonIcon
            sx={{
              bgcolor: 'rgb(103 151 240)',
              borderRadius: '50%',
              color: '#FFF',
              p: 0.5,
            }}
          />{' '}
          Admin
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          // onClose={handleClose}
          slotProps={{
            paper: {
              sx: {
                width: '120px',
              },
            },
          }}
        >
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
const LayoutAdmin = ({ children }) => {
  const router = useRouter()
  const { isLogin } = useShallowEqualSelector((state) => state.user)
  useEffect(() => {
    if (!isLogin) {
      router.push('/auth/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin])
  return (
    <FullScreenLayout
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <NavBar />
      <SideBar />
      <Box ml={`${sideBarWidth}px`}>
        <Toolbar />
        <Box mx={{ xs: 2, sm: 4, md: 6, lg: 8 }} mt={4}>
          {children}
        </Box>
      </Box>
    </FullScreenLayout>
  )
}

export default LayoutAdmin

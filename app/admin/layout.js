'use client'
import FullScreenLayout from '@/app/components/Layout/FullScreenLayout'
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import SubjectIcon from '@mui/icons-material/Subject'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import SchoolIcon from '@mui/icons-material/School'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PersonIcon from '@mui/icons-material/Person'
import { usePathname, useRouter } from 'next/navigation'
import { ADMIN_ROUTES } from '@/app/constant/constant'

const sideBarWidth = 300
const SideBarItems = [
  {
    name: 'Overview',
    href: ADMIN_ROUTES.OVERVIEW,
    icon: SubjectIcon,
  },
  {
    name: 'Reports',
    href: ADMIN_ROUTES.REPORT,
    icon: ReportGmailerrorredIcon,
  },
  {
    name: 'Courses',
    href: ADMIN_ROUTES.COURSE,
    icon: SchoolIcon,
  },
  {
    name: 'Payments',
    href: ADMIN_ROUTES.PAYMENT,
    icon: AttachMoneyIcon,
  },
  {
    name: 'Users',
    href: ADMIN_ROUTES.USER,
    icon: ManageAccountsIcon,
  },
]

const SideBar = () => {
  const path = usePathname()
  const router = useRouter()
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
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sideBarWidth}px)`,
        ml: sideBarWidth,
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(6px)',
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
        <Box
          sx={{
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            bgcolor: 'rgba(0, 0, 0, 0.2)',
            p: 1,
            borderRadius: '24px',
          }}
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
        </Box>
      </Toolbar>
    </AppBar>
  )
}
const LayoutAdmin = ({ children }) => {
  return (
    <FullScreenLayout
      sx={{
        bgcolor: 'rgba(0, 0, 0, 0.05)',
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

'use client'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import logo from './images/c.png'
import DialogForm from './Dialog/DialogForm'
import { readCookie } from '@/app/utils/cookies'
import { USER_ROLE } from '@/app/constant/constant'

const pages = [
  { text: 'Home', link: '/' },
  { text: 'Course', link: '/ViewAllProduct' },
]
const settings = ['Profile', 'Upgrade account']

export default function UserNavPage({holdSearch}) {
  const router = useRouter()
<<<<<<< HEAD
  const patchName = usePathname()
=======
  const isTeacher = readCookie(USER_ROLE) === 'Teacher'
>>>>>>> a64b18f84820054e9b5682e56dae5df1780d2e76

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const onRedirect = (link) => {
    router.push(link)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const navToHome = () => {
    router.push('/')
  }

<<<<<<< HEAD
=======
  const handleRoute = () => {
    router.push('/user')
  }
>>>>>>> a64b18f84820054e9b5682e56dae5df1780d2e76

  return (
    <AppBar
      position="static"
      sx={{
        p: '0 20px',
        backgroundColor: '#7F56D9',
        boxShadow: '10',
        position: 'fixed',
        display: { xs: 'none', md: 'block' },
        zIndex: '10',
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="Picture of the author"
            style={{ cursor: 'pointer' }}
            onClick={navToHome}
          />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={() => onRedirect(page.link)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Stack>
        <Box
          component="form"
          sx={{
            ml: '0px',
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Find course"
            onChange={(e) => {holdSearch(e.target.value)}}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User" src="" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={handleRoute}>
                Profile
              </Typography>
            </MenuItem>
            {isTeacher ? (
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => router.push('/teacher')}
                >
                  Create Course
                </Typography>
              </MenuItem>
            ) : (
              <MenuItem onClick={handleCloseUserMenu}>
                <DialogForm text="Upgrade Account" />
              </MenuItem>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

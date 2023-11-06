'use client'
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GroupIcon from '@mui/icons-material/Group'
import PaidIcon from '@mui/icons-material/Paid'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import CardAdmin from '@/app/components/Admin/OverViewAdmin/CardAdmin'
import TableComponent from '@/app/components/Table'
import { ADMIN_ROUTES } from '@/app/constant/constant'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'
import { getListCourse } from '@/app/rest_client/authClient'
import {
  getAllAccount,
  getAllTeacherRequestsForm,
} from '@/app/rest_client/adminClient'

const Page = () => {
  const [Users, setUsers] = useState([])
  const [courses, setCourses] = useState([])
  const [forms, setForms] = useState([])

  const onGetCourses = async () => {
    try {
      const res = await getListCourse()
      console.log(res.data)
      setCourses(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const onGetAllForms = async () => {
    try {
      const res = await getAllTeacherRequestsForm()
      setForms(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onGetUser = async () => {
    try {
      const res = await getAllAccount()
      console.log(res.data)
      setUsers(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onGetAllForms()
    onGetCourses()
    onGetUser()
  }, [])

  const OverviewCards = [
    {
      title: 'TOTAL USERS',
      value: Users.length,
      Icon: GroupIcon,
      colorIcon: 'rgb(16, 185, 129)',
      url: ADMIN_ROUTES.USER,
    },
    {
      title: 'TOTAL COURSES',
      value: courses.length,
      Icon: NewspaperIcon,
      colorIcon: 'rgb(247, 144, 9)',
      url: ADMIN_ROUTES.COURSE,
    },
    {
      title: 'TOTAL APPROVAL',
      value: forms.length,
      Icon: AssignmentLateIcon,
      colorIcon: 'rgb(16, 185, 129)',
      url: ADMIN_ROUTES.APPROVAL,
    },
  ]

  return (
    <>
      <Grid container columnSpacing={2} mb={3}>
        {OverviewCards.map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={4}>
            <CardAdmin {...item} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: '#FFF',
              borderRadius: '12px',
              padding: '20px',
              color: '#000',
              boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography fontWeight={600} fontSize={16} mb={1}>
              Newest course
            </Typography>
            <TableComponent
              columns={[
                {
                  id: 'name',
                  label: 'Name',
                  minWidth: 170,
                  render: ({ name }) => <Typography>{name}</Typography>,
                },
              ]}
              theme="light"
              rows={courses.slice(0, 5)}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: '#FFF',
              borderRadius: '12px',
              padding: '20px',
              color: '#000',
              boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography fontWeight={600} fontSize={16} mb={1}>
              Newest user
            </Typography>
            <TableComponent
              columns={[
                {
                  id: 'name',
                  label: 'Name',
                  minWidth: 170,
                  render: ({ name }) => <Typography>{name}</Typography>,
                },
              ]}
              theme="light"
              rows={Users.slice(0, 5)}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Page

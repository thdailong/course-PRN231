'use client'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group'
import PaidIcon from '@mui/icons-material/Paid'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import CardAdmin from '@/app/components/Admin/OverViewAdmin/CardAdmin'
import TableComponent from '@/app/components/Table'
import { ADMIN_ROUTES } from '@/app/constant/constant'
import useShallowEqualSelector from '@/app/hooks/useShallowEqualSelector'

const page = () => {
  const OverviewCards = [
    {
      title: 'TOTAL USERS',
      value: '100',
      Icon: GroupIcon,
      colorIcon: 'rgb(16, 185, 129)',
      url: ADMIN_ROUTES.USER,
    },
    {
      title: 'TOTAL PAYMENTS',
      value: '100',
      Icon: PaidIcon,
      colorIcon: 'rgb(240, 68, 56)',
      url: ADMIN_ROUTES.PAYMENT,
    },
    {
      title: 'TOTAL COURSES',
      value: '100',
      Icon: NewspaperIcon,
      colorIcon: 'rgb(247, 144, 9)',
      url: ADMIN_ROUTES.COURSE,
    },
    {
      title: 'TOTAL REPORTS',
      value: '100',
      Icon: AssignmentLateIcon,
      colorIcon: 'rgb(16, 185, 129)',
      url: ADMIN_ROUTES.REPORT,
    },
  ]

  return (
    <>
      <Grid container columnSpacing={2} mb={3}>
        {OverviewCards.map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={3}>
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
                  render: ({ title }) => <Typography>{title}</Typography>,
                },
              ]}
              theme="light"
              rows={OverviewCards}
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
                  render: ({ title }) => <Typography>{title}</Typography>,
                },
              ]}
              theme="light"
              rows={OverviewCards}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default page

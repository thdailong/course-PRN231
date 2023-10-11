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
    </>
  )
}

export default page

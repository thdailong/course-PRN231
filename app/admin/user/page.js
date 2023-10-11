'use client'
import TableComponent from '@/app/components/Table'
import { ADMIN_ROUTES } from '@/app/constant/constant'
import { Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const OverviewCards = [
    {
      title: 'TOTAL USERS',
      value: '100',
      colorIcon: 'rgb(16, 185, 129)',
      url: ADMIN_ROUTES.USER,
    },
    {
      title: 'TOTAL PAYMENTS',
      value: '100',
      colorIcon: 'rgb(240, 68, 56)',
      url: ADMIN_ROUTES.PAYMENT,
    },
    {
      title: 'TOTAL COURSES',
      value: '100',
      colorIcon: 'rgb(247, 144, 9)',
      url: ADMIN_ROUTES.COURSE,
    },
    {
      title: 'TOTAL REPORTS',
      value: '100',
      colorIcon: 'rgb(16, 185, 129)',
      url: ADMIN_ROUTES.REPORT,
    },
  ]
  return (
    <>
      <Typography component={'h2'} variant="h4" mb={2}>
        User
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
    </>
  )
}

export default page

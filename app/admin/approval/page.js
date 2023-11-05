'use client'
import TableComponent from '@/app/components/Table'
import { ADMIN_ROUTES } from '@/app/constant/constant'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const OverviewCards = [
    {
      userId: '1',
      username: 'user1',
      name: 'u1',
      email: 'user1@gmail.com',
    },
    {
      userId: '1',
      username: 'user1',
      name: 'u1',
      email: 'user1@gmail.com',
    },
    {
      userId: '1',
      username: 'user1',
      name: 'u1',
      email: 'user1@gmail.com',
    },
    {
      userId: '1',
      username: 'user1',
      name: 'u1',
      email: 'user1@gmail.com',
    },
  ]
  return (
    <>
      <Typography component={'h2'} variant="h4" mb={2}>
        Approval pages
      </Typography>
      <TableComponent
        columns={[
          {
            id: 'userId',
            label: 'User Id',
            minWidth: 170,
            render: ({ userId }) => <Typography>{userId}</Typography>,
          },
          {
            id: 'name',
            label: 'Name',
            minWidth: 170,
            render: ({ name }) => <Typography>{name}</Typography>,
          },
          {
            id: 'email',
            label: 'Email',
            minWidth: 170,
            render: ({ email }) => <Typography>{email}</Typography>,
          },
          {
            id: 'username',
            label: 'Username',
            minWidth: 170,
            render: ({ username }) => <Typography>{username}</Typography>,
          },
          {
            id: 'action',
            label: 'Action',
            minWidth: 170,
            render: ({ userId }) => (
              <Stack direction="row" gap={'12px'}>
                <Button
                  sx={{
                    color: '#FFF',
                    bgcolor: 'green',
                  }}
                >
                  Approve
                </Button>{' '}
                <Button sx={{ color: '#FFF', bgcolor: 'red' }}>Reject</Button>
              </Stack>
            ),
          },
        ]}
        theme="light"
        rows={OverviewCards}
      />
    </>
  )
}

export default page

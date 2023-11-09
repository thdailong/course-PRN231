'use client'
import TableComponent from '@/app/components/Table'
import { ADMIN_ROUTES } from '@/app/constant/constant'
import {
  approveTeacher,
  getAllAccount,
  getAllTeacherRequestsForm,
} from '@/app/rest_client/adminClient'
import { Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [forms, setForms] = useState([])
  const [accounts, setAccounts] = useState([])
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

  const onGetAllForms = async () => {
    try {
      const res = await getAllTeacherRequestsForm()
      setForms(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onGetAccounts = async () => {
    try {
      const res = await getAllAccount()
      setAccounts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onGetAllForms()
    onGetAccounts()
  }, [])

  const onApprove = async (id) => {
    try {
      const res = await approveTeacher(id, {
        status: true,
        note: 'You have become teacher',
      })
      onGetAllForms()
    } catch (error) {
      console.log(error)
    }
  }

  const onReject = async (id) => {
    try {
      const res = await approveTeacher(id, {
        status: false,
        note: 'You have been rejected',
      })
      onGetAllForms()
    } catch (error) {
      console.log(error)
    }
  }

  // "senderId": "b120896a-9d15-4639-7aa2-08dbde39d1d4",
  //       "content": "I want to be a teacher.",
  //       "status": 0,
  //       "note": "",
  //       "createdDate": "2023-11-05T20:18:12.0167378"

  return (
    <>
      <Typography component={'h2'} variant="h4" mb={2}>
        Approval pages
      </Typography>
      <TableComponent
        columns={[
          {
            id: 'username',
            label: 'Username',
            minWidth: 170,
            render: ({ senderId }) => {
              const user = accounts.find((item) => {
                if (item.id == senderId) {
                  return item
                }
              })
              return <Typography>{user?.name}</Typography>
            },
          },
          {
            id: 'Reason',
            label: 'Reason',
            minWidth: 170,
            render: ({ content }) => <Typography>{content}</Typography>,
          },
          {
            id: 'status',
            label: 'Status',
            minWidth: 170,
            render: ({ status }) => {
              if (status == 1) {
                return <Typography>Approved</Typography>
              } else if (status == 0) {
                return <Typography>Pending</Typography>
              } else {
                return <Typography>Rejected</Typography>
              }
            },
          },
          {
            id: 'createdDate',
            label: 'Created Date',
            minWidth: 170,
            render: ({ createdDate }) => (
              <Typography>
                {new Date(createdDate).toLocaleDateString()}
              </Typography>
            ),
          },
          {
            id: 'action',
            label: 'Action',
            minWidth: 170,
            render: ({ id, status }) =>
              status === 0 && (
                <Stack direction="row" gap={'12px'}>
                  <Button
                    sx={{
                      color: '#FFF',
                      bgcolor: 'green',
                    }}
                    onClick={() => onApprove(id)}
                  >
                    Approve
                  </Button>{' '}
                  <Button
                    sx={{ color: '#FFF', bgcolor: 'red' }}
                    onClick={() => onReject(id)}
                  >
                    Reject
                  </Button>
                </Stack>
              ),
          },
        ]}
        theme="light"
        rows={forms}
      />
    </>
  )
}

export default Page

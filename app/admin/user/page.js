'use client'
import TableComponent from '@/app/components/Table'
import { ADMIN_ROUTES } from '@/app/constant/constant'
import { getAllAccount } from '@/app/rest_client/adminClient'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [Users, setUsers] = useState([])

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
    onGetUser()
  }, [])

  return (
    <>
      <Typography component={'h2'} variant="h4" mb={2}>
        User
      </Typography>
      {/* description
: 
"Not set"
dob
: 
"2023-11-03T16:07:58.6071004"
email
: 
"admin@system"
id
: 
"17bfcba3-90dd-4945-8511-3f6257a52ec0"
imageUrl
: 
null
name
: 
"Admin 01"
type
: 
"Admin"
userName
: 
"admin01" */}
      <TableComponent
        columns={[
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
            id: 'type',
            label: 'Type',
            minWidth: 170,
            render: ({ type }) => <Typography>{type}</Typography>,
          },
          {
            id: 'username',
            label: 'Username',
            render: ({ userName }) => <Typography>{userName}</Typography>,
          },
        ]}
        theme="light"
        rows={Users}
      />
    </>
  )
}

export default Page

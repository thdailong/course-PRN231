'use client'
import UserInfoForm from '@/app/components/UserPage/UserInfoForm'
import * as auth from '@/app/rest_client/authClient'
import { Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { createCookie } from '../utils/cookies'
import { USER_ROLE } from '../constant/constant'

const Page = () => {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await auth.verifyUser()
      console.log(res)
      setData(res?.data)
      createCookie(USER_ROLE, res?.data.type)
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(data)

  return (
    <Paper elevation={3} sx={{ width: '100%', p:"12px" }}>
      <UserInfoForm {...data} />
    </Paper>
  )
}

export default Page

'use client'
import UserInfoForm from '@/app/components/UserPage/UserInfoForm'
import { Paper } from '@mui/material'

const obj = {
  id: 1,
  username: 'kaiz0402',
  name: 'Hung Phu',
  email: 'phunlh2001@gmail.com',
  address: 'Dong Thap',
  dob: '2001-04-02',
  desc: 'Hello buddies',
}

const Page = () => {
  return (
    <Paper elevation={3} sx={{ width: '100%', p: 3 }}>
      <UserInfoForm {...obj} />
    </Paper>
  )
}

export default Page

'use client'
import TableComponent from '@/app/components/Table'
import { ADMIN_ROUTES } from '@/app/constant/constant'
import { show } from '@/app/redux/reducers/snackbar'
import { getAllAccount, updateBalanceUser } from '@/app/rest_client/adminClient'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Page = () => {
  const [Users, setUsers] = useState([])
  const [userId, setUserId] = useState(null)
  const [money, setMoney] = useState(0)

  const dispatch = useDispatch()

  const onGetUser = async () => {
    try {
      const res = await getAllAccount()
      console.log(res.data)
      setUsers(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onUpdateBalance = async () => {
    try {
      if (!userId || !money) {
        return
      }
      const res = await updateBalanceUser({
        userId: userId,
        balance: money,
      })
      setMoney(0)
      dispatch(
        show({ message: 'Update balance successfully', severity: 'success' })
      )
    } catch (err) {
      console.log(err)
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
      <TableComponent
        columns={[
          {
            id: 'name',
            label: 'Name',
            minWidth: 170,
            render: ({ name }) => <Typography>{name}</Typography>,
          },
          {
            id: 'userName',
            label: 'Username',
            minWidth: 170,
            render: ({ userName }) => <Typography>{userName}</Typography>,
          },
          {
            id: 'username',
            label: 'Username',
            render: ({ userName }) => <Typography>{userName}</Typography>,
          },
          {
            id: 'balance',
            label: 'Action',
            render: ({ id }) => (
              <Button onClick={() => setUserId(id)}>Top up</Button>
            ),
          },
        ]}
        theme="light"
        rows={Users}
      />
      <Dialog open={userId !== null} onClose={() => setUserId(null)}>
        <DialogTitle>Top up user {userId}</DialogTitle>
        <DialogContent>
          <TextField
            type="number"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            sx={{
              my: 2,
            }}
            fullWidth
            label="Balance"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUserId(null)}>Cancel</Button>
          <Button onClick={onUpdateBalance}>Top up</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Page

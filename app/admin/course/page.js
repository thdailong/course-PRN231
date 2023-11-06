'use client'
import TableComponent from '@/app/components/Table'
import { ADMIN_ROUTES } from '@/app/constant/constant'
import { show } from '@/app/redux/reducers/snackbar'
import {
  approveCourseToBePublic,
  getAllCourses,
  getAllPublishesForm,
} from '@/app/rest_client/adminClient'
import { getListCourse } from '@/app/rest_client/authClient'
import { Box, Button, Chip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Page = () => {
  const [publishes, setPublishes] = useState([])
  const [rows, setRows] = useState([])
  const dispatch = useDispatch()

  const onGetCourses = async () => {
    try {
      const res = await getListCourse()
      console.log(res.data)
      setRows(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const queryPublish = async () => {
    try {
      const res = await getAllPublishesForm()
      setPublishes(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const onPublicCourse = async (id) => {
    try {
      const item = publishes.find((item) => {
        if (item.courseId == id) {
          return item
        }
      })
      const res = await approveCourseToBePublic(item.id, {
        status: true,
        note: 'Lets approve this course',
      })
      onGetCourses()
      dispatch(
        show({ message: 'Approve course successfully', severity: 'success' })
      )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    onGetCourses()
    queryPublish()
  }, [])

  return (
    <>
      <Typography component={'h2'} variant="h4" mb={2}>
        Courses
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
            id: 'level',
            label: 'Level',
            render: ({ level }) => <Typography>{level}</Typography>,
          },
          {
            id: 'price',
            label: 'Price',
            minWidth: 170,
            render: ({ price }) => <Typography>{price}</Typography>,
          },
          {
            id: 'status',
            label: 'Status',
            minWidth: 170,
            render: ({ status }) => (
              <Box>
                <Chip
                  label={
                    <Typography>
                      {status == 0
                        ? 'Pending'
                        : status == 1
                        ? 'Public'
                        : 'Reject'}
                    </Typography>
                  }
                />
              </Box>
            ),
          },
          {
            id: 'action',
            label: '',
            minWidth: 170,
            render: ({ id, status }) => (
              <Button onClick={() => onPublicCourse(id)}>
                {status == 0 && publishes.find((item) => item.courseId == id)
                  ? 'Approve'
                  : ''}
              </Button>
            ),
          },
        ]}
        theme="light"
        rows={rows}
      />
    </>
  )
}

export default Page

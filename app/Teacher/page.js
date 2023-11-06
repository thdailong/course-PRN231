'use client'
import { getListCategory } from '@/app/rest_client/authClient'
import { getMyCreatedCourse } from '@/app/rest_client/teacherClient'
import CreateChapter from '@/app/teacher/CreateChapter'
import CreateCourse from '@/app/teacher/CreateCourse'
import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [createCourse, setCreateCourse] = useState(false)
  const [category, setCategory] = useState([])
  const [courses, setCourses] = useState([])
  const [course, setCourse] = useState(null)

  const onGetCategory = async () => {
    try {
      const res = await getListCategory()
      setCategory(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onGetCourseCreated = async () => {
    try {
      const res = await getMyCreatedCourse()
      setCourses(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onGetCategory()
    onGetCourseCreated()
  }, [])

  return (
    <Container
      sx={{
        pt: 10,
      }}
    >
      {course ? (
        <CreateChapter course={course} setCourse={setCourse} />
      ) : (
        <>
          <Button
            sx={{
              bgcolor: 'primary.main',
              color: '#FFF',
              '&:hover': {
                bgcolor: 'rgb(25 118 210 / 60%)',
              },
            }}
            onClick={() => setCreateCourse(true)}
          >
            Create Course
          </Button>
          <CreateCourse
            open={createCourse}
            onClose={() => setCreateCourse(false)}
            category={category}
          />
          <Grid container spacing={2} mt={4}>
            {courses.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    bgcolor: '#FFF',
                    borderRadius: '12px',
                    padding: '20px',
                    color: '#000',
                    boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}
                    mb={2}
                  >
                    {item.status == 0 ? (
                      <Chip label="Pending" color="warning" />
                    ) : (
                      <Chip label="Approved" color="success" />
                    )}
                  </Box>
                  <Typography fontWeight={600} fontSize={16} mb={1}>
                    {item.name}
                  </Typography>
                  {/* <Typography>Desc: {item.description}</Typography> */}
                  <Typography>Level: {item.level}</Typography>
                  <Typography>Price: {item.price} VND</Typography>
                  <Box display={'flex'} justifyContent={'flex-end'}>
                    <Button onClick={() => setCourse(item)}>Edit Course</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  )
}

export default Page

'use client'
import * as React from 'react'
import CourseCard from '@/app/components/UserPage/CourseCard'
import CoursePagination from '@/app/components/UserPage/CoursePagination'
import { Box } from '@mui/material'
import { courses } from '@/app/utils/user.data'

const InvoicePage = () => {
  const itemsPerPage = 3
  const [currentPage, setCurrentPage] = React.useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentCourses = courses.slice(startIndex, endIndex)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <Box>
      {courses &&
        currentCourses.map((item) => (
          <CourseCard key={item.id} invoice {...item} />
        ))}
      <CoursePagination
        totalPage={courses.length}
        itemPerPage={itemsPerPage}
        currentPage={currentCourses}
        onPageChange={handlePageChange}
      />
    </Box>
  )
}

export default InvoicePage

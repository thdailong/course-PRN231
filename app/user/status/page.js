'use client'
import * as React from 'react'
import CourseCard from '@/app/components/UserPage/CourseCard'
import CoursePagination from '@/app/components/UserPage/CoursePagination'
import { Box } from '@mui/material'

const courses = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1696958363946-b58f40cda426',
    title: 'Next 13 Crash Course',
    categories: ['Frontend', 'Nextjs'],
    description:
      'Grabbed lying yourself stream boy possible fairly worth oldest track baseball smallest guess forth kill column. Manufacturing plates pan son straw talk had bent orange thank buried round adult push birth doll.',
    progress: 20,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1696958363946-b58f40cda426',
    title: 'Next 13 Crash Course',
    categories: ['Frontend', 'Nextjs'],
    description:
      'Grabbed lying yourself stream boy possible fairly worth oldest track baseball smallest guess forth kill column. Manufacturing plates pan son straw talk had bent orange thank buried round adult push birth doll.',
    progress: 40,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1696958363946-b58f40cda426',
    title: 'Next 13 Crash Course',
    categories: ['Frontend', 'Nextjs'],
    description:
      'Grabbed lying yourself stream boy possible fairly worth oldest track baseball smallest guess forth kill column. Manufacturing plates pan son straw talk had bent orange thank buried round adult push birth doll.',
    progress: 58,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1696958363946-b58f40cda426',
    title: 'Next 13 Crash Course',
    categories: ['Frontend', 'Nextjs'],
    description:
      'Grabbed lying yourself stream boy possible fairly worth oldest track baseball smallest guess forth kill column. Manufacturing plates pan son straw talk had bent orange thank buried round adult push birth doll.',
    progress: 87,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1696958363946-b58f40cda426',
    title: 'Next 13 Crash Course',
    categories: ['Frontend', 'Nextjs'],
    description:
      'Grabbed lying yourself stream boy possible fairly worth oldest track baseball smallest guess forth kill column. Manufacturing plates pan son straw talk had bent orange thank buried round adult push birth doll.',
    progress: 32,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1696958363946-b58f40cda426',
    title: 'Next 13 Crash Course',
    categories: ['Frontend', 'Nextjs'],
    description:
      'Grabbed lying yourself stream boy possible fairly worth oldest track baseball smallest guess forth kill column. Manufacturing plates pan son straw talk had bent orange thank buried round adult push birth doll.',
    progress: 60,
  },
]

const StatusPage = () => {
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
        currentCourses.map((item) => <CourseCard key={item.id} {...item} />)}
      <CoursePagination
        totalPage={courses.length}
        itemPerPage={itemsPerPage}
        currentPage={currentCourses}
        onPageChange={handlePageChange}
      />
    </Box>
  )
}

export default StatusPage

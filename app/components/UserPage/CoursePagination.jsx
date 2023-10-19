import { Pagination, Stack } from '@mui/material'

const CoursePagination = ({
  currentPage,
  totalPage,
  itemPerPage,
  onPageChange,
}) => {
  const numericDisplay = Math.ceil(totalPage / itemPerPage)

  const handleChange = (event, value) => {
    onPageChange(value)
  }

  return (
    <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={numericDisplay}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </Stack>
  )
}

export default CoursePagination

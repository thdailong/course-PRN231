import { createCourse } from '@/app/rest_client/teacherClient'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const CreateCourse = ({ open, onClose, category }) => {
  const [courseInfo, setCourseInfo] = useState({
    name: '',
    description: '',
    level: '',
    price: '',
    categoryId: '',
  })

  const onChangeCourseInfo = (e) => {
    setCourseInfo({ ...courseInfo, [e.target.name]: e.target.value })
  }

  const onCreateCourse = async () => {
    await createCourse(courseInfo)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography textAlign={'center'} fontSize={20}>
          Creating course
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          onChange={onChangeCourseInfo}
          label="Name"
          fullWidth
          sx={{
            mb: 3,
            mt: 1,
          }}
        />
        <TextField
          name="description"
          onChange={onChangeCourseInfo}
          label="Description"
          fullWidth
          sx={{
            mb: 3,
          }}
        />
        <TextField
          name="level"
          onChange={onChangeCourseInfo}
          label="Level"
          type="number"
          fullWidth
          sx={{
            mb: 3,
          }}
        />
        <TextField
          name="price"
          onChange={onChangeCourseInfo}
          label="Price"
          type="number"
          fullWidth
          sx={{
            mb: 3,
          }}
        />
        <Box>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              name="categoryId"
              onChange={onChangeCourseInfo}
              placeholder="Select category"
              sx={{
                mb: 3,
                minWidth: '100px',
              }}
            >
              {category.map((item) => (
                <MenuItem key={item?.id} value={item?.id}>
                  {item?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCreateCourse}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateCourse

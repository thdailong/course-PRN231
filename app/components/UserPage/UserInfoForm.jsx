'use client'
import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { isEmailValid } from '@/app/utils/user.util'

const UserInfoForm = ({ name, username, email, address, dob, desc }) => {
  const [isEdit, setEditting] = useState(false)

  const handleEdit = (e) => {
    e.preventDefault()
    setEditting((edit) => !edit)
  }

  const [formData, setFormData] = useState({
    fullName: name,
    username: username,
    dob: dob,
    email: email,
    address: address,
    summary: desc,
  })

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const onSubmit = () => {
    if (isEmailValid(formData.email)) {
      console.log('Submitted data:', formData)
    } else {
      console.log('Invalid email address')
    }

    setEditting(false)
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Profile Information
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              fullWidth
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Username"
              fullWidth
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="DOB"
              fullWidth
              type="date"
              value={formData.dob}
              onChange={(e) => handleInputChange('dob', e.target.value)}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              fullWidth
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description/Summary"
              fullWidth
              multiline
              rows={4}
              value={formData.summary}
              onChange={(e) => handleInputChange('summary', e.target.value)}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            {isEdit ? (
              <Button
                type="submit"
                variant="contained"
                color="success"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            ) : (
              <Button
                type="button"
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                Edit
              </Button>
            )}
          </Grid>
          {isEdit && (
            <Grid item xs={6}>
              <Button
                type="button"
                variant="outlined"
                color="error"
                startIcon={<CancelIcon />}
                onClick={handleEdit}
              >
                Cancel
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Container>
  )
}

export default UserInfoForm

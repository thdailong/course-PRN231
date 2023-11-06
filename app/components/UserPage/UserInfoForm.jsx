'use client'
import { formatDatetime } from '@/app/utils/user.util'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const UserInfoForm = ({ name, userName, email, dob, description }) => {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Profile Information
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              fullWidth
              value={name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              fullWidth
              value={userName}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="DOB"
              fullWidth
              value={formatDatetime(dob)}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description/Summary"
              fullWidth
              multiline
              rows={4}
              value={description}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleBack}
            >
              Back to home
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default UserInfoForm

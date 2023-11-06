'use client'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const UserInfoForm = ({ name, userName, email, description, type }) => {
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
          <Grid item xs={6}>
            <TextField
              label="Full Name"
              fullWidth
              defaultValue={name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Role"
              fullWidth
              defaultValue={type}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              fullWidth
              defaultValue={userName}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              defaultValue={email}
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
              defaultValue={description}
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

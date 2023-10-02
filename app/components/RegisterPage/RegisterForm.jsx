'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const RegisterForm = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleShowPassword = () => setShowPassword(show => !show);
  const handleShowConfirmPassword = () => setShowConfirmPassword(show => !show);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography 
        variant="h4" 
        color="#1976D2" 
        align="center" 
        style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '20px' }}>
        Welcome to CoursePRN
      </Typography>
      <Typography variant="subtitle1" align="center" style={{ marginBottom: '20px' }}>
        Sign up to receive offers and manage your courses better
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          value={formData.username}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          value={formData.email}
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleInputChange}
            value={formData.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            onChange={handleInputChange}
            value={formData.confirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleShowConfirmPassword} edge="end">
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Create Account
        </Button>
      </form>
      <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <Link href="/login" color="primary">
          Log in
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
        By registering on CoursePRN, you agree to our Policies and Privacy Policy.
        This site is protected by the reCAPTCHA consortium and under the Google Privacy Policy and Terms of Service.
      </Typography>
    </Container>
  );
};

export default RegisterForm;

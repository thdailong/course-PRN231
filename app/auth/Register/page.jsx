'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Style from './Register.styled'
import Link from 'next/link';
import Layout from '../layput';

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
        <Layout>
            <Container maxWidth="sm">
                <Typography variant="h4" sx={Style.Title}>
                    Welcome to CoursePRN
                </Typography>
                <Typography variant="subtitle1" sx={Style.SubTitle}>
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
                <Typography variant="body2" sx={Style.BottomText}>
                    Already have an account?{' '}
                    <Link href="/login" color="primary">
                        Log in
                    </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={Style.BottomText}>
                    By registering on CoursePRN, you agree to our Policies and Privacy Policy.
                    This site is protected by the reCAPTCHA consortium and under the Google Privacy Policy and Terms of Service.
                </Typography>
            </Container>
        </Layout>
    );
};

export default RegisterForm;

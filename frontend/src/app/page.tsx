'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const defaultTheme = createTheme();

export default function SignUp() {
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const data = new FormData(event.currentTarget);
  
    const userName = data.get('userName') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const birthDate = data.get('birthDate') as string;
  
    const phoneRegex = /^(?:[0-9] ?){6,14}[0-9]$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please provide a valid phone");
      return;
    }
  
    if (password.length < 8) {
      toast.error("Your password must be at least 8 characters");
      return;
    }
  
    axios
    .post('http://localhost:3000/user/addUser', {
      userName,
      email,
      password,
      birthDate,
      phone,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred while processing your request");
    });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="userName"
                  autoComplete="userName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="birthDate"
                  type="date"
                  id="birthDate"
                />
              </Grid>
              <Grid item xs={12}>
                <PhoneInput
                  country={'tr'}
                  value={phone}
                  onChange={phone => setPhone(phone)}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
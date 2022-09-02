import React, { useState } from 'react';
import { Container, Typography, Stack, TextField, Button, FormControlLabel, Checkbox, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      {/* <LanguagePopover /> */}
      <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
        <Stack spacing={2}>
          <Typography fontSize="30px" fontWeight="bold"> Sign In </Typography>
          <Typography> Welcome back, you've been missed! </Typography>
          <Stack direction="row" spacing={3} justifyContent="space-around">
            <Button variant="outlined" startIcon={<GoogleIcon />}>
              Sigin In with Google
            </Button>
            <Button variant="outlined" startIcon={<AppleIcon />}>
              Sign In with Apple ID
            </Button>
          </Stack>
          <Typography fontSize={'20px'}> OR </Typography>
          <form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <TextField
                type="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type="password"
                label="Password"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember me"
                />

                <Link to="#" variant="subtitle2">
                  Forgot password?
                </Link>
              </Stack>
              <Button variant="contained"> Sing Up </Button>
            </Stack>
          </form>
          <Stack direction="row" spacing={2}>
            <Typography>Don't have an account?</Typography>
            <Link to="/register">Sign Up</Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default App;

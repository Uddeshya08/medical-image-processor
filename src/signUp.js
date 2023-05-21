import * as React from 'react';
import { useState } from "react";
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
import { signup } from './Services/User_Service';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useNavigate } from "react-router-dom"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Signup = () => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[email, setEmail] = useState('');
  const[name, setName] = useState('');
  const[lastName, setLastname] = useState('');
  //const[experience, setExperience] = useState('');
  const[center, setCenter] = useState('');
  const[sex, setSex] = useState('');
  const[mobileNo, setMobileNo] = useState('');
  const navigate = useNavigate();

  const signupUser = (event) => {
    const requestBody = {
        username: username,
        password: password,
        email: email,
        name:name,
        Sex: sex,
        Center: center,
        mobileNo: mobileNo
    }
    event.preventDefault();
  
    signup(JSON.stringify(requestBody))
    .then((resp) => {
        console.log(resp);
        console.log("success log")
        
        
    }).then(navigate("/signin"))

    console.log(requestBody);


  }
    

  const theme = createTheme();
 
  
  return (
    <ThemeProvider theme={theme}>
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
          <Box component="form" noValidate onSubmit={signupUser} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.currentTarget.value)}
                  label="Username"
                  name="username"
                  autoComplete="User Name"
                  margin="normal"
                />
                 <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  margin="normal"
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  label="E-mail"
                  name="email"
                  autoComplete="Email"
                  margin="normal"
                />
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  margin="normal"
                />
              </Grid>
              
               <Grid item xs={12}>
                <TextField
                  autoComplete="mobileNo"
                  name="MobileNo"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.currentTarget.value)}
                  required
                  type="number"
                  fullWidth
                  id="mobileNo"
                  label="Mobile No."
                  autoFocus
                  margin="normal"
                />
              </Grid> 
              <Grid item xs={12}>
                <TextField
                  autoComplete="Center"
                  name="Center"
                  value={center}
                  onChange={(e) => setCenter(e.currentTarget.value)}
                  required
                  fullWidth
                  id="Center"
                  label="Center"
                  autoFocus
                  margin="normal"
                />
              </Grid>   

              <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={sex}
                  onChange={(e) => setSex(e.currentTarget.value)}
                >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                 <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>
              </Grid>
             
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to the terms & conditions."
                />
              </Grid>
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );


}

export default Signup;
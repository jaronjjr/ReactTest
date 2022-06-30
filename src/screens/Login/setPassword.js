
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Auth } from 'aws-amplify';
import logo from '../../assests/bstar_logo.jpg'

const theme = createTheme();

export default function SetPassword(data) {
    
    console.log("DATA---->",data)
    const handleSubmit = async (event) => {
        event.preventDefault();
    const value = new FormData (event.currentTarget);
    console.log(event,"EVENT")
  
    let email = value.get('email');
    let password = value.get('password');
    let newPassword = value.get('new_password');
        Auth.signIn(email, password)
        .then(user => {
            
            
            Auth.completeNewPassword(
            user,               // the Cognito User Object
            newPassword      // the new password
            // OPTIONAL, the required attributes
            // {
            //   email: 'xxxx@example.com',
            //   phone_number: '1234567890'
            // }
            ).then(user => {
            // at this time the user is logged in if no MFA required
            console.log(user);
            }).catch(e => {
          console.log(e);
        });
 
    });
  }
  
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
              
              {/* <img
              src={logo}
              alt=''
              /> */}
              <Typography component="h1" variant="overline">
                Please Reset your Temporary password 
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="new_password"
                      label=" New Password"
                      type="password"
                      id="new_password"
                    //   autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                  
                </Button>
              </Box>
            </Box>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Container>
        </ThemeProvider>
      );
    
}
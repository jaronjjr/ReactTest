import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();

export default function Home(){
    const navigate= useNavigate()
  const handleSignOut = async (event) => {
   
    event.preventDefault();

    try {
      await Auth.signOut();
          navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Welcome
              </Typography>
              <Button color="inherit" onClick={handleSignOut}>Sign out</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}
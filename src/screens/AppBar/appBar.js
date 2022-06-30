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
import logo from '../../assests/bstar_logo.jpg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Outlet} from 'react-router-dom';
import { flexbox } from '@mui/system';
const theme = createTheme();

export default function Appbar(){
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
        // <Box sx={{ flexGrow: 1 ,'& button': { m: 1 } }}>
        // <Box sx={{ flexGrow: 1 }} >
        <Box  >
          <AppBar position="absolute" style={{backgroundColor:'#f2f2f2'}}>
            <Toolbar style={{justifyContent: 'space-between'  }}>
              <div style={{display:'flex', alignItems:"center"}} >
            {/* <Avatar alt="Remy Sharp" src={logo} /> */}
            <img src={logo}  alt='' /> 
            {/* <Box m={1} pt={0} flexDirection="row" justifyContent= "space-between"> */}
            <Box sx={{'& button': { m: 2 } }} >
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}  >Dashboard</Button>
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}>Job Manager</Button>
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}>Company</Button>
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}>Vendors</Button>
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}>Customers</Button>
            </Box>
            </div>
            <NotificationsIcon style={{paddingLeft:"800px"}}/>
              <Button color="inherit"  onClick={handleSignOut} style={{float: 'right'}} >Sign out</Button>
            </Toolbar>
            
          </AppBar>
          {/* < Outlet/> */}
        </Box>
        
      );
}
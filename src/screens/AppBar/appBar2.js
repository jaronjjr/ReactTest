import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Auth } from 'aws-amplify';
import { Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import logo from '../../assests/bstar2_logo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';  
import AccountMenu from './profileMenu';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import { Footer } from '../components/footer';
import { JobMenu } from '../JobManager/jobMenu';
import OpenIconSpeedDial from '../components/speedDial';
import Grid from '@mui/material/Grid';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const click=()=>{
    console.log("clck")
  }
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed"  open={open}  style={{backgroundColor:'#f2f2f2'}}>
        <Toolbar style={{ justifyContent: 'space-between' ,height:'fit-content' }}>
          <IconButton
            backgroundColor='#f2f2f2'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{display:'flex', alignItems:"center", maxHeight:'20px',flex:'1'}} >
            {/* <Avatar alt="Remy Sharp" src={logo} /> */}
            <img src={logo}  alt='' /> 
            <Box sx={{'& button': { m: 2 } ,display:'flex',maxHeight:'70px' ,alignItems:"center",width:'100%',justifyContent:'space-between'}} >
            {/* <Button variant="contained" style={{backgroundColor:'#ff7500'}}  >Dashboard</Button>
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}>Job_Manager</Button>
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}>Company</Button>
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}>Vendors</Button>
            <Button variant="contained" style={{backgroundColor:'#ff7500'}}>Customers</Button> */}
            <TabContext indicatorColor="primary" value={value} >
            <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Job Manager" value="1" onClick={click} indicatorColor="red" style={{color:'#ff7500',fontSize:"16px",fontWeight:'550'}} />
            <Tab label="Company" value="2"  style={{color:'#ff7500',fontWeight:'550'}}/>
            <Tab label="Vendors" value="3" style={{color:'#ff7500',fontWeight:'550'}}/>
            <Tab label="Employees" value="4" style={{color:'#ff7500',fontWeight:'550'}} />
          </TabList>
          </TabContext>
          <div style={{display:'flex',direction:'row', flex:'inline',alignItems:'center'}}>
            <NotificationsIcon style={{ color:'#ff7500'}}/>
            <AccountMenu />
            </div>
              {/* <Button  onClick={handleSignOut} style={{float: 'right'}} >Sign out</Button> */}
            </Box>
            </div>
            {/* <NotificationsIcon style={{paddingLeft:"800px"}}/>
              <Button color="inherit"  onClick={handleSignOut} style={{float: 'right'}} >Sign out</Button> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}  style={{height:'fit-content'}}  >
        <DrawerHeader  >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider  />
        {/* <List  >
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}> 
              <ListItemIcon  style={{color:'#ff7500'}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <JobMenu />
        {/* <Divider /> */}
        {/* <List style={{height:'fit-content'}} >
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon  style={{color:'#ff7500'}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet/>
        
      </Box>
      {/* <div  container direction="row" justifyContent="flex-end" alignItems="flex-end"  >
          <OpenIconSpeedDial 
          // style={{dire}}
          />
     </div> */}
      <div style={{ display: 'flex',
    overflow: 'auto',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor:'#000000',
    justifyContent:'center',
    height:'30px'}}>
    <Footer  />
    
    </div>
    </Box>
   
  );
}

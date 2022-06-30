import { Outlet } from "react-router-dom";
import MiniDrawer from "./appBar2";
import { JobMenu } from "../JobManager/jobMenu";
import { experimentalStyled } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Footer } from "../components/footer";
import OpenIconSpeedDial from "../components/speedDial";

const theme = createTheme();
const DashboardLayoutRoot= experimentalStyled('div')(
    ({ theme }) => ({
        // backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
     })
);

const FooterLayoutContent = experimentalStyled('div')({
    // flex: '1 1 auto',
    display: 'flex',
    overflow: 'auto',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor:'#000000',
    justifyContent:'center',
    height:'30px'
  });
  const DashboardLayoutContainer = experimentalStyled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'auto',
    paddingLeft:45,
    padding: theme.spacing.unit,
    paddingTop: 10,
    width: '100%',
    height:'650px',
    // backgroundColor:"#e6e6e6"
    
   
  });
  const DashboardLayoutWrapper = experimentalStyled('div')(
    ({ theme }) => ({
       display: 'flex',
    //    flex: '1 1 auto',
    // flex: '1',
       overflow: 'hidden',
       paddingTop: 80, 
    //    float: "left",
    //    position:"relative",
       justifyContent: "flex-start",
      //  height:'1000px'
       
    })
  );

  const LayoutStyle = experimentalStyled('div')(
    ({ theme }) => ({
        display: 'flex',
   //   //    flex: '1 1 auto',
   //   flex: '1',
   //      // overflow: 'hidden',
   //      // paddingTop: 80, 
   //   //    float: "left",
   //   //    position:"relative",
   //      justifyContent: "flex-start",
   //      height:'90%'
   direction:"row",
    justifyContent:"flex-end" ,
    alignItems:"flex-end" 
        
     })
  );


export const Layoutv2=()=>{
    return(
    <div>
        {/* <LayoutStyle> */}
        <MiniDrawer/>
        {/* </LayoutStyle> */}
        {/* <DashboardLayoutWrapper> */}
        {/* <JobMenu/> */}
        <DashboardLayoutContainer>
        <Outlet/>
        </DashboardLayoutContainer>
        {/* </DashboardLayoutWrapper> */}
        <FooterLayoutContent>
        < Footer/>
        </FooterLayoutContent>
        
        {/* <Appbar />
        <JobMenu />
        <Outlet/> */}
    </div>
    )
}
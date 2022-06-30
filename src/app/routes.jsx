// import React from "react";
// import { Route, Switch } from "react-router"; 
// import FirstScreen from "../screens/firstScreen";

// const Routes=()=>{
//     <Switch>
//         <Route exact path='/' component={FirstScreen}></Route>
//     </Switch>
// };

// export default Routes
////

// import { Navigate } from 'react-router-dom';
import FirstScreen from "../screens/firstScreen";
import SignIn from "../screens/Login/login";
import SetPassword from "../screens/Login/setPassword";
import Signup from "../screens/Login/signUp";
import Confirmation from "../screens/Login/confirmation";
import Home from "../screens/Home/home";
import Appbar from "../screens/AppBar/appBar";
import Dashboard from "../screens/Dashboard/dashboard";
import { Sales } from "../screens/Dashboard/sales";
import { JobMenu } from "../screens/JobManager/jobMenu";
import { AppBarLayout } from "../screens/AppBar";
// import { JobList } from "../screens/JobManager/jobList";
import JobList from "../screens/JobManager/jobList";
import MiniDrawer from "../screens/AppBar/appBar2";
import { Layoutv2 } from "../screens/AppBar/indexv2";
const Routes=[
    {
        path:"star",
        element:<AppBarLayout />,
        children:[
            {path: "dashboard",element:< JobList/>}
        ]
    },
    {
        path:'/',
        // element:<SignIn />,
        children: [
            { path: 'login', element: <SignIn /> },
        { path:'setPassword', element: <SetPassword />},
        { path:'signUp', element: <Signup />},
        { path:'verify', element: <Confirmation />},
        { path:'home', element: <Appbar />},
        { path:'demo', element: <MiniDrawer />}]
    },
    {
        path:"v2",
        element:<MiniDrawer />,
        children:[
            {path: "dashboard",element:< JobList/>}
        ]
    },
    {
        path:"v3",
        element:<Layoutv2 />,
        children:[
            {path: "dashboard",element:< JobList/>}
        ]
    },
    
]
export default Routes;  
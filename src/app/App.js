// import logo from '../logo.svg';
// import '../App.css';
// import axios from 'axios';

// function App() {
//   const handleSubmit=()=>{
//     axios.get('https://05uaq5zxq4.execute-api.us-east-1.amazonaws.com/Prod/api',{
//     })
//     .then(function(data){
//       console.log(data,"okok")
//     })
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           AWS.
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://05uaq5zxq4.execute-api.us-east-1.amazonaws.com/Prod/api"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React with SAM response
//         </a> */}
//       <button
//         onClick={() => handleSubmit()}>
//           click
//           </button>
//       </header>
//     </div>
//   );
// }

// import React from "react";
// import { ConnectedRouter } from "connected-react-router";
// import Routes from "./routes";

// const App = () => {
//   return (
   
//         // <ConnectedRouter history={history}>
//         <ConnectedRouter >
//           <Routes />
//         </ConnectedRouter>
//   );
// // };
// import './App.css';
// import { useRoutes } from 'react-router-dom';
// import { ThemeProvider } from '@material-ui/core/styles';
// import GlobalStyles from './components/GlobalStyles';
import { useRoutes } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import appRoutes from './routes'; 
import Amplify from 'aws-amplify'
import{ COGNITO } from '../config/awsConfig'
// import theme from './theme'

// function App() {
//   const routing = useRoutes(appRoutes)
//   return (
  
//       { routing }
//   );
// }
//
Amplify.configure({
  aws_cognito_region: COGNITO.REGION,
  aws_user_pools_id: COGNITO.USER_POOL_ID,
  aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
});

const AppRoute = () => {
  const routing = useRoutes(appRoutes);
  return (
      < >
      {/* //     <GlobalStyles /> */}
          {routing}
      </>
  );
}
const App = () => {
  return (
      <Router>
          <AppRoute />
      </Router>
  );
};

export default App;


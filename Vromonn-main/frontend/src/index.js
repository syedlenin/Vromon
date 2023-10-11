import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
<Auth0Provider
    domain="dev-3i48ydnh4ifo0mx0.us.auth0.com"
    clientId="rYcuGoc9YNYcXYVqWTJNbpQimJH0WOyu"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  //<React.StrictMode>
   
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
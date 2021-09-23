import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider domain="dev-j2p-9efz.us.auth0.com"
    clientId="5qgMpIjNorzxdZWKthZFyIqsL27odAv6"
    redirectUri={window.location.origin}>
    <Application />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



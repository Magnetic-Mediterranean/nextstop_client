import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
<Auth0Provider
  domain="dev-51eeygxt.us.auth0.com"
  clientId="UO74hTkx3mu5uCoLRwcMMYOxAw0Kmq3u"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
document.getElementById('app'));
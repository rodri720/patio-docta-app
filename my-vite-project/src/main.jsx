import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ChakraProvider>
    <Auth0Provider
      domain="dev-pkerk343c7ujo0mk.us.auth0.com"
      clientId="xNx4iYK5sn9KeZ7mpL5JFoZebUVpEGZX"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </ChakraProvider>
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';

// Utiliza createRoot para obtener un objeto root con el método hydrate
const root = ReactDOM.createRoot(document.getElementById('root'));

// Enciende el enfoque en el árbol raíz
root.hydrate(
  <ChakraProvider>
    <React.StrictMode>
      <Auth0Provider
        domain="dev-g5p2cfdaidwx2qr2.us.auth0.com"
        clientId="XuM887ndNrrhSSr4wF5Ut1c94EVG8VBI"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </ChakraProvider>
);

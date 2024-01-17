import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';// eslint-disable-next-line
import './Login.css';


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()}>Login</button>
  );
};
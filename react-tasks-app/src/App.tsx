import React from 'react';
import logo from './logo.svg';
import LoginButton from './componentsLogin/LoginButton';
import LogoutButton from './componentsLogin/LogoutButton';
import Profile from './componentsLogin/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  return (
    <>
    <LoginButton/>
    <LogoutButton/>
    <Profile/>
    </>
  );
}

export default App;

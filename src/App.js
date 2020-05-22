import React from 'react';

import Main from "./screens/Main"
import AuthProvider from './components/auth/Auth-context';
import NotificationProvider from './components/notification/Notification-context'

import { BrowserRouter as Router } from "react-router-dom";

// eslint-disable-next-line
function App({}) {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <Main/>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

import React from 'react';

import Main from "./screens/Main"
import AuthProvider from './components/auth/Auth-context';
import NotificationProvider from './components/notification/Notification-context'

import { BrowserRouter as Router } from "react-router-dom";
import './App.less';
// eslint-disable-next-line
function App(props) {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <Main {...props}/>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

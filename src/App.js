import React from "react";

import AuthProvider from "./components/auth/Auth-context";
import NotificationProvider from "./components/notification/Notification-context";

import { BrowserRouter as Router } from "react-router-dom";
import "./App.less";
import AppRoute from "./layout/AppRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <AppRoute />
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

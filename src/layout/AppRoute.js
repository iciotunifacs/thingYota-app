import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import AuthProvider from "../components/auth/Auth-context";

import Login from "../screens/Login";
import Singup from "../screens/Singup";
import Home from "../screens/Home"

const AppRoute = (props) => {
  return (
    <AuthProvider>
      <Router>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/singup" component={Singup}/>
          <PrivateRoute exact path="/" component={Home}/>
      </Router>
    </AuthProvider>
  );
}

export default AppRoute;

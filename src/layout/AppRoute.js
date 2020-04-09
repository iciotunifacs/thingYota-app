import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import { AuthContext } from "../components/auth/Auth-context";

import Login from "../screens/Login";
import Home from "../screens/Home"

const AppRoute = (props) => {
  return (
    <AuthContext.Provider value={false}>
      <Router>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/home" component={Home}/>
      </Router>
    </AuthContext.Provider>
  );
}

export default AppRoute;

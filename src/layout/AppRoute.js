import React from "react";

import { Route, Switch } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import Login from "../screens/Login";
import Singup from "../screens/Singup";
import Home from '../screens/Home'
import Buckets from '../screens/Buckets'
import SingleBucket from '../screens/SingleBucket'
import WaterBoxContainer from '../screens/WaterBoxContainer'
import Exceptions from '../screens/Exceptions'
import Profile from '../screens/Profile'
import Statistics from '../screens/Statistics'

const AppRoute = (props) => {
  return (
      <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/singup" component={Singup}/>
          <Route exact path="/datasheet" component={Home}/>
          <Route exact path="/box" component={WaterBoxContainer} />
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute exact path="/buckets" component={Buckets}/>
          <PrivateRoute exact path="/bucket/:bucketId" component={SingleBucket}/>
          <PrivateRoute exact path="/bucket/:bucketId" component={SingleBucket}/>
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute exact path="/statistics" component={Statistics}/>
          <Route component={Exceptions}/>
      </Switch>
  );
}

export default AppRoute;

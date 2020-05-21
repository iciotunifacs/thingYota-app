import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import Login from "../screens/Login";
import Singup from "../screens/Singup";
import Home from '../screens/Home'
import Buckets from '../screens/Buckets'
import SingleBucket from '../screens/SingleBucket'
import WaterBoxContainer from '../screens/WaterBoxContainer'

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
          {/* <Route component={Exceptions({type: 404})}/> */}
      </Switch>
  );
}

export default AppRoute;

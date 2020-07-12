import React, { useEffect } from "react";

import { BrowserRouter as Router ,Route, Switch } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import Login from "../screens/Login";
import Singup from "../screens/Singup";
import Logout from "../screens/Logout";
import Home from '../screens/Home'
import Buckets from '../screens/Buckets'
import BucketCreate from '../screens/Bucket-create'
import SingleBucket from '../screens/SingleBucket'
import WaterBoxContainer from '../screens/WaterBoxContainer'
import Exceptions from '../screens/Exceptions'
import Profile from '../screens/Profile'
import Statistics from '../screens/Statistics'
import Devices from '../screens/Devices';
import DeviceCreate from '../screens/Device-create';
import ActuatorScreen from '../screens/ActuatorScreen';
import SensorScreen from '../screens/SensorScreen';

const AppRoute = () => {
  return (
    // <Router>
      <Switch>

          <Route path="/login" component={Login}/>
          <Route path="/singup" component={Singup}/>
          <Route path='/logout' component={Logout}/>

          <PrivateRoute exact path="/" component={Home}/>

          <PrivateRoute path="/devices" component={Devices} />
          <PrivateRoute exact path="/devices/create" component={DeviceCreate} />
          <PrivateRoute path="/buckets" component={Buckets}/>
          <PrivateRoute exact path="/buckets/create" component={BucketCreate}/>
          <PrivateRoute exact path="/bucket/:bucketId" component={SingleBucket}/>
          <PrivateRoute exact path="/bucket/:bucketId" component={SingleBucket}/>
          <PrivateRoute path="/profile" component={Profile}/>
          <PrivateRoute path="/statistics" component={Statistics}/>
          <Route component={Exceptions}/>
      </Switch>
    // </Router>
  );
}

export default AppRoute;

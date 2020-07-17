import React, { Suspense, lazy } from "react";

import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { Spin } from "antd";

const Login = lazy(() => import("../screens/Login"));
const Singup = lazy(() => import("../screens/Singup"));
const Logout = lazy(() => import("../screens/Logout"));
const Home = lazy(() => import("../screens/Home"));
const Buckets = lazy(() => import("../screens/Buckets"));
const BucketCreate = lazy(() => import("../screens/Bucket-create"));
const SingleBucket = lazy(() => import("../screens/SingleBucket"));
const WaterBoxContainer = lazy(() => import("../screens/WaterBoxContainer"));
const Exceptions = lazy(() => import("../screens/Exceptions"));
const Profile = lazy(() => import("../screens/Profile"));
const Statistics = lazy(() => import("../screens/Statistics"));
const Devices = lazy(() => import("../screens/Devices"));
const DeviceCreate = lazy(() => import("../screens/Device-create"));
const ActuatorScreen = lazy(() => import("../screens/ActuatorScreen"));
const SensorScreen = lazy(() => import("../screens/SensorScreen"));

const AppRoute = (props) => {
  return (
    <Suspense fallback={<Spin/>}>
      <Switch>

        <Route path="/login" component={Login} />
        <Route path="/singup" component={Singup} />
        <Route path="/logout" component={Logout} />

        <PrivateRoute exact path="/" component={Home} />

        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/statistics" component={Statistics} />

        <PrivateRoute exact path="/devices" component={Devices} />
        <PrivateRoute exact path="/devices/create" component={DeviceCreate} />

        <PrivateRoute exact path="/buckets" component={Buckets} />
        <PrivateRoute exact path="/buckets/create" component={BucketCreate} />
        <PrivateRoute exact path="/bucket/:bucketId" component={SingleBucket} />
        <PrivateRoute exact path="/bucket/:bucketId" component={SingleBucket} />

        <Route component={Exceptions} />
      </Switch>
    </Suspense>
  );
};

export default AppRoute;

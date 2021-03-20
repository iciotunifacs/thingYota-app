import React from "react";
import SinginView from "../components/auth/SinginView-container";
import DefaultScreen from "../layout/DefaultScreen";
const Login = (props) => {
  return (
    <DefaultScreen>
      <SinginView {...props} />
    </DefaultScreen>
  );
};

export default Login;

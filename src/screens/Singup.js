import React from "react";
import SingupView from "../components/auth/SingupView-container";
import DefaultScreen from "../layout/DefaultScreen";
const Singup = (props) => {
  return (
    <DefaultScreen>
      <SingupView {...props} />
    </DefaultScreen>
  );
};

export default Singup;

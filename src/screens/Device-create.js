import React from "react";
import DeviceCreate from "../components/device/DeviceCreateView-container";
import DefaultScreen from "../layout/DefaultScreen";

const DeviceScreen = (props) => {
  return (
    <DefaultScreen>
      <DeviceCreate {...props} />;
    </DefaultScreen>
  );
};

export default DeviceScreen;

import React from "react";

import DeviceView from "../components/device/DeviceView-container";
import DefaultScreen from "../layout/DefaultScreen";

function Devices(props) {
  return (
    <DefaultScreen>
      <DeviceView {...props} />
    </DefaultScreen>
  );
}

export default Devices;

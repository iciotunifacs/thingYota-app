import React from "react";

import { SensorViewContainer } from "./Sensor.style";

import { Typography } from "antd";

import SensotGrid from "./SensorGrid";
import SensorList from "./SensorList";

const { Title } = Typography;

const SensorSwitch = ({ sensors, scenary }) => {
  switch (scenary) {
    case "list":
      return <SensorList sensors={sensors} />;
    case "grid":
    default:
      return <SensotGrid sensors={sensors} />;
  }
};

const SensorView = ({ sensors, scenary }) => {
  return (
    <SensorViewContainer>
      <Title level={3}>Sensores</Title>
      <SensorSwitch sensors={sensors} scenary={scenary} />
    </SensorViewContainer>
  );
};

export default SensorView;

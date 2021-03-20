import React from "react";

import { SensorViewContainer } from "./Sensor.style";

import { Typography } from "antd";

import SensotGrid from "./SensorGrid";
import SensorList from "./SensorList";

import Exceptions from '../../screens/Exceptions'

const { Title } = Typography;

const SensorSwitch = ({ sensors, scenary }) => {

  if (sensors.length < 1) return (
    <Exceptions type='not_have' text="Não há sensores a serem listados" />
  )

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

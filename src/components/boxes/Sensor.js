import React from "react";
import "./Sensor.css";

import {
  SensorContainer,
  Sensortoggle
} from './Boxes-style'

export default function Sensor({status}) {
  return (
    <SensorContainer>
      <div className="red-glass"></div>
      <Sensortoggle status={status}/>
      <span className="green-glass"></span>
    </SensorContainer>
  );
}

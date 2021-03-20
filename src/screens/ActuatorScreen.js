import React from "react";
import Actuator from "../components/forms/Actuator.js";
import { Typography } from "antd";
import DefaultScreen from "../layout/DefaultScreen.js";

const { Title } = Typography;

const ActuatorScreen = (props) => {
  return (
    <DefaultScreen>
      <div style={containerStyle} {...props}>
        <Title level={2} style={titleStyle}>
          Add an actuator (description??)
        </Title>
        <Actuator />
      </div>
    </DefaultScreen>
  );
};

const containerStyle = {
  margin: "0px auto",
  background: "white none repeat scroll 0% 0%",
  borderRadius: "4px",
  padding: "2em",
};
const titleStyle = {
  textAlign: "center",
};
export default ActuatorScreen;

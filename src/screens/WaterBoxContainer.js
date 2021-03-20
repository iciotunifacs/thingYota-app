import React from "react";
import WaterBox from "../components/boxes/WaterBox";
import Pipe from "../components/boxes/Pipe";
import Sensor from "../components/boxes/Sensor";
import DefaultScreen from "../layout/DefaultScreen";

const WaterBoxContainer = (props) => {
  return (
    <DefaultScreen>
      <div style={containerStyle}>
        <WaterBox volume={100} title="Caixa 1" />
        <WaterBox volume={50} title="Caixa 2" size="large" />
        <Pipe />
        <Sensor status={true} />
        <Sensor status={false} />
      </div>
    </DefaultScreen>
  );
};

const containerStyle = {
  display: `flex`,
  margin: `0 auto`,
  background: "white",
  borderRadius: "8px",
};
export default WaterBoxContainer;

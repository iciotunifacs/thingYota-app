import React from "react";
import "./WaterBox.css";

export default function WaterBox(props) {
  return (
    <div>
      <div id="water-box" title={props.title}>
        <div id="water" style={{ top: props.volume + "px" }}>
          <div id="waves">
            <div id="wave" class="wave1"></div>
            <div id="wave" class="wave2"></div>
            <div id="wave" class="wave3"></div>
          </div>
          <div id="water-lvl"></div>
        </div>
      </div>
      <div style={textStyle}>{props.title}</div>
      {/*<Percent percent={props.volume}/>*/}
    </div>
  );
}

const textStyle = {
  padding: "0.5em 9em",
  color: "#42a6ff",
  fontWeight: "bold",
  fontSize: "1.5em",
  textTransform: "capitalize",
};

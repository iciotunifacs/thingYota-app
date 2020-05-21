import React from "react";

import "./WaterBox.css";

import {
  BoxesText
} from './Boxes-style'

export default function WaterBox(props) {
  return (
    <div>
      <div id="water-box" title={props.title}>
        <div id="water" style={{ top: 300- (props.volume*3) + "px" }}>
          <div id="waves">
            <div id="wave" class="wave1"></div>
            <div id="wave" class="wave2"></div>
            <div id="wave" class="wave3"></div>
          </div>
          <div id="water-lvl"></div>
        </div>
      </div>
      <BoxesText>
        {props.title}
      </BoxesText>
      {/*<Percent percent={props.volume}/>*/}
    </div>
  );
}

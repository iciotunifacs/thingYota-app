import React from "react";

import "./WaterBox.css";

import {
  BoxesText,
  WaterBoxContainer,
  WaterLvlContainer,
  WaveContainer,
  WaveItem
} from './Boxes-style'

export default function WaterBox({title, volume}) {
  return (
    <div>
      <WaterBoxContainer title={title}>
        <div style={{ top: `${300-(volume*3)}px`, position: 'relative'}}>
          <WaveContainer>
            <div id="wave" class="wave1"></div>
            <div id="wave" class="wave2"></div>
            <div id="wave" class="wave3"></div>
          </WaveContainer>
          <WaterLvlContainer/>
        </div>
      </WaterBoxContainer>
      <BoxesText>
        {title}
      </BoxesText>
      {/*<Percent percent={.volume}/>*/}
    </div>
  );
}

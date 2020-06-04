import React from "react";

import "./WaterBox.css";

import {
  BoxesText,
  WaterBoxContainer,
  WaterLvlContainer,
  WaveContainer,
  BottomBox
  // WaveItem
} from './Boxes-style'

import WaterContainer from './WaterContainer.js'
const sizes = {
  sm:{
    tamAgua:'40px',
    topBase: '0',
    tamCaixa: '50px'//height e width
  },
  md:{
    tamAgua:'136px',
    topBase: '0',
    tamCaixa: '150px'
  },
  lg:{
    tamAgua:'300px',
    topBase: '88',
    tamCaixa: '150px'
  }
}
const {sm, md, lg} = sizes;
export default function WaterBox({title, volume, size}) {
  return (
    <>
       <WaterContainer proportions= {lg} volume = {volume} />
      <BoxesText>
        {title}
      </BoxesText>
      {/*<Percent percent={.volume}/>*/}
    </>
  );
}

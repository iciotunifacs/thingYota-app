import Styled from 'styled-components'

export const PercentContainer = Styled.div`
  width: "100px";
  height: "100px";
  background: "white";
  border: "2px solid blue";
  border-radius: "8px";
`
export const BoxesText = Styled.div`
  padding: "0.5em 9em";
  color: "#42a6ff";
  font-weight: "bold";
  font-size: "1.5em";
  text-transform: "capitalize";
`
export const PipeContainer = Styled.div`
  width: "500px";
  height: "44px";
  background: "linear-gradient(#c1c1c1,#3c3c3c)";
  border: "1px solid rgb(26, 25, 25)";
  border-top-left-radius: "30px";
  border-bottom-left-radius: "30px";
  border-top-right-radius: "25px";
  border-bottom-right-radius: "25px";
`
export const HoleContainer = Styled.div`
  width: "43px";
  height: "43px";
  background: "rgba(0, 0, 0, 0) linear-gradient(black, rgb(49, 48, 48)) repeat scroll 0% 0%";
  border-radius: "100%";
  position: "relative";
  left: "40px";
  border-right: "1px solid black";
  border-left: "1px solid black";
`

export const WaterBoxContainer = Styled.div`
  background: #fff;
  padding: 5px;
  border-bottom-left-radius: 0.8em;
  border-bottom-right-radius: 0.8em;
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
  border-left: 4px solid var(--water-color);
  border-bottom: 4px solid var(--water-color);
  border-right: 4px solid var(--water-color);
  overflow: hidden;
  width: 400px;
  margin: 2em;
  box-shadow: inset -4px -4px #fff, inset 4px -4px #fff;
`
export const WaterLvlContainer = Styled.div`
  width: 100%;
  height: 300px;
  background: var(--water-color);
  transition: 2s height;
  position: relative;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`
export const WaveItem = Styled.div`
  background: url(waveImg);
  background-size: 400px;
  box-sizing: border-box;
  height: 35px;
`

export const WaveContainer = Styled.div`
  position: relative;
  top: 72px;
`
export const Water = Styled.div`
  position: 'relative';
`
export const SensorContainer = Styled.div`
  background: linear-gradient(#e3e3e3, #ccc, #777);
  width: 70px;
  height: 100px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid #ccc;
`

export const Sensortoggle = Styled.span`
  background: ${props => props.status ? "green" : "red"}
  width: 30px
  height: 50px;
  display: block;
  position: relative;
  left: 18px;
  top: 12px;
box-shadow: ${props => props.status ?
  'inset 2px 4px 5px #02863c66, inset -2px -4px 10px #02861066,2px 2px 10px #21c100, -2px -2px 10px #2cff00' :
  'inset 2px 4px 5px #86020266, inset -2px -4px 5px #86020266,2px 2px 2px #d2d2d2, -2px -2px 2px #bfbfbf'}
  border-radius: 4px;
`
export const BottomBox = Styled.span`
  width: 100%;
  height: 4px;
  background: #fff;
  position: absolute;
  right: 1px;
  z-index: 99999;
  bottom: 0.010em;
  border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
`
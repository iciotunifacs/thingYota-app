import React from 'react'
import WaterBox from '../components/boxes/WaterBox';
import Pipe from '../components/boxes/Pipe';
import Sensor from '../components/boxes/Sensor';

const  WaterBoxContainer = (props) => {
  return (
    <div style={containerStyle}>
      <WaterBox volume={10} title="Caixa 1"/>
      <WaterBox volume={100} title="Caixa 2"/>
      <Pipe/>
      <Sensor status={true}/>
      <Sensor status={false}/>
    </div>
  )
}

const containerStyle = {
  display: `flex`,
  margin: `0 auto`,
  background: 'white',
  borderRadius: '8px'
}
export default WaterBoxContainer

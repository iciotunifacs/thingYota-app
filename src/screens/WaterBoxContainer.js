import React from 'react'
import WaterBox from '../components/boxes/WaterBox';
import Pipe from '../components/boxes/Pipe'

const  WaterBoxContainer = (props) => {
  return (
    <div style={containerStyle}>
      <WaterBox volume={100} title="Caixa 1"/>
      <WaterBox volume={60} title="Caixa 2"/>
      <Pipe />
    </div>
  )
}

const containerStyle = {
  display: `flex`,
  margin: `0 auto`,
  background: 'white',
  borderRadius: '8px'
}
export default WaterBoxContainer;

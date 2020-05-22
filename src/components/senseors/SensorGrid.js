import React from 'react'

import {
  SensorGridContainer
} from './Sensor.style'

import SensorItem from './SensorItem'

function SensorList({sensors}) {
  return (
    <SensorGridContainer>
      {sensors.map(sensor => (<SensorItem sensor={sensor}/>))}
    </SensorGridContainer>
  )
}

export default SensorList

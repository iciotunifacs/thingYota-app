import React from 'react'

import SensotGrid from './SensorGrid'
import SensorList from './SensorList'

const SensorView = ({sensors, scenary}) => {
  switch (scenary) {
    case "list":
      return (
        <SensorList sensors={sensors}/>
      )
    case 'grid':
    default:
      return (
        <SensotGrid sensors={sensors}/>
      )
  }
}

export default SensorView

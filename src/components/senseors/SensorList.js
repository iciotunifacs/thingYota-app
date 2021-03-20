import React from 'react'

import SensorItem from './SensorItem'

function SensorList({sensors}) {
  return (
    <div>
      {sensors.map(sensor => (<SensorItem sensor={sensor}/>))}
    </div>
  )
}

export default SensorList

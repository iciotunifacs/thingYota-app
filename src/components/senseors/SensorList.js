import React from 'react'

import SensorItem from './SensorItem'

function SensorList({sensors}) {
  const s = [
    {name : "Teste", last_change: "teste", value: 3}
  ]
  console.log(sensors)
  return (
    <div>
      {sensors.map(sensor => (<SensorItem sensor={sensor}/>))}
    </div>
  )
}

export default SensorList

import React from 'react'

import {
  Card,
  Badge
} from 'antd'

import {
  CardContainer,
  CardItem,
  CardLabel
} from './Sensor.style'

import {
  formatDistance,
} from 'date-fns'

import {
  enUS
} from 'date-fns/locale'

function SensorItem({ sensor }) {
  return (
    <Card
      title={sensor.name}
      style={{width: '20vw'}}
      extra={
       <Badge status={sensor.status ? 'success' : 'error'} />
      }>
      <CardContainer>
        <CardItem>
          <CardLabel>Last register</CardLabel>
          <p>{formatDistance(new Date(sensor.last_change), Date.now(), {
            includeSeconds: true,
            locale: enUS
          })} </p>
        </CardItem>
        {sensor.value && (
          <CardItem>
            <CardLabel>Value</CardLabel>
            <p>{sensor.value.data}</p>
          </CardItem>
        )}
      </CardContainer>
    </Card>
  )
}

export default SensorItem

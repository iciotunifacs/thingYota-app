import React from 'react'

import {
  Card,
  Descriptions
} from 'antd'

import {
  CardContainer
} from './Sensor.style'

const {Item} =Descriptions;

function SensorItem({sensor}) {
  return (
    <CardContainer>
      <Card title={sensor.name}>
        <Descriptions>
          <Item label='Last register'>{sensor.register}</Item>
        </Descriptions>
      </Card>
    </CardContainer>
  )
}

export default SensorItem

import React from 'react'

import {
  Card,
  Descriptions,
  Badge
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
          <Item label='Last register'>{sensor.last_change}</Item>
          <Item label='value'>{sensor.value.data}</Item>
          <Item label='status'>{sensor.value.data}
            <Badge status={sensor.status ? 'success' : 'error'}/>
          </Item>
          <Item label='value'>{sensor.value.data}</Item>
        </Descriptions>
      </Card>
    </CardContainer>
  )
}

export default SensorItem

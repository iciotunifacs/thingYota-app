import React from 'react';
import Sensor from '../components/forms/Device.js';
import { Typography } from 'antd';

const { Title } = Typography;


const  SensorScreen = (props) => {
  return (
    <div style={containerStyle}>
        <Title level={2} style={titleStyle}>Add an sensor (like a mechanical or enviromental one)</Title>
        <Sensor />
    </div>
  )
}

const containerStyle = {
  margin: '0px auto',
  background: 'white none repeat scroll 0% 0%',
  borderRadius: '4px',
  padding: '2em'
}
const titleStyle = {
  textAlign: 'center'
}
export default SensorScreen;

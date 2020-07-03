import React from 'react';
import Actuator from '../components/forms/Actuator.js';
import { Typography } from 'antd';

const { Title } = Typography;


const  ActuatorScreen = (props) => {
  return (
    <div style={containerStyle}>
        <Title level={2} style={titleStyle}>Add an actuator (description??)</Title>
        <Actuator />
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
export default ActuatorScreen;

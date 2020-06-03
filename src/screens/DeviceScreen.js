import React from 'react';
import Device from '../components/forms/Device.js';
import { Typography } from 'antd';

const { Title } = Typography;


const  DeviceScreen = (props) => {
  return (
    <div style={containerStyle}>
        <Title level={3} style={titleStyle}>Add an device (like arduino or esp)</Title>
        <Device />
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
export default DeviceScreen;

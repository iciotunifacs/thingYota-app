import React from 'react';
import { Form, Input, Button, Select, Switch } from 'antd';
import './formNormalize.css';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Sensor = () => {
  const [form] = Form.useForm();


  const onFinish = values => {
    console.log(values);
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="sensorName" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      
      <Form.Item name="sensorType" label="Sensor type" rules={[{ required: true }]}>
        <Select
          placeholder="Select a type for the sensor"
        >
          <Option value="pressure">Pressure</Option>
          <Option value="volume">Volume</Option>
        </Select>
      </Form.Item>

      <Form.Item name="sensorStatus" label="Status" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

      </Form.Item>
    </Form>
  );
};

export default Sensor;

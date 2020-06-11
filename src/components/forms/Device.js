import React from 'react';
import { Form, Input, Button, Select } from 'antd';
// import './formNormalize.css';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Device = () => {
  const [form] = Form.useForm();


  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="name" label="Device name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="mac" label="Mac address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

      </Form.Item>
    </Form>
  );
};

export default Device;

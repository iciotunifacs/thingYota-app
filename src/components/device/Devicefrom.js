import React from "react";
import { Form, Input, Button, Select } from "antd";
// import './formNormalize.css';

import { FormContainer } from "./Device-style";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Device = () => {
  return (
    <Form {...layout} name="control-hooks">
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

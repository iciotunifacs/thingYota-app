import React from "react";
import { Form, Input, Button, Layout, Row, Col, Typography } from "antd";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 32 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Device = (props) => {
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

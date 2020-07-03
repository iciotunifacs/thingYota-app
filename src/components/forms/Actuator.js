import React from "react";
import { Form, Button, Input } from "antd";
// import "./formNormalize.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Actuator = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {};

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name={["actuator", "rules"]} label="Rules">
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Actuator;

import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Switch,
} from "antd";

import Target from '../target/TargetView-container'

const BucketForm = (props) => {
  const [sensorList, setSensorlist] = useState([
    {title: "sensor 1", description: "sensor 1"},
    {title: "sensor 2", description: "sensor 2"}
  ]);
  const [selectSensor, setSelectSensor] = useState([]);
  const [actorList, setActorlist] = useState([]);

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 12 }}
      layout="horizontal"
      initialValues={{ size: "small" }}
    >
      <Form.Item label="Name">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="whater-sensor">
            whater-sensor (default)
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Volume">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Status">
        <Switch />
      </Form.Item>
      <Target
        data={sensorList}
        setData={setSensorlist}
        target={selectSensor}
        setTarget={setSelectSensor}
      />
    </Form>
  );
};

export default BucketForm;

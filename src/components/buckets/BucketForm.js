import React, { useState, useReducer, useEffect } from "react";
import { Form, Input, Button, Select, InputNumber, Switch } from "antd";

import Target from "../target/TargetView-container";

import {
  initialState as initialSensorsState,
  reducer as sensorsReducer,
} from "../senseors/Sensor-reducer";
import { getSensors } from "../senseors/Sensor-action";
import { mockSensorsForTarget } from "../senseors/Sensor-utils";

const BucketForm = (props) => {
  const [sensorsState, sensorsDispatch] = useReducer(
    sensorsReducer,
    initialSensorsState
  );

  const [selectSensor, setSelectSensor] = useState([]);
  const [actor, setActor] = useState([]);
  const [selectActor, setSelectActor] = useState([]);

  useEffect(() => {
    getSensors(sensorsDispatch, {
      params: {populate: true}
    });
  }, []);

  if (sensorsState.loading) return <div>Loading....</div>;

  if (sensorsState.error) return <div>Error...</div>;

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
      {sensorsState.data && (
        <Target
          data={mockSensorsForTarget(sensorsState.data)}
          target={selectSensor}
          setTarget={setSelectSensor}
        />
      )}
      <Target data={actor} target={selectActor} setTarget={setSelectSensor} />
    </Form>
  );
};

export default BucketForm;

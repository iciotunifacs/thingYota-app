import React, { useReducer, useState, useEffect } from "react";
import { Form, Input, Button, notification, message} from "antd";

import {
  initialState as initialDeviceState,
  reducer as deviceReducer,
} from "./Device-reducer";

import { createDevice } from "./Device-action";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 32 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const openNotification = ({setShowAlet}) => {
  notification.open({
    message: "Sucesso",
    description: "Elemento Criado",
    onClick: () => setShowAlet(false),
  });
};
const Device = (props) => {
  const [macAddtes, setMacAddres] = useState("");
  const [name, setName] = useState("");
  const [showAlert, setShowAlet] = useState(false);

  const [{ called, result }, deviceDispatch] = useReducer(
    deviceReducer,
    initialDeviceState
  );

  useEffect(() => {
    if (called && result) {
      setShowAlet(true);
    }
  }, [called, result]);
  return (
    <>
      <Form {...layout} name="control-hooks">
        <Form.Item name="name" label="Device name" rules={[{ required: true }]}>
          <Input onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item name="mac" label="Mac address" rules={[{ required: true }]}>
          <Input onChange={(e) => setMacAddres(e.target.value)} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e) => {
              createDevice(deviceDispatch, {
                mac_addres: macAddtes,
                name,
              }).then(data => {
                message.success(`Dispositivo criado com sucesso`);
              }).catch(error => {
                message.error("Erro ao cadastrar dispositivi")
              })
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      {showAlert && (
        <openNotification setShowAlet={setShowAlet}/>
      )}
    </>
  );
};

export default Device;

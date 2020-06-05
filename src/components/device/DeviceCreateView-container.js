import React from "react";
import DeviceForm from "./Devicefrom";

import { FormContainer } from "./Device-style";
import { Typography } from "antd";

const { Title } = Typography;

const DeviceCreateView = (props) => {
  return (
    <FormContainer>
      <Title level={1}>Add an device (like arduino or esp)</Title>
      <DeviceForm />
    </FormContainer>
  );
};

export default DeviceCreateView;

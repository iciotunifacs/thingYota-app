import React from "react";
import DeviceForm from "./Devicefrom";

import { FormContainer } from "./Device-style";
import { Typography} from "antd";

import { PageView } from "../../Base-style";

const { Title } = Typography;


const DeviceCreateView = (props) => {
  return (
    <PageView>
      <Title level={2}>Add an device (like arduino or esp)</Title>
      <FormContainer>
            <DeviceForm />
      </FormContainer>
    </PageView>
  );
};

export default DeviceCreateView;

import React from "react";

import { Link } from "../../utils/routing";
import { Button } from "antd";

import { PageView } from "../../Base-style";

import DeviceList from './DeviceList'

function DeviceView() {
  return (
    <PageView>
      <Link to="/devices/create">
        <Button> Criar dispositivo</Button>
      </Link>
      <DeviceList/>
    </PageView>
  );
}

export default DeviceView;

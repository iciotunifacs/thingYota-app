import React, { lazy, Suspense } from "react";

import { Link } from "../../utils/routing";
import { Button, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { PageView } from "../../Base-style";

const DeviceList = lazy(() => import("./DeviceList"));

const DeviceView = () => {
  return (
    <PageView>
      <Link to="/devices/create">
        <Button type="primary">
          Criar dispositivo
          <PlusOutlined />
        </Button>
      </Link>
      <Suspense fallback={<Spin tip="Carregando" />}>
        <DeviceList />
      </Suspense>
    </PageView>
  );
};

export default DeviceView;

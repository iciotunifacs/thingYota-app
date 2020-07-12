import React, { useReducer, useEffect, lazy, Suspense } from "react";

import { getDevice } from "./Device-action";

import { DeviceListContainer } from "./Device-style";

import {
  initialState as initialDeviceState,
  reducer as deviceReducer,
} from "./Device-reducer";

import { Typography, Spin, Row } from "antd";

import Exceptions from "../../screens/Exceptions";

const { Title } = Typography;

const DeviceItem = lazy(() => import("./DeviceItem"));

const DeviceList = (props) => {
  const [deviceState, deviceDispatch] = useReducer(
    deviceReducer,
    initialDeviceState
  );

  useEffect(() => {
    getDevice(deviceDispatch, {
      limit: 10,
      page: 0,
      populate:true
    });
  }, [props]);

  if (deviceState.loading || !deviceState.called) {
    return <Spin tip="Carregando"/>;
  }

  if (deviceState.error && !deviceState.loading && deviceState.called) {
    return <Exceptions type={500} />;
  }

  if (
    (!deviceState.data && deviceState.called) ||
    (deviceState.called &&
      deviceState.data &&
      deviceState.data.length === 0 &&
      !deviceState.loading)
  ) {
    return (
      <Exceptions type={404} text={"Não foram encontrados reservatórios"} />
    );
  }

  return (
    <DeviceListContainer>
      <Title level={2}>Dispositivos</Title>
      {deviceState.data.map((device) => {
        return (
          <Suspense fallback={<Row><Spin/></Row>}>
            <DeviceItem device={device} />
          </Suspense>
        );
      })}
    </DeviceListContainer>
  );
};

export default DeviceList;

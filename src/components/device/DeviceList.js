import React, { useReducer, useEffect, lazy, Suspense } from "react";

import { getDevice } from "./Device-action";

import { DeviceListContainer } from "./Device-style";

import {
  initialState as initialDeviceState,
  reducer as deviceReducer,
} from "./Device-reducer";

import { Typography, Spin, Row, Pagination } from "antd";

import Exceptions from "../../screens/Exceptions";

const { Title } = Typography;

const DeviceItem = lazy(() => import("./DeviceItem"));

const DeviceList = (props) => {
  const [deviceState, deviceDispatch] = useReducer(
    deviceReducer,
    initialDeviceState
  );

  const { limit = 10 } = props;

  const currentPage =
    deviceState.metadata.offset <= 1
      ? 1
      : deviceState.metadata.offset / deviceState.metadata.limit + 1;

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
      <Pagination
        // simple
        total={parseInt(deviceState.metadata.total)}
        defaultPageSize={limit}
        defaultCurrent={currentPage}
        current={currentPage}
        onChange={(page, pageSize) => {
          getDevice(deviceDispatch, {
            limit,
            page: page - 1,
          });
        }}
      />
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

import React, { useReducer, useEffect } from "react";

import { getDevice } from "./Device-action";

import { DeviceListContainer } from "./Device-style";

import DeviceItem from "./DeviceItem";

import {
  initialState as initialDeviceState,
  reducer as deviceReducer,
} from "./Device-reducer";

import { Typography } from "antd";

import Exceptions from "../../screens/Exceptions";

const { Title } = Typography;

const DeviceList = (props) => {
  const [deviceState, deviceDispatch] = useReducer(
    deviceReducer,
    initialDeviceState
  );

  useEffect(() => {
    getDevice(deviceDispatch, {
      limit: 10,
      page: 0,
    });
  }, [props]);

  if (deviceState.loading || !deviceState.called) {
    return <div>Carregando</div>;
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
        return <DeviceItem device={device} />;
      })}
    </DeviceListContainer>
  );
};

export default DeviceList;

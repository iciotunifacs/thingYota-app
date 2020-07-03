import React from "react";

import { Card, Descriptions } from "antd";

import { formatDistance } from "date-fns";

import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

const { Meta } = Card;

const DeviceExtra = ({ value, id }) => {
  return <div>{id && <Link to={`/device/${id}`}>[Detalhes]</Link>}</div>;
};

const DeviceItem = ({ device }) => {
  const dataString = (value) =>
    formatDistance(new Date(value), Date.now(), {
      includeSeconds: true,
      locale: ptBR,
    });

  return (
    <Card title={device.name} >
      <Descriptions size="large">
        <Descriptions.Item label="Nome">{device.name}</Descriptions.Item>
        <Descriptions.Item label="Endereço MAC">{`${device.mac_addres}`}</Descriptions.Item>
      </Descriptions>
      <Meta
        description={`Ùltima atualização ${dataString(device.last_change)}`}
      />
    </Card>
  );
};

export default DeviceItem;

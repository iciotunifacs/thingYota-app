import React from "react";

import { Card, Tag, Descriptions, Typography, Statistic } from "antd";

import { formatDistance } from "date-fns";

import { ptBR } from "date-fns/locale";

const lastData = (value) =>
  formatDistance(new Date(value), Date.now(), {
    includeSeconds: true,
    locale: ptBR,
  });

const ValueSwicth = ({ value }) => {
  switch (value.entity) {
    case "number":
      return (
          <Statistic
            value={value.data}
            precision={2}
            suffix={` ${value.unity}`}
          />
      );
    case "boolean":
    default:
      return (
        <Typography.Title level={4}>
          {value.data ? "Ativado" : "Desativado"}
        </Typography.Title>
      );
  }
};

function SensorItem({ sensor }) {
  return (
    <Card
      title={sensor.name}
      style={{ width: "20vw" }}
      extra={
        <Tag color={sensor.status ? "green" : "red"}>
          {sensor.status ? "Disponível" : "Indisponível"}
        </Tag>
      }
    >
      <Descriptions layout='vertical'>
        <Descriptions.Item>
          <ValueSwicth value={sensor.value}/>
        </Descriptions.Item>
      </Descriptions>
      <Card.Meta
        description={`Última atualização ${lastData(sensor.last_change)}`}
      />
    </Card>
  );
}

export default SensorItem;

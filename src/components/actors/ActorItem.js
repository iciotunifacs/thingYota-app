import React from "react";

import { Card, Tag, Descriptions, Typography, Statistic, Progress } from "antd";

import { formatDistance } from "date-fns";

import { ptBR } from "date-fns/locale";

const lastData = (value) =>
  formatDistance(new Date(value), Date.now(), {
    includeSeconds: true,
    locale: ptBR,
  });

const ValueSwicth = ({ value }) => {
  switch (typeof value.data) {
    case "boolean":
    default:
      return value.data ? (
        <Progress type="circle" status="success" />
      ) : (
        <Progress type="circle" status="exception" />
      );
    case "number":
      return (
        <Statistic
          value={value.data}
          precision={2}
          suffix={` ${value.unity}`}
        />
      );
  }
};

function SensorItem({ actor }) {
  return (
    <Card
      title={actor.name}
      style={{ width: "20vw" }}
      extra={
        <Tag color={actor.status ? "green" : "red"}>
          {actor.status ? "Disponível" : "Indisponível"}
        </Tag>
      }
    >
      <Descriptions layout="vertical">
        <Descriptions.Item>
          {actor.value && actor.value.data && (
            <ValueSwicth value={actor.value} />
          )}
          {!actor.value && <Tag color="yellow">Indisponível</Tag>}
        </Descriptions.Item>
      </Descriptions>
      <Card.Meta
        description={`Última atualização ${lastData(actor.last_change)}`}
      />
    </Card>
  );
}

export default SensorItem;

import React from "react";

import { Card, Tag, Descriptions, Typography, Statistic } from "antd";
import { ExclamationOutlined } from "@ant-design/icons";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

const { Title } = Typography;

const lastData = (value) =>
  formatDistance(new Date(value), Date.now(), {
    includeSeconds: true,
    locale: ptBR,
  });

const ValueSwicth = ({ value }) => {
  if (value === undefined || value == null)
    return (
      <>
        <ExclamationOutlined style={{ fontSize: "48px" }} />
        <Title level={4}>Imdisponivél</Title>
      </>
    );
  switch (typeof value.data) {
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
        <>
          <Title level={4}>{value.data ? "Em uso" : "Parado"}</Title>
        </>
      );
  }
};

function ActorItem({ actor }) {
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
          <ValueSwicth value={actor.value} />
        </Descriptions.Item>
      </Descriptions>
      <Card.Meta
        description={`Última atualização ${lastData(actor.last_change)}`}
      />
    </Card>
  );
}

export default ActorItem;

import React from "react";

import { Card, Tag, Descriptions, Typography, Statistic, Switch } from "antd";
import {
  ExclamationOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

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
    case "boolean":
    default:
      return (
        <>
          {value.data ? (
            <>
              <CheckOutlined style={{ fontSize: "48px" }} />
              <Title level={4}>Em uso</Title>
            </>
          ) : (
            <>
              <CloseOutlined style={{ fontSize: "48px" }} />
              <Title level={4}>Parado</Title>
            </>
          )}
          {/* TODO: inserir action para desativar / ativar atuadores  */}
          <Switch checked={value.data}/>
        </>
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

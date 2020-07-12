import React from "react";

import { Card, Descriptions } from "antd";

import { formatDistance } from "date-fns";

import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

const { Meta } = Card;

const BucketExtra = ({ value, id }) => {
  return <div>{id && <Link to={`/bucket/${id}`}>[Detalhes]</Link>}</div>;
};

const BucketItem = ({ bucket }) => {
  const dataString = (value) =>
    formatDistance(new Date(value), Date.now(), {
      includeSeconds: true,
      locale: ptBR,
    });

  return (
    <Card title={bucket.name} extra={<BucketExtra id={bucket._id} />}>
      <Descriptions size="large">
        <Descriptions.Item label="Nome">{bucket.name}</Descriptions.Item>
        <Descriptions.Item label="Volume">{`${bucket.volume.data.value} ${bucket.volume.data.entity || "L"}`}</Descriptions.Item>
      </Descriptions>
      <Meta
        description={`Ùltima atualização ${dataString(bucket.last_change)}`}
      />
    </Card>
  );
};

export default BucketItem;

import React from "react";

import { Card, Descriptions } from "antd";

import { formatDistance } from "date-fns";

import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

const { Meta } = Card;

const HistoryExtra = ({ value, id }) => {
  return <div>{id && <Link to={`/history/${id}`}>[Detalhes]</Link>}</div>;
};

const HistoryItem = ({ history }) => {
  const dataString = (value) =>
    formatDistance(new Date(value), Date.now(), {
      includeSeconds: true,
      locale: ptBR,
    });

  return (
    <Card title={history.name} extra={<HistoryExtra id={history._id} />}>
      <Descriptions size="large">
        <Descriptions.Item label="De">{history.From.name}</Descriptions.Item>
        <Descriptions.Item label="Para">{`${history.To.name}`}</Descriptions.Item>
        <Descriptions.Item label="Tipo">{`${history.data.type}`}</Descriptions.Item>
        {history.data.value && history.data.value.value && history.data.value.value.data && (
          <Descriptions.Item label="Valor">{`${history.data.value.value.data}`}</Descriptions.Item>
        )}
      </Descriptions>
      <Meta
        description={`Data ${dataString(history.last_change)}`}
      />
    </Card>
  );
};

export default HistoryItem;

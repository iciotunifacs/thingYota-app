import React from "react";

import { Card, Descriptions } from "antd";

import { formatDistance } from "date-fns";

import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

import {toCaptalize} from '../../utils/string'
const { Meta } = Card;

const HistoryExtra = ({ value, id }) => {
  return <div>{id && <Link to={`/history/${id}`}>[Detalhes]</Link>}</div>;
};

const HistoryEvent = ({event, spliter = "_"}) => `${toCaptalize(event.split(spliter)[1].toString())} ${toCaptalize(event.split(spliter)[0].toString())}`

const HistoryItem = ({ history }) => {
  const dataString = (value) =>
    formatDistance(new Date(value), Date.now(), {
      includeSeconds: true,
      locale: ptBR,
    });

  return (
    <Card title={history.name}>
      <Descriptions size="large">
        <Descriptions.Item label="De">{history.From.name || `${history.From.first_name} ${history.From.last_name}`}</Descriptions.Item>
        <Descriptions.Item label="Para">{`${history.To.name}`}</Descriptions.Item>
        {history.data && history.data.event && (
          <Descriptions.Item label="Tipo">{HistoryEvent({event: history.data.event})}</Descriptions.Item>
        )}
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

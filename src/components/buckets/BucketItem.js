import React from "react";

import { Card, Descriptions, Statistic } from "antd";
import {
   EyeFilled
} from '@ant-design/icons';

import { formatDistance } from "date-fns";

import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

import { actives, sensorVolume } from "./Bucket-utils";

const { Meta } = Card;

const BucketExtra = ({ id }) => {
  return <div>{id && <Link to={`/bucket/${id}`}><EyeFilled /></Link>}</div>;
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
        <Descriptions.Item label="Capacidade">{`${bucket.volume.data.value} ${
          bucket.volume.data.entity || "L"
        }`}</Descriptions.Item>
        <Descriptions.Item lable="Volume">
          <Statistic
            precision={1}
            value={Math.round(
              actives(bucket.Sensors) / sensorVolume(bucket.Sensors)
            )}
            suffix={`/${bucket.volume.data.value}`}
          />
        </Descriptions.Item>
      </Descriptions>
      <Meta
        description={`Ùltima atualização ${dataString(bucket.last_change)}`}
      />
    </Card>
  );
};

export default BucketItem;

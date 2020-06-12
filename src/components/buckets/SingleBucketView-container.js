import React, { useReducer, useEffect } from "react";

import {MiniGrid} from './Bucket-style'

import { Descriptions, Card, Typography, Statistic } from "antd";

import socketIo from "socket.io-client";

import { getBucket } from "./Bucket-action";

import { actives, sensorVolume } from "./Bucket-utils";

import {
  initialState as initialBucketState,
  reducer as bucketReducer,
} from "./Buckets-reducer";

import SensorView from "../senseors/SensorView-container";
import Actorview from "../actors/ActorView-container";
import WaterBox from "../boxes/WaterBox";

import Exceptions from "../../screens/Exceptions";

const { Item } = Descriptions;
const { Title } = Typography;

const SingleBucketView = ({ bucketId }) => {
  const [{ loading, called, data, error }, bucketDispatch] = useReducer(
    bucketReducer,
    initialBucketState
  );

  useEffect(() => {
    const io = socketIo(`${process.env.REACT_APP_SOCKETIO}/Bucket_${bucketId}`);
    io.on("updated", (payload) => {
      if (payload && payload.data.Bucket)
        bucketDispatch({
          type: "UPDATED",
          payload: payload.data.Bucket,
        });
    });
  }, []);

  useEffect(() => {
    getBucket(bucketDispatch, {
      bucketId,
    });
  }, [bucketId]);

  if (loading || !called) {
    return <div>Carregando</div>;
  }

  if (error) {
    return <Exceptions type={500} />;
  }

  if ((called && !data && !loading) || !bucketId) {
    return <Exceptions type={404} text={"Não foi encontrado reservatório"} />;
  }

  return (
    <>
      <Title level={2}>{data.name}</Title>
      <Card>
        <Descriptions layout="vertical">
          <Item label="Name">{data.name}'</Item>
          <Item label="Data de criação">{data.created_at}</Item>
          <Item label={`Volume (${data.volume.data.unity})`}>
            <MiniGrid >
              {data.Sensors.length > 0 && (
                <WaterBox
                  title={data.name}
                  size="small"
                  volume={Math.round(
                    (actives(data.Sensors) / sensorVolume(data.Sensors)) * 100
                  )}
                />
              )}
              <Statistic
                precision={1}
                value={Math.round(
                  actives(data.Sensors) / sensorVolume(data.Sensors)
                )}
                suffix={`/${data.volume.data.value}`}
              />
            </MiniGrid>
          </Item>
        </Descriptions>
      </Card>

      {data.Sensors.length > 0 && <SensorView sensors={data.Sensors} />}

      {data.Actors.length > 0 && <Actorview actors={data.Actors} />}
    </>
  );
};

export default SingleBucketView;

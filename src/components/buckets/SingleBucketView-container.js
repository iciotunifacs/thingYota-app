import React, {useReducer, useEffect} from 'react';

import {
  Descriptions
} from 'antd'

import socketIo from 'socket.io-client'
import { useNotification } from "../notification/Notification-context";


import {
  BuketHead
} from './Bucket-style'

import {
  getBucket
} from './Bucket-action'

import {
  initialState as initialBucketState,
  reducer as bucketReducer
} from './Buckets-reducer'

import SensorView from '../senseors/SensorView-container'

const {
  Item
} = Descriptions;


function SingleBucketView({bucketId}) {
  const [{
    loading,
    // called,
    data
  }, bucketDispatch] = useReducer(bucketReducer, initialBucketState);

  const [notificationstate, notificationDispatch] = useNotification();

  useEffect(() => {
    const io = socketIo(`${process.env.REACT_APP_SOCKETIO}/Bucket_${bucketId}`)
    io.on('updated', (data) =>  {
      console.log(data.data.Bucket)
      bucketDispatch({
        type: "UPDATED",
        payload: data.data.Bucket
      })
    })
  }, [])

  useEffect(() => {
    getBucket(bucketDispatch, {
      bucketId,
    })
  }, [bucketId])

  if (loading) {
    return <div>Carregando</div>
  }

  if(!bucketId) {
    return <div>Não é valido</div>
  }

  if(!data) {
    return <div>Não encontrado</div>
  }

  return (
    <div>
      <BuketHead>
        <Descriptions title={`Bucket ${data.name}`} layout='horizontal'>
          <Item label='Name'>{data.name}'</Item>
          <Item label='ID'>{data._id}</Item>
          <Item label='Data de criação'>{data.create_at}</Item>
        </Descriptions>
      </BuketHead>
      <div>
        Sensores
        <SensorView sensors={data.Sensors}/>
      </div>
    </div>
  );
}

export default SingleBucketView;

import React, {useReducer, useEffect} from 'react';

import {
  Descriptions
} from 'antd'

import {
  getBucket
} from './Bucket-action'

import {
  initialState as initialBucketState,
  reducer as bucketReducer
} from './Buckets-reducer'

import SensorList from '../senseors/SensorList'

const {
  Item
} = Descriptions;


function SingleBucketView({bucketId}) {
  const [{
    loading,
    called,
    data
  }, bucketDispatch] = useReducer(bucketReducer, initialBucketState);

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
      <Descriptions title={`Bucket ${data.name}`}>
        <Item label='Name'>{data.name}'</Item>
        <Item label='ID'>{data._id}</Item>
        <Item label='Data de criação'>{data.create_at}</Item>
      </Descriptions>
      <div>
        Sensores
        <SensorList sensors={data.Sensors}/>
      </div>
    </div>
  );
}

export default SingleBucketView;

import React, { useReducer, useEffect } from "react";

import { Link } from "react-router-dom";

import { getBucket } from "./Bucket-action";

import { BucketListContainer } from "./Bucket-style";

import BucketItem from './BucketItem'

import {
  initialState as initialBucketState,
  reducer as bucketReducer,
} from "./Buckets-reducer";

import { Typography } from "antd";

const { Title } = Typography;

const BucketList = (props) => {
  const [bucketState, bucketDispatch] = useReducer(
    bucketReducer,
    initialBucketState
  );

  useEffect(() => {
    getBucket(bucketDispatch, {
      limit: 10,
      page: 0,
    });
  }, [props]);

  if (bucketState.loading) {
    return <div>Carregando</div>;
  }

  if (!bucketState.data && bucketState.error) {
    return <div>Houve um erro</div>;
  }

  if (!bucketState.data) {
    return <div>Lista vaAzia</div>;
  }

  return (
    <BucketListContainer>
      <Title level={2}>Reservatórios</Title>
      {bucketState.data.map((bucket) => {
        return (
          <BucketItem bucket={bucket}/>
        );
      })}
    </BucketListContainer>
  );
};

export default BucketList;

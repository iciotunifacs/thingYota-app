import React, { useReducer, useEffect } from "react";

import { getBucket } from "./Bucket-action";

import { BucketListContainer } from "./Bucket-style";

import BucketItem from "./BucketItem";

import {
  initialState as initialBucketState,
  reducer as bucketReducer,
} from "./Buckets-reducer";

import { Typography } from "antd";

import Exceptions from "../../screens/Exceptions";

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

  if (bucketState.loading || !bucketState.called) {
    return <div>Carregando</div>;
  }

  if (bucketState.error && !bucketState.loading && bucketState.called) {
    return <Exceptions type={500} />;
  }

  if (
    (!bucketState.data && bucketState.called) ||
    (bucketState.called &&
      bucketState.data &&
      bucketState.data.length === 0 &&
      !bucketState.loading)
  ) {
    return (
      <Exceptions type={404} text={"Não foram encontrados reservatórios"} />
    );
  }

  return (
    <BucketListContainer>
      <Title level={2}>Reservatórios</Title>
      {bucketState.data.map((bucket) => {
        return <BucketItem bucket={bucket} />;
      })}
    </BucketListContainer>
  );
};

export default BucketList;

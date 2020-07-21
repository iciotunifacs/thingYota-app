import React, { useReducer, useEffect, lazy, Suspense } from "react";

import { getBucket } from "./Bucket-action";

import { BucketListContainer } from "./Bucket-style";

import {
  initialState as initialBucketState,
  reducer as bucketReducer,
} from "./Buckets-reducer";

import { Typography, Spin, Row, Pagination } from "antd";

import Exceptions from "../../screens/Exceptions";

const { Title } = Typography;

const BucketItem = lazy(() => import("./BucketItem"));

const BucketList = (props) => {
  const [bucketState, bucketDispatch] = useReducer(
    bucketReducer,
    initialBucketState
  );

  const { limit = 10 } = props;

  const currentPage =
    bucketState.metadata.offset <= 1
      ? 1
      : bucketState.metadata.offset / bucketState.metadata.limit + 1;

  useEffect(() => {
    getBucket(bucketDispatch, {
      limit: 10,
      page: 0,
    });
  }, [props]);

  if (bucketState.loading || !bucketState.called) {
    return <Spin tip="Carregando" />;
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
      <Pagination
        // simple
        total={parseInt(bucketState.metadata.total)}
        defaultPageSize={limit}
        defaultCurrent={currentPage}
        current={currentPage}
        onChange={(page, pageSize) => {
          console.log(page);
          getBucket(bucketDispatch, {
            limit,
            page: page - 1,
            populate: true
          });
        }}
      />

      {bucketState.data.map((bucket) => {
        return (
          <Suspense
            fallback={
              <Row>
                <Spin />
              </Row>
            }
          >
            <BucketItem bucket={bucket} />
          </Suspense>
        );
      })}
    </BucketListContainer>
  );
};

export default BucketList;

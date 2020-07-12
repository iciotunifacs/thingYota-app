import React, { useReducer, useEffect, lazy, Suspense } from "react";

import { Typography, Spin, Row, Pagination } from "antd";

import { getHistory } from "./History-action";

import { HistoryListContainer } from "./History-style";

import {
  initialState as initialHistoryState,
  reducer as historyReducer,
} from "./History-reducer";

import Exceptions from "../../screens/Exceptions";

const { Title } = Typography;

const HistoryItem = lazy(() => import("./HistoryItem"));

const HistoryList = (props) => {
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    initialHistoryState
  );
  const {limit=10} = props

  const currentPage = historyState.metadata.offset <= 1 ? 1 : (historyState.metadata.offset/historyState.metadata.limit)+1

  console.log(currentPage)
  useEffect(() => {
    getHistory(historyDispatch, {
      limit,
      page: 0,
    });
  }, [props]);

  if (historyState.loading) {
    return <Spin tip="Carregando" />;
  }

  if (historyState.error) {
    return <Exceptions type={500} />;
  }

  if (
    historyState.called &&
    historyState.history &&
    historyState.history.length === 0
  ) {
    return (
      <Exceptions type={404} text={"Não foram encontrados reservatórios"} />
    );
  }

  return (
    <HistoryListContainer>
      <Title level={2}>Histórico</Title>
      <Pagination
        // simple
        total={parseInt(historyState.metadata.total)}
        defaultPageSize={limit}
        defaultCurrent={currentPage}
        current={currentPage}
        onChange={(page, pageSize) => {
          console.log(page)
          getHistory(historyDispatch, {
            limit,
            page: page-1,
          });
        }}
      />
      {historyState.history.map((history) => {
        return (
          <Suspense
            fallback={
              <Row>
                <Spin />
              </Row>
            }
          >
            <HistoryItem history={history} />
          </Suspense>
        );
      })}
    </HistoryListContainer>
  );
};

export default HistoryList;

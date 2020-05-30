import React, { useReducer, useEffect } from "react";

import { getHistory } from "./History-action";

import { HistoryListContainer } from "./History-style";

import HistoryItem from './HistoryItem'

import {
  initialState as initialHistoryState,
  reducer as historyReducer,
} from "./History-reducer";

import { Typography } from "antd";

import Exceptions from '../../screens/Exceptions'

const { Title } = Typography;

const HistoryList = (props) => {
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    initialHistoryState
  );

  useEffect(() => {
    getHistory(historyDispatch, {
      limit: 10,
      page: 0,
    });
  }, [props]);


  if (historyState.loading || !historyState.called) {
    return <div>Carregando</div>;
  }

  if (historyState.error) {
    return <Exceptions type={500} />;
  }

  if (historyState.called && historyState.history && historyState.history.length === 0) {
    return <Exceptions type={404} text={"Não foram encontrados reservatórios"}/>;
  }

  return (
    <HistoryListContainer>
      <Title level={2}>Histórico</Title>
      {historyState.history.map((history) => {
        return (
          <HistoryItem history={history}/>
        );
      })}
    </HistoryListContainer>
  );
};

export default HistoryList;

import React , {lazy, Suspense} from 'react';

import {
  PageView
} from '../../Base-style';

import {Spin} from 'antd'

const HistoryList = lazy(() => import('./HistoryList'));

function HistoryView() {
  return (
    <PageView>
      <Suspense fallback={<Spin tip="Carregando"/>}>
        <HistoryList />
      </Suspense>
    </PageView>
  );
}
export default HistoryView

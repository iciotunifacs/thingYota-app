import React from 'react';

import {
  PageView
} from '../../Base-style'

import BucketForm from './BucketForm'
import BucketList from './BucketList';

function BucketView() {
  return (
    <PageView>
      <BucketForm/>
      <BucketList/>
    </PageView>
  );
}
export default BucketView

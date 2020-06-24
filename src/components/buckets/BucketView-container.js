import React from 'react';

import { Button } from "antd";
import { Link } from "../../utils/routing";

import {
  PageView
} from '../../Base-style'


import BucketList from './BucketList';

function BucketView() {
  return (
    <PageView>
      <Link to="/buckets/create">
        <Button> Criar dispositivo</Button>
      </Link>
      <BucketList/>
    </PageView>
  );
}
export default BucketView

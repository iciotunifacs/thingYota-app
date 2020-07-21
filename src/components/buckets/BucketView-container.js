import React, { lazy, Suspense } from "react";

import { Button, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "../../utils/routing";

import { PageView } from "../../Base-style";

const BucketList = lazy(() => import("./BucketList"))

function BucketView() {
  return (
    <PageView>
      <Link to="/buckets/create">
        <Button type='primary'>
          Criar Reservatório
          <PlusOutlined />
        </Button>
      </Link>
      <Suspense fallback={<Spin tip="Carregando"/>}>
        <BucketList />
      </Suspense>
    </PageView>
  );
}
export default BucketView;

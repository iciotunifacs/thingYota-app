import React, { lazy, Suspense } from "react";

import { Button, Spin } from "antd";
import { Link } from "../../utils/routing";

import { PageView } from "../../Base-style";

const BucketList = lazy(() => import("./BucketList"))

function BucketView() {
  return (
    <PageView>
      <Link to="/buckets/create">
        <Button> Criar dispositivo</Button>
      </Link>
      <Suspense fallback={<Spin tip="Carregando"/>}>
        <BucketList />
      </Suspense>
    </PageView>
  );
}
export default BucketView;

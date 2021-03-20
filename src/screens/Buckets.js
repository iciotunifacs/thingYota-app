import React from "react";

import BucketsView from "../components/buckets/BucketView-container";
import DefaultScreen from "../layout/DefaultScreen";

function Buckets(props) {
  return (
    <DefaultScreen>
      <BucketsView {...props} />
    </DefaultScreen>
  );
}

export default Buckets;

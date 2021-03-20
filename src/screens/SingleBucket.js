import React from "react";

import { PageView } from "../Base-style";

import SingleBucketView from "../components/buckets/SingleBucketView-container";
import DefaultScreen from "../layout/DefaultScreen";
function SingleBucket(props) {
  const { bucketId } = props.match.params;
  return (
    <DefaultScreen>
      <PageView>
        <SingleBucketView bucketId={bucketId} />
      </PageView>
    </DefaultScreen>
  );
}

export default SingleBucket;

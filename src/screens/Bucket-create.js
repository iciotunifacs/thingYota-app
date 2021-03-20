import React from "react";
import BucketCreate from "../components/buckets/BucketCreateView-container";
import DefaultScreen from "../layout/DefaultScreen";

const BucketScreen = (props) => {
  return (
    <DefaultScreen>
      <BucketCreate {...props} />
    </DefaultScreen>
  );
};

export default BucketScreen;

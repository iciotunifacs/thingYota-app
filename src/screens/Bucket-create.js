import React from "react";
import BucketCreate from "../components/buckets/BucketCreateView-container";
import TopbarView from "../components/topbar/TopbarView-container";

const BucketScreen = (props) => {
  return (
    <>
      <TopbarView />
      <BucketCreate {...props} />
    </>
  );
};

export default BucketScreen;

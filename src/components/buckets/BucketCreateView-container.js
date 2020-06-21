import React from "react";
import BucketForm from "./BucketForm";

import { FormContainer } from "./Bucket-style";
import { Typography} from "antd";

import { PageView } from "../../Base-style";

const { Title } = Typography;

const BucketCreateView = (props) => {
  return (
    <PageView>
      <Title level={2}>Add an bucket</Title>
      <FormContainer>
            <BucketForm />
      </FormContainer>
    </PageView>
  );
};

export default BucketCreateView;

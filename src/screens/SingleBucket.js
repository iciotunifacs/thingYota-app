import React from 'react'

import {
  PageView
} from '../Base-style'

import SingleBucketView from '../components/buckets/SingleBucketView-container'
function SingleBucket(props) {
  const { bucketId } = props.match.params
  return (
    <PageView>
      <SingleBucketView bucketId={bucketId}/>
    </PageView>
  )
}


export default SingleBucket

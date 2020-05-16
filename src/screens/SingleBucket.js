import React from 'react'

import SingleBucketView from '../components/buckets/SingleBucketView-container'
function SingleBucket(props) {
  const { bucketId } = props.match.params
  return (
    <SingleBucketView bucketId={bucketId}/>
  )
}


export default SingleBucket

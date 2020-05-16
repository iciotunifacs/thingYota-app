import React, {useReducer, useEffect} from 'react';

import {Link} from 'react-router-dom'

import {
  getBucket
} from './Bucket-action'
import {
  initialState as initialBucketState,
  reducer as bucketReducer
} from './Buckets-reducer'

function BucketList(props) {
  const [bucketState, bucketDispatch] = useReducer(bucketReducer, initialBucketState);

  useEffect(() => {
    getBucket(bucketDispatch, {
      limit : 10,
      page: 0
    })
  }, [props])

  if (bucketState.loading || !bucketState.data) {
    return <div>Carregando</div>
  }

  if(bucketState.data && bucketState.data.length == 0) {
    return <div>Lista vaAzia</div>
  }

  return (

    <di>Lista
      <table>
        <thead>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Dados</th>
        </thead>
        <tbody>
          {bucketState.data.map(bucket => {
            return(
              <tr>
                <td>{bucket.name}</td>
                <td>{bucket.type}</td>
                <Link to={`/bucket/${bucket._id}`}>
                  <td>Dados</td>
                </Link>
              </tr>
            )
          })}
        </tbody>
        </table>
    </di>
  );
}

export default BucketList;

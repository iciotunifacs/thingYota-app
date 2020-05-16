import {apiRest} from '../../utils/request'

export const getBucket = (dispatch,{limit, page, bucketId}) => {

  dispatch({
    type: "FETCHING"
  })

  let url = '/bucket';

  if (bucketId) {
    url = `/bucket/${bucketId}`
  }

  apiRest.get(url, {
    params: {
      limit,
      page
    }
  }).then(data => {
    dispatch({
      type: "FETCHED",
      payload: data.data.data,
      metadata: data.data.metadata
    })
  }).catch(error => {
    dispatch({
      type: "ERRO",
      error: error
    })
  })
}

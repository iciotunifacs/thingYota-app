import {apiRest} from '../../utils/request'

export const getDevice = (dispatch,{limit, page, deviceId}) => {

  dispatch({
    type: "FETCHING"
  })

  let url = '/device';

  if (deviceId) {
    url = `/device/${deviceId}`
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
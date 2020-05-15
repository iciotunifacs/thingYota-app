import {apiRest} from '../../utils/request'

export const getBucket = (dispatch,{limit, page}) => {

  dispatch({
    type: "FETCHING"
  })

  let url = '/bucket';


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

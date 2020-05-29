import {apiRest} from '../../utils/request'

export const getHistory = (dispatch,{limit, page}) => {

  dispatch({
    type: "FETCHING"
  })

  let url = '/history';

  apiRest.get(url, {
    params: {
      limit,
      page
    }
  }).then(data => {
    dispatch({
      type: "FETCHED",
      history: data.data.data,
      metadata: data.data.metadata
    })
  }).catch(error => {
    dispatch({
      type: "ERRO",
      error: error
    })
  })
}

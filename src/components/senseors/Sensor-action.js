import {apiRest} from '../../utils/request'
import {reducerConstants} from './Sensor-constants'

const fetchSensors = typeDispatch => async (dispatch, filter={}) => {
  dispatch({
    type: typeDispatch.LOADING
  })
  let url = "/sensor"
  let config = {};

  if (filter.params) {
    config.params = filter.params
  }

  try {
    const request = await apiRest.get(url, config)
    dispatch({
      type: typeDispatch.SUCESS,
      data: request.data.data,
      metadata: request.data.metadata
    })
  } catch (error) {
    dispatch({
      type: typeDispatch.ERROR,
      error: error
    })
  }
}

export const getSensors = fetchSensors({
  SUCESS: reducerConstants.SUCESS,
  LOADING: reducerConstants.LOADING,
  ERROR: reducerConstants.ERROR
})

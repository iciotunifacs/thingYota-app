import {reducerConstants} from './Sensor-constants'

export const initialState = {
  data: null,
  metadata: null,
  error: null,
  loading : false,
  result: false,
  called: false
}

export const reducer = (state, action) => {
  switch(action.type) {
    case reducerConstants.LOADING: {
      return {
        ...state,
        laoding: true
      }
    }
    case reducerConstants.ERROR: {
      return {
        ...state,
        loading: false,
        called: true,
        error : action.error,
        result: false
      }
    }

    case reducerConstants.SUCESS : {
      return {
        ...state,
        loading: false,
        called: true,
        result: true,
        error : null,
        data: action.data,
        metadata: {...action.metadata}
      }
    }
    default: {
      return state
    }
  }
}

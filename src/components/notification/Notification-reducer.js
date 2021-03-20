import {
  typeDispatch
} from './Notification-constants'

export const initialState = {
  loading: false,
  called: false,
  error: null,
  notifications: []
}

export const reducer = (state, action) => {
  const {type} = action;

  switch (type) {
    case typeDispatch.ERRO:
      return {...state, error: action.error, loading: false, called: true}
    case typeDispatch.LOADING:
      return {...state, loading: true}
    case typeDispatch.NEW_NOTIFICATION:
      return {...state, loading: false, called: true, notifications: [...state.notifications, ...action.notifications]}
    case typeDispatch.UPDATE_NOTIFICATION:
        return {...state, loading: false, called: true, notifications: [...action.notifications]}
    default:
      return state
  }
}

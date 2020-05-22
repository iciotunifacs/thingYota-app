import {
  typeDispatch
} from './Notification-constants';

export const newNotification = dispatchTypes => (dispatch, {notifications}) => {
  dispatch({
    type: dispatchTypes.LOADING
  })
  dispatch({
    type: dispatchTypes.SUCESS,
    notifications,
  })
}

export const onBucketUpdate = newNotification({
  SUCESS: typeDispatch.NEW_NOTIFICATION,
  LOADING: typeDispatch.LOADING
})
export const onBucketOpen = newNotification({
  SUCESS: typeDispatch.NEW_NOTIFICATION,
  LOADING: typeDispatch.LOADING
})

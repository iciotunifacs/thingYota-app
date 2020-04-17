import AuthConstant from './Auth-constant';
import {apiAuth} from '../../utils/request';

export const singin = async (dispatch, filter) => {
  dispatch({
    type: AuthConstant.LOGIN_REQUEST
  })
  let url = '/login'
  try {
    const request = await apiAuth.post(url, {
      username: filter.username,
      password: filter.password
    })

    filter.setUser(request.data)
    dispatch({
      type: AuthConstant.LOGIN_SUCCESS,
      data: request.data
    })

  } catch(error) {
    dispatch({
      type: AuthConstant.LOGIN_FAILURE
    })
    alert(error.message)
  }
}

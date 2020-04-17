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
    // store user in localstorage
    filter.setUser({...request.data.data.user, token: request.data.data.token})
    dispatch({
      type: AuthConstant.LOGIN_SUCCESS,
      data: {...request.data.data.user, token: request.data.data.token}
    })

  } catch(error) {
    dispatch({
      type: AuthConstant.LOGIN_FAILURE
    })
    alert(error.message)
  }
}

export const checkAuth = ({ setUser, user, dispatch, history, redirectTo = null, from = '/' }) => {
  try {
    if (user) {
      dispatch({
        type: AuthConstant.LOGIN_SUCCESS,
        data: {...user}
      })
      setUser(user)
      history.push(redirectTo && redirectTo !== '/signin' ? redirectTo : from);
    }
  } catch (error) {
    console.error({ error });
    dispatch({
      type: AuthConstant.LOGIN_FAILURE
    })
  }
};

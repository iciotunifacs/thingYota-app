import {dispatchTypes} from './Auth-constant';
import {
  apiAuth,
  apiRest
} from '../../utils/request';

export const singin = async (dispatch, filter) => {
  dispatch({
    type: dispatchTypes.LOGIN_REQUEST
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
      type: dispatchTypes.LOGIN_SUCCESS,
      data: {...request.data.data.user, token: request.data.data.token}
    })

  } catch(error) {
    dispatch({
      type: dispatchTypes.LOGIN_FAILURE,
      error: error
    })
  }
}

export const checkAuth = ({ setUser, user, dispatch, history, redirectTo = null, from = '/' }) => {
  try {
    if (user) {
      dispatch({
        type: dispatchTypes.LOGIN_SUCCESS,
        data: {...user}
      })
      setUser(user)
      history.push(redirectTo && redirectTo !== '/signin' ? redirectTo : from);
    }
  } catch (error) {
    console.error({ error });
    dispatch({
      type: dispatchTypes.LOGIN_FAILURE
    })
  }
};

export const singup = async (dispatch, parans) => {
  dispatch({
    type: dispatchTypes.REGISTER_REQUEST
  })

  let url = "/singup/user";

  let sendData = {
    "first_name": parans.firstname,
    "last_name": parans.lastname,
    "username": parans.username,
    "password": parans.password,
    "email": parans.email
  }

  try {
    const request = await apiRest.post(url, sendData, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN_GUEST}`
      }
    });
    parans.setUser(request.data.data)
    dispatch({
      type: dispatchTypes.REGISTER_SUCCESS,
      user: request.data.data
    })
  } catch (error) {
    console.log(error)
      dispatch({
        type: dispatchTypes.REGISTER_FAILURE,
        error: error
      })
  }
}

export const singout = (dispatch, {setUser, history}) => {
  dispatch({
    type: dispatchTypes.LOGOUT
  })
  setUser(null);
  history.push('/login');
}

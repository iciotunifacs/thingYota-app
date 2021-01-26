import {dispatchTypes} from './Auth-constant';

export const initialAuthState = {
  loading: false,
  loggedIn: false,
  user: null,
  token: null,
  error: null
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case dispatchTypes.REGISTER_REQUEST:
      return { ...state, loading: true };
    case dispatchTypes.REGISTER_SUCCESS:
      return { ...state, loading: false, loggedIn: true, user: action.user , error: null};
    case dispatchTypes.REGISTER_FAILURE:
      return { ...state, loading: false, loggedIn: false, error: action.error };
    case dispatchTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case dispatchTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, loggedIn: true, user: action.data, error: null};
    case dispatchTypes.LOGIN_FAILURE:
      return { ...state, loading: false, loggedIn: false, error: action.error };
    case dispatchTypes.LOGOUT:
      return { ...initialAuthState };
    default:
      return state;
  }
};

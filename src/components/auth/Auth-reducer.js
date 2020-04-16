import { authConstants } from './Auth-constant';

export const initialAuthState = {
  loading: false,
  loggedIn: false,
  user: null,
  error: null
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case authConstants.REGISTER_REQUEST:
      return { ...state, loading: true };
    case authConstants.REGISTER_SUCCESS:
      return { ...state, loading: false, loggedIn: true, user: action.user };
    case authConstants.REGISTER_FAILURE:
      return { ...state, loading: false, loggedIn: false };
    case authConstants.LOGIN_REQUEST:
      return { ...state, loading: true };
    case authConstants.LOGIN_SUCCESS:
      return { ...state, loading: false, loggedIn: true, user: action.user };
    case authConstants.LOGIN_FAILURE:
      return { ...state, loading: false, loggedIn: false, error: action.error };
    case authConstants.LOGOUT:
      return { ...initialAuthState };
    default:
      return state;
  }
};

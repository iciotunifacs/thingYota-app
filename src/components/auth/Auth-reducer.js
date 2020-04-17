import AuthConstant from './Auth-constant';

export const initialAuthState = {
  loading: false,
  loggedIn: false,
  user: null,
  token: null,
  error: null
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case AuthConstant.REGISTER_REQUEST:
      return { ...state, loading: true };
    case AuthConstant.REGISTER_SUCCESS:
      return { ...state, loading: false, loggedIn: true, user: action.user };
    case AuthConstant.REGISTER_FAILURE:
      return { ...state, loading: false, loggedIn: false };
    case AuthConstant.LOGIN_REQUEST:
      return { ...state, loading: true };
    case AuthConstant.LOGIN_SUCCESS:
      return { ...state, loading: false, loggedIn: true, user: {...action.data}};
    case AuthConstant.LOGIN_FAILURE:
      return { ...state, loading: false, loggedIn: false, error: action.error };
    case AuthConstant.LOGOUT:
      return { ...initialAuthState };
    default:
      return state;
  }
};

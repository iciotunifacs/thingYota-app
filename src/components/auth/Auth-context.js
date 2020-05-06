import React, { useContext, createContext, useReducer } from 'react';

import { authReducer, initialAuthState } from './Auth-reducer';

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = useReducer(authReducer, initialAuthState);

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

// Retorna state e dispatch
const useAuth = () => (
  useContext(authContext)
);

export {
  AuthProvider as default,
  useAuth
};

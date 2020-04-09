import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  isAuth: false
});

export function useAuth() {
  return useContext(AuthContext);
}

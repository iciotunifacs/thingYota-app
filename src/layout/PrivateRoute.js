
import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../components/auth/Auth-context";
import useLocalStorage from "../hooks/useLocalStorage";

import {useHistory} from '../utils/routing'

import authConstants from '../components/auth/Auth-constant'

function PrivateRoute(props) {
  const { component: Component } = props
  const history = useHistory();
  const [{loggedIn}, dispatch] = useAuth();
  const [user] = useLocalStorage("user");

  useEffect(() => {
    if (loggedIn && user) return;

    if (!loggedIn && !user) {
      history.push('/login');
      return;
    }

    if (user) {
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        data: user
      });
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <Route
      {...props}
      render={props =>
        loggedIn && user ? (
          <Component {...props} />
        ) : (
            <div>Carregando</div>
          )
      }
    />
  );
}

export default PrivateRoute;


import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../components/auth/Auth-context";

function PrivateRoute({ component: Component, ...rest }) {
  const [{loggedIn}] = useAuth();
  console.log(loggedIn)
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  );
}

export default PrivateRoute;

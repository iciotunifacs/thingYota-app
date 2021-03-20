import React, {useEffect} from 'react'

import { useHistory } from "../../utils/routing";

import { useAuth } from "./Auth-context";
import { singout } from "./Auth-action";
import useLocalStorage from "../../hooks/useLocalStorage";

const Logout = (props) => {
  const [, setUser] = useLocalStorage("user");
  const history = useHistory();
  const [, dispatch] = useAuth();

  useEffect(() => {
    singout(dispatch, {setUser, history});
  }, [props,dispatch, setUser, history])
  return (
    <>
    </>
  )
}

export default Logout;

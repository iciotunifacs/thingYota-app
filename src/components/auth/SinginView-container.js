import React, { useState, useEffect } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage';
import { useHistory, useLocation } from '../../utils/routing';
import {useAuth} from './Auth-context';

import {singin, checkAuth} from './Auth-action';

const SinginView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");

  const [user, setUser] = useLocalStorage('user');
  const [state, dispatch] = useAuth()
  const history = useHistory();
  const location = useLocation();
  function handleSubmit(event) {
    event.preventDefault()
    singin(dispatch, {
      username,
      password,
      setUser
    })
  }
  useEffect(() => {
    if (user) {
      checkAuth({
        dispatch,
        user,
        setUser,
        redirectTo: "/home",
        from: window.location.pathname,
        history,
        location
      })
    }
  }, [user])
  return (
    <div>
      <h1>Login</h1>
      {/* <form> */}
        <label defaultValue="Login" />
        <input
          type="text"
          value={username}
          onChange={data => setUsername(data.target.value)}
        />
        <label defaultValue="Senha" />
        <input
          type="password"
          value={password}
          onChange={data => setPasword(data.target.value)}
        />
        <input
          type="button"
          value="Singin"
          onClick={handleSubmit}
          disabled={(username === "" && password === "")} />
      {/* </form> */}
    </div>
  )
}

export default SinginView;

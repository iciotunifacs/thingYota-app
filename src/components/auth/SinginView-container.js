import React, { useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import {useAuth} from './Auth-context'

import {singin} from './Auth-action'
const SinginView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [user, setUser] = useLocalStorage('user');
  const [state, dispatch] = useAuth()
  console.log(process.env.API_REST_URL)
  const handleSubmit = (event) => {
    event.preventDefault()
    singin(dispatch, {
      username,
      password,
      setUser
    })
  }
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

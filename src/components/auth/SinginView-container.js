import React, { useState } from 'react'

const SinginView = (props) => {
  const [username, setUsername] = useState("");
  const [passworld, setPasworld] = useState("");
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label defaultValue="Login" />
        <input
          type="text"
          value={username}
          onChange={data => setUsername(data.target.value)}
        />
        <label defaultValue="Senha" />
        <input
          type="passworld"
          value={passworld}
          onChange={data => setPasworld(data.target.value)}
        />
        <input
          type="submit"
          value="Singin"
          disabled={(username !== "" && passworld !== "")} />
      </form>
    </div>
  )
}

export default SinginView;

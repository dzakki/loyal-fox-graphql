import React, { useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

export function Login(props) {
  const location = useLocation()
  const [selectedId, setSelectedId] = useState(0)

  const handleLogin = () => {

  }

  if (props.user) {
    return <Redirect to={location.state.referrer || '/'} />
  }

  return (
    <div className="flex items-center mt-3">
      <select
        data-testid="select-user"
        className="rounded-l h-10"
        value={selectedId}
        onChange={e => setSelectedId(Number(e.target.value))}
      >
        <option value={0} disabled >Choose a user</option>
        {
          Array(10).fill().map((_, i) => (
            <option key={i} value={i + 1}>user {i + 1}</option>
          ))
        }
      </select>
      <button
        data-testid="login-button"
        className="border rounded ml-3 px-5 py-2"
        onClick={handleLogin}
      >
        LOGIN
      </button>
    </div>
  )
}


export default Login
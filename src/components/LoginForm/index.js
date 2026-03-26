import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('Aravind')
  const [password, setPassword] = useState('Pedakota')

  const navigate = useNavigate()

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitFunction = event => {
    event.preventDefault()

    if (username === 'Aravind' && password === 'Pedakota') {
      alert('Login successful!')
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <div className="login-container">
      <form className="form-container" onSubmit={onSubmitFunction}>
        <label htmlFor="username">USERNAME</label>
        <input
          id="username"
          type="text"
          onChange={onChangeUsername}
          value={username}
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="password"
          onChange={onChangePassword}
          value={password}
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
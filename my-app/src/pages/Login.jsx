import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Pages.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username && password) {
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/dashboard')
    }
  }

  return (
    <div className="page">
      <div className="page-content">
        <header className="app-header">
          <h1>Вход в аккаунт</h1>
          <p>Войдите в свой аккаунт Steam Store</p>
        </header>
        
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Имя пользователя</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите имя пользователя"
                required
              />
            </div>
            <div className="form-group">
              <label>Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
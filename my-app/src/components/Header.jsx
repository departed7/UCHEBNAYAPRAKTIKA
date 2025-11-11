import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import './Header.css'

function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { cartItems } = useCart()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
  }, [location])

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false')
    setIsLoggedIn(false)
    navigate('/')
  }

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.amount, 0)
  }

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">STEAM STORE</span>
        </div>
        
        <nav className="nav-menu">
          <NavLink 
            to="/store" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Магазин
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Сообщество
          </NavLink>
        </nav>

        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <NavLink to="/login" className="login-btn">
              Войти
            </NavLink>
          )}
          
          <NavLink to="/cart" className="cart-btn">
            <span className="cart-icon">🛒</span>
            {getCartItemsCount() > 0 && (
              <span className="cart-count">{getCartItemsCount()}</span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
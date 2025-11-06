import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import './Header.css'

function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { getTotalItems } = useCart()

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
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Сообщество
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Профиль
          </NavLink>
        </nav>
        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <NavLink to="/cart" className="cart-btn">
            <span className="cart-icon">🛒</span>
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
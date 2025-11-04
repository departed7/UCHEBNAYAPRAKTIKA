import React from 'react'
import './Header.css'

function Header({ totalItems }) {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🎮</span>
          <span className="logo-text">STEAM STORE</span>
        </div>
        <nav className="nav-menu">
          <a href="#store" className="nav-link active">Магазин</a>
          <a href="#community" className="nav-link">Сообщество</a>
          <a href="#profile" className="nav-link">Профиль</a>
        </nav>
        <div className="header-actions">
          <button className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalItems}</span>
          </button>
          <button className="profile-btn">
            <span className="profile-avatar">👤</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './Pages.css'

function Dashboard() {
  const { colors } = useTheme()

  return (
    <div className="page" style={{ backgroundColor: colors.background }}>
      <div className="page-content">
        <div className="page-header">
          <h1 style={{ color: colors.text }}>О нашем магазине</h1>
        </div>
        <div 
          className="dashboard-content"
          style={{ 
            backgroundColor: colors.surface,
            borderColor: colors.border
          }}
        >
          <div className="info-section">
            <h2 style={{ color: colors.text }}>🎮 Steam Store</h2>
            <p style={{ color: colors.text }}>
              Добро пожаловать в лучший магазин компьютерных игр! Мы предлагаем широкий ассортимент 
              лицензионных игр для всех платформ по доступным ценам.
            </p>
          </div>
          
          <div className="discount-section">
            <h3 style={{ color: colors.text }}>🎉 Система скидок</h3>
            <div className="discount-cards">
              <div 
                className="discount-card"
                style={{ 
                  backgroundColor: colors.background,
                  borderColor: colors.border
                }}
              >
                <h4 style={{ color: colors.primary }}>5% скидка</h4>
                <p style={{ color: colors.text }}>При заказе от 5 000 ₽</p>
              </div>
              <div 
                className="discount-card"
                style={{ 
                  backgroundColor: colors.background,
                  borderColor: colors.border
                }}
              >
                <h4 style={{ color: colors.primary }}>10% скидка</h4>
                <p style={{ color: colors.text }}>При заказе от 10 000 ₽</p>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div 
              className="stat-card"
              style={{ 
                backgroundColor: colors.background,
                borderColor: colors.border
              }}
            >
              <h3 style={{ color: colors.primary }}>5000+</h3>
              <p style={{ color: colors.text }}>Игр в каталоге</p>
            </div>
            <div 
              className="stat-card"
              style={{ 
                backgroundColor: colors.background,
                borderColor: colors.border
              }}
            >
              <h3 style={{ color: colors.primary }}>1M+</h3>
              <p style={{ color: colors.text }}>Довольных клиентов</p>
            </div>
            <div 
              className="stat-card"
              style={{ 
                backgroundColor: colors.background,
                borderColor: colors.border
              }}
            >
              <h3 style={{ color: colors.primary }}>24/7</h3>
              <p style={{ color: colors.text }}>Поддержка</p>
            </div>
          </div>

          <div className="features">
            <h3 style={{ color: colors.text }}>Наши преимущества:</h3>
            <ul style={{ color: colors.text }}>
              <li>✅ Мгновенная доставка ключей</li>
              <li>✅ Гарантия лучшей цены</li>
              <li>✅ Официальные дистрибьюторы</li>
              <li>✅ Круглосуточная поддержка</li>
              <li>✅ Бонусная программа</li>
              <li>✅ Прогрессивная система скидок</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './Pages.css'

function Dashboard() {
  const { colors } = useTheme()

  return (
    <div className="page">
      <div className="page-content">
        <header className="app-header">
          <h1>Steam Games Store</h1>
          <p>Лучшие игры для вашей коллекции</p>
        </header>
        
        <div className="community-content">
          <div className="community-header">
            <h2>Сообщество Steam</h2>
            <p>
              Присоединяйтесь к нашему сообществу геймеров! Обсуждайте игры, делитесь достижениями 
              и находите новых друзей для совместных игр.
            </p>
          </div>
          
          <div className="community-stats">
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Активных игроков</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Групп сообщества</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Активное общение</div>
            </div>
          </div>

          <div className="community-features">
            <h3>Возможности сообщества:</h3>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <span>Обсуждение игр</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <span>Совместные игры</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏆</span>
                <span>Обмен достижениями</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💰</span>
                <span>Торговая площадка</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <span>Группы по интересам</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>Турниры и события</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
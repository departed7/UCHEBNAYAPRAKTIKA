import React from 'react'
import './Pages.css'

function Profile() {
  return (
    <div className="page">
      <div className="page-content">
        <header className="app-header">
          <h1>Профиль</h1>
          <p>Управление вашим аккаунтом</p>
        </header>
        <div className="profile-content">
          <div className="profile-card">
            <h3>Информация о пользователе</h3>
            <p>Здесь будет информация о профиле пользователя</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
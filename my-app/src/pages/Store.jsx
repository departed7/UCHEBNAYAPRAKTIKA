import React from 'react'
import ProductCard from '../components/ProductCard'
import './Pages.css'

function Store() {
  const games = [
    {
      id: 1,
      name: "Cyberpunk 2077",
      price: 2999,
      image: "/Images/cyberpunk.jpg",
      features: ["Singleplayer", "Multiplayer"],
      hasAchievements: true
    },
    {
      id: 2,
      name: "The Witcher 3",
      price: 1999,
      image: "/Images/witcher3.jpg",
      features: ["Singleplayer", "Multiplayer"],
      hasAchievements: true
    },
    {
      id: 3,
      name: "Counter-Strike 2",
      price: 0,
      image: "/Images/cs2.jpg",
      features: ["Singleplayer", "Multiplayer"],
      hasAchievements: true
    },
    {
      id: 4,
      name: "Dota 2",
      price: 0,
      image: "/Images/dota2.jpg",
      features: ["Multiplayer"],
      hasAchievements: true
    },
    {
      id: 5,
      name: "Baldur's Gate 3",
      price: 3499,
      image: "/Images/baldurs-gate3.jpg",
      features: ["Singleplayer", "Multiplayer"],
      hasAchievements: true
    },
    {
      id: 6,
      name: "Elden Ring",
      price: 3999,
      image: "/Images/elden-ring.jpg",
      features: ["Singleplayer", "Multiplayer"],
      hasAchievements: true
    }
  ]

  return (
    <div className="page">
      <div className="page-content">
        <header className="app-header">
          <h1>Steam Games Store</h1>
          <p>Лучшие игры для вашей коллекции</p>
        </header>
        <div className="products-grid">
          {games.map(game => (
            <ProductCard key={game.id} product={game} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Store
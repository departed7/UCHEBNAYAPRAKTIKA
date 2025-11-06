import React from 'react'
import ProductCard from '../components/ProductCard'
import './Pages.css'

function Store() {
  const games = [
    {
      id: 1,
      name: "Cyberpunk 2077",
      price: 2999,
      image: "/images/cyberpunk.jpg"
    },
    {
      id: 2,
      name: "The Witcher 3",
      price: 1999,
      image: "/images/witcher3.jpg"
    },
    {
      id: 3,
      name: "Counter-Strike 2",
      price: 0,
      image: "/images/cs2.jpg"
    },
    {
      id: 4,
      name: "Dota 2",
      price: 0,
      image: "/images/dota2.jpg"
    },
    {
      id: 5,
      name: "Baldur's Gate 3",
      price: 3499,
      image: "/images/baldurs-gate3.jpg"
    },
    {
      id: 6,
      name: "Elden Ring",
      price: 3999,
      image: "/images/elden-ring.jpg"
    }
  ]

  return (
    <div className="page">
      <div className="page-content">
        <header className="app-header">
          <h1>Steam Games Store</h1>
          <p>Лучшие игры для Вас!</p>
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
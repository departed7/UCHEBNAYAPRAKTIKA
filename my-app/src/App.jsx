import React, { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  const [totalItems, setTotalItems] = useState(0)
  const [cartItems, setCartItems] = useState({})

  const games = [
    {
      id: 1,
      name: "Cyberpunk 2077",
      price: 2999,
      image: "/Images/cyberpunk.jpg"
    },
    {
      id: 2,
      name: "The Witcher 3",
      price: 1999,
      image: "/Images/witcher3.jpg"
    },
    {
      id: 3,
      name: "Counter-Strike 2",
      price: 0,
      image: "/Images/cs2.jpg"
    },
    {
      id: 4,
      name: "Dota 2",
      price: 0,
      image: "/Images/dota2.jpg"
    },
    {
      id: 5,
      name: "Baldur's Gate 3",
      price: 3499,
      image: "/Images/baldurs-gate3.jpg"
    },
    {
      id: 6,
      name: "Elden Ring",
      price: 3999,
      image: "/Images/elden-ring.jpg"
    }
  ]

  const handleAddToCart = (gameId) => {
    setCartItems(prev => {
      const newQuantity = (prev[gameId] || 0) + 1
      const newTotal = totalItems + 1
      setTotalItems(newTotal)
      return {
        ...prev,
        [gameId]: newQuantity
      }
    })
  }

  return (
    <div className="app">
      <Header totalItems={totalItems} />
      <div className="app-content">
        <header className="app-header">
          <h1>Steam Games Store</h1>
          <p>Лучшие игры для вашей коллекции</p>
        </header>
        <div className="products-grid">
          {games.map(game => (
            <ProductCard
              key={game.id}
              name={game.name}
              price={game.price}
              image={game.image}
              quantity={cartItems[game.id] || 0}
              onAddToCart={() => handleAddToCart(game.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    setQuantity(quantity + 1)
    addToCart(product)
  }

  const formatPrice = (price) => {
    if (price === 0) return 'Бесплатно'
    return `${price.toLocaleString('ru-RU')} ₽`
  }

  return (
    <div className="product-card">
      <div className="card-glow"></div>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {quantity > 0 && <div className="cart-badge">{quantity}</div>}
        <div className="game-badge">POPULAR</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">{formatPrice(product.price)}</div>
        <div className="product-features">
          <span className="feature">🎮 Singleplayer</span>
          <span className="feature">🌐 Multiplayer</span>
          <span className="feature">🏆 Achievements</span>
        </div>
        <button 
          className={`add-to-cart-btn ${quantity > 0 ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          <span className="btn-icon">🛒</span>
          {quantity > 0 ? 'Добавить ещё' : 'Добавить в корзину'}
        </button>
        {quantity > 0 && (
          <div className="quantity-counter">
            <span className="counter-icon">📦</span>
            В корзине: <strong>{quantity}</strong>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
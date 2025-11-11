import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  const [showRedirect, setShowRedirect] = useState(false)
  const { addProductToCart, getProductAmount } = useCart()
  const navigate = useNavigate()

  const productAmount = getProductAmount(product.id)

  const handleAddProductToCart = () => {
    addProductToCart(product)
    setShowRedirect(true)
    setTimeout(() => {
      setShowRedirect(false)
    }, 3000)
  }

  const handleRedirectToCart = () => {
    navigate('/cart')
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
        {productAmount > 0 && <div className="cart-badge">{productAmount}</div>}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">{formatPrice(product.price)}</div>
        <div className="product-features">
          {product.features?.map((feature, index) => (
            <span key={index} className="feature">{feature}</span>
          ))}
          {product.hasAchievements && (
            <span className="feature">🏆 Achievements</span>
          )}
        </div>
        <button 
          className={`add-to-cart-btn ${productAmount > 0 ? 'added' : ''}`}
          onClick={handleAddProductToCart}
        >
          <span className="btn-icon">🛒</span>
          {productAmount > 0 ? 'Добавить ещё' : 'Добавить в корзину'}
        </button>
        
        {showRedirect && (
          <div className="redirect-notification">
            <span>Товар добавлен в корзину! </span>
            <button 
              className="redirect-btn"
              onClick={handleRedirectToCart}
            >
              Перейти в корзину →
            </button>
          </div>
        )}
        
        {productAmount > 0 && !showRedirect && (
          <div className="quantity-counter">
            <span className="counter-icon">📦</span>
            В корзине: <strong>{productAmount}</strong>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
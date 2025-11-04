import React from 'react'
import './ProductCard.css'

function ProductCard({ name, price, image, quantity, onAddToCart }) {
  const formatPrice = (price) => {
    if (price === 0) return 'Бесплатно'
    return `${price.toLocaleString('ru-RU')} ₽`
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">{formatPrice(price)}</div>
        <button 
          className="add-to-cart-btn"
          onClick={onAddToCart}
        >
          Добавить в корзину
        </button>
        {quantity > 0 && (
          <div className="quantity-counter">
            В корзине: {quantity}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
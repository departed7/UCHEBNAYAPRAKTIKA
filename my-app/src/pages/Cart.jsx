import React from 'react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import './Pages.css'

function Cart() {
  const { 
    cartItems, 
    removeProductFromCart, 
    increaseProductAmount, 
    decreaseProductAmount,
    clearCartProducts, 
    getCartTotalPrice 
  } = useCart()
  const { colors } = useTheme()

  const formatPrice = (price) => {
    return `${price.toLocaleString('ru-RU')} ₽`
  }

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <div className="page-content">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Корзина пуста</h2>
            <p>Добавьте товары из каталога</p>
          </div>
        </div>
      </div>
    )
  }

  const totalPrice = getCartTotalPrice()

  return (
    <div className="page">
      <div className="page-content">
        <header className="app-header">
          <h1>Товары в корзине</h1>
        </header>
        
        <div className="cart-container">
          <div className="cart-items-section">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-price-info">
                      <span className="item-price">{formatPrice(item.price)}</span>
                      <div className="amount-controls">
                        <button onClick={() => decreaseProductAmount(item.id)}>-</button>
                        <span className="item-amount">{item.amount}</span>
                        <button onClick={() => increaseProductAmount(item.id)}>+</button>
                      </div>
                    </div>
                    <div className="item-total">
                      {formatPrice(item.price * item.amount)}
                    </div>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeProductFromCart(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary-section">
            <div className="summary-card">
              <h3 className="summary-title">Сводка заказа</h3>
              
              <div className="summary-line">
                <span>Товары ({cartItems.length})</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-line total">
                <span>Итого</span>
                <span className="final-price">{formatPrice(totalPrice)}</span>
              </div>

              <div className="cart-actions">
                <button 
                  className="clear-cart-btn"
                  onClick={clearCartProducts}
                >
                  🗑️ Очистить корзину
                </button>
                <button className="checkout-btn">
                  💳 Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
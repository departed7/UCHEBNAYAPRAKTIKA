import React from 'react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import './Pages.css'

function Cart() {
  const { items, removeFromCart, getTotalPrice, getDiscountedPrice, getDiscountAmount, getDiscount, clearCart } = useCart()
  const { colors } = useTheme()

  const formatPrice = (price) => {
    return `${price.toLocaleString('ru-RU')} ₽`
  }

  if (items.length === 0) {
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

  const discount = getDiscount()
  const discountAmount = getDiscountAmount()
  const totalPrice = getTotalPrice()
  const finalPrice = getDiscountedPrice()

  return (
    <div className="page">
      <div className="page-content">
        <header className="app-header">
          <h1>Товары в корзине</h1>
        </header>
        
        <div className="cart-container">
          <div className="cart-items-section">
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-price-info">
                      <span className="item-price">{formatPrice(item.price)}</span>
                      <span className="item-quantity">× {item.quantity}</span>
                    </div>
                    <div className="item-total">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
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
                <span>Товары ({items.length})</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              {discount > 0 && (
                <div className="summary-line discount">
                  <span>Скидка {discount * 100}%</span>
                  <span className="discount-amount">-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="summary-divider"></div>

              <div className="summary-line total">
                <span>Итого</span>
                <span className="final-price">{formatPrice(finalPrice)}</span>
              </div>

              {discount > 0 && (
                <div className="savings-badge">
                  🎉 Вы экономите {formatPrice(discountAmount)}
                </div>
              )}

              <div className="cart-actions">
                <button 
                  className="clear-cart-btn"
                  onClick={clearCart}
                >
                  🗑️ Очистить корзину
                </button>
                <button className="checkout-btn">
                  💳 Оформить заказ
                </button>
              </div>
            </div>

            <div className="discount-promo-banner">
              <div className="discount-promo-icon">🎁</div>
              <div className="discount-promo-content">
                <h4>Система скидок</h4>
                <div className="discount-tiers">
                  <div className="discount-tier-item">
                    <span className="tier-amount">От 5 000 ₽</span>
                    <span className="tier-discount">-5% скидка</span>
                  </div>
                  <div className="discount-tier-item">
                    <span className="tier-amount">От 10 000 ₽</span>
                    <span className="tier-discount">-10% скидка</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
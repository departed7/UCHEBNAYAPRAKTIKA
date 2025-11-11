import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      const existingCartItem = state.cartItems.find(
        item => item.id === action.payload.id
      )
      
      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, amount: item.amount + 1 }
              : item
          )
        }
      }
      
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, amount: 1 }]
      }
    
    case 'REMOVE_PRODUCT_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      }
    
    case 'INCREASE_PRODUCT_AMOUNT':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      }
    
    case 'DECREASE_PRODUCT_AMOUNT':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, amount: Math.max(0, item.amount - 1) }
            : item
        ).filter(item => item.amount > 0)
      }
    
    case 'CLEAR_CART_PRODUCTS':
      return {
        ...state,
        cartItems: []
      }
    
    case 'UPDATE_PRODUCT_AMOUNT':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.itemId
            ? { ...item, amount: Math.max(0, action.payload.newAmount) }
            : item
        ).filter(item => item.amount > 0)
      }
    
    default:
      return state
  }
}

const initialState = {
  cartItems: []
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addProductToCart = (product) => {
    dispatch({ type: 'ADD_PRODUCT_TO_CART', payload: product })
  }

  const removeProductFromCart = (productId) => {
    dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', payload: productId })
  }

  const increaseProductAmount = (productId) => {
    dispatch({ type: 'INCREASE_PRODUCT_AMOUNT', payload: productId })
  }

  const decreaseProductAmount = (productId) => {
    dispatch({ type: 'DECREASE_PRODUCT_AMOUNT', payload: productId })
  }

  const clearCartProducts = () => {
    dispatch({ type: 'CLEAR_CART_PRODUCTS' })
  }

  const updateProductAmount = (productId, newAmount) => {
    dispatch({ 
      type: 'UPDATE_PRODUCT_AMOUNT', 
      payload: { itemId: productId, newAmount } 
    })
  }

  const getCartTotalPrice = () => {
    return state.cartItems.reduce((total, item) => total + (item.price * item.amount), 0)
  }

  const getCartItemsCount = () => {
    return state.cartItems.reduce((total, item) => total + item.amount, 0)
  }

  const getCartItemsQuantity = () => {
    return state.cartItems.length
  }

  const isProductInCart = (productId) => {
    return state.cartItems.some(item => item.id === productId)
  }

  const getProductAmount = (productId) => {
    const item = state.cartItems.find(item => item.id === productId)
    return item ? item.amount : 0
  }

  const value = {
    cartItems: state.cartItems,
    addProductToCart,
    removeProductFromCart,
    increaseProductAmount,
    decreaseProductAmount,
    clearCartProducts,
    updateProductAmount,
    getCartTotalPrice,
    getCartItemsCount,
    getCartItemsQuantity,
    isProductInCart,
    getProductAmount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
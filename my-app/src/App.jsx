import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Store from './pages/Store'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
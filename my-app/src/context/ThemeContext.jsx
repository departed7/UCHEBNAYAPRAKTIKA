import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.body.style.background = isDark 
      ? 'linear-gradient(135deg, #0c1c2c 0%, #1b2838 50%, #2a475e 100%)'
      : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)'
    document.body.style.color = isDark ? '#c7d5e0' : '#333333'
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      background: '#1b2838',
      surface: '#2a475e',
      primary: '#66c0f4',
      text: '#c7d5e0',
      border: '#363c44'
    } : {
      background: '#f5f5f5',
      surface: '#ffffff',
      primary: '#007bff',
      text: '#333333',
      border: '#dddddd'
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
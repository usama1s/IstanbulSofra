import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import MenuPage from './menu/MenuPage'

function AppContent() {
  const location = useLocation()
  const showHeader = location.pathname === '/home'

  return (
    <div className="min-h-screen bg-primary-900">
      <ScrollToTop />
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      {showHeader && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

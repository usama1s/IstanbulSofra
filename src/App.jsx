import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

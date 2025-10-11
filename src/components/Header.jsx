import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { handleAnchorClick } from '../utils/scrollUtils'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '#about', type: 'anchor' },
    { name: 'Menu', href: '/menu', type: 'link' },
    { name: 'Contact', href: '#contact', type: 'anchor' },
  ]

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <nav className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-100' : 'text-white'
              }`}>
                Istanbul Sofra
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium hover:text-red-400 transition-colors duration-200 ${
                      isScrolled ? 'text-primary-200' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleAnchorClick(item.href, navigate)}
                    className={`font-medium hover:text-red-400 transition-colors duration-200 ${
                      isScrolled ? 'text-primary-200' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
              <button className="btn-primary">
                Reserve Table
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors duration-200 ${
                  isScrolled ? 'text-primary-200' : 'text-white'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-900/95 backdrop-blur-sm border-t border-primary-700 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-3 text-primary-200 hover:text-red-400 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleAnchorClick(item.href, navigate)
                      setIsMenuOpen(false)
                    }}
                    className="block py-3 text-primary-200 hover:text-red-400 font-medium w-full text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <button className="btn-primary w-full mt-4">
                Reserve Table
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header

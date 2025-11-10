import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (item) => {
    if (item.name === 'Menu') {
      navigate('/')
    } else if (item.name === 'Home') {
      navigate('/home')
    } else if (location.pathname === '/home') {
      scrollToSection(item.href)
    } else {
      navigate('/home')
      setTimeout(() => {
        scrollToSection(item.href)
      }, 100)
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Contact', href: 'contact' },
  ]

  const isMenuPage = location.pathname === '/'
  
  return (
    <>
      <header className={`${isMenuPage ? 'sticky top-0 bg-primary-900' : 'fixed'} w-full z-50 transition-all duration-300 ${
        isScrolled && !isMenuPage ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg py-2' : isMenuPage ? 'py-4' : 'bg-transparent py-4'
      }`}>
        <nav className={isMenuPage ? 'container-custom' : ''}>
          <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                  <button 
                    onClick={() => {
                      if (location.pathname === '/home') {
                        scrollToSection('home')
                      } else {
                        navigate('/home')
                      }
                    }}
                    className="transition-opacity duration-300 hover:opacity-80"
                  >
                    <img 
                      src="/images/Istanbul-Sofra-White-Logo.png" 
                      alt="Istanbul Sofra" 
                      className="h-12 md:h-16 w-auto object-contain"
                    />
                  </button>
                </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`font-medium hover:text-red-400 transition-colors duration-200 ${
                    isScrolled ? 'text-primary-200' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
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
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block py-3 text-primary-200 hover:text-red-400 font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header

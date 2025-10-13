import React from 'react'
import { menuItems } from './Menu'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Get all featured items from menu
  const getFeaturedItems = () => {
    const featured = []
    Object.values(menuItems).forEach(category => {
      category.forEach(item => {
        if (item.featured) {
          featured.push({
            type: 'dish',
            name: item.name,
            turkish: item.turkish,
            image: item.image,
            price: item.price,
            description: item.description
          })
        }
      })
    })
    return featured
  }

  const slides = [
    { 
      type: 'restaurant',
      name: 'Istanbul Sofra', 
      subtitle: 'Authentic Turkish Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    ...getFeaturedItems()
  ]

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="floating-elements absolute top-20 left-10 w-32 h-32 border border-red-500/20 rounded-full"></div>
        <div className="floating-elements absolute top-40 right-20 w-20 h-20 border border-white/10 rounded-full" style={{animationDelay: '2s'}}></div>
        <div className="floating-elements absolute bottom-40 left-20 w-16 h-16 border border-red-400/30 rounded-full" style={{animationDelay: '4s'}}></div>
        <div className="floating-elements absolute bottom-20 right-40 w-24 h-24 border border-white/15 rounded-full" style={{animationDelay: '1s'}}></div>
      </div>

          <div className="carousel-slides flex h-full" style={{ width: `${slides.length * 100}%` }}>
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className="h-full relative bg-cover bg-center bg-no-repeat transition-all duration-1000 flex-shrink-0"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  width: `${100 / slides.length}%`
                }}
              >
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10"></div>
            
            {/* Restaurant slide content - centered */}
            {slide.type === 'restaurant' && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-4xl px-8 md:px-4" style={{zIndex: 55}}>
                <div className="hero-text-animation">
                  <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight gradient-text">
                    {slide.name}
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-8"></div>
                  <h2 className="text-2xl md:text-3xl mb-12 font-light tracking-wide text-white/90 hero-text-animation" style={{animationDelay: '0.3s'}}>
                    {slide.subtitle}
                  </h2>
                  
                  {/* Single Menu Button */}
                  <div className="hero-text-animation" style={{animationDelay: '0.6s'}}>
                    <button 
                      onClick={() => scrollToSection('menu')}
                      className="btn-primary text-xl px-12 py-5 hero-button-hover transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      <span className="relative z-10">View Menu</span>
                    </button>
                  </div>
                </div>

                {/* Decorative elements around main content */}
                <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-red-500/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            )}
            
                {/* Dish slides content - bottom left corner */}
                {slide.type === 'dish' && (
                  <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 text-white" style={{zIndex: 70}}>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-white drop-shadow-2xl">
                      {slide.name}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-transparent mb-3"></div>
                    <p className="text-red-400 text-lg md:text-2xl lg:text-3xl font-medium italic drop-shadow-xl mb-2">
                      {slide.turkish}
                    </p>
                    {slide.description && (
                      <p className="text-white/90 text-sm md:text-base lg:text-lg drop-shadow-lg max-w-md">
                        {slide.description}
                      </p>
                    )}
                  </div>
                )}

            {/* Additional visual elements for each slide */}
            <div className="absolute top-1/4 right-8 md:right-16 z-15 opacity-20">
              <div className="w-2 h-2 bg-red-500 rounded-full mb-4 animate-pulse"></div>
              <div className="w-1 h-16 bg-gradient-to-b from-red-500 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

          {/* Bottom progress indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2" style={{zIndex: 65}}>
            {slides.map((_, index) => (
              <div key={index} className="w-8 h-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 rounded-full animate-pulse"
                  style={{
                    animationDelay: `${index * 6}s`,
                    animationDuration: '42s'
                  }}
                ></div>
              </div>
            ))}
          </div>
    </section>
  )
}

export default Hero

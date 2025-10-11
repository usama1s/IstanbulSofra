import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const dishes = [
    { 
      name: 'Adana Kebab', 
      turkish: 'Adana Kebap', 
      image: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      name: 'Baklava', 
      turkish: 'Baklava', 
      image: 'https://images.unsplash.com/photo-1571197119049-cdba2770db8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      name: 'Turkish Delight', 
      turkish: 'Lokum', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      name: 'Turkish Coffee', 
      turkish: 'Türk Kahvesi', 
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    { 
      name: 'Mixed Grill', 
      turkish: 'Karışık Izgara', 
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="carousel-slides flex w-[500%] h-full">
        {dishes.map((dish, index) => (
          <div 
            key={index} 
            className="w-1/5 h-full relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${dish.image})` }}
          >
            {/* Dark shadow overlay on images */}
            <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>
            
            {/* Main content overlay - only on first slide */}
            {index === 0 && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 text-white max-w-4xl px-8 md:px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl">
                  Istanbul Sofra
                </h1>
                <h2 className="text-2xl md:text-3xl mb-8 font-light tracking-wide drop-shadow-xl">
                  Authentic Turkish Cuisine Experience
                </h2>
                <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
                  Discover the exquisite flavors of Turkey through our carefully curated dishes, 
                  each prepared with traditional techniques and the finest ingredients.
                </p>
                
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/menu" className="btn-primary text-lg px-8 py-4 inline-block text-center">
                    Explore Menu
                  </Link>
                  <Link to="#contact" className="btn-secondary text-lg px-8 py-4 inline-block text-center">
                    Reserve Table
                  </Link>
                </div>
              </div>
            )}
            
            {/* Dish name overlay */}
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20 text-white">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 drop-shadow-2xl">
                {dish.name}
              </h3>
              <p className="text-red-400 text-xl md:text-3xl lg:text-4xl font-medium italic drop-shadow-xl">
                {dish.turkish}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero

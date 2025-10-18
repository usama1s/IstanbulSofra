import React, { useState } from 'react'
import Slider from 'react-slick'
import { menuItems } from './Menu'
import { Maximize, Minimize } from 'lucide-react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NewHero = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Get all featured dishes from menu
  const getFeaturedDishes = () => {
    const featured = []
    Object.values(menuItems).forEach(category => {
      category.forEach(item => {
        if (item.featured && item.image) {
          featured.push({
            name: item.name,
            turkish: item.turkish,
            image: item.image,
            price: item.price
          })
        }
      })
    })
    return featured
  }

  const dishes = getFeaturedDishes()

  const scrollToMenu = () => {
    const element = document.getElementById('menu')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleFullscreen = () => {
    const element = document.getElementById('hero-slider')
    
    if (!isFullscreen) {
      // Enter fullscreen
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // 1 second transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds display time
    fade: false,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: false,
    dotsClass: "slick-dots custom-dots"
  }

  return (
    <section id="hero-slider" className="w-full h-screen bg-black relative">
      {/* Fullscreen Button */}
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
      
      <Slider {...settings} className="h-full">
        {/* Istanbul Sofra Main Slide */}
        <div key="istanbul-sofra" className="h-screen">
          <div className="h-full bg-black flex items-center justify-center relative">
            {/* Background image div */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 zoom-image"
              style={{ backgroundImage: `url(/images/Istanbul-Sofra.jpeg)` }}
            ></div>
            
            {/* Dark overlay */}
            <div 
              className="absolute inset-0 z-10"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            ></div>
            
            {/* Centered content */}
            <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-8 mt-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-200 drop-shadow-xl leading-relaxed">
                Authentic Turkish Cuisine
              </p>
              {!isFullscreen && (
                <button 
                  onClick={scrollToMenu}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Menu
                </button>
              )}
            </div>
          </div>
        </div>
        {dishes.map((dish, index) => (
          <div key={index} className="h-screen">
            <div className="h-full bg-black flex items-center justify-center relative">
              {/* Background image div */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 zoom-image"
                style={{ backgroundImage: `url(${dish.image})` }}
              ></div>
              
              {/* Dark overlay */}
              <div 
                className="absolute inset-0 z-10"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
              ></div>
              
              {/* Dish title in bottom left corner */}
              <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 text-white z-20">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-white drop-shadow-2xl">
                  {dish.name}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-transparent mb-3"></div>
                <p className="text-red-400 text-lg md:text-2xl lg:text-3xl font-medium italic drop-shadow-xl">
                  {dish.turkish}
                </p>
                  {isFullscreen && dish.price && (
                    <p className="text-yellow-400 text-xl md:text-3xl lg:text-4xl font-bold mt-4 drop-shadow-xl">
                     ₨{dish.price}
                    </p>
                  )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default NewHero

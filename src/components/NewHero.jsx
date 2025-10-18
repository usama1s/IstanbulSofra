import React from 'react'
import Slider from 'react-slick'
import { menuItems } from './Menu'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NewHero = () => {
  // Get all featured dishes from menu
  const getFeaturedDishes = () => {
    const featured = []
    Object.values(menuItems).forEach(category => {
      category.forEach(item => {
        if (item.featured && item.image) {
          featured.push({
            name: item.name,
            turkish: item.turkish,
            image: item.image
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
    <section className="w-full h-screen bg-black">
      <Slider {...settings} className="h-full">
        {/* Istanbul Sofra Main Slide */}
        <div key="istanbul-sofra" className="h-screen">
          <div className="h-full bg-black flex items-center justify-center relative">
            {/* Background image div */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 zoom-image"
              style={{ backgroundImage: `url(/src/images/Istanbul-Sofra.jpeg)` }}
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
              <button 
                onClick={scrollToMenu}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Menu
              </button>
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
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default NewHero

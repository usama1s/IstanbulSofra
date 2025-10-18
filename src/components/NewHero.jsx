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
            image: item.image
          })
        }
      })
    })
    return featured
  }

  const dishes = getFeaturedDishes()

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // 1 second transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds display time
    fade: false,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: false,
    dotsClass: "slick-dots custom-dots"
  }

  return (
    <section className="w-full h-screen bg-black">
      <Slider {...settings} className="h-full">
        {dishes.map((dish, index) => (
          <div key={index} className="h-screen">
            <div className="h-full bg-black flex items-center justify-center relative">
              {/* Background image div */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${dish.image})` }}
              ></div>
              
              {/* Dark overlay */}
              <div 
                className="absolute inset-0 z-10"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
              ></div>
              
              <h2 className="text-white text-6xl font-bold text-center relative z-20 drop-shadow-2xl">
                {dish.name}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default NewHero

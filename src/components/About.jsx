import React from 'react'
import { Heart, Clock, ChefHat, Leaf } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Made with Love",
      description: "Every dish is prepared with passion and care, using traditional family recipes passed down through generations."
    },
    {
      icon: <Clock className="text-red-500" size={32} />,
      title: "Fresh Daily",
      description: "We source fresh ingredients daily from local markets to ensure the highest quality and authentic flavors."
    },
    {
      icon: <ChefHat className="text-red-500" size={32} />,
      title: "Expert Chefs",
      description: "Our master chefs bring decades of experience from the kitchens of Istanbul's finest restaurants."
    },
    {
      icon: <Leaf className="text-red-500" size={32} />,
      title: "Natural Ingredients",
      description: "We believe in using only the finest natural ingredients, with no artificial additives or preservatives."
    }
  ]

  return (
    <section id="about" className="section-padding bg-slate-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Founded in 1998 by the Özkan family, Istanbul Sofra began as a small neighborhood 
                restaurant with a simple mission: to share the authentic flavors of Turkish cuisine 
                with our community.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed mb-6">
                Today, we continue that tradition, serving time-honored recipes in a warm, 
                welcoming atmosphere that makes every guest feel like family. Our kitchen is 
                the heart of our restaurant, where traditional techniques meet the freshest ingredients.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed">
                From our wood-fired kebabs to our homemade baklava, every dish reflects our 
                commitment to authenticity and quality that has made us a beloved destination 
                for Turkish cuisine lovers.
              </p>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-96 flex items-center justify-center border border-slate-700">
              <div className="text-center text-slate-200">
                <ChefHat size={80} className="mx-auto mb-4 opacity-50 text-red-400" />
                <p className="text-xl font-semibold">Restaurant Interior</p>
                <p className="text-sm mt-2 opacity-75">Warm & Welcoming Atmosphere</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-slate-700 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              What Makes Us Special
            </h3>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              We take pride in every aspect of our service, from ingredient selection 
              to the final presentation of your meal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-gray-800 border border-slate-700 p-8 rounded-xl shadow-sm hover:shadow-lg hover:border-red-600/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-100 mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

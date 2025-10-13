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

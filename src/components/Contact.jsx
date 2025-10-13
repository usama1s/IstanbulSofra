import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {

  const contactInfo = [
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Address",
      details: [
        "Food Court, Capital University",
        "Islamabad, Pakistan"
      ]
    },
    {
      icon: <Phone className="text-red-600" size={24} />,
      title: "Phone",
      details: [
        "+92 51 555 0123",
        "+92 51 555 0124"
      ]
    },
    {
      icon: <Mail className="text-red-600" size={24} />,
      title: "Website",
      details: [
        "istanbulsofra.pk",
        "info@istanbulsofra.pk"
      ]
    },
    {
      icon: <Clock className="text-red-600" size={24} />,
      title: "Hours",
      details: [
        "Monday - Sunday",
        "8:00 AM - 7:00 PM"
      ]
    }
  ]

  return (
    <section id="contact" className="section-padding bg-slate-800">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Visit Us
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            We're located in the food court of Capital University, Islamabad. 
            Come experience authentic Turkish hospitality and cuisine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h4 className="font-semibold text-slate-100 mb-3 text-lg">
                  {info.title}
                </h4>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-200 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-8 h-64 flex items-center justify-center border border-slate-600">
            <div className="text-center text-slate-200">
              <MapPin size={60} className="mx-auto mb-4 opacity-50 text-red-400" />
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm mt-2 opacity-75">Capital University, Islamabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

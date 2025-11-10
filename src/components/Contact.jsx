import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {

  const contactInfo = [
    {
      icon: <MapPin className="text-red-600" size={24} />,
      details: [
        "Food Court, Capital University of Science and Technology",
        "Islamabad, Pakistan"
      ]
    },
    {
      icon: <Phone className="text-red-600" size={24} />,
      details: [
        "+92 312 555 0123"
      ]
    },
    {
      icon: <Mail className="text-red-600" size={24} />,
      details: [
        "info@istanbulsofra.pk"
      ]
    },
    {
      icon: <Clock className="text-red-600" size={24} />,
      details: [
        "Monday - Saturday",
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
            We're located in the food court of Capital University of Science and Technology, Islamabad. 
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
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-200 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Feedback QR Code Section */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-8 border border-slate-600">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                Share Your Feedback
              </h3>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                We value your opinion! Scan the QR code below to share your experience with us.
              </p>
              <a 
                href="https://forms.gle/WA4kKaUbfpaQT1bM6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                  {/* Replace the src with your QR code image path */}
                  <img 
                    src="/images/feedback-QR.jpeg" 
                    alt="Feedback QR Code" 
                    className="w-48 h-48 md:w-64 md:h-64 mx-auto"
                  />
                </div>
              </a>
              <p className="text-slate-300 mt-4 text-sm">
                Scan or click the QR code to leave feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { MapPin, Phone, Mail, Clock, Heart, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' }
  ]

      const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'Contact', href: '#contact' }
      ]

  return (
    <footer className="bg-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                {/* Restaurant Info */}
                <div className="lg:col-span-2">
                  <img 
                    src="/images/Istanbul-Sofra-White-Logo.png" 
                    alt="Istanbul Sofra" 
                    className="h-16 md:h-20 w-auto object-contain mb-6"
                  />
              <p className="text-slate-300 mb-6 leading-relaxed">
                Experience the authentic flavors of Turkish cuisine at Capital University of Science and Technology. 
                We serve traditional dishes with modern hospitality in our university food court, 
                creating memorable dining experiences for students, faculty, and visitors.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-red-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-red-400 mt-1 flex-shrink-0" size={18} />
                  <div className="text-slate-300">
                    <p>Food Court, Capital University of Science and Technology</p>
                    <p>Islamabad, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-red-400 flex-shrink-0" size={18} />
                  <p className="text-slate-300">+92 312 555 0123</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-red-400 flex-shrink-0" size={18} />
                  <p className="text-slate-300">info@istanbulsofra.pk</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-red-400 mt-1 flex-shrink-0" size={18} />
                  <div className="text-slate-300">
                    <p>Monday - Saturday</p>
                    <p>8:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear} Istanbul Sofra. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-slate-400 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>in Islamabad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

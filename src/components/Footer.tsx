import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Aurobindo Dental</h3>
                <p className="text-xs text-gray-400">Hospital</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Providing world-class dental care with 15+ years of experience.
              Affordable treatments with cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors inline-block hover:translate-x-1 duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors inline-block hover:translate-x-1 duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-teal-400 transition-colors inline-block hover:translate-x-1 duration-300">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-teal-400 transition-colors inline-block hover:translate-x-1 duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/dental-tourism" className="hover:text-teal-400 transition-colors inline-block hover:translate-x-1 duration-300">
                  Dental Tourism
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-teal-400 transition-colors inline-block hover:translate-x-1 duration-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-teal-400 transition-colors">Invisible Aligners</li>
              <li className="hover:text-teal-400 transition-colors">Dental Braces</li>
              <li className="hover:text-teal-400 transition-colors">Root Canal Treatment</li>
              <li className="hover:text-teal-400 transition-colors">Dental Implants</li>
              <li className="hover:text-teal-400 transition-colors">Teeth Whitening</li>
              <li className="hover:text-teal-400 transition-colors">Cosmetic Dentistry</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  Flat 503, 5th Floor, MVS Heights, Vinayaka Nagar,
                  Khanamet, Madhapur, Hyderabad-500081
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <div className="text-sm">
                  <p>9866937777</p>
                  <p>9032018887</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:aurobindodental@gmail.com" className="text-sm hover:text-teal-400 transition-colors">
                  aurobindodental@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Aurobindo Dental Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

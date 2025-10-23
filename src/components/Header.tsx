import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/treatments', label: 'Treatments' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/dental-tourism', label: 'Dental Tourism' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-4">
              <a href="tel:9866937777" className="flex items-center gap-2 hover:text-teal-100 transition-colors">
                <Phone className="w-4 h-4" />
                <span>9866937777</span>
              </a>
              <a href="mailto:aurobindodental@gmail.com" className="flex items-center gap-2 hover:text-teal-100 transition-colors">
                <Mail className="w-4 h-4" />
                <span>aurobindodental@gmail.com</span>
              </a>
            </div>
            <div className="text-xs md:text-sm">
              15+ Years of Excellence in Dental Care
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                  Aurobindo Dental
                </h1>
                <p className="text-xs text-gray-500">Hospital</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="hidden lg:block px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-teal-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 animate-fadeIn">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-teal-600 text-white'
                        : 'text-gray-700 hover:bg-teal-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-semibold text-center mt-2"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

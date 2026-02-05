import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={handleLogoClick}>
            <img 
              src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8ce4887cee8cb84f29f71549817a67e55771ae64/logoo.png.png" 
              alt="Vicky's Restaurant & Lounge" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary font-bold' : 'text-stone-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-col items-center">
             <a 
              href={`tel:${BUSINESS_INFO.phoneOrder.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-primary hover:bg-red-900 text-white px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm font-semibold mb-1"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <a 
              href={`tel:0920000562`}
              className="text-xs font-bold text-stone-600 hover:text-primary transition-colors"
            >
              0920 000 562
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 hover:text-primary transition-colors focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                location.pathname === link.path 
                  ? 'text-primary bg-red-50' 
                  : 'text-stone-600 hover:text-primary hover:bg-stone-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-stone-100">
            <a 
              href={`tel:${BUSINESS_INFO.phoneOrder.replace(/\s/g, '')}`}
              className="flex w-full items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold shadow-md active:scale-95 transition-transform"
            >
              <Phone size={18} />
              Order Now
            </a>
            <div className="text-center mt-2">
              <a href="tel:0920000562" className="text-sm font-bold text-stone-600">0920 000 562</a>
            </div>
            <a 
              href={`tel:${BUSINESS_INFO.phoneReserve.replace(/\s/g, '')}`}
              className="flex w-full items-center justify-center gap-2 mt-3 bg-stone-100 text-stone-800 px-5 py-3 rounded-xl font-semibold active:scale-95 transition-transform"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
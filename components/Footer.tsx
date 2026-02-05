import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-stone-600 pt-16 pb-8 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold text-stone-900">Vicky’s Restaurant & Lounge</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              A modern restaurant and lounge offering bold flavors, handcrafted drinks, and an atmosphere designed for great food and unforgettable nights.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/vickysrestaurantandlounge?igsh=MXhrODMydGlkYmRpeA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063453648813&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              {/* X Icon */}
              <a href="https://x.com/LoungeVicky?s=20" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* TikTok Icon */}
              <a href="https://www.tiktok.com/@vickys.restaurant2?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-900 font-serif font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Full Menu</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-stone-900 font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_INFO.phoneOrder}`} className="hover:text-primary transition-colors">Order: {BUSINESS_INFO.phoneOrder}</a>
                  <a href={`tel:${BUSINESS_INFO.phoneReserve}`} className="hover:text-primary transition-colors">Book: {BUSINESS_INFO.phoneReserve}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary shrink-0" size={18} />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Vicky’s Restaurant & Lounge. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
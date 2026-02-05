import React from 'react';
import { Phone, MapPin, Clock, Mail, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-stone-900 mb-4">Contact & Reservations</h1>
          <p className="text-stone-500">We look forward to welcoming you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Info Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm space-y-8">
            <h2 className="font-serif text-2xl font-bold text-stone-900">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Phone</h3>
                  <p className="text-stone-600 mb-1">
                    <span className="font-medium">Order:</span> <a href={`tel:${BUSINESS_INFO.phoneOrder}`} className="hover:text-primary transition-colors">{BUSINESS_INFO.phoneOrder}</a>
                  </p>
                  <p className="text-stone-600">
                    <span className="font-medium">Reserve:</span> <a href={`tel:${BUSINESS_INFO.phoneReserve}`} className="hover:text-primary transition-colors">{BUSINESS_INFO.phoneReserve}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Location</h3>
                  <p className="text-stone-600">{BUSINESS_INFO.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Opening Hours</h3>
                  <p className="text-stone-600">{BUSINESS_INFO.hours}</p>
                  <p className="text-sm text-stone-400 mt-1">Open 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Parking</h3>
                  <p className="text-stone-600">Free parking lot and free street parking available.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <a 
                href={`tel:${BUSINESS_INFO.phoneOrder.replace(/\s/g, '')}`} 
                className="w-full block text-center py-4 bg-primary text-white font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg"
              >
                Call Now to Book
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Send an Inquiry</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-stone-600">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-stone-50" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-stone-600">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-stone-50" placeholder="+211 ..." />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-stone-600">Date & Time</label>
                <input type="datetime-local" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-stone-50" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-stone-600">Guests</label>
                <select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-stone-50">
                   <option>2 Guests</option>
                   <option>3-4 Guests</option>
                   <option>5-8 Guests</option>
                   <option>Large Group (8+)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-stone-600">Message (Optional)</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-stone-50 h-32" placeholder="Special requests..."></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors">
                Request Booking
              </button>
              <p className="text-xs text-stone-400 text-center">For immediate confirmation, please call us directly.</p>
            </form>
          </div>
        </div>

        {/* Full Width Map */}
        <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] border-4 border-white">
           <iframe 
               src={BUSINESS_INFO.mapEmbedUrl}
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Vickys Location Large"
           ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Check, Calendar, Users, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-stone-900 mb-6">More than just a Restaurant.</h1>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Located in the heart of Juba, Vicky’s Restaurant & Lounge is a culinary destination where modern dining meets a relaxed, trendy atmosphere.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              We started with a simple mission: to create a space where families, friends, and travelers could enjoy high-quality food in a setting that feels both upscale and like home. Whether you are craving a hearty breakfast, a business lunch, or a celebratory dinner, our doors are open.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                 <div className="p-2 bg-red-50 text-primary rounded-lg mt-1"><Coffee size={20} /></div>
                 <div>
                   <h4 className="font-bold text-stone-900">Premium Coffee</h4>
                   <p className="text-sm text-stone-500">Roasted to perfection.</p>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="p-2 bg-red-50 text-primary rounded-lg mt-1"><Users size={20} /></div>
                 <div>
                   <h4 className="font-bold text-stone-900">Group Dining</h4>
                   <p className="text-sm text-stone-500">Spacious seating for all.</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8ce4887cee8cb84f29f71549817a67e55771ae64/aboutus-image.jpg.png" 
               alt="Restaurant Vibe" 
               className="rounded-3xl shadow-2xl object-cover h-[600px] w-full" 
             />
          </div>
        </div>

        {/* Stats / Features Strip */}
        <div className="bg-stone-900 rounded-3xl p-12 text-white mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-700">
            <div className="p-4">
               <div className="text-4xl font-serif font-bold text-primary mb-2">5.0</div>
               <div className="uppercase tracking-widest text-xs text-stone-400">Rating</div>
            </div>
            <div className="p-4">
               <div className="text-4xl font-serif font-bold text-primary mb-2">100+</div>
               <div className="uppercase tracking-widest text-xs text-stone-400">Daily Guests</div>
            </div>
            <div className="p-4">
               <div className="text-4xl font-serif font-bold text-primary mb-2">35+</div>
               <div className="uppercase tracking-widest text-xs text-stone-400">Menu Options</div>
            </div>
          </div>
        </div>

        {/* Team / Values */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="font-serif text-4xl font-bold text-stone-900 mb-6">Experience the Vibe</h2>
           <p className="text-stone-600 mb-8">
             We pride ourselves on our service. From the moment you walk in, you are treated like family. Our lounge area is perfect for winding down after work, and our main dining area is bright and welcoming for breakfast and lunch.
           </p>
           <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg">
              <Calendar size={18} /> Book a Table
           </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
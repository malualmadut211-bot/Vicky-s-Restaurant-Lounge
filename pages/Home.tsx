import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Truck, Utensils, Users, CheckCircle2, Leaf, Heart, Send } from 'lucide-react';
import { BUSINESS_INFO, HIGHLIGHT_MENU, REVIEWS } from '../constants';
import DishCard from '../components/DishCard';

const Home: React.FC = () => {
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    guests: '2 People',
    date: '',
    time: ''
  });

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I would like to book a table.\n\nName: ${reservation.name}\nDate: ${reservation.date}\nTime: ${reservation.time}\nGuests: ${reservation.guests}`;
    const whatsappUrl = `https://wa.me/211928011500?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left animate-fade-in-up pb-8 lg:pb-0">
              <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-primary text-sm font-semibold tracking-wide">
                Best Restaurant in Juba
              </span>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-stone-900 leading-[1.1]">
                Good Food Brings<br/>
                <span className="text-primary relative inline-block">
                  People Together.
                </span>
              </h1>
              <p className="text-stone-500 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
                Bold flavors, handcrafted drinks, and a vibrant atmosphere suitable for families and friends. Come for the food, stay for the vibe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                   href={`tel:${BUSINESS_INFO.phoneOrder.replace(/\s/g, '')}`}
                   className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-red-200 hover:bg-red-800 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Order Now <ArrowRight size={20} />
                </a>
                <Link 
                  to="/menu" 
                  className="px-8 py-4 bg-white text-stone-800 border-2 border-stone-100 rounded-full font-bold hover:border-stone-300 hover:bg-stone-50 transition-all flex items-center justify-center"
                >
                  View Menu
                </Link>
              </div>

              {/* Hours */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-stone-600 mt-6 font-medium">
                <Clock className="text-primary" size={20} />
                <span>Open Daily: {BUSINESS_INFO.hours}</span>
              </div>

              {/* Quick Stats */}
              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${100+i}/50/50`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs border-2 border-white">+4k</div>
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs text-stone-500 font-medium">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Hero Image / Visuals */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative w-full aspect-square max-w-[300px] sm:max-w-md lg:max-w-lg mx-auto">
                 {/* Main Dish */}
                 <img 
                    src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8ce4887cee8cb84f29f71549817a67e55771ae64/hero-image.jpg.png"
                    alt="Signature Dish" 
                    className="w-full h-full object-cover rounded-full shadow-2xl animate-[spin_60s_linear_infinite] relative z-10"
                 />
                 
                 {/* Floating Cards */}
                 <div className="absolute bottom-10 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Leaf size={20} fill="currentColor" /></div>
                      <div>
                        <p className="text-xs text-stone-500">Quality</p>
                        <p className="font-bold text-sm">Fresh Ingredients</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes (Gap Removed) */}
      <section className="pt-4 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Menu</h4>
            <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Our Popular Dishes</h2>
            <p className="text-stone-500">Experience the boldest flavors in Juba.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHT_MENU.map((item) => (
              <DishCard key={item.id} item={item} showDescription={false} showPrice={false} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-4">
              Explore Full Menu <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services / Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Utensils />, label: "Dine-in", desc: "Cozy Atmosphere" },
              { icon: <Truck />, label: "Delivery", desc: "Fast & Fresh" },
              { icon: <Clock />, label: "Takeout", desc: "Quick Pickup" },
              { icon: <Users />, label: "Events", desc: "Group Friendly" }
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-white text-stone-800 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm border border-stone-100">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="font-bold text-lg">{service.label}</h3>
                <p className="text-stone-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8ce4887cee8cb84f29f71549817a67e55771ae64/aboutus-image.jpg.png" 
                alt="Restaurant Interior" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" 
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Story</h4>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-stone-900 mb-6">Welcome to Vicky’s</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                We are a modern restaurant and lounge offering bold flavors, handcrafted drinks, and an atmosphere designed for great food and unforgettable nights. Whether you're here for a family dinner, a quick lunch, or a late-night vibe, we have the perfect spot for you.
              </p>
              <ul className="space-y-4 mb-8">
                {["Family-friendly environment", "Wheelchair accessible", "Outdoor seating available"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                    <CheckCircle2 className="text-primary" size={20} /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-block px-8 py-3 bg-stone-900 text-white rounded-full font-semibold hover:bg-stone-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-8 rounded-2xl text-center border border-stone-100 shadow-xl hover:border-primary transition-all">
               <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                  <Utensils size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
               <p className="text-stone-500">We source only the freshest organic ingredients for our dishes, ensuring every bite is healthy and delicious.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center border border-stone-100 shadow-xl hover:border-primary transition-all">
               <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                  <Users size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Vibrant Atmosphere</h3>
               <p className="text-stone-500">Perfect for dates, groups, and celebrations. Our lounge offers a trendy yet cozy vibe you won't find elsewhere.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center border border-stone-100 shadow-xl hover:border-primary transition-all">
               <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                  <MapPin size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Prime Location</h3>
               <p className="text-stone-500">Located conveniently at JIT Supermarket, Ministries Road with ample parking and wheelchair accessibility.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center border border-stone-100 shadow-xl hover:border-primary transition-all">
               <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                  <Heart size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Exceptional Service</h3>
               <p className="text-stone-500">Our staff is dedicated to providing warm, attentive service to make every visit memorable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Centered Heading */}
           <div className="text-center mb-12">
              <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Testimonials</h4>
              <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Loved by Our Guests</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {REVIEWS.map((review) => (
               <div key={review.id} className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-all">
                 <div className="flex text-yellow-400 mb-4">
                   {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="text-stone-600 text-sm mb-6 italic">"{review.text}"</p>
                 <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                   <span className="font-bold text-stone-900 text-sm">{review.author}</span>
                   <span className="text-xs text-stone-400">{review.date}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Reservation & Mini Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden shadow-xl bg-white">
             
             {/* Simple Reservation Form */}
             <div className="p-8 md:p-12">
               <h3 className="font-serif text-3xl font-bold text-stone-900 mb-2">Book a Table</h3>
               <p className="text-stone-500 mb-8">Reserve your spot instantly via WhatsApp.</p>
               
               <form onSubmit={handleReservationSubmit} className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
                   <input 
                      type="text" 
                      required
                      value={reservation.name}
                      onChange={(e) => setReservation({...reservation, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-stone-50"
                      placeholder="John Doe"
                   />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                     <input 
                        type="date" 
                        required
                        value={reservation.date}
                        onChange={(e) => setReservation({...reservation, date: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-stone-50 text-stone-600"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-stone-700 mb-1">Time</label>
                     <input 
                        type="time" 
                        required
                        value={reservation.time}
                        onChange={(e) => setReservation({...reservation, time: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-stone-50 text-stone-600"
                     />
                   </div>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-stone-700 mb-1">Guests</label>
                   <select 
                      value={reservation.guests}
                      onChange={(e) => setReservation({...reservation, guests: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-stone-50 text-stone-600"
                   >
                     <option value="2 People">2 People</option>
                     <option value="1 Person">1 Person</option>
                     <option value="3 People">3 People</option>
                     <option value="4+ People">4+ People</option>
                     <option value="Large Group">Large Group</option>
                   </select>
                 </div>
                 
                 <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-red-800 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md mt-4"
                 >
                    <Send size={18} /> Reserve via WhatsApp
                 </button>
                 <p className="text-xs text-stone-400 text-center mt-2">Request sent to 0928 011 500</p>
               </form>
             </div>

             {/* Mini Map */}
             <div className="h-[400px] lg:h-auto bg-stone-200 relative">
               <iframe 
                 src={BUSINESS_INFO.mapEmbedUrl}
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Vickys Location Mini"
                 className="absolute inset-0"
               ></iframe>
             </div>

           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
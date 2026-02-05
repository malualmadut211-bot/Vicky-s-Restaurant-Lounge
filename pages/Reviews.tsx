import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-stone-900 mb-4">Loved by Our Guests</h1>
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="text-6xl font-bold text-stone-900">5.0</span>
            <div className="flex flex-col items-start">
               <div className="flex text-yellow-400 mb-1">
                 <Star fill="currentColor" size={24} />
                 <Star fill="currentColor" size={24} />
                 <Star fill="currentColor" size={24} />
                 <Star fill="currentColor" size={24} />
                 <Star fill="currentColor" size={24} />
               </div>
               <span className="text-stone-500 text-sm">Based on Google Reviews</span>
            </div>
          </div>
          <p className="text-stone-500 max-w-2xl mx-auto">
            We value every piece of feedback. Here is what some of our recent customers had to say about their dining experience.
          </p>
          <button 
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-white text-stone-900 border border-stone-200 rounded-full font-bold hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm"
          >
            <MessageSquare size={18} /> Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-xs text-stone-400 font-medium">{review.date}</span>
              </div>
              <p className="text-stone-600 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3 border-t border-stone-50 pt-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-bold text-sm">
                  {review.author.charAt(0)}
                </div>
                <span className="font-bold text-stone-900">{review.author}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
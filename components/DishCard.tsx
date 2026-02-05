import React from 'react';
import { MenuItem } from '../types';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DishCardProps {
  item: MenuItem;
  showDescription?: boolean;
  showPrice?: boolean;
}

const DishCard: React.FC<DishCardProps> = ({ item, showDescription = true, showPrice = true }) => {
  return (
    <div className="bg-white rounded-[2rem] p-4 shadow-soft hover:shadow-xl transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
      {/* Badges */}
      <div className="absolute top-6 left-6 z-10 flex gap-2">
        {item.isPopular && (
          <span className="bg-yellow-400 text-stone-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Best Seller
          </span>
        )}
      </div>

      {/* Image Container with Circle Background Effect */}
      <div className="relative h-48 w-full mb-4 flex items-center justify-center">
        <div className="absolute w-40 h-40 bg-red-50 rounded-full group-hover:scale-125 transition-transform duration-500 ease-in-out"></div>
        <img 
          src={item.image || "https://picsum.photos/400/400"} 
          alt={item.name} 
          className="w-44 h-44 object-cover rounded-full shadow-lg relative z-10 group-hover:rotate-6 transition-all duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow text-center px-2">
        <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">{item.name}</h3>
        {showDescription && (
          <p className="text-stone-500 text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>
        )}
        
        {showPrice && (
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-lg font-bold text-primary">{item.price}</span>
            <button className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-primary transition-colors shadow-md">
              <ShoppingBag size={18} />
            </button>
          </div>
        )}

        {!showPrice && !showDescription && (
           <div className="mt-auto pt-2 flex justify-center">
             <Link to="/menu" className="text-sm font-bold text-primary hover:underline">View Details</Link>
           </div>
        )}
      </div>
    </div>
  );
};

export default DishCard;
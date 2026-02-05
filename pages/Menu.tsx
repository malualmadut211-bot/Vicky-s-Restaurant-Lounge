
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

interface Variant {
  label: string;
  price: string;
}

interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  variants?: Variant[];
}

interface SubCategory {
  name: string;
  items: MenuItem[];
}

interface MenuCategory {
  category: string;
  items?: MenuItem[];
  subcategories?: SubCategory[];
}

const MENU_DATA: MenuCategory[] = [
  {
    category: "Breakfast",
    items: [
      { name: "Vicky's Special Breakfast", price: "$11.5", description: "Eggs, sausages, baked beans, pancake and fruits" },
      { name: "English Breakfast", price: "$10.5", description: "Fried eggs, grilled tomatoes, potatoes and sausage" },
      { name: "Spanish Omelet", price: "$8.5", description: "Eggs, tomatoes, onions and green pepper with bread" },
      { name: "Scrambled Eggs", price: "$8.5", description: "Scrambled eggs in milk/butter served with bread" }
    ]
  },
  {
    category: "Salad",
    items: [
      { name: "Beef Salad", price: "$13.5", description: "Grilled beef slices, mushrooms, lettuce, rings of leaves with sweet chilli sauce as dressing" },
      { name: "Green Salad with Avocado", price: "$11.5" },
      { name: "Chicken Hawaii Salad", price: "$13.5" }
    ]
  },
  {
    category: "Burgers",
    items: [
      { name: "Beef Burger", price: "$10.5" },
      { name: "Veggie Burger", price: "$9.5" },
      { name: "Chicken Burger", price: "$10.5" },
      { name: "Cheese Burger", price: "$9.5" }
    ]
  },
  {
    category: "Pizza",
    items: [
      { 
        name: "Margherita", 
        variants: [{ label: "Small", price: "$9" }, { label: "Medium", price: "$11" }, { label: "Large", price: "$14" }] 
      },
      { 
        name: "Vegetable", 
        variants: [{ label: "Small", price: "$9" }, { label: "Medium", price: "$11" }, { label: "Large", price: "$14" }] 
      },
      { 
        name: "Chicken", 
        variants: [{ label: "Small", price: "$9.5" }, { label: "Medium", price: "$11.5" }, { label: "Large", price: "$14.5" }] 
      },
      { 
        name: "Beef", 
        variants: [{ label: "Small", price: "$9.5" }, { label: "Medium", price: "$11.5" }, { label: "Large", price: "$14.5" }] 
      }
    ]
  },
  {
    category: "Soup",
    items: [
      { name: "Chicken Soup", price: "$9.5" },
      { name: "Mixed Vegetable Soup", price: "$8.5" }
    ]
  },
  {
    category: "Sandwich",
    items: [
      { name: "Tuna Mayo Sandwich", price: "$9.5" },
      { name: "Chicken Mayo", price: "$9.5" },
      { name: "Beef Onion Sandwich", price: "$9.5" },
      { name: "Tomato, Avocado and Onion Sandwich", price: "$9.5" }
    ]
  },
  {
    category: "Beef",
    items: [
      { name: "Beef Stew", price: "$12.5" },
      { name: "Beef Curry", price: "$13.5" },
      { name: "Beef Steak", price: "$13.5" },
      { name: "Fried Beef Dry/Wet", price: "$13.5" }
    ]
  },
  {
    category: "Chicken",
    items: [
      { name: "Grilled Half Chicken", price: "$13.5" },
      { name: "Chicken Curry", price: "$13.5" },
      { name: "Chicken Stew", price: "$13.5" },
      { name: "Stir Fry Chicken", price: "$12.5" }
    ]
  },
  {
    category: "Goat Dishes",
    items: [
      { name: "Goat Stew", price: "$12.5" },
      { name: "Fried Goat/Wet Goat", price: "$13.5" },
      { name: "Goat Curry", price: "$12.5" }
    ]
  },
  {
    category: "Fish",
    items: [
      { 
        name: "Whole Fish Dry/Wet", 
        variants: [{ label: "Medium", price: "$13.5" }, { label: "Large", price: "$14.5" }] 
      },
      { 
        name: "Boiled Fish", 
        variants: [{ label: "Medium", price: "$13.5" }, { label: "Large", price: "$14.5" }] 
      }
    ]
  },
  {
    category: "Pork",
    items: [
      { name: "Pork Chop with Sweet and Sour Sauce", price: "$13.5" },
      { name: "Stir Fried Pork with Strips of Veggies", price: "$13.5" }
    ]
  },
  {
    category: "Snacks",
    items: [
      { name: "Sausages and Chips", price: "$8.5" },
      { name: "Garlic Chips", price: "$6.5" },
      { name: "Plain Chips", price: "$6.5" },
      { name: "Chips Masala", price: "$7.5" },
      { name: "Chicken Fried Rice", price: "$9.5" },
      { name: "Vegetable Fried Rice", price: "$8.5" }
    ]
  },
  {
    category: "Pasta",
    items: [
      { name: "Spaghetti Tomato Sauce", price: "$9.5" },
      { name: "Penne Arabiata", price: "$9.5" },
      { name: "Pasta Alfredo", price: "$9.5" }
    ]
  },
  {
    category: "Vegetarian",
    items: [
      { name: "Vegetable Curry", price: "$9.5" },
      { name: "Vegetable Stew", price: "$9.5" },
      { name: "Stir Fried Veggies", price: "$9.5" }
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Fruit Salad", price: "$8.5" },
      { name: "Fruit Platter", price: "$11.5" }
    ]
  },
  {
    category: "Extras",
    items: [
      { 
        name: "Chicken/Beef", 
        variants: [{ label: "Chips", price: "$9.5" }, { label: "Without", price: "$7.5" }]
      }
    ]
  },
  {
    category: "South Sudan Delicacies",
    items: [
      { name: "Kombo Samak (Kisra/ Samolina)", price: "$5.5" },
      { name: "Kombo Laam", price: "$5.5" },
      { name: "Kudra Tabiak", price: "$5.5" },
      { name: "Bamia Mafruk", price: "$5.5" },
      { name: "Kudra Mafruk", price: "$5.5" },
      { name: "Bamia Tabiak", price: "$5.5" },
      { name: "Shaya Dan", price: "$7.5" },
      { name: "Shurba Dan", price: "$6" },
      { name: "Shurba Jidad", price: "$8" },
      { name: "Shurba Samak", price: "$6" },
      { name: "Pasulia", price: "$5.5" },
      { name: "Guede-Guede", price: "$5.5" }
    ]
  },
  {
    category: "Alcoholic Drinks",
    subcategories: [
      {
        name: "Beer",
        items: [
          { name: "Heineken", price: "$2.5" },
          { name: "Tusker Lager", price: "$2" },
          { name: "Castle Lite", price: "$2" },
          { name: "Savanna", price: "$3" },
          { name: "Guinness", price: "$2" },
          { name: "Smirnoff", price: "$2.5" },
          { name: "Bavaria", price: "$2" }
        ]
      },
      {
        name: "Liqueur",
        items: [
          { name: "Jägermeister", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$60" }] },
          { name: "Baileys", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$60" }] },
          { name: "Jack Daniel's", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$80" }] },
          { name: "Chivas 12 Yrs", variants: [{ label: "Tot", price: "$3.5" }, { label: "Bottle", price: "$80" }] },
          { name: "Johnnie Double Black", variants: [{ label: "Tot", price: "$2" }, { label: "Bottle", price: "$75" }] },
          { name: "Johnnie Black Label", variants: [{ label: "Tot", price: "$1.8" }, { label: "Bottle", price: "$70" }] },
          { name: "Johnnie Red Label", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$60" }] },
          { name: "Jameson", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$50" }] }
        ]
      },
      {
        name: "Tequila",
        items: [
          { name: "Silva (Silver)", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$40" }] },
          { name: "Gold", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$40" }] }
        ]
      },
      {
        name: "Gin",
        items: [
          { name: "Gilbeys", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$40" }] },
          { name: "Gordon", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$40" }] }
        ]
      },
      {
        name: "Champagne",
        items: [
          { name: "R. Martin", price: "$90" }
        ]
      },
      {
        name: "Wines",
        items: [
          { name: "Nederburg", variants: [{ label: "Glass", price: "$2.5" }, { label: "Bottle", price: "$90" }] },
          { name: "Fourth Street", variants: [{ label: "Glass", price: "$2.5" }, { label: "Bottle", price: "$15" }] },
          { name: "Four Cousins", variants: [{ label: "Glass", price: "$2.5" }, { label: "Bottle", price: "$15" }] }
        ]
      },
      {
        name: "Rum",
        items: [
          { name: "Captain Morgan", variants: [{ label: "Tot", price: "$1" }, { label: "Bottle", price: "$45" }] },
          { name: "Bacardi", variants: [{ label: "Tot", price: "$1" }, { label: "Bottle", price: "$45" }] },
          { name: "Malibu", variants: [{ label: "Tot", price: "$1" }, { label: "Bottle", price: "$40" }] }
        ]
      },
      {
        name: "Cognac",
        items: [
          { name: "Hennessy VS", variants: [{ label: "Tot", price: "$3" }, { label: "Bottle", price: "$120" }] },
          { name: "Hennessy VSOP", variants: [{ label: "Tot", price: "$3.5" }, { label: "Bottle", price: "$150" }] }
        ]
      },
      {
        name: "Vodka",
        items: [
          { name: "Absolut", variants: [{ label: "Tot", price: "$1.8" }, { label: "Bottle", price: "$40" }] },
          { name: "Premium", variants: [{ label: "Tot", price: "$1.5" }, { label: "Bottle", price: "$40" }] },
          { name: "Ciroc", variants: [{ label: "Tot", price: "$2" }, { label: "Bottle", price: "$60" }] }
        ]
      }
    ]
  },
  {
    category: "Fresh Juice",
    items: [
      { name: "Avocado", price: "$3.5" },
      { name: "Avocado Shake", price: "$4" },
      { name: "Banana", price: "$3.5" },
      { name: "Banana Shake", price: "$4" },
      { name: "Mango", price: "$3.5" },
      { name: "Orange", price: "$4" },
      { name: "Passion", price: "$4" },
      { name: "Pineapple", price: "$3.5" },
      { name: "Watermelon", price: "$3.5" },
      { name: "Apple", price: "$4" },
      { name: "Cocktail", price: "$4.5" },
      { name: "Lemon", price: "$3.5" }
    ]
  },
  {
    category: "Drinks Corner",
    subcategories: [
      {
        name: "Soft Drinks",
        items: [
          { name: "Water", price: "$1" },
          { name: "Soda Water", price: "$1.5" },
          { name: "Sparkling Water", price: "$1.2" },
          { name: "Red Bull", price: "$2" }
        ]
      },
      {
        name: "Hot Drinks",
        items: [
          { name: "American Coffee", price: "$3" },
          { name: "Cappuccino", price: "$3" },
          { name: "Espresso", price: "$2" },
          { name: "Espresso Double", price: "$3" },
          { name: "Macchiato", price: "$3" },
          { name: "Hot Chocolate", price: "$3" },
          { name: "Tea White", price: "$2.2" },
          { name: "Green Tea", price: "$2" },
          { name: "South Sudan Black Tea", price: "$2" },
          { name: "South Sudan White Tea", price: "$2.5" },
          { name: "South Sudan Coffee White", price: "$2.8" },
          { name: "South Sudan Coffee Black", price: "$2.8" }
        ]
      }
    ]
  }
];

const Menu: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("Breakfast");

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const renderItems = (items: MenuItem[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col justify-between p-4 bg-stone-50 rounded-xl hover:bg-red-50 transition-colors border border-stone-100">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="font-bold text-stone-900">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-stone-500 mt-1">{item.description}</p>
              )}
            </div>
            {item.price && (
              <span className="font-bold text-primary whitespace-nowrap">{item.price}</span>
            )}
          </div>
          
          {item.variants && (
            <div className="mt-3 text-sm">
              <div className="flex flex-wrap gap-2">
                {item.variants.map((variant, vIdx) => (
                  <span key={vIdx} className="inline-flex items-center px-2 py-1 bg-white rounded border border-stone-200 text-stone-600">
                    {variant.label}: <span className="ml-1 font-bold text-stone-900">{variant.price}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-32 pb-20 min-h-screen bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-stone-900 mb-4">Our Menu</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            From early morning breakfast to late-night bites. Prices are in USD ($).
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {MENU_DATA.map((cat) => (
            <div key={cat.category} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
              <button
                onClick={() => toggleCategory(cat.category)}
                className={`w-full flex justify-between items-center p-6 text-left transition-colors ${
                  openCategory === cat.category ? 'bg-primary text-white' : 'hover:bg-stone-50 text-stone-900'
                }`}
              >
                <span className="font-serif text-xl font-bold">{cat.category}</span>
                {openCategory === cat.category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openCategory === cat.category ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 border-t border-stone-100">
                  {cat.items && renderItems(cat.items)}
                  
                  {cat.subcategories && (
                    <div className="space-y-8">
                      {cat.subcategories.map((sub, sIdx) => (
                        <div key={sIdx}>
                          <h4 className="font-bold text-stone-800 text-lg mb-4 pb-2 border-b border-stone-100">{sub.name}</h4>
                          {renderItems(sub.items)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Info */}
        <div className="mt-16 bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex items-start gap-4">
          <Info className="text-primary shrink-0 mt-1" />
          <p className="text-sm text-stone-600 leading-relaxed">
            Please inform our staff of any allergies or dietary restrictions before ordering. 
            Prices include all applicable taxes. Images are for illustration purposes only.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Menu;

import { BusinessInfo, MenuItem, Review } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Vicky’s Restaurant & Lounge",
  phoneOrder: "+211 920 000 562",
  phoneReserve: "0928 011 500",
  address: "JIT Supermarket, Ministries Road, Kololo Near, Juba, South Sudan",
  fullAddress: "JIT Supermarket, Ministries Road, Kololo Near, Juba, South Sudan (Plus Code: VH3J+VH)",
  coordinates: {
    lat: 4.854675973676109,
    lng: 31.58142761670609
  },
  // Using a query for the map embed based on coordinates
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3976.220677490664!2d31.57923891476165!3d4.854675996476145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTEnMTYuOCJOIDMxwrAzNCc1My4xIkU!5e0!3m2!1sen!2sus!4v1683827482910!5m2!1sen!2sus",
  hours: "7:30 AM – 11:30 PM",
  email: "info@vickyslounge.com"
};

export const HIGHLIGHT_MENU: MenuItem[] = [
  {
    id: 'h1',
    name: "Burger and Fries",
    description: "A delightful combination of grilled meats and fresh sides.",
    price: "SSP 15,000",
    category: "Dinner",
    image: "https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8ce4887cee8cb84f29f71549817a67e55771ae64/men-image.jpg.jpg"
  },
  {
    id: 'h2',
    name: "Pizza",
    description: "Perfectly seasoned and grilled to perfection.",
    price: "SSP 12,500",
    category: "Lunch",
    image: "https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8ce4887cee8cb84f29f71549817a67e55771ae64/u-image.jpg.jpeg"
  },
  {
    id: 'h3',
    name: "Biryani",
    description: "Our chef's favorite selection of the day.",
    price: "SSP 18,000",
    category: "Dinner",
    image: "https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8ce4887cee8cb84f29f71549817a67e55771ae64/menuu-image.jpg.jpeg",
    isVegetarian: false
  },
  {
    id: 'h4',
    name: "Chicken Thighs",
    description: "A large platter suitable for sharing with family and friends.",
    price: "SSP 25,000",
    category: "Dinner",
    image: "https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8ce4887cee8cb84f29f71549817a67e55771ae64/me-image.jpg.jpg",
    isHalal: true
  }
];

export const FULL_MENU: MenuItem[] = [
  ...HIGHLIGHT_MENU,
  {
    id: 'b1',
    name: "Classic Sudanese Breakfast",
    description: "Ful medames, fresh bread, scrambled eggs, and white cheese.",
    price: "SSP 5,000",
    category: "Breakfast",
    isHalal: true
  },
  {
    id: 'b2',
    name: "Avocado Toast",
    description: "Sourdough bread topped with smashed avocado, poached egg, and chili flakes.",
    price: "SSP 6,500",
    category: "Breakfast",
    isVegetarian: true
  },
  {
    id: 'l1',
    name: "Grilled Chicken Caesar",
    description: "Romaine lettuce, parmesan, croutons, and grilled chicken breast.",
    price: "SSP 9,000",
    category: "Lunch",
    isHalal: true
  },
  {
    id: 'd1',
    name: "Lamb Chops",
    description: "Tender marinated lamb chops served with mashed potatoes and mint sauce.",
    price: "SSP 18,000",
    category: "Dinner",
    isHalal: true
  },
  {
    id: 'd2',
    name: "Vegetable Curry",
    description: "Mixed vegetables in a spiced coconut milk gravy served with rice.",
    price: "SSP 8,000",
    category: "Vegetarian",
    isVegetarian: true
  },
  {
    id: 'c1',
    name: "Ethiopian Coffee",
    description: "Traditional roasted coffee served in a jebena.",
    price: "SSP 2,000",
    category: "Coffee & Tea"
  },
  {
    id: 'c2',
    name: "Mint Lemonade",
    description: "Freshly squeezed lemon juice blended with mint leaves and ice.",
    price: "SSP 3,000",
    category: "Coffee & Tea"
  },
  {
    id: 'k1',
    name: "Chicken Nuggets",
    description: "Homemade breaded chicken pieces with fries.",
    price: "SSP 5,500",
    category: "Kids' Menu"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: "Sarah M.",
    rating: 5,
    text: "Absolutely the best spot in Juba! The atmosphere is incredibly cozy and the grilled fish is to die for. Perfect for a Friday night out.",
    date: "2 weeks ago"
  },
  {
    id: 'r2',
    author: "James K.",
    rating: 5,
    text: "Great service and even better food. I love the lounge vibe in the evenings. Highly recommend the signature burger.",
    date: "1 month ago"
  },
  {
    id: 'r3',
    author: "Amingo D.",
    rating: 5,
    text: "Family friendly and very clean. The staff went above and beyond to accommodate our large group. 5 stars!",
    date: "3 months ago"
  },
  {
    id: 'r4',
    author: "Lisa R.",
    rating: 5,
    text: "A hidden gem near Ministries Road. The coffee is excellent and the wifi is fast if you need to work during the day.",
    date: "1 week ago"
  }
];
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isHalal?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface BusinessInfo {
  name: string;
  phoneOrder: string;
  phoneReserve: string;
  address: string;
  fullAddress: string;
  mapEmbedUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: string;
  email: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: 'generator' | 'tractor';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image?: string;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  mapUrl: string;
  embedUrl: string;
  phone: string;
}

export interface NavLink {
  name: string;
  to: string;
}
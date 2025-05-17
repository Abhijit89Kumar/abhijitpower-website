import { Service, Testimonial, Location, NavLink } from '../types';
import { Refrigerator as Generator, Tractor, Wrench, PenTool as Tools, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', to: 'home' },
  { name: 'Services', to: 'services' },
  { name: 'About', to: 'about' },
  { name: 'Brochures', to: 'brochures' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Locations', to: 'locations' },
  { name: 'Contact', to: 'contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Mahindra Generator Sales',
    description: 'Wide range of reliable Mahindra Powerol diesel and gas generators for residential, commercial, and industrial use. Featuring best-in-class recovery time, effective governing system, and CPCB-certified noise compliance.',
    icon: 'Generator',
    category: 'generator',
  },
  {
    id: 2,
    title: 'Generator Installation',
    description: 'Professional installation services ensuring your generator is set up correctly and safely. Our Mahindra authorized dealers provide complete installation and commissioning services with zero-leak engines and both manual and AMF control panel options.',
    icon: 'Tools',
    category: 'generator',
  },
  {
    id: 3,
    title: 'Generator Maintenance & Repair',
    description: 'Regular maintenance and prompt repair services to keep your generators running at peak efficiency. Our generators feature the smallest footprint in their category and are suitable for roof-mountings.',
    icon: 'Wrench',
    category: 'generator',
  },
  {
    id: 4,
    title: 'Growmax Tractor Sales',
    description: 'Premium Growmax tractors designed for maximum growth and efficiency in farming operations. Manufactured by Gromax Agri Equipment Ltd. in our state-of-the-art facility in Vadodara.',
    icon: 'Tractor',
    category: 'tractor',
  },
  {
    id: 5,
    title: 'Tractor Service & Repair',
    description: 'Expert servicing and repair for all tractor models, backed by our high-tech manufacturing and testing facilities to ensure reliable operation and extended equipment life.',
    icon: 'Wrench',
    category: 'tractor',
  },
  {
    id: 6,
    title: 'Warranty & Support',
    description: 'Comprehensive warranty coverage and ongoing customer support. Our DG sets are most fuel-efficient in their class and come with annual maintenance contracts for complete peace of mind.',
    icon: 'ShieldCheck',
    category: 'generator',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Factory Owner',
    comment: 'The Mahindra generators from Abhijit Power have been exceptionally reliable for our manufacturing facility. Their service team is prompt and professional.',
    rating: 5,
    image: '/assets/customer-1.jpg',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Farm Owner',
    comment: 'We purchased a Growmax tractor last year and have been thoroughly impressed with its performance. The after-sales service from Abhijit Power has been excellent.',
    rating: 5,
    image: '/assets/customer-2.jpg',
  },
  {
    id: 3,
    name: 'Sanjay Reddy',
    role: 'Hotel Manager',
    comment: 'Our hotel relies on consistent power backup, and Abhijit Power has delivered with their top-notch Mahindra generators and responsive maintenance services.',
    rating: 4,
    image: '/assets/customer-3.jpg',
  },
  {
    id: 4,
    name: 'Ananya Patel',
    role: 'Agricultural Contractor',
    comment: 'The Growmax tractor I purchased has significantly improved our farming efficiency. Abhijit Power provided great guidance in selecting the right model for our needs.',
    rating: 5,
  },
];

export const locations: Location[] = [
  {
    id: 1,
    name: 'Secunderabad Office',
    address: 'Gitanjali Apartments, W Marredpally Rd, Rukmini Devi Colony, Mahatma Gandhi Nagar, West Marredpally, Secunderabad, Telangana 500026',
    mapUrl: 'https://maps.app.goo.gl/WhGUEbDTkBbhdkAS7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3200906841413!2d78.5025153!3d17.444149699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a4f3e37c9d9%3A0x95f39b78d172ab56!2sGitanjali%20Apartments%2C%20W%20Marredpally%20Rd%2C%20Rukmini%20Devi%20Colony%2C%20Mahatma%20Gandhi%20Nagar%2C%20West%20Marredpally%2C%20Secunderabad%2C%20Telangana%20500026!5e0!3m2!1sen!2sin!4v1718289256783!5m2!1sen!2sin',
    phone: '+91 7766908394',
  },
  {
    id: 2,
    name: 'Jadcherla Office',
    address: 'Plot No -350, Mahabubnagar Rd, near Housing Board Colony, Jadcherla, Telangana 509301',
    mapUrl: 'https://maps.app.goo.gl/DPMEmENU4JQu72aw7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.2033651129893!2d77.6134653!3d16.8162866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca3d0a5e4a07b1%3A0x5aa67b6758acf43a!2sPlot%20No%20-350%2C%20Mahabubnagar%20Rd%2C%20near%20Housing%20Board%20Colony%2C%20Jadcherla%2C%20Telangana%20509301!5e0!3m2!1sen!2sin!4v1718289509397!5m2!1sen!2sin',
    phone: '+91 7766908394',
  },
];

export const contactInfo = {
  phone: ['+91 7766908394', '+91 9989688394'],
  email: ['abhijit.genset@gmail.com', 'abhijitgenset.sm@gmail.com'],
  hours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
};

export const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Generator': return Generator;
    case 'Tractor': return Tractor;
    case 'Wrench': return Wrench;
    case 'Tools': return Tools;
    case 'ShieldCheck': return ShieldCheck;
    case 'MapPin': return MapPin;
    case 'Phone': return Phone;
    case 'Clock': return Clock;
    default: return Generator;
  }
};
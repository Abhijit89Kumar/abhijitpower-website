import { Service, Testimonial, Location, NavLink } from '../types';
import { Refrigerator as Generator, Tractor, Wrench, PenTool as Tools, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Brochures', to: 'brochures' },
  { name: 'Happy Customers', to: 'testimonials' },
  { name: 'Locations', to: 'locations' },
  { name: 'Contact', to: 'contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'After-Sales-Service',
    description: 'Our young and well-trained service team of 30 experienced personals effectively cover the customer locations. They are always eager to attend to any service need that may arise in the context of customer\'s operations',
    icon: 'Wrench',
    category: 'generator',
  },
  {
    id: 2,
    title: 'Spare Parts Backup',
    description: 'Keeping in mind the extensive use of our machines, we have ensured that all required spare parts are well-stocked at our Secunderabad and Jedcherla offices, which can be conveniently accessed by customers at short notice',
    icon: 'Tools',
    category: 'generator',
  },
  {
    id: 3,
    title: 'AMCs and Warranty',
    description: 'A custom package for worry-free operations, letting customers focus on their core business. Options range from full coverage (CAMC) with all parts and unlimited breakdowns to basic plans with preventive maintenance and consumables',
    icon: 'ShieldCheck',
    category: 'generator',
  },
  {
    id: 4,
    title: 'Installation',
    description: 'We offer complete solutions post DG set purchase, including specialized Installation & Commissioning services as per guidelines to enhance product life. Customers can simply place an order and relax',
    icon: 'Wrench',
    category: 'generator',
  },
  // {
  //   id: 5,
  //   title: 'Tractor Service & Repair',
  //   description: 'Expert servicing and repair for all tractor models, backed by our high-tech manufacturing and testing facilities to ensure reliable operation and extended equipment life.',
  //   icon: 'Wrench',
  //   category: 'tractor',
  // },
  // {
  //   id: 6,
  //   title: 'Warranty & Support',
  //   description: 'Comprehensive warranty coverage and ongoing customer support. Our DG sets are most fuel-efficient in their class and come with annual maintenance contracts for complete peace of mind.',
  //   icon: 'ShieldCheck',
  //   category: 'generator',
  // },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Factory Owner',
    comment: 'The Mahindra generators from Abhijit Power have been exceptionally reliable for our manufacturing facility. Their service team is prompt and professional.',
    rating: 5,
    image: '/assets/customer-2.jpg',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Farm Owner',
    comment: 'We purchased a Gromax tractor last year and have been thoroughly impressed with its performance. The after-sales service from Abhijit Power has been excellent.',
    rating: 5,
    image: '/assets/customer-1.jpg',
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
    comment: 'The Gromax tractor I purchased has significantly improved our farming efficiency. Abhijit Power provided great guidance in selecting the right model for our needs.',
    rating: 5,
    image: '/assets/customer-4.jpg',
  },
  {
    id: 5,
    name: 'Ananya Patel',
    role: 'Agricultural Contractor',
    comment: 'The Gromax tractor I purchased has significantly improved our farming efficiency. Abhijit Power provided great guidance in selecting the right model for our needs.',
    rating: 5,
    image: '/assets/customer-5.jpg',
  },
  {
    id: 6,
    name: 'Ananya Patel',
    role: 'Agricultural Contractor',
    comment: 'The Gromax tractor I purchased has significantly improved our farming efficiency. Abhijit Power provided great guidance in selecting the right model for our needs.',
    rating: 5,
    image: '/assets/genset-sale-1.jpg',
  },
];

export const locations: Location[] = [
  {
    id: 1,
    name: 'Secunderabad Office',
    address: 'Gitanjali Apartments, Rukmini Devi Colony, Mahatma Gandhi Nagar, West Marredpally, Secunderabad, Telangana, Pincode - 500026',
    mapUrl: 'https://maps.app.goo.gl/WhGUEbDTkBbhdkAS7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3200906841413!2d78.5025153!3d17.444149699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a4f3e37c9d9%3A0x95f39b78d172ab56!2sGitanjali%20Apartments%2C%20W%20Marredpally%20Rd%2C%20Rukmini%20Devi%20Colony%2C%20Mahatma%20Gandhi%20Nagar%2C%20West%20Marredpally%2C%20Secunderabad%2C%20Telangana%20500026!5e0!3m2!1sen!2sin!4v1718289256783!5m2!1sen!2sin',
    phone: '+91 77669 08394',
  },
  {
    id: 2,
    name: 'Jadcherla Office',
    address: 'Plot No -350, Mahabubnagar Road, near Housing Board Colony, Jadcherla, Mahabubnagar, Telangana, Pincode - 509301',
    mapUrl: 'https://maps.app.goo.gl/DPMEmENU4JQu72aw7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.2033651129893!2d77.6134653!3d16.8162866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca3d0a5e4a07b1%3A0x5aa67b6758acf43a!2sPlot%20No%20-350%2C%20Mahabubnagar%20Rd%2C%20near%20Housing%20Board%20Colony%2C%20Jadcherla%2C%20Telangana%20509301!5e0!3m2!1sen!2sin!4v1718289509397!5m2!1sen!2sin',
    phone: '+91 77669 08394',
  },
];

export const contactInfo = {
  phone: {
    gensetSales: '+91 90594 78394',
    tractorSales: '+91 89779 28394',
    serviceSpare: '+91 99896 88394',
    headOfDealership: '+91 77669 08394'
  },
  phoneLabels: {
    gensetSales: 'Genset Sales',
    tractorSales: 'Tractor Sales',
    serviceSpare: 'Service & Spare',
    headOfDealership: 'Head of Dealership'
  },
  email: ['abhijit.genset@gmail.com', 'abhijitgenset.sm@gmail.com'],
  hours: 'Monday - Sunday',
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
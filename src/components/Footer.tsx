import React from 'react';
import { Link } from 'react-scroll';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { navLinks, locations, contactInfo } from '../data';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/assets/abhijit-power-logo.png" 
                alt="Abhijit Power Logo" 
                className="h-12 w-auto"
              />
              <div>
                <p className="text-xs text-gray-400">Authorized Mahindra Dealer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Providing reliable power solutions and agricultural equipment with exceptional service since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Our Locations
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.id} className="flex">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">{location.name}</p>
                    <p className="text-gray-400 text-sm">{location.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <div>
                  {contactInfo.phone.map((number) => (
                    <a 
                      key={number}
                      href={`tel:${number}`} 
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {number}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <div>
                  {contactInfo.email.map((email) => (
                    <a 
                      key={email}
                      href={`mailto:${email}`} 
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Working Hours</h4>
              <p className="text-gray-400 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-center text-sm">
            &copy; {year} Abhijit Power. All rights reserved. Authorized dealer of Mahindra Powerol and Growmax Tractors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
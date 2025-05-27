import React from 'react';
import { Link } from 'react-scroll';
import { Phone, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';
import { navLinks, locations, contactInfo } from '../data';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white pt-20 pb-6 overflow-hidden">
      {/* Background with overlay and pattern */}
      <div className="absolute inset-0 bg-gray-900 z-0"></div>
      <div className="absolute inset-0 bg-[url('/assets/footer-bg.jpg')] opacity-20 z-0 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-10 z-0"></div>

      {/* Wave pattern at the top */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180 z-10">
        <img
          src="/assets/wave-pattern.svg"
          alt=""
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl inline-block mb-6 shadow-lg">
              <img
                src="/assets/abhijit-power-logo.png"
                alt="Abhijit Power Logo"
                className="h-auto w-auto"
              />
              <div className="mt-2">
                <p className="text-xs text-gray-600 border-t border-gray-300 pt-2 mt-2 font-medium">Authorized Mahindra Dealer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing reliable power solutions and agricultural equipment with exceptional service since 2018
            </p>
            {/*<div className="flex space-x-3">*/}
              {/*<a*/}
              {/*  href="#"*/}
              {/*  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/5"*/}
              {/*  aria-label="Facebook"*/}
              {/*>*/}
              {/*  <Facebook size={18} />*/}
              {/*</a>*/}
              {/*<a*/}
              {/*  href="#"*/}
              {/*  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/5"*/}
              {/*  aria-label="Instagram"*/}
              {/*>*/}
              {/*  <Instagram size={18} />*/}
              {/*</a>*/}
              {/*<a*/}
              {/*  href="#"*/}
              {/*  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/5"*/}
              {/*  aria-label="Twitter"*/}
              {/*>*/}
              {/*  <Twitter size={18} />*/}
              {/*</a>*/}
              {/*<a*/}
              {/*  href="#"*/}
              {/*  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/5"*/}
              {/*  aria-label="LinkedIn"*/}
              {/*>*/}
              {/*  <Linkedin size={18} />*/}
              {/*</a>*/}
            {/*</div>*/}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center group"
                  >
                    <ArrowRight className="h-4 w-0 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Our Locations
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-6">
              {locations.map((location) => (
                <li key={location.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/5">
                  <div className="flex items-start mb-2">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">{location.name}</p>
                      <p className="text-gray-300 text-sm">{location.address.split(',')[0]}</p>
                    </div>
                  </div>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline inline-flex items-center mt-2"
                  >
                    Get Directions <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Phone</h4>
                  <div className="space-y-1">
                    <a
                      href={`tel:${contactInfo.phone.gensetSales}`}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <span className="text-xs text-gray-500">{contactInfo.phoneLabels.gensetSales}:</span><br />
                      {contactInfo.phone.gensetSales}
                    </a>
                    <a
                      href={`tel:${contactInfo.phone.tractorSales}`}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <span className="text-xs text-gray-500">{contactInfo.phoneLabels.tractorSales}:</span><br />
                      {contactInfo.phone.tractorSales}
                    </a>
                    <a
                      href={`tel:${contactInfo.phone.serviceSpare}`}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <span className="text-xs text-gray-500">{contactInfo.phoneLabels.serviceSpare}:</span><br />
                      {contactInfo.phone.serviceSpare}
                    </a>
                    <a
                      href={`tel:${contactInfo.phone.headOfDealership}`}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <span className="text-xs text-gray-500">{contactInfo.phoneLabels.headOfDealership}:</span><br />
                      {contactInfo.phone.headOfDealership}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="w-full overflow-hidden">
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                  {contactInfo.email.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-gray-300 hover:text-white transition-colors truncate"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Working Hours</h4>
                  <p className="text-gray-300 text-sm">Monday - Sunday</p>
                  {/*<p className="text-gray-300 text-sm">9:00 AM - 6:00 PM</p>*/}
                  {/*<p className="text-gray-300 text-sm">Sunday: Closed</p>*/}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left text-sm mb-4 md:mb-0">
              &copy; {year} Abhijit Power. All rights reserved. Authorized dealer of Mahindra Powerol and Gromax Tractors.
            </p>
            <div className="flex space-x-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
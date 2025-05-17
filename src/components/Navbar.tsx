import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import { navLinks, contactInfo } from '../data';
import FallbackLogo from './FallbackLogo';
import { handleImageError } from '../utils/imageUtils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top bar with contact info - only visible when scrolled */}
      {scrolled && (
        <div className="bg-primary text-white py-1 text-xs hidden md:block">
          <div className="container flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href={`tel:${contactInfo.phone[0]}`} className="flex items-center hover:text-white/90 transition-colors">
                <Phone className="h-3 w-3 mr-1" />
                {contactInfo.phone[0]}
              </a>
              <span className="text-white/50">|</span>
              <span>{contactInfo.hours}</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-white/90 transition-colors">Facebook</a>
              <a href="#" className="hover:text-white/90 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      )}
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 group">
          <div className={`relative ${scrolled ? '' : 'p-2 bg-white/80 backdrop-blur-sm rounded-lg'}`}>
            {/* Try to load the logo image, fallback to SVG component if it fails */}
            <img
              src="/assets/abhijit-power-logo.png"
              alt="Abhijit Power Logo"
              className={`${scrolled ? 'h-12' : 'h-14'} w-auto transition-all duration-300 group-hover:scale-105`}
              onError={handleImageError}
              onLoad={(e) => {
                // If the image loads with a 0 width, it's likely a broken image
                if ((e.target as HTMLImageElement).naturalWidth === 0) {
                  (e.target as HTMLImageElement).style.display = 'none';
                  // Insert the fallback logo
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent && !parent.querySelector('svg')) {
                    const fallbackContainer = document.createElement('div');
                    parent.insertBefore(fallbackContainer, (e.target as HTMLImageElement));
                    // Render the fallback logo
                    const root = createRoot(fallbackContainer);
                    root.render(<FallbackLogo />);
                  }
                }
              }}
            />
          </div>
          <div className={`transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            <p className="text-sm font-semibold">Authorized Dealer</p>
            <p className="text-xs">Mahindra Powerol & Gromax</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-sm font-medium cursor-pointer transition-colors hover:text-primary relative group ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a
            href={`tel:${contactInfo.phone[0]}`}
            className={`flex items-center text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-primary transition-colors`}
          >
            {/*<Phone className="h-4 w-4 mr-2" />*/}
            {/*{contactInfo.phone[0]}*/}
          </a>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`btn ${scrolled ? 'btn-primary' : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'} transition-all duration-300`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-primary transition-colors`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 border-t border-gray-200 rounded-b-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 font-medium hover:text-primary transition-colors px-4 py-2 border-b border-gray-100 flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <ChevronDown size={16} className="text-gray-400" />
              </Link>
            ))}

            <div className="pt-4">
              <a
                href={`tel:${contactInfo.phone[0]}`}
                className="flex items-center text-gray-700 hover:text-primary transition-colors mb-4 px-4"
              >
                <Phone className="h-4 w-4 mr-2" />
                {contactInfo.phone[0]}
              </a>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
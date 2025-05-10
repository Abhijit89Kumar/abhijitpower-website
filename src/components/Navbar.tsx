import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Power } from 'lucide-react';
import { navLinks } from '../data';

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
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img 
            src="/assets/abhijit-power-logo.png"
            alt="Abhijit Power Logo"
            className="h-12 w-auto"
          />
          <div className={`transition-colors ${scrolled ? 'text-gray-900' : 'text-black'}`}>
            <p className="text-sm font-semibold">Authorized Dealer</p>
            <p className="text-xs">Mahindra Powerol & Gromax</p>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-sm font-medium cursor-pointer transition-colors hover:text-primary ${
                scrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-primary"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 font-medium hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
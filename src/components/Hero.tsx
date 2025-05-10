import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white">
      {/* Modern geometric pattern with enhanced red gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-red-50 to-white"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-200/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      </div>
      
      <div className="relative pt-32 pb-16 min-h-screen flex flex-col justify-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-6 mb-8">
              <img 
                src="/assets/abhijit-power-logo.png"
                alt="Abhijit Power" 
                className="h-16 object-contain"
              />
              <img 
                src="/assets/powerol-logo.png"
                alt="Powerol by Mahindra" 
                className="h-12 object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Powering Your <span className="text-primary">Future</span> With Reliable Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              Authorized dealer of Mahindra Generators and Growmax Tractors, providing sales and exceptional service across Telangana
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary px-8 py-3"
              >
                Explore Our Services
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn bg-gray-800 text-white hover:bg-gray-700 transition-colors px-8 py-3"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <ChevronDown size={40} className="text-gray-600" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
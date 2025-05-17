import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Hero background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10"></div>
        <img
          src="/assets/hero-background.jpg"
          alt="Mahindra Generators and Tractors"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              const div = document.createElement('div');
              div.className = 'absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-gray-900';
              parent.appendChild(div);
            }
          }}
        />
        <div className="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-20 z-20"></div>
      </div>

      <div className="relative pt-32 pb-16 min-h-screen flex flex-col justify-center z-30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm font-medium">Authorized Mahindra Dealer</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Powering Your <span className="text-primary relative inline-block">
                  Future
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/30 -z-10"></span>
                </span> With Reliable Solutions
              </h1>

              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Authorized dealer of Mahindra Generators and Growmax Tractors, providing sales and exceptional service across Telangana
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-primary px-8 py-3 group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors px-8 py-3 border border-white/20"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-12">
                <img
                  src="/assets/powerol-logo.png"
                  alt="Powerol by Mahindra"
                  className="h-12 object-contain bg-white/90 p-1 rounded"
                />
                <img
                  src="/assets/gromax-logo.png"
                  alt="Gromax Tractors"
                  className="h-12 object-contain bg-white/90 p-1 rounded"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 backdrop-blur-sm rounded-lg z-10 flex items-center justify-center">
                  <img
                    src="/assets/abhijit-power-logo.png"
                    alt="Abhijit Power"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <img
                    src="/assets/mahindra-generator.jpg"
                    alt="Mahindra Generator"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-white font-bold text-xl">12+</div>
                    <div className="text-white">
                      <p className="text-sm">Years of</p>
                      <p className="font-bold">Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronDown size={24} className="text-white" />
          </Link>
        </motion.div>

        {/* Decorative wave pattern at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <img
            src="/assets/wave-pattern.svg"
            alt=""
            className="w-full h-auto"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
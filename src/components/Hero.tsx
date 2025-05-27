import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentAward, setCurrentAward] = useState(0);

  const awards = [
    {
      image: '/assets/award-highest-service-business-revenue-f24-southzone.jpg',
      title: 'Highest Service & Business Revenue F-24',
      subtitle: 'South Zone India - 2024'
    },
    {
      image: '/assets/award-highest-revenue-f23-telangana.jpg',
      title: 'Highest Revenue F-23',
      subtitle: 'Telangana, India - 2023'
    },
    {
      image: '/assets/award-best-service-dealer-south-region.jpg',
      title: 'Best Service Dealer',
      subtitle: 'South Region - 2023'
    },
    {
      image: '/assets/MAGEIC-certificate.jpg',
      title: 'MAGEIC Certification',
      subtitle: 'Quality & Excellence Recognition'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [awards.length]);

  const nextAward = () => {
    setCurrentAward((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setCurrentAward((prev) => (prev - 1 + awards.length) % awards.length);
  };

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Powering Your <span className="text-primary relative inline-block">
                  Future
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/30 -z-10"></span>
                </span> With Reliable Solutions
              </h1>

              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Authorized dealer of <span className="text-red-400 font-semibold">Mahindra Powerol Generators</span> and <span className="text-green-400 font-semibold">Gromax Tractors</span>, providing sales, service and spare parts across Hyderabad, Mahbubnagar, and Nalgonda
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
              <div className="relative max-w-md mx-auto">
                {/* Main Award Display Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                  {/* Award Image Container */}
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                    <img
                      src={awards[currentAward].image}
                      alt={awards[currentAward].title}
                      className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
                    />

                    {/* Carousel Controls */}
                    <button
                      onClick={prevAward}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextAward}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Award Badge */}
                    <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Award {currentAward + 1} of {awards.length}
                    </div>
                  </div>

                  {/* Award Info Section */}
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                      {awards[currentAward].title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {awards[currentAward].subtitle}
                    </p>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center space-x-2">
                      {awards.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentAward(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentAward
                              ? 'bg-primary scale-110'
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Excellence Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-red-600 text-white p-4 rounded-xl shadow-xl border-4 border-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">6+</div>
                    <div className="text-xs font-medium">Years of Excellence</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/30 rounded-full"></div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary rounded-full"></div>
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
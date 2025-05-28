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
      subtitle: 'South Region India - 2024'
    },
    {
      image: '/assets/award-highest-revenue-f23-telangana.jpg',
      title: 'Highest Revenue F-23',
      subtitle: 'Telangana, India - 2023'
    },
    {
      image: '/assets/award-best-service-dealer-south-region.jpg',
      title: 'Best Service Dealer',
      subtitle: 'South Region India - 2023'
    },
    {
      image: '/assets/customer-centricity-f22.jpg',
      title: 'Customer Centricity Award F-22',
      subtitle: 'Telangana, India - 2022'
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
          alt="Mahindra Generator Dealer Hyderabad - AbhijitPower Generator Service Center"
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

      {/*/!* Top Banner Section *!/*/}
      {/*<div className="relative z-30 pt-40">*/}
      {/*  <div className="container">*/}
      {/*    <motion.div*/}
      {/*      initial={{ opacity: 0, y: -20 }}*/}
      {/*      animate={{ opacity: 1, y: 0 }}*/}
      {/*      transition={{ duration: 0.6 }}*/}
      {/*      className="flex justify-center"*/}
      {/*    >*/}
      {/*      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 p-2 max-w-4xl w-full">*/}
      {/*        <img*/}
      {/*          src="/assets/top-banner.jpg"*/}
      {/*          alt="AbhijitPower Top Banner"*/}
      {/*          className="w-full h-auto object-contain rounded-md"*/}
      {/*          onError={(e) => {*/}
      {/*            // Fallback styling if image fails to load*/}
      {/*            e.currentTarget.style.display = 'none';*/}
      {/*            const parent = e.currentTarget.parentElement;*/}
      {/*            if (parent) {*/}
      {/*              parent.innerHTML = '<div class="bg-gradient-to-r from-primary to-red-600 text-white text-center py-6 rounded-md"><h2 class="text-xl font-bold">AbhijitPower - Your Trusted Partner</h2><p class="mt-2 text-sm">Mahindra Powerol Generators & Gromax Tractors</p></div>';*/}
      {/*            }*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </motion.div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-36 xl:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-screen flex flex-col justify-center z-30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white order-2 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Powering Your <span className="text-primary relative inline-block">
                Future
                  <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-primary/30 -z-10"></span>
                </span> with Reliable Solutions
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl mb-4 sm:mb-6 text-gray-200 leading-relaxed">
                🏆 <strong>Award-Winning</strong> authorized dealer of <span className="text-red-400 font-semibold">Mahindra Powerol Generators</span> and <span className="text-green-400 font-semibold">Gromax Tractors</span> with <strong>25+ years experience</strong>
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 border border-white/20">
                <p className="text-white font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                  ✅ Expert Generator Service & Maintenance<br/>
                  ✅ Genuine Spare Parts<br/>
                  ✅ Serving Hyderabad, Mahabubnagar & Nalgonda<br/>
                  ✅ 24/7 Emergency Support Available
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-primary px-6 sm:px-8 py-2.5 sm:py-3 group text-sm sm:text-base"
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
                  className="btn bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors px-6 sm:px-8 py-2.5 sm:py-3 border border-white/20 text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/assets/powerol-logo.png"
                  alt="Powerol by Mahindra"
                  className="h-12 sm:h-16 lg:h-20 object-contain bg-white/90 p-1.5 sm:p-2 rounded"
                />
                <img
                  src="/assets/gromax-logo.png"
                  alt="Gromax Tractors"
                  className="h-12 sm:h-16 lg:h-20 object-contain bg-white/90 p-1.5 sm:p-2 rounded"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:block pt-8"
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                {/* Main Award Display Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                  {/* Award Image Container */}
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 2xl:h-96 bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
                    <img
                      src={awards[currentAward].image}
                      alt={awards[currentAward].title}
                      className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
                    />

                    {/* Carousel Controls */}
                    <button
                      onClick={prevAward}
                      className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                    <button
                      onClick={nextAward}
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>

                    {/* Award Badge */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Award {currentAward + 1} of {awards.length}
                    </div>
                  </div>

                  {/* Award Info Section */}
                  <div className="p-4 sm:p-6 lg:p-8 bg-white">
                    <h3 className="font-bold text-lg sm:text-xl lg:text-xl text-gray-900 mb-2 sm:mb-3 leading-tight">
                      {awards[currentAward].title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                      {awards[currentAward].subtitle}
                    </p>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center space-x-2">
                      {awards.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentAward(index)}
                          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
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
                <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-gradient-to-r from-primary to-red-600 text-white p-3 sm:p-4 rounded-xl shadow-xl border-2 sm:border-4 border-white">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold">6+</div>
                    <div className="text-xs font-medium">Years of Excellence</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary/30 rounded-full"></div>
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronDown size={20} className="sm:w-6 sm:h-6 text-white" />
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
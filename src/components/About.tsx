import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-10"></div>

      <div className="container relative">
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4">Our Story</span>
          <h2 className="section-title">About Abhijit Power</h2>
          <p className="text-gray-600 max-w-2xl text-center mt-4">Your trusted partner for Mahindra Generators and Gromax Tractors since 2018</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src="/assets/about-bg.jpg"
                    alt="Abhijit Power"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to award image if about-bg fails to load
                      e.currentTarget.src = '/assets/abhijit-power-team.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                <div className="p-6 relative">
                  <div className="absolute -top-24 left-6 bg-white p-4 rounded-lg shadow-xl">
                    <img
                      src="/assets/abhijit-power-logo.png"
                      alt="Abhijit Power Logo"
                      className="h-16 object-contain"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="bg-primary/10 rounded-lg p-4 flex-1">
                      <h4 className="text-2xl font-bold text-primary">25+</h4>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 flex-1">
                      <h4 className="text-2xl font-bold text-primary">2000+</h4>
                      <p className="text-sm text-gray-600">Happy Clients</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 flex-1">
                      <h4 className="text-2xl font-bold text-primary">24/7</h4>
                      <p className="text-sm text-gray-600">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-gray-900">
              Your Trusted Partner Since Late 2018
            </h3>

            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Abhijit Power is an authorized dealer of Mahindra Powerol generators and Gromax tractors, serving customers across Hyderabad, Mahbubnagar, and Nalgonda with reliable power solutions and agricultural equipment
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Reliable Power Solutions:</span> Our Mahindra Powerol DG sets offer the best recovery time in their category and effective governing systems from 5 KVA to 625 KVA
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Agricultural Excellence:</span> Through TRAKSTAR Tractors and TRAKMATE Farm Implements, we help farmers achieve maximum growth from their investments from 40 HP to 60 HP
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Retail finance for customers:</span> New Genset and Tractor finance available through Mahindra Finance and HDFC Bank Ltd
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn btn-primary inline-flex items-center px-6 py-3">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mahindra Powerol Section */}
        <div className="mt-24">
          <div className="flex flex-col items-center mb-12">
            <span className="text-sm font-medium text-red-600 bg-red-50 px-4 py-1 rounded-full mb-4">Our Partner</span>
            <h2 className="section-title text-red-600">About Mahindra Powerol</h2>
            <p className="text-gray-600 max-w-2xl text-center mt-4">India's No.1 Genset Manufacturer in FY25 as recognized by Frost & Sullivan</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl border-2 border-red-100">
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src="/assets/powerol-logo.png"
                      alt="Mahindra Powerol"
                      className="w-full h-full object-contain p-8 bg-gradient-to-br from-red-50 to-white"
                    />
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-4 text-center">
                        <h4 className="text-xl font-bold text-red-600">5-625</h4>
                        <p className="text-sm text-gray-600">kVA Range</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4 text-center">
                        <h4 className="text-xl font-bold text-red-600">400+</h4>
                        <p className="text-sm text-gray-600">Service Points</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mahindra Powerol, a division of Mahindra & Mahindra, offers a reliable range of diesel and gas generator sets that combine fuel efficiency, low noise, and full CPCB compliance.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Product Range:</span> Diesel and gas gensets from 5 kVA to 625 kVA, including silent variants
                    </p>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Performance:</span> Rapid load response, precise voltage control, and optimized fuel consumption
                    </p>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Applications:</span> Telecom towers, industrial plants, hospitals, hotels, and residential complexes
                    </p>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Service Network:</span> 400+ sales and service touch points, including 200+ dealers and 70+ exclusive showrooms
                    </p>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Key Features:</span> Fuel-efficient engines, low vibration and noise levels, easy finance schemes through Mahindra Finance
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gromax Section */}
        <div className="mt-24">
          <div className="flex flex-col items-center mb-12">
            <span className="text-sm font-medium text-green-600 bg-green-50 px-4 py-1 rounded-full mb-4">Our Partner</span>
            <h2 className="section-title text-green-600">About Gromax Agri Equipment</h2>
            <p className="text-gray-600 max-w-2xl text-center mt-4">A 60:40 joint venture between Mahindra & Mahindra Ltd. and the Government of Gujarat</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Gromax Agri Equipment Ltd., formerly known as Mahindra Gujarat Tractor Ltd., is dedicated to providing affordable and high-performance mechanization solutions to Indian farmers since 1999.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Joint Venture:</span> Strategic partnership with 60% ownership by Mahindra & Mahindra Ltd. and 40% by Government of Gujarat
                    </p>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Product Range:</span> Over 40 tractor variants in the 20–50 HP segment, including 4WD models and orchard-specialist 2WD tractors
                    </p>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Brands & Implements:</span> Markets tractors under Trakstar and Hindustan brands, complemented by Trakmate farm implements
                    </p>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Manufacturing Excellence:</span> State-of-the-art 55-acre facility in Vadodara, Gujarat with rigorous quality control
                    </p>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Customer Focus:</span> "Customer First" philosophy with affordable pricing and innovative saffron and black color schemes
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl border-2 border-green-100">
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src="/assets/gromax-logo.png"
                      alt="Gromax Agri Equipment"
                      className="w-full h-full object-contain p-8 bg-gradient-to-br from-green-50 to-white"
                    />
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <h4 className="text-xl font-bold text-green-600">40+</h4>
                        <p className="text-sm text-gray-600">Tractor Variants</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <h4 className="text-xl font-bold text-green-600">20-50</h4>
                        <p className="text-sm text-gray-600">HP Range</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
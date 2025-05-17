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
          <p className="text-gray-600 max-w-2xl text-center mt-4">Your trusted partner for Mahindra Generators and Growmax Tractors since 2010</p>
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
                      // Fallback to generator image if about-bg fails to load
                      e.currentTarget.src = '/assets/mahindra-generator.jpg';
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
                      <h4 className="text-2xl font-bold text-primary">12+</h4>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 flex-1">
                      <h4 className="text-2xl font-bold text-primary">500+</h4>
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
              Your Trusted Partner Since 2010
            </h3>

            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Abhijit Power is an authorized dealer of Mahindra Powerol generators and Gromax tractors, serving customers across Telangana with reliable power solutions and agricultural equipment.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Reliable Power Solutions:</span> Our Mahindra Powerol DG sets offer the best recovery time in their category and effective governing systems for voltage control.
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Agricultural Excellence:</span> Through TRAKSTAR Tractors and TRAKMATE Farm Implements, we help farmers achieve maximum growth from their investments.
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Comprehensive Support:</span> All products include transportation through Mahindra Transport Solutions Group, authorized dealer installation, and annual maintenance contracts.
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

        <div className="mt-24 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl p-10 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Trusted Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <img
                src="/assets/powerol-logo.png"
                alt="Mahindra Powerol"
                className="h-20 object-contain"
              />
              <p className="text-center text-sm text-gray-500 mt-3">Mahindra Powerol</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <img
                src="/assets/gromax-logo.png"
                alt="Gromax"
                className="h-20 object-contain"
              />
              <p className="text-center text-sm text-gray-500 mt-3">Gromax Tractors</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">About Abhijit Power</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <img 
                  src="/assets/mahindra-generator.jpg"
                  alt="Mahindra Generator" 
                  className="object-contain w-full h-[300px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <img 
                  src="/assets/powerol-logo.png"
                  alt="Mahindra Powerol Logo" 
                  className="h-12 mb-2 object-contain"
                />
                <p className="text-sm text-gray-600">Authorized Dealer</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Your Trusted Partner Since 2010
            </h3>
            <p className="text-gray-600 mb-4">
              Abhijit Power is an authorized dealer of Mahindra Powerol generators and Gromax tractors, serving customers across Telangana with reliable power solutions and agricultural equipment.
            </p>
            <p className="text-gray-600 mb-4">
              While power cuts can impact your profits, we ensure efficient power supply through our Mahindra Powerol DG sets, offering the best recovery time in their category and effective governing systems for voltage control.
            </p>
            <p className="text-gray-600 mb-4">
              Our Gromax division focuses on bettering farmers' lives through affordable mechanization solutions. Through TRAKSTAR Tractors and TRAKMATE Farm Implements, we help farmers achieve maximum growth from their investments.
            </p>
            <p className="text-gray-600 mb-6">
              All our products are backed by comprehensive support, including transportation through Mahindra Transport Solutions Group, authorized dealer installation, and annual maintenance contracts.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">12+</h4>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">500+</h4>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">2</h4>
                <p className="text-sm text-gray-600">Locations</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">24/7</h4>
                <p className="text-sm text-gray-600">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">Our Trusted Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="/assets/powerol-logo.png"
                alt="Mahindra Powerol" 
                className="h-16 object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="/assets/gromax-logo.png"
                alt="Gromax" 
                className="h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
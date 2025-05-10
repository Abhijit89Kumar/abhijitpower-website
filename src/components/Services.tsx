import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services, getServiceIcon } from '../data';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'generator' | 'tractor'>('all');
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);
  
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-gray-100">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeCategory === 'all' 
                  ? 'bg-white shadow text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('generator')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeCategory === 'generator' 
                  ? 'bg-white shadow text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Generators
            </button>
            <button
              onClick={() => setActiveCategory('tractor')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeCategory === 'tractor' 
                  ? 'bg-white shadow text-primary' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Tractors
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.icon);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-700">
            Looking for custom solutions or have specific requirements?
          </p>
          <a 
            href="tel:7766908394" 
            className="btn btn-primary inline-flex items-center"
          >
            Call Us Now: 7766908394
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
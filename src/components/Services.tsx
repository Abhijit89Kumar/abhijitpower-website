import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { services, getServiceIcon } from '../data';
import { ArrowRight, Phone } from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'generator' | 'tractor'>('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="section bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-5"></div>

      <div className="container relative">
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-600 max-w-2xl text-center mt-4">We provide comprehensive sales and service solutions for Mahindra Generators and Growmax Tractors</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full shadow-md p-1.5 bg-white border border-gray-100">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('generator')}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === 'generator'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Generators
            </button>
            <button
              onClick={() => setActiveCategory('tractor')}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === 'tractor'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Tractors
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            const bgImage = service.category === 'generator' ? '/assets/service-generator-bg.jpg' : '/assets/service-tractor-bg.jpg';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Service background image with overlay */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  ></div>
                </div>

                <div className="relative p-6 z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>

                  <div className="pt-4 border-t border-gray-100">
                    <a href="#contact" className="inline-flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Looking for custom solutions?</h3>
            <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
              We offer tailored power and agricultural solutions to meet your specific requirements. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7766908394"
                className="btn btn-primary inline-flex items-center px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now: 7766908394
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 inline-flex items-center px-8 py-3"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
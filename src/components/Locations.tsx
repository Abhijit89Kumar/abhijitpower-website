import React from 'react';
import { motion } from 'framer-motion';
import { locations, contactInfo } from '../data';
import { MapPin, Phone, Navigation, Clock, ArrowRight } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="section relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-10"></div>

      <div className="container relative">
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4">Find Us</span>
          <h2 className="section-title">Our Locations</h2>
          <p className="text-gray-600 max-w-2xl text-center mt-4">Visit our offices in Secunderabad and Jadcherla for sales and service of Mahindra Generators and Gromax Tractors</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {locations.map((location, index) => {
            const locationImage = location.id === 1 ? '/assets/location-secunderabad.jpg' : '/assets/location-jadcherla.jpg';

            return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={locationImage}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <p className="text-gray-200 text-sm">{location.address.split(',')[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6 mb-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Address</h4>
                        <p className="text-gray-700">{location.address}</p>
                      </div>
                    </div>

                    {/*<div className="flex items-start">*/}
                    {/*  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">*/}
                    {/*    <Phone className="h-5 w-5 text-primary" />*/}
                    {/*  </div>*/}
                      {/*<div>*/}
                      {/*  <h4 className="text-sm font-medium text-gray-500 mb-2">Phone Numbers</h4>*/}
                      {/*  <div className="space-y-1">*/}
                      {/*    <a*/}
                      {/*      href={`tel:${contactInfo.phone.gensetSales}`}*/}
                      {/*      className="block text-gray-700 hover:text-primary transition-colors text-sm"*/}
                      {/*    >*/}
                      {/*      <span className="text-xs text-gray-500">{contactInfo.phoneLabels.gensetSales}:</span><br />*/}
                      {/*      {contactInfo.phone.gensetSales}*/}
                      {/*    </a>*/}
                      {/*    <a*/}
                      {/*      href={`tel:${contactInfo.phone.tractorSales}`}*/}
                      {/*      className="block text-gray-700 hover:text-primary transition-colors text-sm"*/}
                      {/*    >*/}
                      {/*      <span className="text-xs text-gray-500">{contactInfo.phoneLabels.tractorSales}:</span><br />*/}
                      {/*      {contactInfo.phone.tractorSales}*/}
                      {/*    </a>*/}
                      {/*    <a*/}
                      {/*      href={`tel:${contactInfo.phone.serviceSpare}`}*/}
                      {/*      className="block text-gray-700 hover:text-primary transition-colors text-sm"*/}
                      {/*    >*/}
                      {/*      <span className="text-xs text-gray-500">{contactInfo.phoneLabels.serviceSpare}:</span><br />*/}
                      {/*      {contactInfo.phone.serviceSpare}*/}
                      {/*    </a>*/}
                      {/*    <a*/}
                      {/*      href={`tel:${contactInfo.phone.headOfDealership}`}*/}
                      {/*      className="block text-gray-700 hover:text-primary transition-colors text-sm"*/}
                      {/*    >*/}
                      {/*      <span className="text-xs text-gray-500">{contactInfo.phoneLabels.headOfDealership}:</span><br />*/}
                      {/*      {contactInfo.phone.headOfDealership}*/}
                      {/*    </a>*/}
                      {/*  </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Hours</h4>
                        <p className="text-gray-700">Monday - Sunday</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex-1 inline-flex items-center justify-center"
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>

                    <a
                      href={`tel:${contactInfo.phone.headOfDealership}`}
                      className="btn bg-gray-100 text-gray-800 hover:bg-gray-200 flex-1 inline-flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Office
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Phone Catalog Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-4xl mx-auto border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Contact Numbers</h3>
            <p className="text-gray-600">Reach out to us for specific needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{contactInfo.phoneLabels.gensetSales}</h4>
              <a
                href={`tel:${contactInfo.phone.gensetSales}`}
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                {contactInfo.phone.gensetSales}
              </a>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{contactInfo.phoneLabels.tractorSales}</h4>
              <a
                href={`tel:${contactInfo.phone.tractorSales}`}
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                {contactInfo.phone.tractorSales}
              </a>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{contactInfo.phoneLabels.serviceSpare}</h4>
              <a
                href={`tel:${contactInfo.phone.serviceSpare}`}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {contactInfo.phone.serviceSpare}
              </a>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{contactInfo.phoneLabels.headOfDealership}</h4>
              <a
                href={`tel:${contactInfo.phone.headOfDealership}`}
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                {contactInfo.phone.headOfDealership}
              </a>
            </div>
          </div>
        </motion.div>

        <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Need Help Finding Us?</h3>
          <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
            Our team is ready to assist you with directions to our locations or any other inquiries you may have.
          </p>
          <a
            href="#contact"
            className="btn btn-primary inline-flex items-center px-8 py-3"
          >
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
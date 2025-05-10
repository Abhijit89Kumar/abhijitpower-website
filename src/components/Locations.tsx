import React from 'react';
import { motion } from 'framer-motion';
import { locations } from '../data';
import { MapPin, Phone } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Our Locations</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {locations.map((location) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 w-full">
                <iframe
                  src={location.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${location.name}`}
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">{location.address}</p>
                </div>
                
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <a 
                    href={`tel:${location.phone}`} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
                
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg mb-3">Working Hours</p>
          <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
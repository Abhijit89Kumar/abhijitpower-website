import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  
  const next = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        
        <div className="relative max-w-4xl mx-auto px-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-4"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-8 shadow-md relative"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center mr-4 overflow-hidden">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xl font-bold text-gray-600">
                            {testimonial.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                    
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    
                    <div className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center text-4xl text-primary opacity-30">
                      "
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 flex items-center justify-center text-4xl text-primary opacity-30 rotate-180">
                      "
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                active === index ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
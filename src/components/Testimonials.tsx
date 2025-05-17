import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-10"></div>

      <div className="container relative">
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl text-center mt-4">Hear from our satisfied customers about their experience with Abhijit Power's products and services</p>
        </div>

        <div className="relative max-w-5xl mx-auto px-8">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-md relative flex flex-col md:flex-row"
                  >
                    <div className="md:w-2/5 bg-gray-100 relative">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-primary">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-200 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <div className="text-primary mb-4">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                          <path d="M14.4 24H8V17.6C8 12.64 12 8.64 16.96 8.64V14.4C14.4 14.4 12.32 16.48 12.32 19.04V24H14.4ZM30.4 24H24V17.6C24 12.64 28 8.64 32.96 8.64V14.4C30.4 14.4 28.32 16.48 28.32 19.04V24H30.4Z" fill="currentColor"/>
                        </svg>
                      </div>

                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.comment}</p>

                      <div className="flex mt-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-5 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-gray-50 transition-colors border border-gray-100 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-5 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-gray-50 transition-colors border border-gray-100 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-4 h-4 rounded-full mx-2 transition-all duration-300 ${
                active === index ? 'bg-primary scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center text-primary font-medium hover:underline">
            Share your experience with us <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
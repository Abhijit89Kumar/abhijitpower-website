import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4">Happy Customers</span>
          <h2 className="section-title">Our Happy Customers</h2>
          <p className="text-gray-600 max-w-2xl text-center mt-4">Moments with our valued customers who trust Abhijit Power for their generator and tractor needs</p>
        </div>

        <div className="relative max-w-4xl mx-auto px-8">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-2xl overflow-hidden shadow-lg"
                  >
                    {/* Customer Image */}
                    <div className="relative h-[500px] bg-gradient-to-br from-gray-100 to-gray-50 p-4">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={`Happy Customer ${testimonial.id}`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center rounded-lg">
                          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-6xl font-bold text-primary shadow-lg">
                            {testimonial.id}
                          </div>
                        </div>
                      )}

                      {/* Customer number badge */}
                      {/*<div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-white/50">*/}
                      {/*  Happy Customer {testimonial.id}*/}
                      {/*</div>*/}
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
            Join our happy customers <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
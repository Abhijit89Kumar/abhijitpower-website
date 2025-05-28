import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight } from 'lucide-react';

interface Brochure {
  name: string;
  url: string;
  category: 'generator' | 'tractor';
  image?: string;
}

const brochures: Brochure[] = [
  {
    name: '10kVA to 20kVA Generators',
    url: 'https://www.mahindrapowerol.com/pdf/10kva-to-20kva.pdf',
    category: 'generator'
  },
  {
    name: '10kVA to 320kVA Generators',
    url: 'https://www.mahindrapowerol.com/pdf/cpcb-all-range.pdf',
    category: 'generator'
  },
  {
    name: '250kVA to 320kVA Generators',
    url: 'https://www.mahindrapowerol.com/pdf/construction.pdf',
    category: 'generator'
  },
  {
    name: '25kVA to 58.5kVA Generators',
    url: 'https://www.mahindrapowerol.com/pdf/hospitability.pdf',
    category: 'generator'
  },
  {
    name: '75kVA to 200kVA Generators',
    url: 'https://www.mahindrapowerol.com/pdf/75kva-to-200kva.pdf',
    category: 'generator'
  },
  {
    name: 'Hindustan Tractor',
    url: 'https://www.trakstartractor.com/files/catalog/Hindustan.pdf',
    category: 'tractor',
    image: '/assets/hindustan-tractor.png'
  },
  {
    name: 'Trakstar 550',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20550.pdf',
    category: 'tractor',
    image: '/assets/trakstar-550.png'
  },
  {
    name: 'Trakstar 545',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20545.pdf',
    category: 'tractor',
    image: '/assets/trakstar-545.png'
  },
  {
    name: 'Trakstar 545 Smart',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20545%20SMART.pdf',
    category: 'tractor',
    image: '/assets/trakstar-545.png'
  },
  {
    name: 'Trakstar 540',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20540.pdf',
    category: 'tractor',
    image: '/assets/trakstar-540.png'
  },
  {
    name: 'Trakstar 536',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20536.pdf',
    category: 'tractor',
    image: '/assets/trakstar-536.png'
  },
  {
    name: 'Trakstar 531',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20531.pdf',
    category: 'tractor',
    image: '/assets/trakstar-531.png'
  }
];

const Brochures: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'generator' | 'tractor'>('all');

  const filteredBrochures = activeCategory === 'all'
    ? brochures
    : brochures.filter(brochure => brochure.category === activeCategory);

  return (
    <section id="brochures" className="section relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-10"></div>

      <div className="container relative">
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4">Resources</span>
          <h2 className="section-title">Product Brochures</h2>
          <p className="text-gray-600 max-w-2xl text-center mt-4">Download detailed specifications and information about our Mahindra Generators and Gromax Tractors</p>
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
              All Brochures
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrochures.map((brochure, index) => {
            const bgImage = brochure.category === 'generator' ? '/assets/generator-brochure-bg.jpg' : '/assets/tractor-brochure-bg.jpg';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-40 overflow-hidden">
                  {brochure.image ? (
                    // Show specific tractor image
                    <div className="relative h-full bg-gradient-to-br from-green-50 to-green-100">
                      <img
                        src={brochure.image}
                        alt={brochure.name}
                        className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to background image if tractor image fails to load
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url(${bgImage})"></div>
                              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
                              <div class="absolute inset-0 flex items-center justify-center">
                                <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                  <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                  </svg>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {brochure.category === 'tractor' ? 'Gromax' : 'Powerol'}
                      </div>
                    </div>
                  ) : (
                    // Show generic background for generators
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${bgImage})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <FileText className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{brochure.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {brochure.category === 'generator' ? 'Mahindra Powerol' : 'Gromax Tractors'} - PDF Document
                  </p>

                  <div className="flex items-center justify-between">
                    <a
                      href={brochure.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-flex items-center text-sm"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>

                    <a
                      href={brochure.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors inline-flex items-center text-sm font-medium"
                    >
                      View <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need more information about our products?</p>
          <a href="#contact" className="btn btn-primary inline-flex items-center px-8 py-3">
            Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brochures;
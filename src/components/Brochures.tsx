import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

interface Brochure {
  name: string;
  url: string;
  category: 'generator' | 'tractor';
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
    category: 'tractor'
  },
  {
    name: 'Trakstar 550',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20550.pdf',
    category: 'tractor'
  },
  {
    name: 'Trakstar 545',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20545.pdf',
    category: 'tractor'
  },
  {
    name: 'Trakstar 545 Smart',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20545%20SMART.pdf',
    category: 'tractor'
  },
  {
    name: 'Trakstar 540',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20540.pdf',
    category: 'tractor'
  },
  {
    name: 'Trakstar 536',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20536.pdf',
    category: 'tractor'
  },
  {
    name: 'Trakstar 531',
    url: 'https://www.trakstartractor.com/files/catalog/Trakstar%20531.pdf',
    category: 'tractor'
  }
];

const Brochures: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'generator' | 'tractor'>('all');
  
  const filteredBrochures = activeCategory === 'all' 
    ? brochures 
    : brochures.filter(brochure => brochure.category === activeCategory);

  return (
    <section id="brochures" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Product Brochures</h2>
        
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
              All Brochures
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrochures.map((brochure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3">{brochure.name}</h3>
                  <a
                    href={brochure.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center text-sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Brochure
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brochures;